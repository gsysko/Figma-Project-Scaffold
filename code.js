var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
listFrame.y = 340;
listFrame.resizeWithoutConstraints(640, 1);
listFrame.layoutMode = "VERTICAL";
listFrame.counterAxisSizingMode = "FIXED";
listFrame.verticalPadding = 16;
listFrame.horizontalPadding = 16;
listFrame.itemSpacing = 16;
figma.currentPage.appendChild(listFrame);
let run = () => __awaiter(this, void 0, void 0, function* () {
    // Need to load a font here to generate the other page examples.
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
    //Add a thumnail to the first page.
    yield createThumbnail("Example project", "Product");
    // Not all projects need a prototype, shipped it/released, or research page.
    // However in order to make adding one of these pages easily, we add some
    // text to our scratch page so we can copy/paste them with the proper emoji.
    yield createAdditionalPageExample("🚢 Shipped");
    yield createAdditionalPageExample("💅🏽 Styles");
    yield createAdditionalPageExample("⚙️ Components");
    yield createAdditionalPageExample("👀 Ready for Review");
});
// This function adds an example of how to name your less common pages + their emoji
// to your first page.
let createAdditionalPageExample = (text) => {
    let linkLabel = figma.createText();
    linkLabel.fontName = { family: "Inter", style: "Regular" };
    linkLabel.characters = text;
    linkLabel.fontSize = 16;
    listFrame.appendChild(linkLabel);
};
// This function adds a thumbnail to your first page.
let createThumbnail = (title, type) => {
    figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(reason => {
        figma.notify("Annotation Kit library is required for thumbnails.");
        figma.closePlugin();
    }).then(component => {
        if (component) {
            let thumbnail = component.createInstance();
            figma.loadFontAsync({ family: "Sharp Sans No1", style: "Bold" }).then(() => {
                let label = thumbnail.findOne(node => node.name == "File Name");
                label.characters = title;
            });
            figma.loadFontAsync({ family: "Proxima Nova", style: "Regular" }).then(() => {
                let badge = thumbnail.findOne(node => node.name == "Badge" && node.type == "TEXT");
                badge.characters = type;
            });
            figma.currentPage.appendChild(thumbnail);
            figma.closePlugin();
        }
    });
};
run();
