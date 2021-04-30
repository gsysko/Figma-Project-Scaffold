
// Create pages
let problemPage = figma.createPage();
let solutionPage = figma.createPage();
let specPage = figma.createPage();
let researchPage = figma.createPage();
let prototypePage = figma.createPage();
let archivePage = figma.createPage();

// Set page names and renames the default "Page 1"
figma.currentPage.name = "📖 About";
problemPage.name = "🤔 Problem Space";
solutionPage.name = "💡 Solution Space";
specPage.name = "📐 Design Spec";
researchPage.name = "🔬 Research";
prototypePage.name = "🕹 Prototype";
archivePage.name = "📦 Archive";

// Frame for wrapping the list of page examples.
let listFrame = figma.createFrame();
listFrame.name = "Other page examples";
listFrame.layoutMode = "VERTICAL";
listFrame.counterAxisSizingMode = "AUTO";
listFrame.verticalPadding = 16;
listFrame.horizontalPadding = 16;
listFrame.itemSpacing = 16;
listFrame.cornerRadius = 8;
figma.currentPage.appendChild(listFrame);

let run = async () => {

  // Need to load a font here to generate the other page examples.
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  // Not all projects need a prototype, shipped it/released, or research page.
  // However in order to make adding one of these pages easily, we add some
  // text to our scratch page so we can copy/paste them with the proper emoji.
  await createAdditionalPageExample("🚢 Shipped");
  await createAdditionalPageExample("💅🏽 Styles");
  await createAdditionalPageExample("⚙️ Components");
  await createAdditionalPageExample("👀 Ready for Review");

  figma.notify("Project Scafolding Done 👍")
  figma.closePlugin();
}

// This function adds an example of how to name your less common pages + their emoji
// to your scratch page.
let createAdditionalPageExample = (text) => {
  let linkLabel = figma.createText();
  linkLabel.fontName = { family: "Inter", style: "Regular" };
  linkLabel.characters = text;
  linkLabel.fontSize = 16;
  listFrame.appendChild(linkLabel);
};

run();