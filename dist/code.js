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
var listFrame;
var detailsFrame;
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(400, 400);
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
            createProjectDetails(description);
        }));
        if (type == "Library") {
            let targets = [yield createUse(), yield createContribute()];
            yield createHowTo(targets);
        }
        figma.currentPage = figma.root.children[0];
        figma.closePlugin();
    });
}
function createProjectDetails(description) {
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
    createPageExample("💅🏽 Styles");
    createPageExample("⚙️ Components");
    createPageExample("👀 Ready for Review");
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
            thumbnailFrame.name = "Thumbnail - Right click to \"Set as thumbnail\"";
            thumbnailFrame.resizeWithoutConstraints(640, 320);
            if (component) {
                let thumbnail = component.createInstance();
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
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Using this library", "", "1. Add sections here\n\nOptionally, add more sections to help describe the usage of your library.");
        yield addContent(frame1, "Purpose", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Purpose", "2. Describe the purpose\n\nThis library was created to fill a need. Describe that need and let designers what does (and doesn’t) fit within this library.\n\nYou can also add an image to the right that represents your library.", "E.g. The Conversation Kit is a Figma library - and set of accompanying tools - that give designers everything they need to design a consistent conversational experience across any number of products and platforms."));
        yield addContent(frame1, "Principles", yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing", "Principles", "3. Add your own principles\n\nPrinciples keep foundational decisions consistent, and set precedent for how each component is used and built."));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "4. Add step-by-step instructions\n\nInclude instructions of where the assets can be found, how they are organized, how variants and overrides work, and any other details needed to use the library.", "1. Do this\n2. Do that\n3. Profit"));
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        return frame1;
    });
}
function createContribute() {
    return __awaiter(this, void 0, void 0, function* () {
        let contributePage = figma.root.children.find(node => node.name == "         ↪ Contribute");
        figma.currentPage = contributePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Contributing", "", "1. Add sections here\n\nOptionally, add more sections to help describe how other designers can add to this library.");
        yield addContent(frame1, "Conventions", yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing", "Conventions", "2. Add your own conventions\n\nWhat conventions does a designer need to be aware of to make components that work in a similar way to all the rest?"));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "3. Add step-by-step instructions\n\nInclude instructions on how to start a branch, organize pages, and request review.", "Create a Branch: Press the chevron next to the file name in the toolbar, and select Create branch.... Give it a name in the following format ➕<Component name>.\n\nDuplicate the ‘🚧 Component template’ page, and rename it according to the page naming converntions.\n\nPerform your explorations/work on this page.\n\nComplete the pre-publish checklist.\n\nRequest review by sharing the branch with <team slack channel or point-of-contact>"));
        yield addContent(frame1, "Checklist", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Checklist", "4. Build a checklist\n\nWhat considerations do you go through before deciding if a component is ready to “go live”? These may refer back to your conventions.", "Did you do this?\nDid you do that?\nWhat about the other thing?"));
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
        frame1.name = supertitleText;
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
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFpRDtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgcHJvamVjdCBkZXRhaWxzLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgYSBkb2N1bWVudCBzdHJ1Y3R1cmUgYW5kIHRodW1ibmFpbC5cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbmNvbnN0IFRFTVBMQVRFX0NPTlRFTlRTID0gXCJjNzY5YTYyNjU1NTZjMDkxY2MxZDhjMDU3NjJjNzFlY2JmOTczMTRiXCI7XG5jb25zdCBURU1QTEFURV9CTE9DS1MgPSBcIjUyMDU4ZTQ0NTRkODI5ODcyNDgyYjg1NTFmNDkxOGNiODI4ODgwZDZcIjtcbmNvbnN0IFRFTVBMQVRFX0lORk8gPSBcImQ0NWIzMDA1NTE2Zjg4NzcyNDk0MGE1YTEwNjYzYWRjZmY5ZGM0YjRcIjtcbnZhciBsaXN0RnJhbWU7XG52YXIgZGV0YWlsc0ZyYW1lO1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbmZpZ21hLnVpLnJlc2l6ZSg0MDAsIDQwMCk7XG5pZiAoZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwic3RhdHVzXCIpID09IFwicnVuXCIpIHtcbiAgICAvL1RPRE8gZXZhbHVhdGUgaWYgdGhlcmUgaXMgc29tZSB3YXkgdG8gcmVjb25maWd1cmUgdGhlIHBhZ2VzIGFmdGVyIGluaXRpYWwgc2V0dXAuXG4gICAgZmlnbWEudWkucmVzaXplKDQwMCwgMTM2KTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcImFib3V0XCIpO1xufVxuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImNyZWF0ZS1wcm9qY3RcIjpcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVByb2plY3QobXNnLnByb2plY3RUaXRsZSwgbXNnLnByb2plY3RUeXBlLCBtc2cucHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UmVsYXVuY2hEYXRhKHsgYWJvdXQ6IFwiVGhpcyBkb2N1bWVudCB3YXMgZm9ybWF0ZWQgd2l0aCBadGFydFwiIH0pO1xuICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwic3RhdHVzXCIsIFwicnVuXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5jb25zdCBQQURESU5HX0ggPSA0MDtcbmNvbnN0IFBBRERJTkdfViA9IDQwO1xuY29uc3QgU1BBQ0lORyA9IDI0O1xuY29uc3QgRk9OVF9USVRMRVMgPSB7IGZhbWlseTogXCJNZW5sb1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbmNvbnN0IEZPTlRfQk9ESUVTID0geyBmYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0eXBlLCBkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIFNldCBwYWdlIG5hbWVzIGFuZCByZW5hbWVzIHRoZSBkZWZhdWx0IFwiUGFnZSAxXCJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UubmFtZSA9IFwi8J+TliBBYm91dFwiO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFeHBsb3JhdGlvblwiOlxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn6SUIFByb2JsZW0gZGVmaW5pdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+UrCBSZXNlYXJjaFwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+PnSBFeHBsb3JhdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTb2x1dGlvbiBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogU29sdXRpb24gQlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQcm9kdWN0XCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+TkCBEZXNpZ24gU3BlY3NcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBSZWFkeSBmb3IgZGV2XCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogU2hpcHBlZFwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5W5IFByb3RvdHlwZXNcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBQcm90b3R5cGUgQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn4+dIEV4cGxvcmF0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIEV4cGxvcmF0aW9uIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+TpiBBcmNoaXZlc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIEFyY2hpdmUgQVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMaWJyYXJ5XCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIuKdkyBIb3cgdG8uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBVc2UgdGhpcyBsaWJyYXJ5XCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogQ29udHJpYnV0ZVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IEJcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBDXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfmqcgQ29tcG9uZW50IHRlbXBsYXRlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5lZWQgdG8gbG9hZCBhIGZvbnQgaGVyZSB0byBnZW5lcmF0ZSB0aGUgb3RoZXIgcGFnZSBleGFtcGxlcy5cbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhGT05UX1RJVExFUyk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoRk9OVF9CT0RJRVMpO1xuICAgICAgICAvL0FkZCBhIHRodW1uYWlsIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgICAgICB5aWVsZCBjcmVhdGVUaHVtYm5haWwodGl0bGUsIHR5cGUpLnRoZW4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdERldGFpbHMoZGVzY3JpcHRpb24pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmICh0eXBlID09IFwiTGlicmFyeVwiKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0cyA9IFt5aWVsZCBjcmVhdGVVc2UoKSwgeWllbGQgY3JlYXRlQ29udHJpYnV0ZSgpXTtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUhvd1RvKHRhcmdldHMpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlblswXTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REZXRhaWxzKGRlc2NyaXB0aW9uKSB7XG4gICAgZGV0YWlsc0ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBkZXRhaWxzRnJhbWUubmFtZSA9IFwiUHJvamVjdCBkZXRhaWxzXCI7XG4gICAgZGV0YWlsc0ZyYW1lLnkgPSAzNDA7XG4gICAgZGV0YWlsc0ZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDEpO1xuICAgIGRldGFpbHNGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGRldGFpbHNGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgZGV0YWlsc0ZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IFBBRERJTkdfVjtcbiAgICBkZXRhaWxzRnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSBQQURESU5HX0g7XG4gICAgZGV0YWlsc0ZyYW1lLml0ZW1TcGFjaW5nID0gU1BBQ0lORztcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChkZXRhaWxzRnJhbWUpO1xuICAgIGNyZWF0ZURldGFpbChcIkRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uICE9PSBcIlwiID8gZGVzY3JpcHRpb24gOiBcIjxFbnRlciBhIGRlc2NyaXB0aW9uIGhlcmU+XCIpO1xuICAgIGNyZWF0ZURldGFpbChcIkV4dGVybmFsIExpbmtzXCIsIFwiPEFkZCBsaW5rcyBoZXJlPiDihpJcXG48RS5nLiBDb25mbHVlbmNlPiDihpJcXG48RS5nLiBHb29nbGUgRG9jPiDihpJcIik7XG4gICAgY3JlYXRlRGV0YWlsKFwiU2xhY2sgQ2hhbm5lbHNcIiwgXCIjPGNoYW5uZWwgbmFtZSBoZXJlPlxcbiM8Y2hhbm5lbCBuYW1lIGhlcmU+XCIpO1xuICAgIGNyZWF0ZURldGFpbChcIlBvaW50cyBvZiBDb250YWN0XCIsIFwiRGVzaWduIC0gPGxpbmsgU2xhY2sgcHJvZmlsZSBoZXJlPlxcblByb2R1Y3QgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuRW5naW5lZXJpbmcgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XCIpO1xuICAgIC8vIEZyYW1lIGZvciB3cmFwcGluZyB0aGUgbGlzdCBvZiBwYWdlIGV4YW1wbGVzLlxuICAgIGxpc3RGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgbGlzdEZyYW1lLm5hbWUgPSBcIkFkZCBvdGhlciBwYWdlcywgYXMgbmVlZGVkLi4uXCI7XG4gICAgbGlzdEZyYW1lLnkgPSBkZXRhaWxzRnJhbWUueSArIGRldGFpbHNGcmFtZS5oZWlnaHQgKyBTUEFDSU5HO1xuICAgIGxpc3RGcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoNjQwLCAxKTtcbiAgICBsaXN0RnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBsaXN0RnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgIGxpc3RGcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSBQQURESU5HX1Y7XG4gICAgbGlzdEZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gUEFERElOR19IO1xuICAgIGxpc3RGcmFtZS5pdGVtU3BhY2luZyA9IDg7XG4gICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQobGlzdEZyYW1lKTtcbiAgICAvLyBOb3QgYWxsIHByb2plY3RzIG5lZWQgYSBwcm90b3R5cGUsIHNoaXBwZWQgaXQvcmVsZWFzZWQsIG9yIHJlc2VhcmNoIHBhZ2UuXG4gICAgLy8gSG93ZXZlciBpbiBvcmRlciB0byBtYWtlIGFkZGluZyBvbmUgb2YgdGhlc2UgcGFnZXMgZWFzaWx5LCB3ZSBhZGQgc29tZVxuICAgIC8vIHRleHQgdG8gb3VyIHNjcmF0Y2ggcGFnZSBzbyB3ZSBjYW4gY29weS9wYXN0ZSB0aGVtIHdpdGggdGhlIHByb3BlciBlbW9qaS5cbiAgICBjcmVhdGVQYWdlRXhhbXBsZShcIvCfkoXwn4+9IFN0eWxlc1wiKTtcbiAgICBjcmVhdGVQYWdlRXhhbXBsZShcIuKame+4jyBDb21wb25lbnRzXCIpO1xuICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+RgCBSZWFkeSBmb3IgUmV2aWV3XCIpO1xuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG59XG4vLyBUaGlzIGZ1bmN0aW9uIGFkZHMgYSB0aHVtYm5haWwgdG8geW91ciBmaXJzdCBwYWdlLlxuZnVuY3Rpb24gY3JlYXRlVGh1bWJuYWlsKHRpdGxlLCB0eXBlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImFjMGIxNThjMzdkZTNmYThiYTk0ZDJiMzgwMTkxM2FlYTI2MmZmY2JcIikuY2F0Y2gocmVhc29uID0+IHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkFubm90YXRpb24gS2l0IGxpYnJhcnkgaXMgcmVxdWlyZWQgZm9yIHRodW1ibmFpbHMuXCIpO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfSkudGhlbigoY29tcG9uZW50KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgdGh1bWJuYWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgdGh1bWJuYWlsRnJhbWUubmFtZSA9IFwiVGh1bWJuYWlsIC0gUmlnaHQgY2xpY2sgdG8gXFxcIlNldCBhcyB0aHVtYm5haWxcXFwiXCI7XG4gICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoNjQwLCAzMjApO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBjb21wb25lbnQuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHRodW1ibmFpbEZyYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSB0aHVtYm5haWwuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkZpbGUgTmFtZVwiKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGxhYmVsLmZvbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jaGFyYWN0ZXJzID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jaGFyYWN0ZXJzID0gXCJFbnRlciB0aXRsZSBoZXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgYmFkZ2UgPSB0aHVtYm5haWwuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkJhZGdlXCIgJiYgbm9kZS50eXBlID09IFwiSU5TVEFOQ0VcIik7XG4gICAgICAgICAgICAgICAgbGV0IGJhZGdlVGV4dCA9IGJhZGdlLmZpbmRPbmUobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJCYWRnZVwiICYmIG5vZGUudHlwZSA9PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhiYWRnZVRleHQuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZVRleHQuY2hhcmFjdGVycyA9IHR5cGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJFeHBsb3JhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlLmZpbGxTdHlsZUlkID0gKHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcIjBlZTFjNDc5ZDNmMjFkNDc1MjI3YTQ1MjBjYjQ4MWJkOThhZjVhZjVcIikpLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09IFwiTGlicmFyeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlLmZpbGxTdHlsZUlkID0gKHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcImEzYWE4YzY0ZDEwYTBiMWVlOTJiM2RjNmU1ZjI3OGFjOTc4YzU2Y2ZcIikpLmlkO1xuICAgICAgICAgICAgICAgICAgICBiYWRnZVRleHQuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiNDkyYzk2NDVkNjdmMDI2ZGQzN2MzMDFjNjE1Nzc1MDRiZDdkOGFkN1wiKSkuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyBBZGRzIGEgbmV3IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKHRpdGxlKSB7XG4gICAgbGV0IHBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgcGFnZS5uYW1lID0gdGl0bGU7XG59XG4vLyBBZGRzIGEgc2VjdGlvbiB0byB5b3VyIGRldGFpbHMgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWwodGl0bGUsIGJvZHkpIHtcbiAgICBsZXQgZGV0YWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbEZyYW1lLm5hbWUgPSB0aXRsZTtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGRldGFpbEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGRldGFpbEZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGxldCB0aXRsZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGl0bGVUZXh0LmZvbnROYW1lID0gRk9OVF9USVRMRVM7XG4gICAgdGl0bGVUZXh0LmZvbnRTaXplID0gMTc7XG4gICAgdGl0bGVUZXh0LmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICB0aXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIGxldCBib2R5VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBib2R5VGV4dC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGJvZHlUZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgYm9keVRleHQuY2hhcmFjdGVycyA9IGJvZHk7XG4gICAgYm9keVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGRldGFpbEZyYW1lKTtcbn1cbi8vIEFkZHMgYW4gZXhhbXBsZSB0byB5b3VyIGxpc3QgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVQYWdlRXhhbXBsZSh0ZXh0KSB7XG4gICAgbGV0IGxpbmtMYWJlbCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBsaW5rTGFiZWwuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNDtcbiAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGxpbmtMYWJlbCk7XG59XG5mdW5jdGlvbiBjcmVhdGVIb3dUbyh0YXJnZXRzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGhvd1BhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCLinZMgSG93IHRvLi4uXCIpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGhvd1BhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIkhvdyB0by4uLlwiLCBcIlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiVXNlIHRoaXMgbGlicmFyeVwiLCB0YXJnZXRzWzBdKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ29udHJpYnV0ZVwiLCB0YXJnZXRzWzFdKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVVzZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdXNlUGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUubmFtZSA9PSBcIiAgICAgICAgIOKGqiBVc2UgdGhpcyBsaWJyYXJ5XCIpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHVzZVBhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIlVzaW5nIHRoaXMgbGlicmFyeVwiLCBcIlwiLCBcIjEuIEFkZCBzZWN0aW9ucyBoZXJlXFxuXFxuT3B0aW9uYWxseSwgYWRkIG1vcmUgc2VjdGlvbnMgdG8gaGVscCBkZXNjcmliZSB0aGUgdXNhZ2Ugb2YgeW91ciBsaWJyYXJ5LlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiUHVycG9zZVwiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIsIFwiUHVycG9zZVwiLCBcIjIuIERlc2NyaWJlIHRoZSBwdXJwb3NlXFxuXFxuVGhpcyBsaWJyYXJ5IHdhcyBjcmVhdGVkIHRvIGZpbGwgYSBuZWVkLiBEZXNjcmliZSB0aGF0IG5lZWQgYW5kIGxldCBkZXNpZ25lcnMgd2hhdCBkb2VzIChhbmQgZG9lc27igJl0KSBmaXQgd2l0aGluIHRoaXMgbGlicmFyeS5cXG5cXG5Zb3UgY2FuIGFsc28gYWRkIGFuIGltYWdlIHRvIHRoZSByaWdodCB0aGF0IHJlcHJlc2VudHMgeW91ciBsaWJyYXJ5LlwiLCBcIkUuZy4gVGhlIENvbnZlcnNhdGlvbiBLaXQgaXMgYSBGaWdtYSBsaWJyYXJ5IC0gYW5kIHNldCBvZiBhY2NvbXBhbnlpbmcgdG9vbHMgLSB0aGF0IGdpdmUgZGVzaWduZXJzIGV2ZXJ5dGhpbmcgdGhleSBuZWVkIHRvIGRlc2lnbiBhIGNvbnNpc3RlbnQgY29udmVyc2F0aW9uYWwgZXhwZXJpZW5jZSBhY3Jvc3MgYW55IG51bWJlciBvZiBwcm9kdWN0cyBhbmQgcGxhdGZvcm1zLlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIlByaW5jaXBsZXNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9CTE9DS1MsIFwiQ29udHJpYnV0aW5nXCIsIFwiUHJpbmNpcGxlc1wiLCBcIjMuIEFkZCB5b3VyIG93biBwcmluY2lwbGVzXFxuXFxuUHJpbmNpcGxlcyBrZWVwIGZvdW5kYXRpb25hbCBkZWNpc2lvbnMgY29uc2lzdGVudCwgYW5kIHNldCBwcmVjZWRlbnQgZm9yIGhvdyBlYWNoIGNvbXBvbmVudCBpcyB1c2VkIGFuZCBidWlsdC5cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJJbnN0cnVjdGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIkluc3RydWN0aW9uc1wiLCBcIjQuIEFkZCBzdGVwLWJ5LXN0ZXAgaW5zdHJ1Y3Rpb25zXFxuXFxuSW5jbHVkZSBpbnN0cnVjdGlvbnMgb2Ygd2hlcmUgdGhlIGFzc2V0cyBjYW4gYmUgZm91bmQsIGhvdyB0aGV5IGFyZSBvcmdhbml6ZWQsIGhvdyB2YXJpYW50cyBhbmQgb3ZlcnJpZGVzIHdvcmssIGFuZCBhbnkgb3RoZXIgZGV0YWlscyBuZWVkZWQgdG8gdXNlIHRoZSBsaWJyYXJ5LlwiLCBcIjEuIERvIHRoaXNcXG4yLiBEbyB0aGF0XFxuMy4gUHJvZml0XCIpKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGNvbnRyaWJ1dGVQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIENvbnRyaWJ1dGVcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gY29udHJpYnV0ZVBhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIlwiLCBcIjEuIEFkZCBzZWN0aW9ucyBoZXJlXFxuXFxuT3B0aW9uYWxseSwgYWRkIG1vcmUgc2VjdGlvbnMgdG8gaGVscCBkZXNjcmliZSBob3cgb3RoZXIgZGVzaWduZXJzIGNhbiBhZGQgdG8gdGhpcyBsaWJyYXJ5LlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ29udmVudGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9CTE9DS1MsIFwiQ29udHJpYnV0aW5nXCIsIFwiQ29udmVudGlvbnNcIiwgXCIyLiBBZGQgeW91ciBvd24gY29udmVudGlvbnNcXG5cXG5XaGF0IGNvbnZlbnRpb25zIGRvZXMgYSBkZXNpZ25lciBuZWVkIHRvIGJlIGF3YXJlIG9mIHRvIG1ha2UgY29tcG9uZW50cyB0aGF0IHdvcmsgaW4gYSBzaW1pbGFyIHdheSB0byBhbGwgdGhlIHJlc3Q/XCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiSW5zdHJ1Y3Rpb25zXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIiwgXCJJbnN0cnVjdGlvbnNcIiwgXCIzLiBBZGQgc3RlcC1ieS1zdGVwIGluc3RydWN0aW9uc1xcblxcbkluY2x1ZGUgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBzdGFydCBhIGJyYW5jaCwgb3JnYW5pemUgcGFnZXMsIGFuZCByZXF1ZXN0IHJldmlldy5cIiwgXCJDcmVhdGUgYSBCcmFuY2g6IFByZXNzIHRoZSBjaGV2cm9uIG5leHQgdG8gdGhlIGZpbGUgbmFtZSBpbiB0aGUgdG9vbGJhciwgYW5kIHNlbGVjdCBDcmVhdGUgYnJhbmNoLi4uLiBHaXZlIGl0IGEgbmFtZSBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdCDinpU8Q29tcG9uZW50IG5hbWU+LlxcblxcbkR1cGxpY2F0ZSB0aGUg4oCY8J+apyBDb21wb25lbnQgdGVtcGxhdGXigJkgcGFnZSwgYW5kIHJlbmFtZSBpdCBhY2NvcmRpbmcgdG8gdGhlIHBhZ2UgbmFtaW5nIGNvbnZlcm50aW9ucy5cXG5cXG5QZXJmb3JtIHlvdXIgZXhwbG9yYXRpb25zL3dvcmsgb24gdGhpcyBwYWdlLlxcblxcbkNvbXBsZXRlIHRoZSBwcmUtcHVibGlzaCBjaGVja2xpc3QuXFxuXFxuUmVxdWVzdCByZXZpZXcgYnkgc2hhcmluZyB0aGUgYnJhbmNoIHdpdGggPHRlYW0gc2xhY2sgY2hhbm5lbCBvciBwb2ludC1vZi1jb250YWN0PlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkNoZWNrbGlzdFwiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIsIFwiQ2hlY2tsaXN0XCIsIFwiNC4gQnVpbGQgYSBjaGVja2xpc3RcXG5cXG5XaGF0IGNvbnNpZGVyYXRpb25zIGRvIHlvdSBnbyB0aHJvdWdoIGJlZm9yZSBkZWNpZGluZyBpZiBhIGNvbXBvbmVudCBpcyByZWFkeSB0byDigJxnbyBsaXZl4oCdPyBUaGVzZSBtYXkgcmVmZXIgYmFjayB0byB5b3VyIGNvbnZlbnRpb25zLlwiLCBcIkRpZCB5b3UgZG8gdGhpcz9cXG5EaWQgeW91IGRvIHRoYXQ/XFxuV2hhdCBhYm91dCB0aGUgb3RoZXIgdGhpbmc/XCIpKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbi8vVE9ETyBJbXBsZW1lbnQgYW4gaW50ZXJmYWNlIHNvIHRpdGxlIGNhbiBiZSBvbW1pdGVkLlxuZnVuY3Rpb24gY3JlYXRlU2xpZGVGcmFtZShpZCwgc3VwZXJ0aXRsZVRleHQsIHRpdGxlVGV4dCwgaW5zdHJ1Y3Rpb25UZXh0LCBjb250ZW50VGV4dCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBwYWdlQ29udGVudHMgPSBmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGxhc3RBZGRlZCA9IHBhZ2VDb250ZW50c1twYWdlQ29udGVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmcmFtZTEgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZTEubmFtZSA9IHN1cGVydGl0bGVUZXh0O1xuICAgICAgICBmcmFtZTEucmVzaXplKDE5MjAsIDEwODApO1xuICAgICAgICBmcmFtZTEueSA9IGxhc3RBZGRlZCA/IGxhc3RBZGRlZC55ICsgMTE4MCA6IDA7XG4gICAgICAgIGxldCBmb3JtYXQgPSAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhpZCkpLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgIGZyYW1lMS5pbnNlcnRDaGlsZCgwLCBmb3JtYXQpO1xuICAgICAgICBsZXQgc3VwZXJ0aXRsZTtcbiAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9DT05URU5UUzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiVGFibGUgb2YgY29udGVudHNcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9IGZvcm1hdC5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpYmxlID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9CTE9DS1M6XG4gICAgICAgICAgICAgICAgc3VwZXJ0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIlN1cGVydGl0bGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJXaGF0IGVsc2UgZG9lcyBpdCBzb2x2ZT9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICYmIHRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHRpdGxlLCB0aXRsZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVEVNUExBVEVfSU5GTzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiSGVhZGluZ1wiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIlNVUEVSVElUTEVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJIZWFkaW5nXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dCh0aXRsZSwgdGl0bGVUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudCA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIkNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChjb250ZW50LCBjb250ZW50VGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLmxlbmd0aCwgZnJhbWUxKTtcbiAgICAgICAgaWYgKGluc3RydWN0aW9uVGV4dCkge1xuICAgICAgICAgICAgbGV0IHN0aWNraWUgPSB5aWVsZCAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImQ0ZGY4Yjg4NGRiZTdhYzE4MjYxMmI2MWNiMjA5MWI5MjQ0YmRmNjdcIikpLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICBzdGlja2llLnkgPSBmcmFtZTEueTtcbiAgICAgICAgICAgIHN0aWNraWUueCA9IGZyYW1lMS54IC0gNDAgLSAyNzI7XG4gICAgICAgICAgICBsZXQgbm90ZSA9IHN0aWNraWUuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09PSBcIk5vdGVcIik7XG4gICAgICAgICAgICB5aWVsZCBzZXRUZXh0KG5vdGUsIGluc3RydWN0aW9uVGV4dCk7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5pbnNlcnRDaGlsZChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbi5sZW5ndGgsIHN0aWNraWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFtZTE7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRDb250ZW50KHRhYmxlRnJhbWUsIHRpdGxlLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdGFibGUgPSB0YWJsZUZyYW1lLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgc2VjdGlvbnMgPSB0YWJsZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uc1wiKTtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBzZWN0aW9ucy5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS52aXNpYmxlID09IGZhbHNlKTtcbiAgICAgICAgeWllbGQgc2V0VGV4dChzZWN0aW9uLCB0aXRsZSk7XG4gICAgICAgIHNlY3Rpb24uaHlwZXJsaW5rID0geyB0eXBlOiBcIk5PREVcIiwgdmFsdWU6IHRhcmdldC5pZCB9O1xuICAgICAgICBzZWN0aW9uLnZpc2libGUgPSB0cnVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0VGV4dChub2RlLCB0ZXh0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhub2RlLmZvbnROYW1lKTtcbiAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=