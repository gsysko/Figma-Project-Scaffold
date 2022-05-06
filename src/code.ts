import { rgb, hsl, readableColor } from 'polished';
// This plugin will open a window to prompt the user to enter project details, and
// it will then create a document structure and thumbnail.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

const TEMPLATE_CONTENTS = "c769a6265556c091cc1d8c05762c71ecbf97314b"
const TEMPLATE_BLOCKS = "52058e4454d829872482b8551f4918cb828880d6"
const TEMPLATE_INFO = "d45b3005516f887724940a5a10663adcff9dc4b4"
const COMPONENT_TITLE = "dcc85144737cc8736a780b6e428a146ae4560606"
const COMPONENT_BLOCK = "59a17c300d40d952e4025d551ef25f906d92f437"

//Font styles
const WEB_XXXLARGE = "95e94ac41a8cc79d097111a8785d3b5976c70f99"

const PADDING_H = 40
const PADDING_V = 40
const SPACING = 24
const FONT_TITLES = { family: "Menlo", style: "Regular" }
const FONT_BODIES = { family: "SF Pro Text", style: "Regular" }

const SOLID: 'SOLID' = 'SOLID'
const NORMAL: 'NORMAL' = 'NORMAL'

const BLACK = {
  "type": SOLID,
  "visible": true,
  "opacity": 1,
  "blendMode": NORMAL,
  "color": {
      "r": 0,
      "g": 0,
      "b": 0
  }
}
const WHITE = {
  "type": SOLID,
  "visible": true,
  "opacity": 1,
  "blendMode": NORMAL,
  "color": {
      "r": 1,
      "g": 1,
      "b": 1
  }
}

var LIGHT_TEXT_COLOR_STYLE
var DARK_TEXT_COLOR_STYLE

type ColorMode = "dark" | "light"

let LIGHT_COLORS_CUSTOM = [
  {
    name: "primary",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "message",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "action",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  }
]

let DARK_COLORS_CUSTOM = [
  {
    name: "primary",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "message",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "action",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  }
]

let LIGHT_COLORS_GENERATED = [
  {
    name: "onPrimary",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onAction",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "actionBackground",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onActionBackground",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
]

let DARK_COLORS_GENERATED = [
  {
    name: "onPrimary",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onAction",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "actionBackground",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onActionBackground",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
]

let LIGHT_COLORS_FIXED = [
  {
    name: "note",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 0.9411764740943909,
          "b": 0.8588235378265381
      }
    }
  },
  {
    name: "onNote",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0,
          "g": 0,
          "b": 0
      }
    }
  },{
    name: "inboundMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0.95686274766922,
          "g": 0.9647058844566345,
          "b": 0.9725490212440491
      }
    }
  },
  {
    name: "systemMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "borderSystemMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 0.11999999731779099,
      "blendMode": NORMAL,
      "color": {
          "r": 0,
          "g": 0,
          "b": 0
      }
    }
  },
  {
    name: "background",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "onBackground",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0,
          "g": 0,
          "b": 0
      }
    }
  },
  {
    name: "elevated",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "danger",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 0.9411764740943909,
          "b": 0.9450980424880981
      }
    }
  },
  {
    name: "onDanger",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0.5490196347236633,
          "g": 0.13725490868091583,
          "b": 0.1725490242242813
      }
    }
  },
  {
    name: "success",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0.0117647061124444,
          "g": 0.5058823823928833,
          "b": 0.32549020648002625
      }
    }
  },
  {
    name: "notify",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0.800000011920929,
          "g": 0.20000000298023224,
          "b": 0.250980406999588
      }
    }
  },
  {
    name: "disabled",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0.800000011920929,
          "g": 0.800000011920929,
          "b": 0.800000011920929
      }
    }
  },
  {
    name: "icon",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0.18431372940540314,
          "g": 0.2235294133424759,
          "b": 0.2549019753932953
      }
    }
  }
]

let DARK_COLORS_FIXED = [
  {
    name: "note",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.9960784316062927,
        "g": 0.8392156958580017,
        "b": 0.658823549747467
      }
    }
  },
  {
    name: "onNote",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0,
        "g": 0,
        "b": 0
      }
    }
  },
  {
    name: "inboundMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.18431372940540314,
        "g": 0.2235294133424759,
        "b": 0.2549019753932953
      }
    }
  },
  {
    name: "systemMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0,
          "g": 0,
          "b": 0
      }
    }
  },
  {
    name: "borderSystemMessage",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 0.3499999940395355,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "background",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 0,
          "g": 0,
          "b": 0
      }
    }
  },
  {
    name: "onBackground",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
          "r": 1,
          "g": 1,
          "b": 1
      }
    }
  },
  {
    name: "elevated",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.10000000149011612,
        "g": 0.10000000149011612,
        "b": 0.10000000149011612
      }
    }
  },
  {
    name: "danger",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.40784314274787903,
        "g": 0.07058823853731155,
        "b": 0.09803921729326248
      }
    }
  },
  {
    name: "onDanger",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.9607843160629272,
        "g": 0.8352941274642944,
        "b": 0.8470588326454163
      }
    }
  },
  {
    name: "success",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.16078431904315948,
        "g": 0.6117647290229797,
        "b": 0.4000000059604645
      }
    }
  },
  {
    name: "notify",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.18431372940540314,
        "g": 0.2235294133424759,
        "b": 0.2549019753932953
      }
    }
  },
  {
    name: "disabled",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.18431372940540314,
        "g": 0.2235294133424759,
        "b": 0.2549019753932953
      }
    }
  },
  {
    name: "icon",
    fill: {
      "type": SOLID,
      "visible": true,
      "opacity": 1,
      "blendMode": NORMAL,
      "color": {
        "r": 0.529411792755127,
        "g": 0.572549045085907,
        "b": 0.615686297416687
      }
    }
  }
]

// This shows the HTML page in "ui.html".
switch(figma.command){
  case "update":
    updateGeneratedColors("light");
    updateGeneratedColors("dark");
    figma.closePlugin()
    break
  default:
    figma.showUI(__html__)
    figma.ui.resize(400, 330)
    if(figma.root.getPluginData("status") == "run") {
      //TODO evaluate if there is some way to reconfigure the pages after initial setup.
      // figma.ui.resize(400, 136)
      figma.ui.postMessage("about")
    }
    if(figma.root.getPluginData("status") == "themed") {
      updateGeneratedColors("light");
      updateGeneratedColors("dark");
      figma.closePlugin()
    }
    break
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async msg => {
  switch (msg.type) {
    case "resize":
      figma.ui.resize(400, msg.height)
      break
    case "create-project":
      figma.ui.hide()
      await loadResources()
      figma.root.setRelaunchData({about: "This document was formated with Ztart"})
      figma.root.setPluginData("status", "run")
      await createProject(msg.projectTitle, msg.projectType, msg.projectDescription)
      break
    case "create-theme":
      figma.ui.hide()
      await loadResources()
      figma.root.setRelaunchData({update: "Regenerate accessible theme colors"})
      figma.root.setPluginData("status", "themed")
      await createTheme(msg.themeName, msg.primaryColor, msg.messageColor, msg.actionColor)
      break
  }
}

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

  //Add a thumnail to the first page.
  await createThumbnail(title, type).then(async () => {
    createProjectDetails(description, type)
  })
  if (type == "Library"){
    let targets: FrameNode[] = [await createUse(), await createContribute()]
    await createHowTo(targets)

    //Go to the component template page
    figma.currentPage = figma.root.children[figma.root.children.length-1]

    // Prepare a component template
    //Create title
    let title = (await figma.importComponentByKeyAsync(COMPONENT_TITLE)).createInstance()
    title.name = "Component title"
    setText(title.findChild(node => node.type == "TEXT") as TextNode, "Component name")
    title.resize(1280, title.height)
    title.x = 80
    title.y = 80

    //Create building blocks area
    let building_blocks: FrameNode = figma.createFrame()
    building_blocks.name = "Building blocks"
    building_blocks.resize(1440, building_blocks.height)
    building_blocks.x = 0
    building_blocks.y = 1520
    building_blocks.layoutMode = "VERTICAL"

    let block = (await figma.importComponentByKeyAsync(COMPONENT_BLOCK)).createInstance()
    let blockTitleText = block.findChild(node => node.type == "TEXT") as TextNode
    await figma.loadFontAsync(blockTitleText.fontName as FontName)
    blockTitleText.textAutoResize = "HEIGHT"
    blockTitleText.layoutAlign = "STRETCH"
    blockTitleText.characters = "Building blocks"
    block.layoutAlign = "STRETCH"
    building_blocks.appendChild(block)

    let building_block_area = figma.createFrame()
    building_block_area.name = "Place componnents here..."
    building_block_area.layoutMode = "HORIZONTAL"
    building_blocks.appendChild(building_block_area)
    building_block_area.resize(1440, 480)
    building_block_area.layoutGrow = 0
    building_block_area.counterAxisSizingMode = "AUTO"
    building_block_area.primaryAxisSizingMode = "AUTO"
    building_block_area.verticalPadding = PADDING_V
    building_block_area.horizontalPadding = PADDING_H
    building_block_area.itemSpacing = 40
    building_block_area.fills = []
    building_blocks.counterAxisSizingMode = "AUTO"

    //Create background
    var background = figma.createRectangle()
    background.resize(1440, 1440)
    background.name = "Background"
    background.fills = [{"type":SOLID,"visible":true,"opacity":1,"blendMode":NORMAL,"color":{"r":1,"g":1,"b":1}}]

    // Create description
    var descriptionText = figma.createText()
    try {
      await figma.importStyleByKeyAsync(WEB_XXXLARGE).then(baseStyle => { descriptionText.textStyleId = baseStyle.id })
    } catch (error) {
      figma.notify("Font styles are missing!")
    }
    descriptionText.resize(1280, 88)
    descriptionText.name = "Description"
    descriptionText.x = 80
    descriptionText.y = 352
    descriptionText.autoRename = false
    await figma.loadFontAsync(descriptionText.fontName as FontName)
    descriptionText.textAutoResize = "HEIGHT"
    descriptionText.characters = "Type a description of the component here, and place any components/variants in the space below ↘️"

    figma.viewport.scrollAndZoomIntoView(figma.currentPage.children)

    // Then add the template to any pages with 'Component' in the title
    figma.root.findChildren(pageNode => pageNode.name.includes("Component")).forEach(pageNode => {
      pageNode.appendChild(building_blocks.clone())
      pageNode.appendChild(background.clone())
      pageNode.appendChild(descriptionText.clone())
      pageNode.appendChild(title.clone())
      figma.viewport.scrollAndZoomIntoView(figma.currentPage.children)
    })

    //Clear up the "extra" template
    title.remove()
    building_blocks.remove()
    descriptionText.remove()
    background.remove()
  }
  figma.currentPage = figma.root.children[0]
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children)
  figma.closePlugin()
}

function createProjectDetails(description, type) {
  let detailsFrame = figma.createFrame()
  detailsFrame.name = "Project details"
  detailsFrame.y = 340
  detailsFrame.resizeWithoutConstraints(640, 1)
  detailsFrame.layoutMode = "VERTICAL"
  detailsFrame.counterAxisSizingMode = "FIXED"
  detailsFrame.verticalPadding = PADDING_V
  detailsFrame.horizontalPadding = PADDING_H
  detailsFrame.itemSpacing = SPACING
  figma.currentPage.appendChild(detailsFrame)

  detailsFrame.appendChild(createDetail("Description", description !== "" ? description : "<Enter a description here>"))
  detailsFrame.appendChild(createDetail("External Links", "<Add links here> →\n<E.g. Confluence> →\n<E.g. Google Doc> →"))
  detailsFrame.appendChild(createDetail("Slack Channels", "#<channel name here>\n#<channel name here>"))
  detailsFrame.appendChild(createDetail("Points of Contact", "Design - <link Slack profile here>\nProduct - <link Slack profile here>\nEngineering - <link Slack profile here>"))

  // Frame for wrapping the list of page examples.
  let listFrame = figma.createFrame()
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
      listFrame.appendChild(createPageExample("⏳ History"))
      listFrame.appendChild(createPageExample("✅ Next steps"))
    break
    case "Product":
      listFrame.appendChild(createPageExample("💅🏽 Styles"))
      listFrame.appendChild(createPageExample("⚙️ Components"))
    break
    case "Library":
      listFrame.appendChild(createPageExample("💅🏽 Styles"))
      listFrame.appendChild(createPageExample("🚀 Roadmap"))
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
    thumbnailFrame.name = "Thumbnail"
    thumbnailFrame.resizeWithoutConstraints(640, 320)

    if (component) {
      let thumbnail = component.createInstance()
      thumbnail.scaleFactor = 1/3
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
    figma.setFileThumbnailNodeAsync(thumbnailFrame)
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

  return detailFrame
}

// Adds an example to your list frame.
function createPageExample(text: string) {
  let linkLabel = figma.createText()
  linkLabel.fontName = FONT_BODIES
  linkLabel.fontSize = 14
  linkLabel.characters = text
  return linkLabel
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

async function createTheme(themeName: string, primaryColor: string, messageColor: string, actionColor: string) {
  figma.currentPage = figma.root.children[0]
  // Set page names and renames the default "Page 1"
  figma.currentPage.name = "00 Overview"
  createPage("01 Colors")
  createPage("02 Icons")
  createPage("03 Images")

  //Add a thumnail to the first page.
  await createThumbnail(themeName, "Theme").then(async () => {
    //TODO set thumbnail BG to primary color
  })

  figma.currentPage = figma.root.children[1]
  LIGHT_COLORS_CUSTOM[0].fill.color = hexToRGB(primaryColor)
  LIGHT_COLORS_CUSTOM[1].fill.color = hexToRGB(messageColor)
  LIGHT_COLORS_CUSTOM[2].fill.color = hexToRGB(actionColor)
  DARK_COLORS_CUSTOM[0].fill.color = hexToRGB(primaryColor)
  DARK_COLORS_CUSTOM[1].fill.color = hexToRGB(messageColor)
  DARK_COLORS_CUSTOM[2].fill.color = hexToRGB(actionColor)

  await createMode("light", themeName, primaryColor, messageColor, actionColor)
  await createMode("dark", themeName, primaryColor, messageColor, actionColor)
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children)
  figma.closePlugin()
}

async function createMode(mode: ColorMode, themeName: string, primaryColor: string, messageColor: string, actionColor: string) {
  let modeFrame = figma.createFrame()
  modeFrame.name = (mode == "light" ? "☀️" : "☽")
  modeFrame.fills = []
  modeFrame.primaryAxisSizingMode, modeFrame.counterAxisSizingMode = "AUTO"
  modeFrame.layoutMode = "VERTICAL"
  modeFrame.itemSpacing = 64
  if (mode == "dark") modeFrame.x = 2080
  let titleInstance = (await figma.importComponentByKeyAsync(COMPONENT_TITLE)).createInstance()
  await setText(titleInstance.findChild(node => node.name == "Section name") as TextNode, mode == "light" ? "Light mode" : "Dark mode")
  titleInstance.layoutAlign = "STRETCH"
  modeFrame.appendChild(titleInstance)
  let colorsFrame = figma.createFrame()
  colorsFrame.name = "Colors"
  colorsFrame.fills = (mode == "light" ? [WHITE] : [BLACK])
  colorsFrame.primaryAxisSizingMode, colorsFrame.counterAxisSizingMode = "AUTO"
  colorsFrame.layoutMode = "HORIZONTAL"
  colorsFrame.verticalPadding = 120 
  colorsFrame.horizontalPadding = 120
  colorsFrame.itemSpacing = 120
  modeFrame.appendChild(colorsFrame)
  let customizableFrame = figma.createFrame()
  customizableFrame.name = "Fixed"
  customizableFrame.fills = []
  customizableFrame.primaryAxisSizingMode, customizableFrame.counterAxisSizingMode = "AUTO"
  customizableFrame.layoutMode = "VERTICAL"
  customizableFrame.itemSpacing = 80
  let blockInstance = (mode == "light" ? (await figma.importComponentByKeyAsync(COMPONENT_BLOCK)).createInstance() : (await figma.importComponentByKeyAsync("52b4796a679cb0e606ba878f94d6ef5b72603028")).createInstance())
  await setText(blockInstance.findChild(node => node.name == "Section name") as TextNode, "Customizable")
  blockInstance.layoutGrow = 0
  blockInstance.counterAxisSizingMode = "FIXED"
  blockInstance.resizeWithoutConstraints(800, blockInstance.height)
  customizableFrame.appendChild(blockInstance)
  let fixedFrame = customizableFrame.clone()
  colorsFrame.appendChild(customizableFrame)
  fixedFrame.name = "Fixed"
  fixedFrame.primaryAxisSizingMode, fixedFrame.counterAxisSizingMode = "AUTO"
  fixedFrame.layoutMode = "VERTICAL"
  fixedFrame.itemSpacing = 80
  await setText(fixedFrame.findOne(node => node.type == "TEXT" && node.name == "Section name") as TextNode, "Fixed")
  colorsFrame.appendChild(fixedFrame)

  if(mode == "light"){
    //TODO need to include focus state colors
    LIGHT_COLORS_CUSTOM.forEach(color => createStyle(themeName, mode, color.name, color.fill, customizableFrame))
    LIGHT_COLORS_GENERATED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame))
    updateGeneratedColors(mode)
    LIGHT_COLORS_FIXED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame))
  } else {
    DARK_COLORS_CUSTOM.forEach(color => createStyle(themeName, mode, color.name, color.fill, customizableFrame))
    DARK_COLORS_GENERATED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame))
    updateGeneratedColors(mode)
    DARK_COLORS_FIXED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame))
  }

  figma.root.children[1].appendChild(modeFrame)
}

async function createStyle(themeName: string, mode: ColorMode, colorName: string, fill: Paint, exampleTarget: FrameNode){
  let newStyle = figma.createPaintStyle()
  newStyle.name = themeName + "(" + mode + ")/" + colorName
  newStyle.setPluginData("colorName", colorName)
  newStyle.setPluginData("colorMode", mode)
  newStyle.paints = [fill]

  let exampleFrame = figma.createFrame()
  exampleFrame.name = colorName + " example"
  exampleFrame.fills = []
  exampleFrame.primaryAxisSizingMode = "AUTO"
  exampleFrame.counterAxisSizingMode = "AUTO"
  exampleFrame.layoutMode = "HORIZONTAL"
  exampleFrame.counterAxisAlignItems = "CENTER"
  exampleFrame.paddingLeft = PADDING_H
  exampleFrame.itemSpacing = SPACING
  let swatchFrame = figma.createFrame()
  swatchFrame.fills = []
  let exampleColor = figma.createEllipse()
  exampleColor.setPluginData("colorName", colorName)
  exampleColor.fillStyleId = newStyle.id
  swatchFrame.appendChild(exampleColor)
  //TODO may need to implement a regex to exlude colors that coincidentally start with these letters
  if(colorName.startsWith("on")){
    let exampleTextColor = figma.createText()
    exampleTextColor.fontName = FONT_TITLES
    exampleTextColor.characters = "T"
    exampleTextColor.fontSize = 64
    exampleTextColor.fillStyleId = newStyle.id
    let exampleTextColorBackgroundName = colorName.charAt(2).toLowerCase() + colorName.slice(3)
    //TODO Null check needed?
    let exampleStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == exampleTextColorBackgroundName)
    exampleColor.fillStyleId = exampleStyle.id
    swatchFrame.appendChild(exampleTextColor)
    exampleTextColor.x = 30.5
    exampleTextColor.y = 14
  }
  if (colorName.startsWith("border")) {
    let exampleBorderColorBackgroundName = colorName.charAt(6).toLowerCase() + colorName.slice(7)
    //TODO Null check needed?
    try {
      let exampleBackgroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == exampleBorderColorBackgroundName)
      exampleColor.strokeStyleId = newStyle.id
      exampleColor.fillStyleId = exampleBackgroundStyle.id
      exampleColor.strokeWeight = 4
    } catch (error) {
      debugger
    }
  }
  let exampleText = figma.createText()
  exampleText.fontName = FONT_TITLES
  exampleText.fontSize = 48
  exampleText.characters = colorName
  exampleText.fillStyleId = (mode == "light" ? LIGHT_TEXT_COLOR_STYLE.id : DARK_TEXT_COLOR_STYLE.id)
  exampleFrame.appendChild(swatchFrame)
  exampleFrame.appendChild(exampleText)
  exampleTarget.appendChild(exampleFrame)
}

function updateGeneratedColors(mode: ColorMode) {
  let currentPrimaryColor = (figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "primary").paints[0] as SolidPaint).color
  let currentMessageColor = (figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "message").paints[0] as SolidPaint).color
  let currentActionColor = (figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "action").paints[0] as SolidPaint).color

  let onPrimaryStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onPrimary")
  onPrimaryStyle.paints = [mixPaint(getAccessibleTextColor(currentPrimaryColor))]
  let onMessageStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onMessage")
  onMessageStyle.paints = [mixPaint(getAccessibleTextColor(currentMessageColor))]
  let onActionStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onAction")
  onActionStyle.paints = [mixPaint(getAccessibleTextColor(currentActionColor))]

  let [actionForegroundColor, actionBackgroundColor] = getAccessibleForegroundAndBackgroundColors(currentActionColor, mode)
  let actionForegroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onActionBackground")
  actionForegroundStyle.paints = [mixPaint(actionForegroundColor)]
  let actionBackgroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "actionBackground")
  actionBackgroundStyle.paints = [mixPaint(actionBackgroundColor)]
}

async function loadResources() {
  // Need to load a font here to generate the other page examples.
  await figma.loadFontAsync(FONT_TITLES)
  await figma.loadFontAsync(FONT_BODIES)

  LIGHT_TEXT_COLOR_STYLE = await figma.importStyleByKeyAsync("f207233833aea62e2f0163bb4b6c6ed602459ba1")
  DARK_TEXT_COLOR_STYLE = await figma.importStyleByKeyAsync("5638e43c82613c7f15c60e3e8e9496c17763ae49")
}

// ~~~~~~Helper Functions~~~~~~~~~~~ //
function RGBToHSL(rgb: RGB) {
  let r = rgb.r
  let g = rgb.g
  let b = rgb.b

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
      h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {hue: h, saturation: s, lightness: l};
}

function HSLToRGB(hsl) {
  let h = hsl.hue
  let s = hsl.saturation
  let l = hsl.lightness
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.max(r + m, 0);
  g = Math.max(g + m, 0);
  b = Math.max(b + m, 0);

  return {r: r, g: g, b: b};
}

function hexToRGB(hex: string) {
  hex = hex.replace(/^#/, '');

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

  const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;

	return {r: red/256, g: green/256, b: blue/256};
}

function getAccessibleTextColor(backgroundColor: RGB): RGB {
  let testHSL = hsl(360, 1, 1)
  let backgroundHex = rgb(Math.round(backgroundColor.r * 255), Math.round(backgroundColor.g * 255), Math.round(backgroundColor.b * 255))
  let backgroundHSL = RGBToHSL(backgroundColor)
  let suggestedDarkColor = hsl({hue: backgroundHSL.hue, saturation: Math.min(backgroundHSL.saturation, 30)/100, lightness: Math.min(backgroundHSL.lightness, 20)/100})
  let foregroundHex = readableColor(backgroundHex, suggestedDarkColor, "#fff", true)
  let foregroundColor = hexToRGB(foregroundHex)
  return foregroundColor;
}

function getAccessibleForegroundAndBackgroundColors(sourceColor: RGB, mode: ColorMode): [RGB, RGB] {
  let sourcColorHSL = RGBToHSL(sourceColor)
  let foregroundColor, backgroundColor
  if(mode == 'light') {//Calculate light mode values.
    foregroundColor = HSLToRGB({
      hue: sourcColorHSL.hue,
      saturation: sourcColorHSL.saturation,
      lightness: Math.min(sourcColorHSL.lightness, 25)
    })
    backgroundColor = HSLToRGB({
      hue: sourcColorHSL.hue,
      saturation: sourcColorHSL.saturation,
      lightness: Math.max(sourcColorHSL.lightness, 95)
    })
  } else {
    //Calculate dark mode values.
    foregroundColor = HSLToRGB({
      hue: sourcColorHSL.hue,
      saturation: sourcColorHSL.saturation,
      lightness: Math.max(sourcColorHSL.lightness, 85)
    })
    backgroundColor = HSLToRGB({
      hue: sourcColorHSL.hue,
      saturation: Math.min(sourcColorHSL.saturation, 30),
      lightness: Math.min(sourcColorHSL.lightness, 20)
    })
  }
  return [foregroundColor, backgroundColor];
}

function mixPaint(color: RGB): Paint {
  return {
    "type": SOLID,
    "visible": true,
    "opacity": 1,
    "blendMode": NORMAL,
    "color": color
  };
}
