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
        yield addContent(frame1, "Purpose", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Purpose", "2. Describe the purpose\n\nThis library was created to fill a need. Describe that need and let designers what does (and doesn’t) fit within this library.\n\nYou can also add an image to the right that represents your library."));
        yield addContent(frame1, "Principles", yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing", "Principles", "3. Add your own principles\n\nPrinciples keep foundational decisions consistent, and set precedent for how each component is used and built."));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "4. Add step-by-step instructions\n\nInclude instructions of where the assets can be found, how they are organized, how variants and overrides work, and any other details needed to use the library."));
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
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "3. Add step-by-step instructions\n\nInclude instructions on how to start a branch, organize pages, and request review."));
        yield addContent(frame1, "Checklist", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Checklist", "4. Build a checklist\n\nWhat considerations do you go through before deciding if a component is ready to “go live”? These may refer back to your conventions."));
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        return frame1;
    });
}
//TODO Implement an interface so title can be ommited.
function createSlideFrame(id, supertitleText, titleText, instructionText) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFpRDtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgd2luZG93IHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBwcm9qZWN0IGRldGFpbHMsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSBhIGRvY3VtZW50IHN0cnVjdHVyZSBhbmQgdGh1bWJuYWlsLlxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9ubWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuY29uc3QgVEVNUExBVEVfQ09OVEVOVFMgPSBcImM3NjlhNjI2NTU1NmMwOTFjYzFkOGMwNTc2MmM3MWVjYmY5NzMxNGJcIjtcbmNvbnN0IFRFTVBMQVRFX0JMT0NLUyA9IFwiNTIwNThlNDQ1NGQ4Mjk4NzI0ODJiODU1MWY0OTE4Y2I4Mjg4ODBkNlwiO1xuY29uc3QgVEVNUExBVEVfSU5GTyA9IFwiZDQ1YjMwMDU1MTZmODg3NzI0OTQwYTVhMTA2NjNhZGNmZjlkYzRiNFwiO1xudmFyIGxpc3RGcmFtZTtcbnZhciBkZXRhaWxzRnJhbWU7XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKDQwMCwgNDAwKTtcbmlmIChmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJzdGF0dXNcIikgPT0gXCJydW5cIikge1xuICAgIC8vVE9ETyBldmFsdWF0ZSBpZiB0aGVyZSBpcyBzb21lIHdheSB0byByZWNvbmZpZ3VyZSB0aGUgcGFnZXMgYWZ0ZXIgaW5pdGlhbCBzZXR1cC5cbiAgICBmaWdtYS51aS5yZXNpemUoNDAwLCAxMzYpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwiYWJvdXRcIik7XG59XG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwiY3JlYXRlLXByb2pjdFwiOlxuICAgICAgICAgICAgeWllbGQgY3JlYXRlUHJvamVjdChtc2cucHJvamVjdFRpdGxlLCBtc2cucHJvamVjdFR5cGUsIG1zZy5wcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRSZWxhdW5jaERhdGEoeyBhYm91dDogXCJUaGlzIGRvY3VtZW50IHdhcyBmb3JtYXRlZCB3aXRoIFp0YXJ0XCIgfSk7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJzdGF0dXNcIiwgXCJydW5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmNvbnN0IFBBRERJTkdfSCA9IDQwO1xuY29uc3QgUEFERElOR19WID0gNDA7XG5jb25zdCBTUEFDSU5HID0gMjQ7XG5jb25zdCBGT05UX1RJVExFUyA9IHsgZmFtaWx5OiBcIk1lbmxvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuY29uc3QgRk9OVF9CT0RJRVMgPSB7IGZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHR5cGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gU2V0IHBhZ2UgbmFtZXMgYW5kIHJlbmFtZXMgdGhlIGRlZmF1bHQgXCJQYWdlIDFcIlxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5uYW1lID0gXCLwn5OWIEFib3V0XCI7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkV4cGxvcmF0aW9uXCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfpJQgUHJvYmxlbSBkZWZpbml0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5SsIFJlc2VhcmNoXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn4+dIEV4cGxvcmF0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFNvbHV0aW9uIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTb2x1dGlvbiBCXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OQIERlc2lnbiBTcGVjc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFJlYWR5IGZvciBkZXZcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTaGlwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCflbkgUHJvdG90eXBlc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFByb3RvdHlwZSBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfj50gRXhwbG9yYXRpb25zXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogRXhwbG9yYXRpb24gQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OmIEFyY2hpdmVzXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogQXJjaGl2ZSBBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxpYnJhcnlcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi4p2TIEhvdyB0by4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBDb250cmlidXRlXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IENcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+apyBDb21wb25lbnQgdGVtcGxhdGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTmVlZCB0byBsb2FkIGEgZm9udCBoZXJlIHRvIGdlbmVyYXRlIHRoZSBvdGhlciBwYWdlIGV4YW1wbGVzLlxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKEZPTlRfVElUTEVTKTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhGT05UX0JPRElFUyk7XG4gICAgICAgIC8vQWRkIGEgdGh1bW5haWwgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgICAgIHlpZWxkIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkudGhlbigoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzID0gW3lpZWxkIGNyZWF0ZVVzZSgpLCB5aWVsZCBjcmVhdGVDb250cmlidXRlKCldO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlSG93VG8odGFyZ2V0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuWzBdO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERldGFpbHMoZGVzY3JpcHRpb24pIHtcbiAgICBkZXRhaWxzRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbHNGcmFtZS5uYW1lID0gXCJQcm9qZWN0IGRldGFpbHNcIjtcbiAgICBkZXRhaWxzRnJhbWUueSA9IDM0MDtcbiAgICBkZXRhaWxzRnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgZGV0YWlsc0ZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZGV0YWlsc0ZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBkZXRhaWxzRnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgIGRldGFpbHNGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICBkZXRhaWxzRnJhbWUuaXRlbVNwYWNpbmcgPSBTUEFDSU5HO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGRldGFpbHNGcmFtZSk7XG4gICAgY3JlYXRlRGV0YWlsKFwiRGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24gIT09IFwiXCIgPyBkZXNjcmlwdGlvbiA6IFwiPEVudGVyIGEgZGVzY3JpcHRpb24gaGVyZT5cIik7XG4gICAgY3JlYXRlRGV0YWlsKFwiRXh0ZXJuYWwgTGlua3NcIiwgXCI8QWRkIGxpbmtzIGhlcmU+IOKGklxcbjxFLmcuIENvbmZsdWVuY2U+IOKGklxcbjxFLmcuIEdvb2dsZSBEb2M+IOKGklwiKTtcbiAgICBjcmVhdGVEZXRhaWwoXCJTbGFjayBDaGFubmVsc1wiLCBcIiM8Y2hhbm5lbCBuYW1lIGhlcmU+XFxuIzxjaGFubmVsIG5hbWUgaGVyZT5cIik7XG4gICAgY3JlYXRlRGV0YWlsKFwiUG9pbnRzIG9mIENvbnRhY3RcIiwgXCJEZXNpZ24gLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuUHJvZHVjdCAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cXG5FbmdpbmVlcmluZyAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cIik7XG4gICAgLy8gRnJhbWUgZm9yIHdyYXBwaW5nIHRoZSBsaXN0IG9mIHBhZ2UgZXhhbXBsZXMuXG4gICAgbGlzdEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBsaXN0RnJhbWUubmFtZSA9IFwiQWRkIG90aGVyIHBhZ2VzLCBhcyBuZWVkZWQuLi5cIjtcbiAgICBsaXN0RnJhbWUueSA9IGRldGFpbHNGcmFtZS55ICsgZGV0YWlsc0ZyYW1lLmhlaWdodCArIFNQQUNJTkc7XG4gICAgbGlzdEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDEpO1xuICAgIGxpc3RGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGxpc3RGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgbGlzdEZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IFBBRERJTkdfVjtcbiAgICBsaXN0RnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSBQQURESU5HX0g7XG4gICAgbGlzdEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChsaXN0RnJhbWUpO1xuICAgIC8vIE5vdCBhbGwgcHJvamVjdHMgbmVlZCBhIHByb3RvdHlwZSwgc2hpcHBlZCBpdC9yZWxlYXNlZCwgb3IgcmVzZWFyY2ggcGFnZS5cbiAgICAvLyBIb3dldmVyIGluIG9yZGVyIHRvIG1ha2UgYWRkaW5nIG9uZSBvZiB0aGVzZSBwYWdlcyBlYXNpbHksIHdlIGFkZCBzb21lXG4gICAgLy8gdGV4dCB0byBvdXIgc2NyYXRjaCBwYWdlIHNvIHdlIGNhbiBjb3B5L3Bhc3RlIHRoZW0gd2l0aCB0aGUgcHJvcGVyIGVtb2ppLlxuICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpO1xuICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4pqZ77iPIENvbXBvbmVudHNcIik7XG4gICAgY3JlYXRlUGFnZUV4YW1wbGUoXCLwn5GAIFJlYWR5IGZvciBSZXZpZXdcIik7XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbn1cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyBhIHRodW1ibmFpbCB0byB5b3VyIGZpcnN0IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVUaHVtYm5haWwodGl0bGUsIHR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiYWMwYjE1OGMzN2RlM2ZhOGJhOTRkMmIzODAxOTEzYWVhMjYyZmZjYlwiKS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiQW5ub3RhdGlvbiBLaXQgbGlicmFyeSBpcyByZXF1aXJlZCBmb3IgdGh1bWJuYWlscy5cIik7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9KS50aGVuKChjb21wb25lbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB0aHVtYm5haWxGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5uYW1lID0gXCJUaHVtYm5haWwgLSBSaWdodCBjbGljayB0byBcXFwiU2V0IGFzIHRodW1ibmFpbFxcXCJcIjtcbiAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDMyMCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGNvbXBvbmVudC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQodGh1bWJuYWlsRnJhbWUpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiRmlsZSBOYW1lXCIpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMobGFiZWwuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSBcIkVudGVyIHRpdGxlIGhlcmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJJTlNUQU5DRVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYmFkZ2VUZXh0ID0gYmFkZ2UuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkJhZGdlXCIgJiYgbm9kZS50eXBlID09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGJhZGdlVGV4dC5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5jaGFyYWN0ZXJzID0gdHlwZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBcIkV4cGxvcmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2UuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiMGVlMWM0NzlkM2YyMWQ0NzUyMjdhNDUyMGNiNDgxYmQ5OGFmNWFmNVwiKSkuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2UuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiYTNhYThjNjRkMTBhMGIxZWU5MmIzZGM2ZTVmMjc4YWM5NzhjNTZjZlwiKSkuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCI0OTJjOTY0NWQ2N2YwMjZkZDM3YzMwMWM2MTU3NzUwNGJkN2Q4YWQ3XCIpKS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIEFkZHMgYSBuZXcgcGFnZS5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UodGl0bGUpIHtcbiAgICBsZXQgcGFnZSA9IGZpZ21hLmNyZWF0ZVBhZ2UoKTtcbiAgICBwYWdlLm5hbWUgPSB0aXRsZTtcbn1cbi8vIEFkZHMgYSBzZWN0aW9uIHRvIHlvdXIgZGV0YWlscyBmcmFtZS5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbCh0aXRsZSwgYm9keSkge1xuICAgIGxldCBkZXRhaWxGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZGV0YWlsRnJhbWUubmFtZSA9IHRpdGxlO1xuICAgIGRldGFpbEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZGV0YWlsRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZGV0YWlsRnJhbWUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5pdGVtU3BhY2luZyA9IDg7XG4gICAgbGV0IHRpdGxlVGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICB0aXRsZVRleHQuZm9udE5hbWUgPSBGT05UX1RJVExFUztcbiAgICB0aXRsZVRleHQuZm9udFNpemUgPSAxNztcbiAgICB0aXRsZVRleHQuY2hhcmFjdGVycyA9IHRpdGxlO1xuICAgIHRpdGxlVGV4dC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGRldGFpbEZyYW1lLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgbGV0IGJvZHlUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIGJvZHlUZXh0LmZvbnROYW1lID0gRk9OVF9CT0RJRVM7XG4gICAgYm9keVRleHQuZm9udFNpemUgPSAxNDtcbiAgICBib2R5VGV4dC5jaGFyYWN0ZXJzID0gYm9keTtcbiAgICBib2R5VGV4dC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGRldGFpbEZyYW1lLmFwcGVuZENoaWxkKGJvZHlUZXh0KTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQoZGV0YWlsRnJhbWUpO1xufVxuLy8gQWRkcyBhbiBleGFtcGxlIHRvIHlvdXIgbGlzdCBmcmFtZS5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VFeGFtcGxlKHRleHQpIHtcbiAgICBsZXQgbGlua0xhYmVsID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIGxpbmtMYWJlbC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGxpbmtMYWJlbC5mb250U2l6ZSA9IDE0O1xuICAgIGxpbmtMYWJlbC5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICBsaXN0RnJhbWUuYXBwZW5kQ2hpbGQobGlua0xhYmVsKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhvd1RvKHRhcmdldHMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgaG93UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUubmFtZSA9PSBcIuKdkyBIb3cgdG8uLi5cIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gaG93UGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiSG93IHRvLi4uXCIsIFwiXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJVc2UgdGhpcyBsaWJyYXJ5XCIsIHRhcmdldHNbMF0pO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDb250cmlidXRlXCIsIHRhcmdldHNbMV0pO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVXNlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB1c2VQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gdXNlUGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiXCIsIFwiMS4gQWRkIHNlY3Rpb25zIGhlcmVcXG5cXG5PcHRpb25hbGx5LCBhZGQgbW9yZSBzZWN0aW9ucyB0byBoZWxwIGRlc2NyaWJlIHRoZSB1c2FnZSBvZiB5b3VyIGxpYnJhcnkuXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJQdXJwb3NlXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIiwgXCJQdXJwb3NlXCIsIFwiMi4gRGVzY3JpYmUgdGhlIHB1cnBvc2VcXG5cXG5UaGlzIGxpYnJhcnkgd2FzIGNyZWF0ZWQgdG8gZmlsbCBhIG5lZWQuIERlc2NyaWJlIHRoYXQgbmVlZCBhbmQgbGV0IGRlc2lnbmVycyB3aGF0IGRvZXMgKGFuZCBkb2VzbuKAmXQpIGZpdCB3aXRoaW4gdGhpcyBsaWJyYXJ5LlxcblxcbllvdSBjYW4gYWxzbyBhZGQgYW4gaW1hZ2UgdG8gdGhlIHJpZ2h0IHRoYXQgcmVwcmVzZW50cyB5b3VyIGxpYnJhcnkuXCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiUHJpbmNpcGxlc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0JMT0NLUywgXCJDb250cmlidXRpbmdcIiwgXCJQcmluY2lwbGVzXCIsIFwiMy4gQWRkIHlvdXIgb3duIHByaW5jaXBsZXNcXG5cXG5QcmluY2lwbGVzIGtlZXAgZm91bmRhdGlvbmFsIGRlY2lzaW9ucyBjb25zaXN0ZW50LCBhbmQgc2V0IHByZWNlZGVudCBmb3IgaG93IGVhY2ggY29tcG9uZW50IGlzIHVzZWQgYW5kIGJ1aWx0LlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkluc3RydWN0aW9uc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIsIFwiSW5zdHJ1Y3Rpb25zXCIsIFwiNC4gQWRkIHN0ZXAtYnktc3RlcCBpbnN0cnVjdGlvbnNcXG5cXG5JbmNsdWRlIGluc3RydWN0aW9ucyBvZiB3aGVyZSB0aGUgYXNzZXRzIGNhbiBiZSBmb3VuZCwgaG93IHRoZXkgYXJlIG9yZ2FuaXplZCwgaG93IHZhcmlhbnRzIGFuZCBvdmVycmlkZXMgd29yaywgYW5kIGFueSBvdGhlciBkZXRhaWxzIG5lZWRlZCB0byB1c2UgdGhlIGxpYnJhcnkuXCIpKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGNvbnRyaWJ1dGVQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIENvbnRyaWJ1dGVcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gY29udHJpYnV0ZVBhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIlwiLCBcIjEuIEFkZCBzZWN0aW9ucyBoZXJlXFxuXFxuT3B0aW9uYWxseSwgYWRkIG1vcmUgc2VjdGlvbnMgdG8gaGVscCBkZXNjcmliZSBob3cgb3RoZXIgZGVzaWduZXJzIGNhbiBhZGQgdG8gdGhpcyBsaWJyYXJ5LlwiKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ29udmVudGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9CTE9DS1MsIFwiQ29udHJpYnV0aW5nXCIsIFwiQ29udmVudGlvbnNcIiwgXCIyLiBBZGQgeW91ciBvd24gY29udmVudGlvbnNcXG5cXG5XaGF0IGNvbnZlbnRpb25zIGRvZXMgYSBkZXNpZ25lciBuZWVkIHRvIGJlIGF3YXJlIG9mIHRvIG1ha2UgY29tcG9uZW50cyB0aGF0IHdvcmsgaW4gYSBzaW1pbGFyIHdheSB0byBhbGwgdGhlIHJlc3Q/XCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiSW5zdHJ1Y3Rpb25zXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIiwgXCJJbnN0cnVjdGlvbnNcIiwgXCIzLiBBZGQgc3RlcC1ieS1zdGVwIGluc3RydWN0aW9uc1xcblxcbkluY2x1ZGUgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBzdGFydCBhIGJyYW5jaCwgb3JnYW5pemUgcGFnZXMsIGFuZCByZXF1ZXN0IHJldmlldy5cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDaGVja2xpc3RcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIkNoZWNrbGlzdFwiLCBcIjQuIEJ1aWxkIGEgY2hlY2tsaXN0XFxuXFxuV2hhdCBjb25zaWRlcmF0aW9ucyBkbyB5b3UgZ28gdGhyb3VnaCBiZWZvcmUgZGVjaWRpbmcgaWYgYSBjb21wb25lbnQgaXMgcmVhZHkgdG8g4oCcZ28gbGl2ZeKAnT8gVGhlc2UgbWF5IHJlZmVyIGJhY2sgdG8geW91ciBjb252ZW50aW9ucy5cIikpO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuLy9UT0RPIEltcGxlbWVudCBhbiBpbnRlcmZhY2Ugc28gdGl0bGUgY2FuIGJlIG9tbWl0ZWQuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZUZyYW1lKGlkLCBzdXBlcnRpdGxlVGV4dCwgdGl0bGVUZXh0LCBpbnN0cnVjdGlvblRleHQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgcGFnZUNvbnRlbnRzID0gZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW47XG4gICAgICAgIGxldCBsYXN0QWRkZWQgPSBwYWdlQ29udGVudHNbcGFnZUNvbnRlbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgZnJhbWUxID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUxLm5hbWUgPSBzdXBlcnRpdGxlVGV4dDtcbiAgICAgICAgZnJhbWUxLnJlc2l6ZSgxOTIwLCAxMDgwKTtcbiAgICAgICAgZnJhbWUxLnkgPSBsYXN0QWRkZWQgPyBsYXN0QWRkZWQueSArIDExODAgOiAwO1xuICAgICAgICBsZXQgZm9ybWF0ID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoaWQpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICBmcmFtZTEuaW5zZXJ0Q2hpbGQoMCwgZm9ybWF0KTtcbiAgICAgICAgbGV0IHN1cGVydGl0bGU7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9DT05URU5UUzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiVGFibGUgb2YgY29udGVudHNcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9IGZvcm1hdC5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpYmxlID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9CTE9DS1M6XG4gICAgICAgICAgICAgICAgc3VwZXJ0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIlN1cGVydGl0bGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJXaGF0IGVsc2UgZG9lcyBpdCBzb2x2ZT9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICYmIHRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHRpdGxlLCB0aXRsZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVEVNUExBVEVfSU5GTzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiSGVhZGluZ1wiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIlNVUEVSVElUTEVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dChzdXBlcnRpdGxlLCBzdXBlcnRpdGxlVGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJIZWFkaW5nXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dCh0aXRsZSwgdGl0bGVUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuaW5zZXJ0Q2hpbGQoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4ubGVuZ3RoLCBmcmFtZTEpO1xuICAgICAgICBpZiAoaW5zdHJ1Y3Rpb25UZXh0KSB7XG4gICAgICAgICAgICBsZXQgc3RpY2tpZSA9IHlpZWxkICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiZDRkZjhiODg0ZGJlN2FjMTgyNjEyYjYxY2IyMDkxYjkyNDRiZGY2N1wiKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHN0aWNraWUueSA9IGZyYW1lMS55O1xuICAgICAgICAgICAgc3RpY2tpZS54ID0gZnJhbWUxLnggLSA0MCAtIDI3MjtcbiAgICAgICAgICAgIGxldCBub3RlID0gc3RpY2tpZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT09IFwiTm90ZVwiKTtcbiAgICAgICAgICAgIHlpZWxkIHNldFRleHQobm90ZSwgaW5zdHJ1Y3Rpb25UZXh0KTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLmxlbmd0aCwgc3RpY2tpZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRlbnQodGFibGVGcmFtZSwgdGl0bGUsIHRhcmdldCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IHRhYmxlRnJhbWUuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCBzZWN0aW9ucyA9IHRhYmxlLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb25zXCIpO1xuICAgICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zLmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLnZpc2libGUgPT0gZmFsc2UpO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KHNlY3Rpb24sIHRpdGxlKTtcbiAgICAgICAgc2VjdGlvbi5oeXBlcmxpbmsgPSB7IHR5cGU6IFwiTk9ERVwiLCB2YWx1ZTogdGFyZ2V0LmlkIH07XG4gICAgICAgIHNlY3Rpb24udmlzaWJsZSA9IHRydWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRUZXh0KG5vZGUsIHRleHQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSB0ZXh0O1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==