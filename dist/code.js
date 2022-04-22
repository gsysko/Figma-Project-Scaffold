/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// This plugin will open a window to prompt the user to enter project details, and
// it will then create a document structure and thumbnail.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
const TEMPLATE_CONTENTS = "c769a6265556c091cc1d8c05762c71ecbf97314b";
const TEMPLATE_BLOCKS = "52058e4454d829872482b8551f4918cb828880d6";
const TEMPLATE_INFO = "d45b3005516f887724940a5a10663adcff9dc4b4";
//Font styles
const WEB_XXXLARGE = "95e94ac41a8cc79d097111a8785d3b5976c70f99";
var listFrame;
var detailsFrame;
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(400, 560);
if (figma.root.getPluginData("status") == "run") {
    //TODO evaluate if there is some way to reconfigure the pages after initial setup.
    figma.ui.resize(400, 136);
    figma.ui.postMessage("about");
}
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    switch (msg.type) {
        case "create-projct":
            figma.ui.hide();
            yield createProject(msg.projectTitle, msg.projectType, msg.projectDescription);
            figma.root.setRelaunchData({ about: "This document was formated with Ztart" });
            figma.root.setPluginData("status", "run");
            break;
    }
});
const PADDING_H = 40;
const PADDING_V = 40;
const SPACING = 24;
const FONT_TITLES = { family: "Menlo", style: "Regular" };
const FONT_BODIES = { family: "SF Pro Text", style: "Regular" };
const COMPONENT_TITLE = "dcc85144737cc8736a780b6e428a146ae4560606";
const COMPONENT_BLOCK = "59a17c300d40d952e4025d551ef25f906d92f437";
function createProject(title, type, description) {
    return __awaiter(this, void 0, void 0, function* () {
        // Set page names and renames the default "Page 1"
        figma.currentPage.name = "📖 About";
        switch (type) {
            case "Exploration":
                createPage("🤔 Problem definition");
                createPage("🔬 Research");
                createPage("🏝 Explorations");
                createPage("         ↪ Solution A");
                createPage("         ↪ Solution B");
                break;
            case "Product":
                createPage("................................................................................................");
                createPage("📐 Design Specs");
                createPage("         ↪ Ready for dev");
                createPage("         ↪ Shipped");
                createPage("................................................................................................");
                createPage("🕹 Prototypes");
                createPage("         ↪ Prototype A");
                createPage("................................................................................................");
                createPage("🏝 Explorations");
                createPage("         ↪ Exploration A");
                createPage("................................................................................................");
                createPage("📦 Archives");
                createPage("         ↪ Archive A");
                break;
            case "Library":
                createPage("❓ How to...");
                createPage("         ↪ Use this library");
                createPage("         ↪ Contribute");
                createPage("................................................................................................");
                createPage("Component A");
                createPage("Component B");
                createPage("Component C");
                createPage("................................................................................................");
                createPage("🚧 Component template");
                break;
        }
        // Need to load a font here to generate the other page examples.
        yield figma.loadFontAsync(FONT_TITLES);
        yield figma.loadFontAsync(FONT_BODIES);
        //Add a thumnail to the first page.
        yield createThumbnail(title, type).then(() => __awaiter(this, void 0, void 0, function* () {
            createProjectDetails(description, type);
        }));
        if (type == "Library") {
            let targets = [yield createUse(), yield createContribute()];
            yield createHowTo(targets);
            //Go to the component template page
            figma.currentPage = figma.root.children[figma.root.children.length - 1];
            // Prepare a component template
            //Create title
            let title = (yield figma.importComponentByKeyAsync(COMPONENT_TITLE)).createInstance();
            title.name = "Component title";
            setText(title.findChild(node => node.type == "TEXT"), "Component name");
            title.resize(1280, title.height);
            title.x = 80;
            title.y = 80;
            //Create building blocks area
            let building_blocks = figma.createFrame();
            building_blocks.name = "Building blocks";
            building_blocks.resize(1440, building_blocks.height);
            building_blocks.x = 0;
            building_blocks.y = 1520;
            building_blocks.layoutMode = "VERTICAL";
            let block = (yield figma.importComponentByKeyAsync(COMPONENT_BLOCK)).createInstance();
            let blockTitleText = block.findChild(node => node.type == "TEXT");
            yield figma.loadFontAsync(blockTitleText.fontName);
            blockTitleText.textAutoResize = "HEIGHT";
            blockTitleText.layoutAlign = "STRETCH";
            blockTitleText.characters = "Building blocks";
            block.layoutAlign = "STRETCH";
            building_blocks.appendChild(block);
            let building_block_area = figma.createFrame();
            building_block_area.name = "Place componnents here...";
            building_block_area.layoutMode = "HORIZONTAL";
            building_blocks.appendChild(building_block_area);
            building_block_area.resize(1440, 480);
            building_block_area.layoutGrow = 0;
            building_block_area.counterAxisSizingMode = "AUTO";
            building_block_area.primaryAxisSizingMode = "AUTO";
            building_block_area.verticalPadding = 40;
            building_block_area.horizontalPadding = 40;
            building_block_area.itemSpacing = 40;
            building_block_area.fills = [];
            building_blocks.counterAxisSizingMode = "AUTO";
            //Create background
            var background = figma.createRectangle();
            background.resize(1440, 1440);
            background.name = "Background";
            background.fills = [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 } }];
            // Create description
            var descriptionText = figma.createText();
            try {
                yield figma.importStyleByKeyAsync(WEB_XXXLARGE).then(baseStyle => { descriptionText.textStyleId = baseStyle.id; });
            }
            catch (error) {
                figma.notify("Font styles are missing!");
            }
            descriptionText.resize(1280, 88);
            descriptionText.name = "Description";
            descriptionText.x = 80;
            descriptionText.y = 352;
            descriptionText.autoRename = false;
            yield figma.loadFontAsync(descriptionText.fontName);
            descriptionText.textAutoResize = "HEIGHT";
            descriptionText.characters = "Type a description of the component here, and place any components/variants in the space below ↘️";
            figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
            // Then add the template to any pages with 'Component' in the title
            figma.root.findChildren(pageNode => pageNode.name.includes("Component")).forEach(pageNode => {
                pageNode.appendChild(building_blocks.clone());
                pageNode.appendChild(background.clone());
                pageNode.appendChild(descriptionText.clone());
                pageNode.appendChild(title.clone());
                figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
            });
            //Clear up the "extra" template
            title.remove();
            building_blocks.remove();
            descriptionText.remove();
            background.remove();
        }
        figma.currentPage = figma.root.children[0];
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        figma.closePlugin();
    });
}
function createProjectDetails(description, type) {
    detailsFrame = figma.createFrame();
    detailsFrame.name = "Project details";
    detailsFrame.y = 340;
    detailsFrame.resizeWithoutConstraints(640, 1);
    detailsFrame.layoutMode = "VERTICAL";
    detailsFrame.counterAxisSizingMode = "FIXED";
    detailsFrame.verticalPadding = PADDING_V;
    detailsFrame.horizontalPadding = PADDING_H;
    detailsFrame.itemSpacing = SPACING;
    figma.currentPage.appendChild(detailsFrame);
    createDetail("Description", description !== "" ? description : "<Enter a description here>");
    createDetail("External Links", "<Add links here> →\n<E.g. Confluence> →\n<E.g. Google Doc> →");
    createDetail("Slack Channels", "#<channel name here>\n#<channel name here>");
    createDetail("Points of Contact", "Design - <link Slack profile here>\nProduct - <link Slack profile here>\nEngineering - <link Slack profile here>");
    // Frame for wrapping the list of page examples.
    listFrame = figma.createFrame();
    listFrame.name = "Add other pages, as needed...";
    listFrame.y = detailsFrame.y + detailsFrame.height + SPACING;
    listFrame.resizeWithoutConstraints(640, 1);
    listFrame.layoutMode = "VERTICAL";
    listFrame.counterAxisSizingMode = "FIXED";
    listFrame.verticalPadding = PADDING_V;
    listFrame.horizontalPadding = PADDING_H;
    listFrame.itemSpacing = 8;
    figma.currentPage.appendChild(listFrame);
    // Not all projects need a prototype, shipped it/released, or research page.
    // However in order to make adding one of these pages easily, we add some
    // text to our scratch page so we can copy/paste them with the proper emoji.
    switch (type) {
        case "Exploration":
            createPageExample("⏳ History");
            createPageExample("✅ Next steps");
            break;
        case "Product":
            createPageExample("💅🏽 Styles");
            createPageExample("⚙️ Components");
            break;
        case "Library":
            createPageExample("💅🏽 Styles");
            createPageExample("🚀 Roadmap");
            break;
    }
    figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}
// This function adds a thumbnail to your first page.
function createThumbnail(title, type) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(reason => {
            figma.notify("Annotation Kit library is required for thumbnails.");
            figma.closePlugin();
        }).then((component) => __awaiter(this, void 0, void 0, function* () {
            let thumbnailFrame = figma.createFrame();
            thumbnailFrame.name = "Thumbnail";
            thumbnailFrame.resizeWithoutConstraints(640, 320);
            if (component) {
                let thumbnail = component.createInstance();
                thumbnail.scaleFactor = 1 / 3;
                thumbnailFrame.appendChild(thumbnail);
                figma.currentPage.appendChild(thumbnailFrame);
                let label = thumbnail.findOne(node => node.name == "File Name");
                yield figma.loadFontAsync(label.fontName).then(() => {
                    if (title !== "") {
                        label.characters = title;
                    }
                    else {
                        label.characters = "Enter title here";
                    }
                });
                let badge = thumbnail.findOne(node => node.name == "Badge" && node.type == "INSTANCE");
                let badgeText = badge.findOne(node => node.name == "Badge" && node.type == "TEXT");
                yield figma.loadFontAsync(badgeText.fontName).then(() => {
                    badgeText.characters = type;
                });
                if (type == "Exploration") {
                    badge.fillStyleId = (yield figma.importStyleByKeyAsync("0ee1c479d3f21d475227a4520cb481bd98af5af5")).id;
                }
                else if (type == "Library") {
                    badge.fillStyleId = (yield figma.importStyleByKeyAsync("a3aa8c64d10a0b1ee92b3dc6e5f278ac978c56cf")).id;
                    badgeText.fillStyleId = (yield figma.importStyleByKeyAsync("492c9645d67f026dd37c301c61577504bd7d8ad7")).id;
                }
            }
            figma.setFileThumbnailNodeAsync(thumbnailFrame);
        }));
    });
}
// Adds a new page.
function createPage(title) {
    let page = figma.createPage();
    page.name = title;
}
// Adds a section to your details frame.
function createDetail(title, body) {
    let detailFrame = figma.createFrame();
    detailFrame.name = title;
    detailFrame.layoutMode = "VERTICAL";
    detailFrame.counterAxisSizingMode = "AUTO";
    detailFrame.layoutAlign = "STRETCH";
    detailFrame.itemSpacing = 8;
    let titleText = figma.createText();
    titleText.fontName = FONT_TITLES;
    titleText.fontSize = 17;
    titleText.characters = title;
    titleText.layoutAlign = "STRETCH";
    detailFrame.appendChild(titleText);
    let bodyText = figma.createText();
    bodyText.fontName = FONT_BODIES;
    bodyText.fontSize = 14;
    bodyText.characters = body;
    bodyText.layoutAlign = "STRETCH";
    detailFrame.appendChild(bodyText);
    detailsFrame.appendChild(detailFrame);
}
// Adds an example to your list frame.
function createPageExample(text) {
    let linkLabel = figma.createText();
    linkLabel.fontName = FONT_BODIES;
    linkLabel.fontSize = 14;
    linkLabel.characters = text;
    listFrame.appendChild(linkLabel);
}
function createHowTo(targets) {
    return __awaiter(this, void 0, void 0, function* () {
        let howPage = figma.root.children.find(node => node.name == "❓ How to...");
        figma.currentPage = howPage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "How to...", "");
        yield addContent(frame1, "Use this library", targets[0]);
        yield addContent(frame1, "Contribute", targets[1]);
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
    });
}
function createUse() {
    return __awaiter(this, void 0, void 0, function* () {
        let usePage = figma.root.children.find(node => node.name == "         ↪ Use this library");
        figma.currentPage = usePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Using this library", "", "1) Add sections here\n\nOptionally, add more sections to help describe the usage of your library.");
        yield addContent(frame1, "Purpose", yield createSlideFrame(TEMPLATE_INFO, "Using this library", "Purpose", "2) Describe the purpose\n\nThis library was created to fill a need. Describe that need and let designers what does (and doesn’t) fit within this library.\n\nYou can also add an image to the right that represents your library.", "E.g. The Conversation Kit is a Figma library - and set of accompanying tools - that give designers everything they need to design a consistent conversational experience across any number of products and platforms."));
        yield addContent(frame1, "Principles", yield createSlideFrame(TEMPLATE_BLOCKS, "Using this library", "Principles", "3) Add your own principles\n\nPrinciples keep foundational decisions consistent, and set precedent for how each component is used and built."));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Using this library", "Instructions", "4) Add step-by-step instructions\n\nInclude instructions of where the assets can be found, how they are organized, how variants and overrides work, and any other details needed to use the library.", "1. Do this\nDo that\nProfit"));
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        return frame1;
    });
}
function createContribute() {
    return __awaiter(this, void 0, void 0, function* () {
        let contributePage = figma.root.children.find(node => node.name == "         ↪ Contribute");
        figma.currentPage = contributePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Contributing", "", "1) Add sections here\n\nOptionally, add more sections to help describe how other designers can add to this library.");
        yield addContent(frame1, "Conventions", yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing", "Conventions", "2) Add your own conventions\n\nWhat conventions does a designer need to be aware of to make components that work in a similar way to all the rest?"));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "3) Add step-by-step instructions\n\nInclude instructions on how to start a branch, organize pages, and request review.", "1. Create a Branch: Press the chevron next to the file name in the toolbar, and select Create branch.... Give it a name in the following format ➕<Component name>.\nDuplicate the ‘🚧 Component template’ page, and rename it according to the page naming converntions.\nPerform your explorations/work on this page.\nComplete the pre-publish checklist.\nRequest review by sharing the branch with <team slack channel or point-of-contact>"));
        yield addContent(frame1, "Checklist", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Checklist", "4) Build a checklist\n\nWhat considerations do you go through before deciding if a component is ready to “go live”? These may refer back to your conventions.", "☑️  Did you do this?\n☑️  Did you do that?\n☑️  What about the other thing?"));
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        return frame1;
    });
}
//TODO Implement an interface so title can be ommited.
function createSlideFrame(id, supertitleText, titleText, instructionText, contentText) {
    return __awaiter(this, void 0, void 0, function* () {
        let pageContents = figma.currentPage.children;
        let lastAdded = pageContents[pageContents.length - 1];
        let frame1 = figma.createFrame();
        frame1.name = titleText ? supertitleText.concat("/", titleText) : supertitleText;
        frame1.resize(1920, 1080);
        frame1.y = lastAdded ? lastAdded.y + 1180 : 0;
        let format = (yield figma.importComponentByKeyAsync(id)).createInstance();
        frame1.insertChild(0, format);
        let supertitle;
        let title;
        let content;
        switch (id) {
            case TEMPLATE_CONTENTS:
                supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Table of contents");
                if (supertitle) {
                    yield setText(supertitle, supertitleText);
                }
                let sections = format.findChild(node => node.name == "Sections");
                sections.children.forEach(node => node.visible = false);
                break;
            case TEMPLATE_BLOCKS:
                supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Supertitle");
                if (supertitle) {
                    yield setText(supertitle, supertitleText.toUpperCase());
                }
                title = format.findOne(node => node.type == "TEXT" && node.characters == "What else does it solve?");
                if (title && titleText) {
                    yield setText(title, titleText);
                }
                break;
            case TEMPLATE_INFO:
                supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Heading" && node.characters == "SUPERTITLE");
                if (supertitle) {
                    yield setText(supertitle, supertitleText.toUpperCase());
                }
                title = format.findOne(node => node.type == "TEXT" && node.characters == "Heading");
                if (title && titleText) {
                    yield setText(title, titleText);
                }
                content = format.findOne(node => node.type == "TEXT" && node.name == "Content");
                if (content && contentText) {
                    yield setText(content, contentText);
                }
                break;
        }
        figma.currentPage.insertChild(figma.currentPage.children.length, frame1);
        if (instructionText) {
            let stickie = yield (yield figma.importComponentByKeyAsync("d4df8b884dbe7ac182612b61cb2091b9244bdf67")).createInstance();
            stickie.y = frame1.y;
            stickie.x = frame1.x - 40 - 272;
            let note = stickie.findChild(node => node.name === "Note");
            yield setText(note, instructionText);
            figma.currentPage.insertChild(figma.currentPage.children.length, stickie);
        }
        return frame1;
    });
}
function addContent(tableFrame, title, target) {
    return __awaiter(this, void 0, void 0, function* () {
        let table = tableFrame.children[0];
        let sections = table.findChild(node => node.name == "Sections");
        let section = sections.children.find(node => node.visible == false);
        yield setText(section, title);
        section.hyperlink = { type: "NODE", value: target.id };
        section.visible = true;
    });
}
function setText(node, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(node.fontName);
        node.characters = text;
        // Check if it should be an ordered or unordered list.
        if (text.startsWith("1. ")) {
            node.characters = node.characters.substring(3);
            node.setRangeListOptions(0, node.characters.length, { type: "ORDERED" });
        }
        else if (text.startsWith("- ")) {
            node.characters = node.characters.substring(3);
            node.setRangeListOptions(0, node.characters.length, { type: "UNORDERED" });
        }
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFpRDtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrRkFBa0YseUJBQXlCLEVBQUU7QUFDOUk7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLDRDQUE0QyxFQUFFO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGtCQUFrQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsb0JBQW9CO0FBQ3JGO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgd2luZG93IHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBwcm9qZWN0IGRldGFpbHMsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSBhIGRvY3VtZW50IHN0cnVjdHVyZSBhbmQgdGh1bWJuYWlsLlxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9ubWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuY29uc3QgVEVNUExBVEVfQ09OVEVOVFMgPSBcImM3NjlhNjI2NTU1NmMwOTFjYzFkOGMwNTc2MmM3MWVjYmY5NzMxNGJcIjtcbmNvbnN0IFRFTVBMQVRFX0JMT0NLUyA9IFwiNTIwNThlNDQ1NGQ4Mjk4NzI0ODJiODU1MWY0OTE4Y2I4Mjg4ODBkNlwiO1xuY29uc3QgVEVNUExBVEVfSU5GTyA9IFwiZDQ1YjMwMDU1MTZmODg3NzI0OTQwYTVhMTA2NjNhZGNmZjlkYzRiNFwiO1xuLy9Gb250IHN0eWxlc1xuY29uc3QgV0VCX1hYWExBUkdFID0gXCI5NWU5NGFjNDFhOGNjNzlkMDk3MTExYTg3ODVkM2I1OTc2YzcwZjk5XCI7XG52YXIgbGlzdEZyYW1lO1xudmFyIGRldGFpbHNGcmFtZTtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUoNDAwLCA1NjApO1xuaWYgKGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShcInN0YXR1c1wiKSA9PSBcInJ1blwiKSB7XG4gICAgLy9UT0RPIGV2YWx1YXRlIGlmIHRoZXJlIGlzIHNvbWUgd2F5IHRvIHJlY29uZmlndXJlIHRoZSBwYWdlcyBhZnRlciBpbml0aWFsIHNldHVwLlxuICAgIGZpZ21hLnVpLnJlc2l6ZSg0MDAsIDEzNik7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJhYm91dFwiKTtcbn1cbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJjcmVhdGUtcHJvamN0XCI6XG4gICAgICAgICAgICBmaWdtYS51aS5oaWRlKCk7XG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVQcm9qZWN0KG1zZy5wcm9qZWN0VGl0bGUsIG1zZy5wcm9qZWN0VHlwZSwgbXNnLnByb2plY3REZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFJlbGF1bmNoRGF0YSh7IGFib3V0OiBcIlRoaXMgZG9jdW1lbnQgd2FzIGZvcm1hdGVkIHdpdGggWnRhcnRcIiB9KTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcInN0YXR1c1wiLCBcInJ1blwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuY29uc3QgUEFERElOR19IID0gNDA7XG5jb25zdCBQQURESU5HX1YgPSA0MDtcbmNvbnN0IFNQQUNJTkcgPSAyNDtcbmNvbnN0IEZPTlRfVElUTEVTID0geyBmYW1pbHk6IFwiTWVubG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG5jb25zdCBGT05UX0JPRElFUyA9IHsgZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuY29uc3QgQ09NUE9ORU5UX1RJVExFID0gXCJkY2M4NTE0NDczN2NjODczNmE3ODBiNmU0MjhhMTQ2YWU0NTYwNjA2XCI7XG5jb25zdCBDT01QT05FTlRfQkxPQ0sgPSBcIjU5YTE3YzMwMGQ0MGQ5NTJlNDAyNWQ1NTFlZjI1ZjkwNmQ5MmY0MzdcIjtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHR5cGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gU2V0IHBhZ2UgbmFtZXMgYW5kIHJlbmFtZXMgdGhlIGRlZmF1bHQgXCJQYWdlIDFcIlxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5uYW1lID0gXCLwn5OWIEFib3V0XCI7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkV4cGxvcmF0aW9uXCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfpJQgUHJvYmxlbSBkZWZpbml0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5SsIFJlc2VhcmNoXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn4+dIEV4cGxvcmF0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFNvbHV0aW9uIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTb2x1dGlvbiBCXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OQIERlc2lnbiBTcGVjc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFJlYWR5IGZvciBkZXZcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTaGlwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCflbkgUHJvdG90eXBlc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFByb3RvdHlwZSBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfj50gRXhwbG9yYXRpb25zXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogRXhwbG9yYXRpb24gQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OmIEFyY2hpdmVzXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogQXJjaGl2ZSBBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxpYnJhcnlcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi4p2TIEhvdyB0by4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBDb250cmlidXRlXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IENcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+apyBDb21wb25lbnQgdGVtcGxhdGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTmVlZCB0byBsb2FkIGEgZm9udCBoZXJlIHRvIGdlbmVyYXRlIHRoZSBvdGhlciBwYWdlIGV4YW1wbGVzLlxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKEZPTlRfVElUTEVTKTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhGT05UX0JPRElFUyk7XG4gICAgICAgIC8vQWRkIGEgdGh1bW5haWwgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgICAgIHlpZWxkIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkudGhlbigoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbiwgdHlwZSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzID0gW3lpZWxkIGNyZWF0ZVVzZSgpLCB5aWVsZCBjcmVhdGVDb250cmlidXRlKCldO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlSG93VG8odGFyZ2V0cyk7XG4gICAgICAgICAgICAvL0dvIHRvIHRoZSBjb21wb25lbnQgdGVtcGxhdGUgcGFnZVxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuW2ZpZ21hLnJvb3QuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAvLyBQcmVwYXJlIGEgY29tcG9uZW50IHRlbXBsYXRlXG4gICAgICAgICAgICAvL0NyZWF0ZSB0aXRsZVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoQ09NUE9ORU5UX1RJVExFKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHRpdGxlLm5hbWUgPSBcIkNvbXBvbmVudCB0aXRsZVwiO1xuICAgICAgICAgICAgc2V0VGV4dCh0aXRsZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIpLCBcIkNvbXBvbmVudCBuYW1lXCIpO1xuICAgICAgICAgICAgdGl0bGUucmVzaXplKDEyODAsIHRpdGxlLmhlaWdodCk7XG4gICAgICAgICAgICB0aXRsZS54ID0gODA7XG4gICAgICAgICAgICB0aXRsZS55ID0gODA7XG4gICAgICAgICAgICAvL0NyZWF0ZSBidWlsZGluZyBibG9ja3MgYXJlYVxuICAgICAgICAgICAgbGV0IGJ1aWxkaW5nX2Jsb2NrcyA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MubmFtZSA9IFwiQnVpbGRpbmcgYmxvY2tzXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MucmVzaXplKDE0NDAsIGJ1aWxkaW5nX2Jsb2Nrcy5oZWlnaHQpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnggPSAwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnkgPSAxNTIwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICBsZXQgYmxvY2sgPSAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhDT01QT05FTlRfQkxPQ0spKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgbGV0IGJsb2NrVGl0bGVUZXh0ID0gYmxvY2suZmluZENoaWxkKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoYmxvY2tUaXRsZVRleHQuZm9udE5hbWUpO1xuICAgICAgICAgICAgYmxvY2tUaXRsZVRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgYmxvY2tUaXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGJsb2NrVGl0bGVUZXh0LmNoYXJhY3RlcnMgPSBcIkJ1aWxkaW5nIGJsb2Nrc1wiO1xuICAgICAgICAgICAgYmxvY2subGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICAgICAgICBsZXQgYnVpbGRpbmdfYmxvY2tfYXJlYSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLm5hbWUgPSBcIlBsYWNlIGNvbXBvbm5lbnRzIGhlcmUuLi5cIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLmFwcGVuZENoaWxkKGJ1aWxkaW5nX2Jsb2NrX2FyZWEpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5yZXNpemUoMTQ0MCwgNDgwKTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEubGF5b3V0R3JvdyA9IDA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLml0ZW1TcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLmZpbGxzID0gW107XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICAvL0NyZWF0ZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5yZXNpemUoMTQ0MCwgMTQ0MCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLm5hbWUgPSBcIkJhY2tncm91bmRcIjtcbiAgICAgICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBbeyBcInR5cGVcIjogXCJTT0xJRFwiLCBcInZpc2libGVcIjogdHJ1ZSwgXCJvcGFjaXR5XCI6IDEsIFwiYmxlbmRNb2RlXCI6IFwiTk9STUFMXCIsIFwiY29sb3JcIjogeyBcInJcIjogMSwgXCJnXCI6IDEsIFwiYlwiOiAxIH0gfV07XG4gICAgICAgICAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvblRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhXRUJfWFhYTEFSR0UpLnRoZW4oYmFzZVN0eWxlID0+IHsgZGVzY3JpcHRpb25UZXh0LnRleHRTdHlsZUlkID0gYmFzZVN0eWxlLmlkOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkZvbnQgc3R5bGVzIGFyZSBtaXNzaW5nIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5yZXNpemUoMTI4MCwgODgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0Lm5hbWUgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQueCA9IDgwO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnkgPSAzNTI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQuYXV0b1JlbmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhkZXNjcmlwdGlvblRleHQuZm9udE5hbWUpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5jaGFyYWN0ZXJzID0gXCJUeXBlIGEgZGVzY3JpcHRpb24gb2YgdGhlIGNvbXBvbmVudCBoZXJlLCBhbmQgcGxhY2UgYW55IGNvbXBvbmVudHMvdmFyaWFudHMgaW4gdGhlIHNwYWNlIGJlbG93IOKGmO+4j1wiO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIC8vIFRoZW4gYWRkIHRoZSB0ZW1wbGF0ZSB0byBhbnkgcGFnZXMgd2l0aCAnQ29tcG9uZW50JyBpbiB0aGUgdGl0bGVcbiAgICAgICAgICAgIGZpZ21hLnJvb3QuZmluZENoaWxkcmVuKHBhZ2VOb2RlID0+IHBhZ2VOb2RlLm5hbWUuaW5jbHVkZXMoXCJDb21wb25lbnRcIikpLmZvckVhY2gocGFnZU5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGJ1aWxkaW5nX2Jsb2Nrcy5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dC5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZCh0aXRsZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0NsZWFyIHVwIHRoZSBcImV4dHJhXCIgdGVtcGxhdGVcbiAgICAgICAgICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnJlbW92ZSgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnJlbW92ZSgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW5bMF07XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbiwgdHlwZSkge1xuICAgIGRldGFpbHNGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZGV0YWlsc0ZyYW1lLm5hbWUgPSBcIlByb2plY3QgZGV0YWlsc1wiO1xuICAgIGRldGFpbHNGcmFtZS55ID0gMzQwO1xuICAgIGRldGFpbHNGcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoNjQwLCAxKTtcbiAgICBkZXRhaWxzRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBkZXRhaWxzRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgIGRldGFpbHNGcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSBQQURESU5HX1Y7XG4gICAgZGV0YWlsc0ZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gUEFERElOR19IO1xuICAgIGRldGFpbHNGcmFtZS5pdGVtU3BhY2luZyA9IFNQQUNJTkc7XG4gICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZGV0YWlsc0ZyYW1lKTtcbiAgICBjcmVhdGVEZXRhaWwoXCJEZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbiAhPT0gXCJcIiA/IGRlc2NyaXB0aW9uIDogXCI8RW50ZXIgYSBkZXNjcmlwdGlvbiBoZXJlPlwiKTtcbiAgICBjcmVhdGVEZXRhaWwoXCJFeHRlcm5hbCBMaW5rc1wiLCBcIjxBZGQgbGlua3MgaGVyZT4g4oaSXFxuPEUuZy4gQ29uZmx1ZW5jZT4g4oaSXFxuPEUuZy4gR29vZ2xlIERvYz4g4oaSXCIpO1xuICAgIGNyZWF0ZURldGFpbChcIlNsYWNrIENoYW5uZWxzXCIsIFwiIzxjaGFubmVsIG5hbWUgaGVyZT5cXG4jPGNoYW5uZWwgbmFtZSBoZXJlPlwiKTtcbiAgICBjcmVhdGVEZXRhaWwoXCJQb2ludHMgb2YgQ29udGFjdFwiLCBcIkRlc2lnbiAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cXG5Qcm9kdWN0IC0gPGxpbmsgU2xhY2sgcHJvZmlsZSBoZXJlPlxcbkVuZ2luZWVyaW5nIC0gPGxpbmsgU2xhY2sgcHJvZmlsZSBoZXJlPlwiKTtcbiAgICAvLyBGcmFtZSBmb3Igd3JhcHBpbmcgdGhlIGxpc3Qgb2YgcGFnZSBleGFtcGxlcy5cbiAgICBsaXN0RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGxpc3RGcmFtZS5uYW1lID0gXCJBZGQgb3RoZXIgcGFnZXMsIGFzIG5lZWRlZC4uLlwiO1xuICAgIGxpc3RGcmFtZS55ID0gZGV0YWlsc0ZyYW1lLnkgKyBkZXRhaWxzRnJhbWUuaGVpZ2h0ICsgU1BBQ0lORztcbiAgICBsaXN0RnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgbGlzdEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgbGlzdEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBsaXN0RnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgIGxpc3RGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICBsaXN0RnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGxpc3RGcmFtZSk7XG4gICAgLy8gTm90IGFsbCBwcm9qZWN0cyBuZWVkIGEgcHJvdG90eXBlLCBzaGlwcGVkIGl0L3JlbGVhc2VkLCBvciByZXNlYXJjaCBwYWdlLlxuICAgIC8vIEhvd2V2ZXIgaW4gb3JkZXIgdG8gbWFrZSBhZGRpbmcgb25lIG9mIHRoZXNlIHBhZ2VzIGVhc2lseSwgd2UgYWRkIHNvbWVcbiAgICAvLyB0ZXh0IHRvIG91ciBzY3JhdGNoIHBhZ2Ugc28gd2UgY2FuIGNvcHkvcGFzdGUgdGhlbSB3aXRoIHRoZSBwcm9wZXIgZW1vamkuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJFeHBsb3JhdGlvblwiOlxuICAgICAgICAgICAgY3JlYXRlUGFnZUV4YW1wbGUoXCLij7MgSGlzdG9yeVwiKTtcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4pyFIE5leHQgc3RlcHNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlByb2R1Y3RcIjpcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpO1xuICAgICAgICAgICAgY3JlYXRlUGFnZUV4YW1wbGUoXCLimpnvuI8gQ29tcG9uZW50c1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTGlicmFyeVwiOlxuICAgICAgICAgICAgY3JlYXRlUGFnZUV4YW1wbGUoXCLwn5KF8J+PvSBTdHlsZXNcIik7XG4gICAgICAgICAgICBjcmVhdGVQYWdlRXhhbXBsZShcIvCfmoAgUm9hZG1hcFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xufVxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIGEgdGh1bWJuYWlsIHRvIHlvdXIgZmlyc3QgcGFnZS5cbmZ1bmN0aW9uIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJhYzBiMTU4YzM3ZGUzZmE4YmE5NGQyYjM4MDE5MTNhZWEyNjJmZmNiXCIpLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJBbm5vdGF0aW9uIEtpdCBsaWJyYXJ5IGlzIHJlcXVpcmVkIGZvciB0aHVtYm5haWxzLlwiKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH0pLnRoZW4oKGNvbXBvbmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHRodW1ibmFpbEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLm5hbWUgPSBcIlRodW1ibmFpbFwiO1xuICAgICAgICAgICAgdGh1bWJuYWlsRnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMzIwKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gY29tcG9uZW50LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsLnNjYWxlRmFjdG9yID0gMSAvIDM7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsRnJhbWUuYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZCh0aHVtYm5haWxGcmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gdGh1bWJuYWlsLmZpbmRPbmUobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJGaWxlIE5hbWVcIik7XG4gICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhsYWJlbC5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2hhcmFjdGVycyA9IHRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2hhcmFjdGVycyA9IFwiRW50ZXIgdGl0bGUgaGVyZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGJhZGdlID0gdGh1bWJuYWlsLmZpbmRPbmUobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJCYWRnZVwiICYmIG5vZGUudHlwZSA9PSBcIklOU1RBTkNFXCIpO1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZVRleHQgPSBiYWRnZS5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoYmFkZ2VUZXh0LmZvbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VUZXh0LmNoYXJhY3RlcnMgPSB0eXBlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFwiRXhwbG9yYXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZS5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCIwZWUxYzQ3OWQzZjIxZDQ3NTIyN2E0NTIwY2I0ODFiZDk4YWY1YWY1XCIpKS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSBcIkxpYnJhcnlcIikge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZS5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCJhM2FhOGM2NGQxMGEwYjFlZTkyYjNkYzZlNWYyNzhhYzk3OGM1NmNmXCIpKS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VUZXh0LmZpbGxTdHlsZUlkID0gKHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcIjQ5MmM5NjQ1ZDY3ZjAyNmRkMzdjMzAxYzYxNTc3NTA0YmQ3ZDhhZDdcIikpLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ21hLnNldEZpbGVUaHVtYm5haWxOb2RlQXN5bmModGh1bWJuYWlsRnJhbWUpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyBBZGRzIGEgbmV3IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKHRpdGxlKSB7XG4gICAgbGV0IHBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgcGFnZS5uYW1lID0gdGl0bGU7XG59XG4vLyBBZGRzIGEgc2VjdGlvbiB0byB5b3VyIGRldGFpbHMgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWwodGl0bGUsIGJvZHkpIHtcbiAgICBsZXQgZGV0YWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbEZyYW1lLm5hbWUgPSB0aXRsZTtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGRldGFpbEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGRldGFpbEZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGxldCB0aXRsZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGl0bGVUZXh0LmZvbnROYW1lID0gRk9OVF9USVRMRVM7XG4gICAgdGl0bGVUZXh0LmZvbnRTaXplID0gMTc7XG4gICAgdGl0bGVUZXh0LmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICB0aXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIGxldCBib2R5VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBib2R5VGV4dC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGJvZHlUZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgYm9keVRleHQuY2hhcmFjdGVycyA9IGJvZHk7XG4gICAgYm9keVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGRldGFpbEZyYW1lKTtcbn1cbi8vIEFkZHMgYW4gZXhhbXBsZSB0byB5b3VyIGxpc3QgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVQYWdlRXhhbXBsZSh0ZXh0KSB7XG4gICAgbGV0IGxpbmtMYWJlbCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBsaW5rTGFiZWwuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNDtcbiAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGxpbmtMYWJlbCk7XG59XG5mdW5jdGlvbiBjcmVhdGVIb3dUbyh0YXJnZXRzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGhvd1BhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCLinZMgSG93IHRvLi4uXCIpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGhvd1BhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIkhvdyB0by4uLlwiLCBcIlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiVXNlIHRoaXMgbGlicmFyeVwiLCB0YXJnZXRzWzBdKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ29udHJpYnV0ZVwiLCB0YXJnZXRzWzFdKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVVzZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdXNlUGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUubmFtZSA9PSBcIiAgICAgICAgIOKGqiBVc2UgdGhpcyBsaWJyYXJ5XCIpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHVzZVBhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIlVzaW5nIHRoaXMgbGlicmFyeVwiLCBcIlwiLCBcIjEpIEFkZCBzZWN0aW9ucyBoZXJlXFxuXFxuT3B0aW9uYWxseSwgYWRkIG1vcmUgc2VjdGlvbnMgdG8gaGVscCBkZXNjcmliZSB0aGUgdXNhZ2Ugb2YgeW91ciBsaWJyYXJ5LlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiUHVycG9zZVwiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiUHVycG9zZVwiLCBcIjIpIERlc2NyaWJlIHRoZSBwdXJwb3NlXFxuXFxuVGhpcyBsaWJyYXJ5IHdhcyBjcmVhdGVkIHRvIGZpbGwgYSBuZWVkLiBEZXNjcmliZSB0aGF0IG5lZWQgYW5kIGxldCBkZXNpZ25lcnMgd2hhdCBkb2VzIChhbmQgZG9lc27igJl0KSBmaXQgd2l0aGluIHRoaXMgbGlicmFyeS5cXG5cXG5Zb3UgY2FuIGFsc28gYWRkIGFuIGltYWdlIHRvIHRoZSByaWdodCB0aGF0IHJlcHJlc2VudHMgeW91ciBsaWJyYXJ5LlwiLCBcIkUuZy4gVGhlIENvbnZlcnNhdGlvbiBLaXQgaXMgYSBGaWdtYSBsaWJyYXJ5IC0gYW5kIHNldCBvZiBhY2NvbXBhbnlpbmcgdG9vbHMgLSB0aGF0IGdpdmUgZGVzaWduZXJzIGV2ZXJ5dGhpbmcgdGhleSBuZWVkIHRvIGRlc2lnbiBhIGNvbnNpc3RlbnQgY29udmVyc2F0aW9uYWwgZXhwZXJpZW5jZSBhY3Jvc3MgYW55IG51bWJlciBvZiBwcm9kdWN0cyBhbmQgcGxhdGZvcm1zLlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIlByaW5jaXBsZXNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9CTE9DS1MsIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiUHJpbmNpcGxlc1wiLCBcIjMpIEFkZCB5b3VyIG93biBwcmluY2lwbGVzXFxuXFxuUHJpbmNpcGxlcyBrZWVwIGZvdW5kYXRpb25hbCBkZWNpc2lvbnMgY29uc2lzdGVudCwgYW5kIHNldCBwcmVjZWRlbnQgZm9yIGhvdyBlYWNoIGNvbXBvbmVudCBpcyB1c2VkIGFuZCBidWlsdC5cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJJbnN0cnVjdGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIlVzaW5nIHRoaXMgbGlicmFyeVwiLCBcIkluc3RydWN0aW9uc1wiLCBcIjQpIEFkZCBzdGVwLWJ5LXN0ZXAgaW5zdHJ1Y3Rpb25zXFxuXFxuSW5jbHVkZSBpbnN0cnVjdGlvbnMgb2Ygd2hlcmUgdGhlIGFzc2V0cyBjYW4gYmUgZm91bmQsIGhvdyB0aGV5IGFyZSBvcmdhbml6ZWQsIGhvdyB2YXJpYW50cyBhbmQgb3ZlcnJpZGVzIHdvcmssIGFuZCBhbnkgb3RoZXIgZGV0YWlscyBuZWVkZWQgdG8gdXNlIHRoZSBsaWJyYXJ5LlwiLCBcIjEuIERvIHRoaXNcXG5EbyB0aGF0XFxuUHJvZml0XCIpKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGNvbnRyaWJ1dGVQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIENvbnRyaWJ1dGVcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gY29udHJpYnV0ZVBhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIlwiLCBcIjEpIEFkZCBzZWN0aW9ucyBoZXJlXFxuXFxuT3B0aW9uYWxseSwgYWRkIG1vcmUgc2VjdGlvbnMgdG8gaGVscCBkZXNjcmliZSBob3cgb3RoZXIgZGVzaWduZXJzIGNhbiBhZGQgdG8gdGhpcyBsaWJyYXJ5LlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ29udmVudGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9CTE9DS1MsIFwiQ29udHJpYnV0aW5nXCIsIFwiQ29udmVudGlvbnNcIiwgXCIyKSBBZGQgeW91ciBvd24gY29udmVudGlvbnNcXG5cXG5XaGF0IGNvbnZlbnRpb25zIGRvZXMgYSBkZXNpZ25lciBuZWVkIHRvIGJlIGF3YXJlIG9mIHRvIG1ha2UgY29tcG9uZW50cyB0aGF0IHdvcmsgaW4gYSBzaW1pbGFyIHdheSB0byBhbGwgdGhlIHJlc3Q/XCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiSW5zdHJ1Y3Rpb25zXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIiwgXCJJbnN0cnVjdGlvbnNcIiwgXCIzKSBBZGQgc3RlcC1ieS1zdGVwIGluc3RydWN0aW9uc1xcblxcbkluY2x1ZGUgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBzdGFydCBhIGJyYW5jaCwgb3JnYW5pemUgcGFnZXMsIGFuZCByZXF1ZXN0IHJldmlldy5cIiwgXCIxLiBDcmVhdGUgYSBCcmFuY2g6IFByZXNzIHRoZSBjaGV2cm9uIG5leHQgdG8gdGhlIGZpbGUgbmFtZSBpbiB0aGUgdG9vbGJhciwgYW5kIHNlbGVjdCBDcmVhdGUgYnJhbmNoLi4uLiBHaXZlIGl0IGEgbmFtZSBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdCDinpU8Q29tcG9uZW50IG5hbWU+LlxcbkR1cGxpY2F0ZSB0aGUg4oCY8J+apyBDb21wb25lbnQgdGVtcGxhdGXigJkgcGFnZSwgYW5kIHJlbmFtZSBpdCBhY2NvcmRpbmcgdG8gdGhlIHBhZ2UgbmFtaW5nIGNvbnZlcm50aW9ucy5cXG5QZXJmb3JtIHlvdXIgZXhwbG9yYXRpb25zL3dvcmsgb24gdGhpcyBwYWdlLlxcbkNvbXBsZXRlIHRoZSBwcmUtcHVibGlzaCBjaGVja2xpc3QuXFxuUmVxdWVzdCByZXZpZXcgYnkgc2hhcmluZyB0aGUgYnJhbmNoIHdpdGggPHRlYW0gc2xhY2sgY2hhbm5lbCBvciBwb2ludC1vZi1jb250YWN0PlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkNoZWNrbGlzdFwiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIsIFwiQ2hlY2tsaXN0XCIsIFwiNCkgQnVpbGQgYSBjaGVja2xpc3RcXG5cXG5XaGF0IGNvbnNpZGVyYXRpb25zIGRvIHlvdSBnbyB0aHJvdWdoIGJlZm9yZSBkZWNpZGluZyBpZiBhIGNvbXBvbmVudCBpcyByZWFkeSB0byDigJxnbyBsaXZl4oCdPyBUaGVzZSBtYXkgcmVmZXIgYmFjayB0byB5b3VyIGNvbnZlbnRpb25zLlwiLCBcIuKYke+4jyAgRGlkIHlvdSBkbyB0aGlzP1xcbuKYke+4jyAgRGlkIHlvdSBkbyB0aGF0P1xcbuKYke+4jyAgV2hhdCBhYm91dCB0aGUgb3RoZXIgdGhpbmc/XCIpKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbi8vVE9ETyBJbXBsZW1lbnQgYW4gaW50ZXJmYWNlIHNvIHRpdGxlIGNhbiBiZSBvbW1pdGVkLlxuZnVuY3Rpb24gY3JlYXRlU2xpZGVGcmFtZShpZCwgc3VwZXJ0aXRsZVRleHQsIHRpdGxlVGV4dCwgaW5zdHJ1Y3Rpb25UZXh0LCBjb250ZW50VGV4dCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBwYWdlQ29udGVudHMgPSBmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGxhc3RBZGRlZCA9IHBhZ2VDb250ZW50c1twYWdlQ29udGVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmcmFtZTEgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZTEubmFtZSA9IHRpdGxlVGV4dCA/IHN1cGVydGl0bGVUZXh0LmNvbmNhdChcIi9cIiwgdGl0bGVUZXh0KSA6IHN1cGVydGl0bGVUZXh0O1xuICAgICAgICBmcmFtZTEucmVzaXplKDE5MjAsIDEwODApO1xuICAgICAgICBmcmFtZTEueSA9IGxhc3RBZGRlZCA/IGxhc3RBZGRlZC55ICsgMTE4MCA6IDA7XG4gICAgICAgIGxldCBmb3JtYXQgPSAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhpZCkpLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgIGZyYW1lMS5pbnNlcnRDaGlsZCgwLCBmb3JtYXQpO1xuICAgICAgICBsZXQgc3VwZXJ0aXRsZTtcbiAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9DT05URU5UUzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiVGFibGUgb2YgY29udGVudHNcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9IGZvcm1hdC5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpYmxlID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9CTE9DS1M6XG4gICAgICAgICAgICAgICAgc3VwZXJ0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIlN1cGVydGl0bGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJXaGF0IGVsc2UgZG9lcyBpdCBzb2x2ZT9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICYmIHRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHRpdGxlLCB0aXRsZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVEVNUExBVEVfSU5GTzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiSGVhZGluZ1wiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIlNVUEVSVElUTEVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJIZWFkaW5nXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dCh0aXRsZSwgdGl0bGVUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudCA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIkNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChjb250ZW50LCBjb250ZW50VGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLmxlbmd0aCwgZnJhbWUxKTtcbiAgICAgICAgaWYgKGluc3RydWN0aW9uVGV4dCkge1xuICAgICAgICAgICAgbGV0IHN0aWNraWUgPSB5aWVsZCAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImQ0ZGY4Yjg4NGRiZTdhYzE4MjYxMmI2MWNiMjA5MWI5MjQ0YmRmNjdcIikpLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICBzdGlja2llLnkgPSBmcmFtZTEueTtcbiAgICAgICAgICAgIHN0aWNraWUueCA9IGZyYW1lMS54IC0gNDAgLSAyNzI7XG4gICAgICAgICAgICBsZXQgbm90ZSA9IHN0aWNraWUuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09PSBcIk5vdGVcIik7XG4gICAgICAgICAgICB5aWVsZCBzZXRUZXh0KG5vdGUsIGluc3RydWN0aW9uVGV4dCk7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5pbnNlcnRDaGlsZChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbi5sZW5ndGgsIHN0aWNraWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFtZTE7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRDb250ZW50KHRhYmxlRnJhbWUsIHRpdGxlLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdGFibGUgPSB0YWJsZUZyYW1lLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgc2VjdGlvbnMgPSB0YWJsZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uc1wiKTtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBzZWN0aW9ucy5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS52aXNpYmxlID09IGZhbHNlKTtcbiAgICAgICAgeWllbGQgc2V0VGV4dChzZWN0aW9uLCB0aXRsZSk7XG4gICAgICAgIHNlY3Rpb24uaHlwZXJsaW5rID0geyB0eXBlOiBcIk5PREVcIiwgdmFsdWU6IHRhcmdldC5pZCB9O1xuICAgICAgICBzZWN0aW9uLnZpc2libGUgPSB0cnVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0VGV4dChub2RlLCB0ZXh0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhub2RlLmZvbnROYW1lKTtcbiAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgc2hvdWxkIGJlIGFuIG9yZGVyZWQgb3IgdW5vcmRlcmVkIGxpc3QuXG4gICAgICAgIGlmICh0ZXh0LnN0YXJ0c1dpdGgoXCIxLiBcIikpIHtcbiAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IG5vZGUuY2hhcmFjdGVycy5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICBub2RlLnNldFJhbmdlTGlzdE9wdGlvbnMoMCwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCwgeyB0eXBlOiBcIk9SREVSRURcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXh0LnN0YXJ0c1dpdGgoXCItIFwiKSkge1xuICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gbm9kZS5jaGFyYWN0ZXJzLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UmFuZ2VMaXN0T3B0aW9ucygwLCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoLCB7IHR5cGU6IFwiVU5PUkRFUkVEXCIgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=