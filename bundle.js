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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const model = {
  cats: [{
    id: '0',
    name: 'Mickey',
    imageUrl: './img/22252709_010df3379e_z.jpg',
    counter: 0
  }, {
    id: '1',
    name: 'Max',
    imageUrl: './img/434164568_fea0ad4013_z.jpg',
    counter: 0
  }, {
    id: '2',
    name: 'Orange',
    imageUrl: './img/1413379559_412a540d29_z.jpg',
    counter: 0
  }, {
    id: '3',
    name: 'Ruby',
    imageUrl: './img/9648464288_2516b35537_z.jpg',
    counter: 0
  }],
  currentCat: null,
  editorVisibility: false
};

// const view = {
//   initList() {
//     this.listUl = document.getElementById('list');
//     this.renderList();
//   },
//   renderList() {
//     let listLi;
//     const cats = controller.getCats();

//     this.listUl.innerHTML = '';

//     cats.forEach(cat => {
//       listLi = document.createElement('li');
//       listLi.textContent = cat.name;
//       listLi.addEventListener('click', () => {
//         controller.setCurrentCat(cat);
//       });
//       this.listUl.appendChild(listLi);
//     });
//   },

//   initCat() {
//     this.figure = document.querySelector('figure');
//     this.image = document.querySelector('img');
//     this.name = document.querySelector('figcaption p');
//     this.counter = document.querySelector('figcaption i');

//     this.image.addEventListener('click', () => {
//       controller.incrementCounter();
//     });

//     this.renderCat();
//   },
//   renderCat() {
//     const cat = controller.getCurrentCat();
//     this.image.src = cat.imageUrl;
//     this.name.textContent = cat.name;
//     this.counter.textContent = cat.counter;
//   },

//   initEditor() {
//     this.editor = document.getElementById('form');
//     this.editName = document.querySelector('[name="name"]');
//     this.editUrl = document.querySelector('[name="url"]');
//     this.editCount = document.querySelector('[name="count"]');

//     this.editButton = document.querySelector('.edit');
//     this.editButton.addEventListener('click', () => {
//       controller.toggleVisibility();
//     });

//     this.cancelButton = document.querySelector('.cancel');
//     this.cancelButton.addEventListener('click', event => {
//       event.preventDefault();
//       controller.toggleVisibility();
//     });

//     this.saveButton = document.querySelector('.save');
//     this.saveButton.addEventListener('click', event => {
//       event.preventDefault();
//       const formData = new FormData(event.target.form);
//       controller.editCat(formData);
//     });
//   },
//   renderEditor() {
//     if (model.editorVisibility) {
//       const cat = controller.getCurrentCat();
//       this.editName.value = cat.name;
//       this.editUrl.value = cat.imageUrl;
//       this.editCount.value = cat.counter;
//       this.editor.style.display = 'block';
//     } else {
//       this.editor.style.display = 'none';
//     }
//   }
// };

// const controller = {
//   init() {
//     model.currentCat = model.cats[0];
//     view.initList();
//     view.initCat();
//     view.initEditor();
//   },
//   getCats() {
//     return model.cats;
//   },
//   setCurrentCat(cat) {
//     model.currentCat = cat;
//     view.renderCat();
//     view.renderEditor();
//   },
//   getCurrentCat() {
//     return model.currentCat;
//   },
//   incrementCounter() {
//     model.currentCat.counter++;
//     view.renderCat();
//     view.renderEditor();
//   },
//   toggleVisibility() {
//     model.editorVisibility = !model.editorVisibility;
//     view.renderEditor();
//   },
//   editCat(formData) {
//     model.currentCat.name = formData.get('name');
//     model.currentCat.imageUrl = formData.get('url');
//     model.currentCat.counter = formData.get('count');
//     this.toggleVisibility();
//     view.renderList();
//     view.renderCat();
//   }
// };

// controller.init();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map