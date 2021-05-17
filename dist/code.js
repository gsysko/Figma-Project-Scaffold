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
var listFrame;
var detailsFrame;
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(400, 400);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    switch (msg.type) {
        case "create-projct":
            yield createProject(msg.projectTitle, msg.projectType, msg.projectDescription);
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
        createPage("🤔 Problem Space");
        createPage("💡 Solution Space");
        createPage("📐 Design Specs");
        createPage("         - Backlog");
        createPage("         - In development");
        createPage("         - Shipped");
        createPage("🔬 Research");
        createPage("🕹 Prototype");
        createPage("📦 Archive");
        // Need to load a font here to generate the other page examples.
        yield figma.loadFontAsync(FONT_TITLES);
        yield figma.loadFontAsync(FONT_BODIES);
        //Add a thumnail to the first page.
        yield createThumbnail(title, type).then(() => {
            // Frame for project details.
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
            createDetail("External Links", "<E.g. Confluence> →\n<E.g. Google Doc> →\n<Add links here> →");
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
            figma.closePlugin();
        });
    });
}
// This function adds a thumbnail to your first page.
function createThumbnail(title, type) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(reason => {
            figma.notify("Annotation Kit library is required for thumbnails.");
            figma.closePlugin();
        }).then(component => {
            let thumbnailFrame = figma.createFrame();
            thumbnailFrame.name = "Thumbnail - Right click to \"Set as thumbnail\"";
            thumbnailFrame.resizeWithoutConstraints(640, 320);
            if (component) {
                let thumbnail = component.createInstance();
                thumbnailFrame.appendChild(thumbnail);
                figma.currentPage.appendChild(thumbnailFrame);
                let label = thumbnail.findOne(node => node.name == "File Name");
                figma.loadFontAsync(label.fontName).then(() => {
                    if (title !== "") {
                        label.characters = title;
                    }
                    else {
                        label.characters = "Enter title here";
                    }
                });
                let badge = thumbnail.findOne(node => node.name == "Badge" && node.type == "TEXT");
                figma.loadFontAsync(badge.fontName).then(() => {
                    badge.characters = type;
                });
            }
        });
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIHByb2plY3QgZGV0YWlscywgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIGEgZG9jdW1lbnQgc3RydWN0dXJlIGFuZCB0aHVtYm5haWwuXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG52YXIgbGlzdEZyYW1lO1xudmFyIGRldGFpbHNGcmFtZTtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUoNDAwLCA0MDApO1xuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImNyZWF0ZS1wcm9qY3RcIjpcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVByb2plY3QobXNnLnByb2plY3RUaXRsZSwgbXNnLnByb2plY3RUeXBlLCBtc2cucHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuY29uc3QgUEFERElOR19IID0gNDA7XG5jb25zdCBQQURESU5HX1YgPSA0MDtcbmNvbnN0IFNQQUNJTkcgPSAyNDtcbmNvbnN0IEZPTlRfVElUTEVTID0geyBmYW1pbHk6IFwiTWVubG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG5jb25zdCBGT05UX0JPRElFUyA9IHsgZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdHlwZSwgZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBTZXQgcGFnZSBuYW1lcyBhbmQgcmVuYW1lcyB0aGUgZGVmYXVsdCBcIlBhZ2UgMVwiXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUgPSBcIvCfk5YgQWJvdXRcIjtcbiAgICAgICAgY3JlYXRlUGFnZShcIvCfpJQgUHJvYmxlbSBTcGFjZVwiKTtcbiAgICAgICAgY3JlYXRlUGFnZShcIvCfkqEgU29sdXRpb24gU3BhY2VcIik7XG4gICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OQIERlc2lnbiBTcGVjc1wiKTtcbiAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIC0gQmFja2xvZ1wiKTtcbiAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIC0gSW4gZGV2ZWxvcG1lbnRcIik7XG4gICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICAtIFNoaXBwZWRcIik7XG4gICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5SsIFJlc2VhcmNoXCIpO1xuICAgICAgICBjcmVhdGVQYWdlKFwi8J+VuSBQcm90b3R5cGVcIik7XG4gICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OmIEFyY2hpdmVcIik7XG4gICAgICAgIC8vIE5lZWQgdG8gbG9hZCBhIGZvbnQgaGVyZSB0byBnZW5lcmF0ZSB0aGUgb3RoZXIgcGFnZSBleGFtcGxlcy5cbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhGT05UX1RJVExFUyk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoRk9OVF9CT0RJRVMpO1xuICAgICAgICAvL0FkZCBhIHRodW1uYWlsIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgICAgICB5aWVsZCBjcmVhdGVUaHVtYm5haWwodGl0bGUsIHR5cGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gRnJhbWUgZm9yIHByb2plY3QgZGV0YWlscy5cbiAgICAgICAgICAgIGRldGFpbHNGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBkZXRhaWxzRnJhbWUubmFtZSA9IFwiUHJvamVjdCBkZXRhaWxzXCI7XG4gICAgICAgICAgICBkZXRhaWxzRnJhbWUueSA9IDM0MDtcbiAgICAgICAgICAgIGRldGFpbHNGcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoNjQwLCAxKTtcbiAgICAgICAgICAgIGRldGFpbHNGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgZGV0YWlsc0ZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICAgICAgICAgIGRldGFpbHNGcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSBQQURESU5HX1Y7XG4gICAgICAgICAgICBkZXRhaWxzRnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSBQQURESU5HX0g7XG4gICAgICAgICAgICBkZXRhaWxzRnJhbWUuaXRlbVNwYWNpbmcgPSBTUEFDSU5HO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZGV0YWlsc0ZyYW1lKTtcbiAgICAgICAgICAgIGNyZWF0ZURldGFpbChcIkRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uICE9PSBcIlwiID8gZGVzY3JpcHRpb24gOiBcIjxFbnRlciBhIGRlc2NyaXB0aW9uIGhlcmU+XCIpO1xuICAgICAgICAgICAgY3JlYXRlRGV0YWlsKFwiRXh0ZXJuYWwgTGlua3NcIiwgXCI8RS5nLiBDb25mbHVlbmNlPiDihpJcXG48RS5nLiBHb29nbGUgRG9jPiDihpJcXG48QWRkIGxpbmtzIGhlcmU+IOKGklwiKTtcbiAgICAgICAgICAgIGNyZWF0ZURldGFpbChcIlNsYWNrIENoYW5uZWxzXCIsIFwiIzxjaGFubmVsIG5hbWUgaGVyZT5cXG4jPGNoYW5uZWwgbmFtZSBoZXJlPlwiKTtcbiAgICAgICAgICAgIGNyZWF0ZURldGFpbChcIlBvaW50cyBvZiBDb250YWN0XCIsIFwiRGVzaWduIC0gPGxpbmsgU2xhY2sgcHJvZmlsZSBoZXJlPlxcblByb2R1Y3QgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuRW5naW5lZXJpbmcgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XCIpO1xuICAgICAgICAgICAgLy8gRnJhbWUgZm9yIHdyYXBwaW5nIHRoZSBsaXN0IG9mIHBhZ2UgZXhhbXBsZXMuXG4gICAgICAgICAgICBsaXN0RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgbGlzdEZyYW1lLm5hbWUgPSBcIkFkZCBvdGhlciBwYWdlcywgYXMgbmVlZGVkLi4uXCI7XG4gICAgICAgICAgICBsaXN0RnJhbWUueSA9IGRldGFpbHNGcmFtZS55ICsgZGV0YWlsc0ZyYW1lLmhlaWdodCArIFNQQUNJTkc7XG4gICAgICAgICAgICBsaXN0RnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgICAgICAgICBsaXN0RnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICBsaXN0RnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgICAgICAgICAgbGlzdEZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gUEFERElOR19IO1xuICAgICAgICAgICAgbGlzdEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGxpc3RGcmFtZSk7XG4gICAgICAgICAgICAvLyBOb3QgYWxsIHByb2plY3RzIG5lZWQgYSBwcm90b3R5cGUsIHNoaXBwZWQgaXQvcmVsZWFzZWQsIG9yIHJlc2VhcmNoIHBhZ2UuXG4gICAgICAgICAgICAvLyBIb3dldmVyIGluIG9yZGVyIHRvIG1ha2UgYWRkaW5nIG9uZSBvZiB0aGVzZSBwYWdlcyBlYXNpbHksIHdlIGFkZCBzb21lXG4gICAgICAgICAgICAvLyB0ZXh0IHRvIG91ciBzY3JhdGNoIHBhZ2Ugc28gd2UgY2FuIGNvcHkvcGFzdGUgdGhlbSB3aXRoIHRoZSBwcm9wZXIgZW1vamkuXG4gICAgICAgICAgICBjcmVhdGVQYWdlRXhhbXBsZShcIvCfkoXwn4+9IFN0eWxlc1wiKTtcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4pqZ77iPIENvbXBvbmVudHNcIik7XG4gICAgICAgICAgICBjcmVhdGVQYWdlRXhhbXBsZShcIvCfkYAgUmVhZHkgZm9yIFJldmlld1wiKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIGEgdGh1bWJuYWlsIHRvIHlvdXIgZmlyc3QgcGFnZS5cbmZ1bmN0aW9uIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJhYzBiMTU4YzM3ZGUzZmE4YmE5NGQyYjM4MDE5MTNhZWEyNjJmZmNiXCIpLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJBbm5vdGF0aW9uIEtpdCBsaWJyYXJ5IGlzIHJlcXVpcmVkIGZvciB0aHVtYm5haWxzLlwiKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH0pLnRoZW4oY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIGxldCB0aHVtYm5haWxGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5uYW1lID0gXCJUaHVtYm5haWwgLSBSaWdodCBjbGljayB0byBcXFwiU2V0IGFzIHRodW1ibmFpbFxcXCJcIjtcbiAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDMyMCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGNvbXBvbmVudC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQodGh1bWJuYWlsRnJhbWUpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiRmlsZSBOYW1lXCIpO1xuICAgICAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMobGFiZWwuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSBcIkVudGVyIHRpdGxlIGhlcmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoYmFkZ2UuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZS5jaGFyYWN0ZXJzID0gdHlwZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBBZGRzIGEgbmV3IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKHRpdGxlKSB7XG4gICAgbGV0IHBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgcGFnZS5uYW1lID0gdGl0bGU7XG59XG4vLyBBZGRzIGEgc2VjdGlvbiB0byB5b3VyIGRldGFpbHMgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWwodGl0bGUsIGJvZHkpIHtcbiAgICBsZXQgZGV0YWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbEZyYW1lLm5hbWUgPSB0aXRsZTtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGRldGFpbEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGRldGFpbEZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGxldCB0aXRsZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGl0bGVUZXh0LmZvbnROYW1lID0gRk9OVF9USVRMRVM7XG4gICAgdGl0bGVUZXh0LmZvbnRTaXplID0gMTc7XG4gICAgdGl0bGVUZXh0LmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICB0aXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIGxldCBib2R5VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBib2R5VGV4dC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGJvZHlUZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgYm9keVRleHQuY2hhcmFjdGVycyA9IGJvZHk7XG4gICAgYm9keVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGRldGFpbEZyYW1lKTtcbn1cbi8vIEFkZHMgYW4gZXhhbXBsZSB0byB5b3VyIGxpc3QgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVQYWdlRXhhbXBsZSh0ZXh0KSB7XG4gICAgbGV0IGxpbmtMYWJlbCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBsaW5rTGFiZWwuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNDtcbiAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGxpbmtMYWJlbCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9