import ko from 'knockout';

var Cat = function() {
  this.cats = ko.observableArray([
    {
      id: '0',
      name: 'Mickey',
      imageUrl: './img/22252709_010df3379e_z.jpg',
      counter: 0
    },
    {
      id: '1',
      name: 'Max',
      imageUrl: './img/434164568_fea0ad4013_z.jpg',
      counter: 0
    },
    {
      id: '2',
      name: 'Orange',
      imageUrl: './img/1413379559_412a540d29_z.jpg',
      counter: 0
    },
    {
      id: '3',
      name: 'Ruby',
      imageUrl: './img/9648464288_2516b35537_z.jpg',
      counter: 0
    }
  ]);

  this.clickCount = ko.observable(0);
  this.name = ko.observable('Ruby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('img/22252709_010df3379e_z.jpg');

  this.title = ko.computed(() => {
    var title;
    var clicks = this.clickCount();
    if (clicks < 3) {
      title = 'Infant';
    } else if (clicks < 6) {
      title = 'Teen';
    } else {
      title = 'Adult';
    }
    return title;
  });
};

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());

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
