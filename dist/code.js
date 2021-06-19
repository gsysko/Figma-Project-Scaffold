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
        let frame = figma.createFrame();
        frame.name = "How to...";
        frame.resize(1920, 1080);
        let tableOfContents = (yield figma.importComponentByKeyAsync(TEMPLATE_CONTENTS)).createInstance();
        frame.insertChild(0, tableOfContents);
        let title = tableOfContents.findChild(node => node.name == "Table of contents");
        yield figma.loadFontAsync(title.fontName);
        title.characters = "How to...";
        let sections = tableOfContents.findChild(node => node.name == "Sections");
        sections.children.forEach(node => node.visible = false);
        let section1 = sections.children[0];
        section1.visible = true;
        yield figma.loadFontAsync(section1.fontName);
        section1.characters = "Use this library";
        section1.hyperlink = { type: "NODE", value: targets[0].id };
        let section2 = sections.children[1];
        section2.visible = true;
        yield figma.loadFontAsync(section2.fontName);
        section2.characters = "Contribute";
        section2.hyperlink = { type: "NODE", value: targets[1].id };
        howPage.insertChild(0, frame);
    });
}
function createUse() {
    return __awaiter(this, void 0, void 0, function* () {
        let usePage = figma.root.children.find(node => node.name == "         ↪ Use this library");
        figma.currentPage = usePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Using this library");
        yield createSlideFrame(TEMPLATE_INFO, "Contributing");
        yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing");
        yield createSlideFrame(TEMPLATE_INFO, "Contributing");
        return frame1;
    });
}
function createContribute() {
    return __awaiter(this, void 0, void 0, function* () {
        let contributePage = figma.root.children.find(node => node.name == "         ↪ Contribute");
        figma.currentPage = contributePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Contributing");
        yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing");
        yield createSlideFrame(TEMPLATE_INFO, "Contributing");
        yield createSlideFrame(TEMPLATE_INFO, "Contributing");
        return frame1;
    });
}
function createSlideFrame(id, titleText) {
    return __awaiter(this, void 0, void 0, function* () {
        debugger;
        let pageContents = figma.currentPage.children;
        let lastAdded = pageContents[pageContents.length - 1];
        let frame1 = figma.createFrame();
        frame1.name = titleText;
        frame1.resize(1920, 1080);
        frame1.y = lastAdded ? lastAdded.y + 1180 : 0;
        let format = (yield figma.importComponentByKeyAsync(id)).createInstance();
        frame1.insertChild(0, format);
        let title = format.findOne(node => node.type == "TEXT" && node.name == "Table of contents");
        if (title) {
            yield figma.loadFontAsync(title.fontName);
            title.characters = titleText;
        }
        figma.currentPage.insertChild(figma.currentPage.children.length, frame1);
        return frame1;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFpRDtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgd2luZG93IHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBwcm9qZWN0IGRldGFpbHMsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSBhIGRvY3VtZW50IHN0cnVjdHVyZSBhbmQgdGh1bWJuYWlsLlxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9ubWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuY29uc3QgVEVNUExBVEVfQ09OVEVOVFMgPSBcImM3NjlhNjI2NTU1NmMwOTFjYzFkOGMwNTc2MmM3MWVjYmY5NzMxNGJcIjtcbmNvbnN0IFRFTVBMQVRFX0JMT0NLUyA9IFwiNTIwNThlNDQ1NGQ4Mjk4NzI0ODJiODU1MWY0OTE4Y2I4Mjg4ODBkNlwiO1xuY29uc3QgVEVNUExBVEVfSU5GTyA9IFwiZDQ1YjMwMDU1MTZmODg3NzI0OTQwYTVhMTA2NjNhZGNmZjlkYzRiNFwiO1xudmFyIGxpc3RGcmFtZTtcbnZhciBkZXRhaWxzRnJhbWU7XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKDQwMCwgNDAwKTtcbmlmIChmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJzdGF0dXNcIikgPT0gXCJydW5cIikge1xuICAgIC8vVE9ETyBldmFsdWF0ZSBpZiB0aGVyZSBpcyBzb21lIHdheSB0byByZWNvbmZpZ3VyZSB0aGUgcGFnZXMgYWZ0ZXIgaW5pdGlhbCBzZXR1cC5cbiAgICBmaWdtYS51aS5yZXNpemUoNDAwLCAxMzYpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwiYWJvdXRcIik7XG59XG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwiY3JlYXRlLXByb2pjdFwiOlxuICAgICAgICAgICAgeWllbGQgY3JlYXRlUHJvamVjdChtc2cucHJvamVjdFRpdGxlLCBtc2cucHJvamVjdFR5cGUsIG1zZy5wcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRSZWxhdW5jaERhdGEoeyBhYm91dDogXCJUaGlzIGRvY3VtZW50IHdhcyBmb3JtYXRlZCB3aXRoIFp0YXJ0XCIgfSk7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJzdGF0dXNcIiwgXCJydW5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmNvbnN0IFBBRERJTkdfSCA9IDQwO1xuY29uc3QgUEFERElOR19WID0gNDA7XG5jb25zdCBTUEFDSU5HID0gMjQ7XG5jb25zdCBGT05UX1RJVExFUyA9IHsgZmFtaWx5OiBcIk1lbmxvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuY29uc3QgRk9OVF9CT0RJRVMgPSB7IGZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHR5cGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gU2V0IHBhZ2UgbmFtZXMgYW5kIHJlbmFtZXMgdGhlIGRlZmF1bHQgXCJQYWdlIDFcIlxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5uYW1lID0gXCLwn5OWIEFib3V0XCI7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkV4cGxvcmF0aW9uXCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfpJQgUHJvYmxlbSBkZWZpbml0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5SsIFJlc2VhcmNoXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn4+dIEV4cGxvcmF0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFNvbHV0aW9uIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTb2x1dGlvbiBCXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OQIERlc2lnbiBTcGVjc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFJlYWR5IGZvciBkZXZcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTaGlwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCflbkgUHJvdG90eXBlc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFByb3RvdHlwZSBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfj50gRXhwbG9yYXRpb25zXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogRXhwbG9yYXRpb24gQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OmIEFyY2hpdmVzXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogQXJjaGl2ZSBBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxpYnJhcnlcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi4p2TIEhvdyB0by4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBDb250cmlidXRlXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IENcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+apyBDb21wb25lbnQgdGVtcGxhdGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTmVlZCB0byBsb2FkIGEgZm9udCBoZXJlIHRvIGdlbmVyYXRlIHRoZSBvdGhlciBwYWdlIGV4YW1wbGVzLlxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKEZPTlRfVElUTEVTKTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhGT05UX0JPRElFUyk7XG4gICAgICAgIC8vQWRkIGEgdGh1bW5haWwgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgICAgIHlpZWxkIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkudGhlbigoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzID0gW3lpZWxkIGNyZWF0ZVVzZSgpLCB5aWVsZCBjcmVhdGVDb250cmlidXRlKCldO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlSG93VG8odGFyZ2V0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuWzBdO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERldGFpbHMoZGVzY3JpcHRpb24pIHtcbiAgICBkZXRhaWxzRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbHNGcmFtZS5uYW1lID0gXCJQcm9qZWN0IGRldGFpbHNcIjtcbiAgICBkZXRhaWxzRnJhbWUueSA9IDM0MDtcbiAgICBkZXRhaWxzRnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgZGV0YWlsc0ZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZGV0YWlsc0ZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBkZXRhaWxzRnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgIGRldGFpbHNGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICBkZXRhaWxzRnJhbWUuaXRlbVNwYWNpbmcgPSBTUEFDSU5HO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGRldGFpbHNGcmFtZSk7XG4gICAgY3JlYXRlRGV0YWlsKFwiRGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24gIT09IFwiXCIgPyBkZXNjcmlwdGlvbiA6IFwiPEVudGVyIGEgZGVzY3JpcHRpb24gaGVyZT5cIik7XG4gICAgY3JlYXRlRGV0YWlsKFwiRXh0ZXJuYWwgTGlua3NcIiwgXCI8QWRkIGxpbmtzIGhlcmU+IOKGklxcbjxFLmcuIENvbmZsdWVuY2U+IOKGklxcbjxFLmcuIEdvb2dsZSBEb2M+IOKGklwiKTtcbiAgICBjcmVhdGVEZXRhaWwoXCJTbGFjayBDaGFubmVsc1wiLCBcIiM8Y2hhbm5lbCBuYW1lIGhlcmU+XFxuIzxjaGFubmVsIG5hbWUgaGVyZT5cIik7XG4gICAgY3JlYXRlRGV0YWlsKFwiUG9pbnRzIG9mIENvbnRhY3RcIiwgXCJEZXNpZ24gLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuUHJvZHVjdCAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cXG5FbmdpbmVlcmluZyAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cIik7XG4gICAgLy8gRnJhbWUgZm9yIHdyYXBwaW5nIHRoZSBsaXN0IG9mIHBhZ2UgZXhhbXBsZXMuXG4gICAgbGlzdEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBsaXN0RnJhbWUubmFtZSA9IFwiQWRkIG90aGVyIHBhZ2VzLCBhcyBuZWVkZWQuLi5cIjtcbiAgICBsaXN0RnJhbWUueSA9IGRldGFpbHNGcmFtZS55ICsgZGV0YWlsc0ZyYW1lLmhlaWdodCArIFNQQUNJTkc7XG4gICAgbGlzdEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDEpO1xuICAgIGxpc3RGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGxpc3RGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgbGlzdEZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IFBBRERJTkdfVjtcbiAgICBsaXN0RnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSBQQURESU5HX0g7XG4gICAgbGlzdEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChsaXN0RnJhbWUpO1xuICAgIC8vIE5vdCBhbGwgcHJvamVjdHMgbmVlZCBhIHByb3RvdHlwZSwgc2hpcHBlZCBpdC9yZWxlYXNlZCwgb3IgcmVzZWFyY2ggcGFnZS5cbiAgICAvLyBIb3dldmVyIGluIG9yZGVyIHRvIG1ha2UgYWRkaW5nIG9uZSBvZiB0aGVzZSBwYWdlcyBlYXNpbHksIHdlIGFkZCBzb21lXG4gICAgLy8gdGV4dCB0byBvdXIgc2NyYXRjaCBwYWdlIHNvIHdlIGNhbiBjb3B5L3Bhc3RlIHRoZW0gd2l0aCB0aGUgcHJvcGVyIGVtb2ppLlxuICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpO1xuICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4pqZ77iPIENvbXBvbmVudHNcIik7XG4gICAgY3JlYXRlUGFnZUV4YW1wbGUoXCLwn5GAIFJlYWR5IGZvciBSZXZpZXdcIik7XG59XG4vLyBUaGlzIGZ1bmN0aW9uIGFkZHMgYSB0aHVtYm5haWwgdG8geW91ciBmaXJzdCBwYWdlLlxuZnVuY3Rpb24gY3JlYXRlVGh1bWJuYWlsKHRpdGxlLCB0eXBlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcImFjMGIxNThjMzdkZTNmYThiYTk0ZDJiMzgwMTkxM2FlYTI2MmZmY2JcIikuY2F0Y2gocmVhc29uID0+IHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkFubm90YXRpb24gS2l0IGxpYnJhcnkgaXMgcmVxdWlyZWQgZm9yIHRodW1ibmFpbHMuXCIpO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfSkudGhlbigoY29tcG9uZW50KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgdGh1bWJuYWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgdGh1bWJuYWlsRnJhbWUubmFtZSA9IFwiVGh1bWJuYWlsIC0gUmlnaHQgY2xpY2sgdG8gXFxcIlNldCBhcyB0aHVtYm5haWxcXFwiXCI7XG4gICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoNjQwLCAzMjApO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBjb21wb25lbnQuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHRodW1ibmFpbEZyYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSB0aHVtYm5haWwuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkZpbGUgTmFtZVwiKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGxhYmVsLmZvbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jaGFyYWN0ZXJzID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jaGFyYWN0ZXJzID0gXCJFbnRlciB0aXRsZSBoZXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgYmFkZ2UgPSB0aHVtYm5haWwuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkJhZGdlXCIgJiYgbm9kZS50eXBlID09IFwiSU5TVEFOQ0VcIik7XG4gICAgICAgICAgICAgICAgbGV0IGJhZGdlVGV4dCA9IGJhZGdlLmZpbmRPbmUobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJCYWRnZVwiICYmIG5vZGUudHlwZSA9PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhiYWRnZVRleHQuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZVRleHQuY2hhcmFjdGVycyA9IHR5cGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJFeHBsb3JhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlLmZpbGxTdHlsZUlkID0gKHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcIjBlZTFjNDc5ZDNmMjFkNDc1MjI3YTQ1MjBjYjQ4MWJkOThhZjVhZjVcIikpLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09IFwiTGlicmFyeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlLmZpbGxTdHlsZUlkID0gKHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcImEzYWE4YzY0ZDEwYTBiMWVlOTJiM2RjNmU1ZjI3OGFjOTc4YzU2Y2ZcIikpLmlkO1xuICAgICAgICAgICAgICAgICAgICBiYWRnZVRleHQuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiNDkyYzk2NDVkNjdmMDI2ZGQzN2MzMDFjNjE1Nzc1MDRiZDdkOGFkN1wiKSkuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyBBZGRzIGEgbmV3IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKHRpdGxlKSB7XG4gICAgbGV0IHBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgcGFnZS5uYW1lID0gdGl0bGU7XG59XG4vLyBBZGRzIGEgc2VjdGlvbiB0byB5b3VyIGRldGFpbHMgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWwodGl0bGUsIGJvZHkpIHtcbiAgICBsZXQgZGV0YWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbEZyYW1lLm5hbWUgPSB0aXRsZTtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGRldGFpbEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGRldGFpbEZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGxldCB0aXRsZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGl0bGVUZXh0LmZvbnROYW1lID0gRk9OVF9USVRMRVM7XG4gICAgdGl0bGVUZXh0LmZvbnRTaXplID0gMTc7XG4gICAgdGl0bGVUZXh0LmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICB0aXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIGxldCBib2R5VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBib2R5VGV4dC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGJvZHlUZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgYm9keVRleHQuY2hhcmFjdGVycyA9IGJvZHk7XG4gICAgYm9keVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGRldGFpbEZyYW1lKTtcbn1cbi8vIEFkZHMgYW4gZXhhbXBsZSB0byB5b3VyIGxpc3QgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVQYWdlRXhhbXBsZSh0ZXh0KSB7XG4gICAgbGV0IGxpbmtMYWJlbCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBsaW5rTGFiZWwuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNDtcbiAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGxpbmtMYWJlbCk7XG59XG5mdW5jdGlvbiBjcmVhdGVIb3dUbyh0YXJnZXRzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGhvd1BhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCLinZMgSG93IHRvLi4uXCIpO1xuICAgICAgICBsZXQgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5uYW1lID0gXCJIb3cgdG8uLi5cIjtcbiAgICAgICAgZnJhbWUucmVzaXplKDE5MjAsIDEwODApO1xuICAgICAgICBsZXQgdGFibGVPZkNvbnRlbnRzID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoVEVNUExBVEVfQ09OVEVOVFMpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICBmcmFtZS5pbnNlcnRDaGlsZCgwLCB0YWJsZU9mQ29udGVudHMpO1xuICAgICAgICBsZXQgdGl0bGUgPSB0YWJsZU9mQ29udGVudHMuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiVGFibGUgb2YgY29udGVudHNcIik7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmModGl0bGUuZm9udE5hbWUpO1xuICAgICAgICB0aXRsZS5jaGFyYWN0ZXJzID0gXCJIb3cgdG8uLi5cIjtcbiAgICAgICAgbGV0IHNlY3Rpb25zID0gdGFibGVPZkNvbnRlbnRzLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb25zXCIpO1xuICAgICAgICBzZWN0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpYmxlID0gZmFsc2UpO1xuICAgICAgICBsZXQgc2VjdGlvbjEgPSBzZWN0aW9ucy5jaGlsZHJlblswXTtcbiAgICAgICAgc2VjdGlvbjEudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoc2VjdGlvbjEuZm9udE5hbWUpO1xuICAgICAgICBzZWN0aW9uMS5jaGFyYWN0ZXJzID0gXCJVc2UgdGhpcyBsaWJyYXJ5XCI7XG4gICAgICAgIHNlY3Rpb24xLmh5cGVybGluayA9IHsgdHlwZTogXCJOT0RFXCIsIHZhbHVlOiB0YXJnZXRzWzBdLmlkIH07XG4gICAgICAgIGxldCBzZWN0aW9uMiA9IHNlY3Rpb25zLmNoaWxkcmVuWzFdO1xuICAgICAgICBzZWN0aW9uMi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhzZWN0aW9uMi5mb250TmFtZSk7XG4gICAgICAgIHNlY3Rpb24yLmNoYXJhY3RlcnMgPSBcIkNvbnRyaWJ1dGVcIjtcbiAgICAgICAgc2VjdGlvbjIuaHlwZXJsaW5rID0geyB0eXBlOiBcIk5PREVcIiwgdmFsdWU6IHRhcmdldHNbMV0uaWQgfTtcbiAgICAgICAgaG93UGFnZS5pbnNlcnRDaGlsZCgwLCBmcmFtZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVVc2UoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHVzZVBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCIgICAgICAgICDihqogVXNlIHRoaXMgbGlicmFyeVwiKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSB1c2VQYWdlO1xuICAgICAgICBsZXQgZnJhbWUxID0geWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9DT05URU5UUywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIik7XG4gICAgICAgIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQkxPQ0tTLCBcIkNvbnRyaWJ1dGluZ1wiKTtcbiAgICAgICAgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIkNvbnRyaWJ1dGluZ1wiKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGNvbnRyaWJ1dGVQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIENvbnRyaWJ1dGVcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gY29udHJpYnV0ZVBhZ2U7XG4gICAgICAgIGxldCBmcmFtZTEgPSB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0NPTlRFTlRTLCBcIkNvbnRyaWJ1dGluZ1wiKTtcbiAgICAgICAgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9CTE9DS1MsIFwiQ29udHJpYnV0aW5nXCIpO1xuICAgICAgICB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIpO1xuICAgICAgICB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIpO1xuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU2xpZGVGcmFtZShpZCwgdGl0bGVUZXh0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGxldCBwYWdlQ29udGVudHMgPSBmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGxhc3RBZGRlZCA9IHBhZ2VDb250ZW50c1twYWdlQ29udGVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmcmFtZTEgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZTEubmFtZSA9IHRpdGxlVGV4dDtcbiAgICAgICAgZnJhbWUxLnJlc2l6ZSgxOTIwLCAxMDgwKTtcbiAgICAgICAgZnJhbWUxLnkgPSBsYXN0QWRkZWQgPyBsYXN0QWRkZWQueSArIDExODAgOiAwO1xuICAgICAgICBsZXQgZm9ybWF0ID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoaWQpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICBmcmFtZTEuaW5zZXJ0Q2hpbGQoMCwgZm9ybWF0KTtcbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiVGFibGUgb2YgY29udGVudHNcIik7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh0aXRsZS5mb250TmFtZSk7XG4gICAgICAgICAgICB0aXRsZS5jaGFyYWN0ZXJzID0gdGl0bGVUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLmxlbmd0aCwgZnJhbWUxKTtcbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=