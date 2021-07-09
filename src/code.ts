// This plugin will open a window to prompt the user to enter project details, and
// it will then create a document structure and thumbnail.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

const TEMPLATE_CONTENTS = "c769a6265556c091cc1d8c05762c71ecbf97314b"
const TEMPLATE_BLOCKS = "52058e4454d829872482b8551f4918cb828880d6"
const TEMPLATE_INFO = "d45b3005516f887724940a5a10663adcff9dc4b4"

var listFrame: FrameNode
var detailsFrame: FrameNode

// This shows the HTML page in "ui.html".
figma.showUI(__html__)
figma.ui.resize(400, 400)

if(figma.root.getPluginData("status") == "run") {
  //TODO evaluate if there is some way to reconfigure the pages after initial setup.
  figma.ui.resize(400, 136)
  figma.ui.postMessage("about")
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async msg => {
  switch (msg.type) {
    case "create-projct":
      figma.ui.hide()
      await createProject(msg.projectTitle, msg.projectType, msg.projectDescription)
      figma.root.setRelaunchData({about: "This document was formated with Ztart"})
      figma.root.setPluginData("status", "run")
      break
  }
}

const PADDING_H = 40
const PADDING_V = 40
const SPACING = 24
const FONT_TITLES = { family: "Menlo", style: "Regular" }
const FONT_BODIES = { family: "SF Pro Text", style: "Regular" }

async function createProject(title, type, description) {
  // Set page names and renames the default "Page 1"
  figma.currentPage.name = "📖 About"
  switch (type) {
    case "Exploration": 
      createPage("🤔 Problem definition")
      createPage("🔬 Research")
      createPage("🏝 Explorations")
      createPage("         ↪ Solution A")
      createPage("         ↪ Solution B")
      break;
    case "Product":
      createPage("................................................................................................")
      createPage("📐 Design Specs")
      createPage("         ↪ Ready for dev")
      createPage("         ↪ Shipped")
      createPage("................................................................................................")
      createPage("🕹 Prototypes")
      createPage("         ↪ Prototype A")
      createPage("................................................................................................")
      createPage("🏝 Explorations")
      createPage("         ↪ Exploration A")
      createPage("................................................................................................")
      createPage("📦 Archives")
      createPage("         ↪ Archive A")
      break;
    case "Library":
      createPage("❓ How to...")
      createPage("         ↪ Use this library")
      createPage("         ↪ Contribute")
      createPage("................................................................................................")
      createPage("Component A")
      createPage("Component B")
      createPage("Component C")
      createPage("................................................................................................")
      createPage("🚧 Component template")
      break;
  }

  // Need to load a font here to generate the other page examples.
  await figma.loadFontAsync(FONT_TITLES)
  await figma.loadFontAsync(FONT_BODIES)

  //Add a thumnail to the first page.
  await createThumbnail(title, type).then(async () => {
    createProjectDetails(description, type)
  })
  if (type == "Library"){
    let targets: FrameNode[] = [await createUse(), await createContribute()]
    await createHowTo(targets)
  }
  figma.currentPage = figma.root.children[0]
  figma.closePlugin()
}

function createProjectDetails(description, type) {
  detailsFrame = figma.createFrame()
  detailsFrame.name = "Project details"
  detailsFrame.y = 340
  detailsFrame.resizeWithoutConstraints(640, 1)
  detailsFrame.layoutMode = "VERTICAL"
  detailsFrame.counterAxisSizingMode = "FIXED"
  detailsFrame.verticalPadding = PADDING_V
  detailsFrame.horizontalPadding = PADDING_H
  detailsFrame.itemSpacing = SPACING
  figma.currentPage.appendChild(detailsFrame)

  createDetail("Description", description !== "" ? description : "<Enter a description here>")
  createDetail("External Links", "<Add links here> →\n<E.g. Confluence> →\n<E.g. Google Doc> →")
  createDetail("Slack Channels", "#<channel name here>\n#<channel name here>")
  createDetail("Points of Contact", "Design - <link Slack profile here>\nProduct - <link Slack profile here>\nEngineering - <link Slack profile here>")

  // Frame for wrapping the list of page examples.
  listFrame = figma.createFrame()
  listFrame.name = "Add other pages, as needed..."
  listFrame.y = detailsFrame.y + detailsFrame.height + SPACING
  listFrame.resizeWithoutConstraints(640, 1)
  listFrame.layoutMode = "VERTICAL"
  listFrame.counterAxisSizingMode = "FIXED"
  listFrame.verticalPadding = PADDING_V
  listFrame.horizontalPadding = PADDING_H
  listFrame.itemSpacing = 8
  figma.currentPage.appendChild(listFrame)

  // Not all projects need a prototype, shipped it/released, or research page.
  // However in order to make adding one of these pages easily, we add some
  // text to our scratch page so we can copy/paste them with the proper emoji.
  switch (type) {
    case "Exploration":
      createPageExample("⏳ History")
      createPageExample("✅ Next steps")
    break
    case "Product":
      createPageExample("💅🏽 Styles")
      createPageExample("⚙️ Components")
    break
    case "Library":
      createPageExample("💅🏽 Styles")
      createPageExample("🚀 Roadmap")
    break
  }
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}

// This function adds a thumbnail to your first page.
async function createThumbnail(title: string, type: string) {
  await figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(reason => {
    figma.notify("Annotation Kit library is required for thumbnails.")
    figma.closePlugin()
  }).then(async component => {
    let thumbnailFrame = figma.createFrame()
    thumbnailFrame.name = "Thumbnail - Right click to \"Set as thumbnail\""
    thumbnailFrame.resizeWithoutConstraints(640, 320)

    if (component) {
      let thumbnail = component.createInstance()
      thumbnailFrame.appendChild(thumbnail)
      figma.currentPage.appendChild(thumbnailFrame)

      let label = thumbnail.findOne(node => node.name == "File Name") as TextNode
      await figma.loadFontAsync(label.fontName as FontName).then(() => {
        if (title !== ""){
          label.characters = title
        } else {
          label.characters = "Enter title here"
        }
      })

      let badge = thumbnail.findOne(node => node.name == "Badge" && node.type == "INSTANCE") as InstanceNode
      let badgeText = badge.findOne(node => node.name == "Badge" && node.type == "TEXT") as TextNode
      await figma.loadFontAsync(badgeText.fontName as FontName).then(() => {
        badgeText.characters = type
      })
      if (type == "Exploration") {
        badge.fillStyleId = (await figma.importStyleByKeyAsync("0ee1c479d3f21d475227a4520cb481bd98af5af5")).id
      } else if (type == "Library") {
        badge.fillStyleId = (await figma.importStyleByKeyAsync("a3aa8c64d10a0b1ee92b3dc6e5f278ac978c56cf")).id
        badgeText.fillStyleId = (await figma.importStyleByKeyAsync("492c9645d67f026dd37c301c61577504bd7d8ad7")).id
      }
    }
  })
}

// Adds a new page.
function createPage(title: string) {
  let page = figma.createPage()
  page.name = title
}

// Adds a section to your details frame.
function createDetail(title: string, body: string) {
  let detailFrame = figma.createFrame()
  detailFrame.name = title
  detailFrame.layoutMode = "VERTICAL"
  detailFrame.counterAxisSizingMode = "AUTO"
  detailFrame.layoutAlign = "STRETCH"
  detailFrame.itemSpacing = 8

  let titleText = figma.createText()
  titleText.fontName = FONT_TITLES
  titleText.fontSize = 17
  titleText.characters = title
  titleText.layoutAlign = "STRETCH"
  detailFrame.appendChild(titleText)

  let bodyText = figma.createText()
  bodyText.fontName = FONT_BODIES
  bodyText.fontSize = 14
  bodyText.characters = body
  bodyText.layoutAlign = "STRETCH"
  detailFrame.appendChild(bodyText)

  detailsFrame.appendChild(detailFrame)
}

// Adds an example to your list frame.
function createPageExample(text: string) {
  let linkLabel = figma.createText()
  linkLabel.fontName = FONT_BODIES
  linkLabel.fontSize = 14
  linkLabel.characters = text
  listFrame.appendChild(linkLabel)
}

async function createHowTo(targets) {
  let howPage = figma.root.children.find(node => node.name == "❓ How to...")
  figma.currentPage = howPage

  let frame1 = await createSlideFrame(TEMPLATE_CONTENTS, "How to...", "")
  await addContent(frame1, "Use this library", targets[0])
  await addContent(frame1, "Contribute", targets[1])

  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}


async function createUse() {
  let usePage = figma.root.children.find(node => node.name == "         ↪ Use this library")

  figma.currentPage = usePage

  let frame1 = await createSlideFrame(TEMPLATE_CONTENTS, "Using this library", "", "1) Add sections here\n\nOptionally, add more sections to help describe the usage of your library.")
  await addContent(frame1, "Purpose", await createSlideFrame(TEMPLATE_INFO, "Using this library", "Purpose", "2) Describe the purpose\n\nThis library was created to fill a need. Describe that need and let designers what does (and doesn’t) fit within this library.\n\nYou can also add an image to the right that represents your library.", "E.g. The Conversation Kit is a Figma library - and set of accompanying tools - that give designers everything they need to design a consistent conversational experience across any number of products and platforms."))
  await addContent(frame1, "Principles", await createSlideFrame(TEMPLATE_BLOCKS, "Using this library", "Principles", "3) Add your own principles\n\nPrinciples keep foundational decisions consistent, and set precedent for how each component is used and built."))
  await addContent(frame1, "Instructions", await createSlideFrame(TEMPLATE_INFO, "Using this library", "Instructions", "4) Add step-by-step instructions\n\nInclude instructions of where the assets can be found, how they are organized, how variants and overrides work, and any other details needed to use the library.", "1. Do this\nDo that\nProfit"))
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);

  return frame1
}

async function createContribute() {
  let contributePage = figma.root.children.find(node => node.name == "         ↪ Contribute")

  figma.currentPage = contributePage

  let frame1 = await createSlideFrame(TEMPLATE_CONTENTS, "Contributing", "", "1) Add sections here\n\nOptionally, add more sections to help describe how other designers can add to this library.")
  await addContent(frame1, "Conventions", await createSlideFrame(TEMPLATE_BLOCKS, "Contributing", "Conventions", "2) Add your own conventions\n\nWhat conventions does a designer need to be aware of to make components that work in a similar way to all the rest?"))
  await addContent(frame1, "Instructions", await createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "3) Add step-by-step instructions\n\nInclude instructions on how to start a branch, organize pages, and request review.", "1. Create a Branch: Press the chevron next to the file name in the toolbar, and select Create branch.... Give it a name in the following format ➕<Component name>.\nDuplicate the ‘🚧 Component template’ page, and rename it according to the page naming converntions.\nPerform your explorations/work on this page.\nComplete the pre-publish checklist.\nRequest review by sharing the branch with <team slack channel or point-of-contact>"))
  await addContent(frame1, "Checklist", await createSlideFrame(TEMPLATE_INFO, "Contributing", "Checklist", "4) Build a checklist\n\nWhat considerations do you go through before deciding if a component is ready to “go live”? These may refer back to your conventions.", "☑️  Did you do this?\n☑️  Did you do that?\n☑️  What about the other thing?"))
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);

  return frame1
}

//TODO Implement an interface so title can be ommited.
async function createSlideFrame(id: string, supertitleText: string, titleText?: string, instructionText?: string, contentText?: string) {
  let pageContents = figma.currentPage.children
  let lastAdded = pageContents[pageContents.length-1]
  let frame1 = figma.createFrame()
  frame1.name = titleText ? supertitleText.concat("/", titleText) : supertitleText
  frame1.resize(1920, 1080)
  frame1.y = lastAdded ? lastAdded!.y + 1180 : 0

  let format = (await figma.importComponentByKeyAsync(id)).createInstance()
  frame1.insertChild(0, format)
  let supertitle: TextNode
  let title: TextNode
  let content: TextNode

  switch(id) {
    case TEMPLATE_CONTENTS:
      supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Table of contents") as TextNode
      if(supertitle) {
        await setText(supertitle, supertitleText)
      }
      let sections = format.findChild(node => node.name == "Sections") as FrameNode
      sections.children.forEach(node => node.visible = false)
      break;
    case TEMPLATE_BLOCKS:
      supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Supertitle") as TextNode
      if(supertitle) {
        await setText(supertitle, supertitleText.toUpperCase())
      }
      title = format.findOne(node => node.type == "TEXT" && node.characters == "What else does it solve?") as TextNode
      if (title && titleText) {
        await setText(title, titleText)
      }
      break;
    case TEMPLATE_INFO:
      supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Heading" && node.characters == "SUPERTITLE") as TextNode
      if(supertitle) {
        await setText(supertitle, supertitleText.toUpperCase())
      }
      title = format.findOne(node => node.type == "TEXT" && node.characters == "Heading") as TextNode
      if (title && titleText) {
        await setText(title, titleText)
      }
      content = format.findOne(node => node.type == "TEXT" && node.name == "Content") as TextNode
      if (content && contentText){
        await setText(content, contentText)
      }
      break;
  }

  figma.currentPage.insertChild(figma.currentPage.children.length, frame1)

  if (instructionText){
    let stickie = await (await figma.importComponentByKeyAsync("d4df8b884dbe7ac182612b61cb2091b9244bdf67")).createInstance()
    stickie.y = frame1.y
    stickie.x = frame1.x - 40 - 272
    let note = stickie.findChild(node => node.name === "Note") as TextNode
    await setText(note, instructionText)
    figma.currentPage.insertChild(figma.currentPage.children.length, stickie)
  }
  return frame1
}

async function addContent(tableFrame: FrameNode, title: string, target: FrameNode) {
  let table: InstanceNode = tableFrame.children[0] as InstanceNode
  let sections = table.findChild(node => node.name == "Sections") as FrameNode
  let section = sections.children.find(node => node.visible == false) as TextNode
  await setText(section, title)
  section.hyperlink = {type: "NODE", value: target.id}
  section.visible = true
}
async function setText(node: TextNode, text: string) {
  await figma.loadFontAsync(node.fontName as FontName)
  node.characters = text
  // Check if it should be an ordered or unordered list.
  if (text.startsWith("1. ")) {
    node.characters = node.characters.substring(3)
    node.setRangeListOptions(0, node.characters.length, {type: "ORDERED"})
  } else if (text.startsWith("- ")) {
    node.characters = node.characters.substring(3)
    node.setRangeListOptions(0, node.characters.length, {type: "UNORDERED"})
  }
}

