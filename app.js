const model = {
  cats: [
    {
      id: '0',
      name: 'Mickey',
      imageUrl:
        'https://farm2.staticflickr.com/1126/625069434_db86b67df8_q.jpg',
      counter: 0
    },
    {
      id: '1',
      name: 'Max',
      imageUrl:
        'https://farm3.staticflickr.com/2298/2290467335_89067c7b51_q.jpg',
      counter: 0
    },
    {
      id: '2',
      name: 'Orange',
      imageUrl:
        'https://farm2.staticflickr.com/1276/624215185_6ee2b029b5_q.jpg',
      counter: 0
    },
    {
      id: '3',
      name: 'Ruby',
      imageUrl:
        'https://farm3.staticflickr.com/2406/2177097057_df86bce3f8_q.jpg',
      counter: 0
    }
  ],
  currentCat: null,
  editorVisibility: false,
};

const view = {
  initList() {
    this.listUl = document.getElementById('list');
    this.renderList();
  },
  renderList() {
    let listLi;
    const cats = controller.getCats();

    this.listUl.innerHTML = '';

    cats.forEach(cat => {
      listLi = document.createElement('li');
      listLi.textContent = cat.name;
      listLi.addEventListener('click', () => {
        controller.setCurrentCat(cat);
      });
      this.listUl.appendChild(listLi);
    });
  },

  initCat() {
    this.figure = document.querySelector('figure');
    this.image = document.querySelector('img');
    this.name = document.querySelector('figcaption p');
    this.counter = document.querySelector('figcaption i');

    this.image.addEventListener('click', () => {
      controller.incrementCounter();
    });

    this.renderCat();
  },
  renderCat() {
    const cat = controller.getCurrentCat();
    this.image.src = cat.imageUrl;
    this.name.textContent = cat.name;
    this.counter.textContent = cat.counter;
  },

  initEditor() {
    this.editor = document.getElementById('form');
    this.editName = document.querySelector('[name="name"]')
    this.editUrl = document.querySelector('[name="url"]')
    this.editCount = document.querySelector('[name="count"]')

    this.editButton = document.querySelector('.edit');
    this.editButton.addEventListener('click', () => {
      controller.toggleVisibility();
    });

    this.cancelButton = document.querySelector('.cancel');
    this.cancelButton.addEventListener('click', (event) => {
      event.preventDefault();
      controller.toggleVisibility();
    });

    this.saveButton = document.querySelector('.save');
    this.saveButton.addEventListener('click', (event) => {
      event.preventDefault();
      const formData = new FormData(event.target.form);
      controller.editCat(formData);
    });

  },
  renderEditor() {
    if (model.editorVisibility) {
      const cat = controller.getCurrentCat();
      this.editName.value = cat.name;
      this.editUrl.value = cat.imageUrl;
      this.editCount.value = cat.counter;
      this.editor.style.display = 'block';
    } else {
      this.editor.style.display = 'none';
    }
  },
};

const controller = {
  init() {
    model.currentCat = model.cats[0];
    view.initList();
    view.initCat();
    view.initEditor();
  },
  getCats() {
    return model.cats;
  },
  setCurrentCat(cat) {
    model.currentCat = cat;
    view.renderCat();
    view.renderEditor();
  },
  getCurrentCat() {
    return model.currentCat;
  },
  incrementCounter() {
    model.currentCat.counter++;
    view.renderCat();
    view.renderEditor();
  },
  toggleVisibility() {
    model.editorVisibility = !model.editorVisibility;
    view.renderEditor();
  },
  editCat(formData) {
    model.currentCat.name = formData.get('name');
    model.currentCat.imageUrl = formData.get('url');
    model.currentCat.counter = formData.get('count');
    this.toggleVisibility();
    view.renderList();
    view.renderCat();
  }
};

controller.init();
