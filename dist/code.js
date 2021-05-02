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
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(400, 400);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    switch (msg.type) {
        case "create-projct":
            yield createProject(msg.projectTitle, msg.projectType);
            break;
    }
});
function createProject(title, type) {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield createThumbnail(title, type);
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
            }).then((component) => __awaiter(this, void 0, void 0, function* () {
                if (component) {
                    let thumbnail = component.createInstance();
                    yield figma.loadFontAsync({ family: "Sharp Sans No1", style: "Bold" }).then(() => {
                        let label = thumbnail.findOne(node => node.name == "File Name");
                        label.characters = title;
                    });
                    yield figma.loadFontAsync({ family: "Proxima Nova", style: "Regular" }).then(() => {
                        let badge = thumbnail.findOne(node => node.name == "Badge" && node.type == "TEXT");
                        badge.characters = type;
                    });
                    figma.currentPage.appendChild(thumbnail);
                    figma.closePlugin();
                }
            }));
        };
        run();
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG9DQUFvQztBQUMzRSx1Q0FBdUMsaUNBQWlDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtDQUErQywwQ0FBMEM7QUFDekY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiwrQ0FBK0MsMkNBQTJDO0FBQzFGO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIHByb2plY3QgZGV0YWlscywgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIGEgZG9jdW1lbnQgc3RydWN0dXJlIGFuZCB0aHVtYm5haWwuXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKDQwMCwgNDAwKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJjcmVhdGUtcHJvamN0XCI6XG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVQcm9qZWN0KG1zZy5wcm9qZWN0VGl0bGUsIG1zZy5wcm9qZWN0VHlwZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBDcmVhdGUgcGFnZXNcbiAgICAgICAgbGV0IHByb2JsZW1QYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xuICAgICAgICBsZXQgc29sdXRpb25QYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xuICAgICAgICBsZXQgc3BlY1BhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgICAgIGxldCByZXNlYXJjaFBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgICAgIGxldCBwcm90b3R5cGVQYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xuICAgICAgICBsZXQgYXJjaGl2ZVBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgICAgIC8vIFNldCBwYWdlIG5hbWVzIGFuZCByZW5hbWVzIHRoZSBkZWZhdWx0IFwiUGFnZSAxXCJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UubmFtZSA9IFwi8J+TliBBYm91dFwiO1xuICAgICAgICBwcm9ibGVtUGFnZS5uYW1lID0gXCLwn6SUIFByb2JsZW0gU3BhY2VcIjtcbiAgICAgICAgc29sdXRpb25QYWdlLm5hbWUgPSBcIvCfkqEgU29sdXRpb24gU3BhY2VcIjtcbiAgICAgICAgc3BlY1BhZ2UubmFtZSA9IFwi8J+TkCBEZXNpZ24gU3BlY1wiO1xuICAgICAgICByZXNlYXJjaFBhZ2UubmFtZSA9IFwi8J+UrCBSZXNlYXJjaFwiO1xuICAgICAgICBwcm90b3R5cGVQYWdlLm5hbWUgPSBcIvCflbkgUHJvdG90eXBlXCI7XG4gICAgICAgIGFyY2hpdmVQYWdlLm5hbWUgPSBcIvCfk6YgQXJjaGl2ZVwiO1xuICAgICAgICAvLyBGcmFtZSBmb3Igd3JhcHBpbmcgdGhlIGxpc3Qgb2YgcGFnZSBleGFtcGxlcy5cbiAgICAgICAgbGV0IGxpc3RGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGxpc3RGcmFtZS5uYW1lID0gXCJPdGhlciBwYWdlIGV4YW1wbGVzXCI7XG4gICAgICAgIGxpc3RGcmFtZS55ID0gMzQwO1xuICAgICAgICBsaXN0RnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgICAgIGxpc3RGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBsaXN0RnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICBsaXN0RnJhbWUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgIGxpc3RGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICBsaXN0RnJhbWUuaXRlbVNwYWNpbmcgPSAxNjtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQobGlzdEZyYW1lKTtcbiAgICAgICAgbGV0IHJ1biA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gbG9hZCBhIGZvbnQgaGVyZSB0byBnZW5lcmF0ZSB0aGUgb3RoZXIgcGFnZSBleGFtcGxlcy5cbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgICAgICAgICAvL0FkZCBhIHRodW1uYWlsIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgICAgICAgICAgeWllbGQgY3JlYXRlVGh1bWJuYWlsKHRpdGxlLCB0eXBlKTtcbiAgICAgICAgICAgIC8vIE5vdCBhbGwgcHJvamVjdHMgbmVlZCBhIHByb3RvdHlwZSwgc2hpcHBlZCBpdC9yZWxlYXNlZCwgb3IgcmVzZWFyY2ggcGFnZS5cbiAgICAgICAgICAgIC8vIEhvd2V2ZXIgaW4gb3JkZXIgdG8gbWFrZSBhZGRpbmcgb25lIG9mIHRoZXNlIHBhZ2VzIGVhc2lseSwgd2UgYWRkIHNvbWVcbiAgICAgICAgICAgIC8vIHRleHQgdG8gb3VyIHNjcmF0Y2ggcGFnZSBzbyB3ZSBjYW4gY29weS9wYXN0ZSB0aGVtIHdpdGggdGhlIHByb3BlciBlbW9qaS5cbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFkZGl0aW9uYWxQYWdlRXhhbXBsZShcIvCfmqIgU2hpcHBlZFwiKTtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFkZGl0aW9uYWxQYWdlRXhhbXBsZShcIvCfkoXwn4+9IFN0eWxlc1wiKTtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFkZGl0aW9uYWxQYWdlRXhhbXBsZShcIuKame+4jyBDb21wb25lbnRzXCIpO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlQWRkaXRpb25hbFBhZ2VFeGFtcGxlKFwi8J+RgCBSZWFkeSBmb3IgUmV2aWV3XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBhZGRzIGFuIGV4YW1wbGUgb2YgaG93IHRvIG5hbWUgeW91ciBsZXNzIGNvbW1vbiBwYWdlcyArIHRoZWlyIGVtb2ppXG4gICAgICAgIC8vIHRvIHlvdXIgZmlyc3QgcGFnZS5cbiAgICAgICAgbGV0IGNyZWF0ZUFkZGl0aW9uYWxQYWdlRXhhbXBsZSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgICAgICBsZXQgbGlua0xhYmVsID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgbGlua0xhYmVsLmZvbnROYW1lID0geyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgICAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgICAgICAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNjtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChsaW5rTGFiZWwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGFkZHMgYSB0aHVtYm5haWwgdG8geW91ciBmaXJzdCBwYWdlLlxuICAgICAgICBsZXQgY3JlYXRlVGh1bWJuYWlsID0gKHRpdGxlLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiYWMwYjE1OGMzN2RlM2ZhOGJhOTRkMmIzODAxOTEzYWVhMjYyZmZjYlwiKS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkFubm90YXRpb24gS2l0IGxpYnJhcnkgaXMgcmVxdWlyZWQgZm9yIHRodW1ibmFpbHMuXCIpO1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgICAgICB9KS50aGVuKChjb21wb25lbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBjb21wb25lbnQuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJTaGFycCBTYW5zIE5vMVwiLCBzdHlsZTogXCJCb2xkXCIgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSB0aHVtYm5haWwuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkZpbGUgTmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUHJveGltYSBOb3ZhXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UuY2hhcmFjdGVycyA9IHR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgcnVuKCk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9