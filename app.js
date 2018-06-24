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
  ]
  ],
  currentCat: null,
};

const view = {
  initList() {
    this.listUl = document.getElementById('list');
    this.renderList()
  },
  renderList() {
    let listLi;
    const cats = controller.getCats();

    cats.forEach(cat => {
      listLi = document.createElement('li');
      listLi.textContent = cat.name;
      listLi.addEventListener('click', () => {
        controller.setCurrentCat(cat);
        this.renderCat();
      });
      this.listUl.appendChild(listLi);
    });
  },
  initCat() {
    this.figure = document.querySelector('figure');
    this.image = document.querySelector('img');
    this.name = document.querySelector('figcaption p');
    this.counter = document.querySelector('figcaption i');

    this.image.addEventListener('click', controller.incrementCounter);

    this.renderCat();
  },
  renderCat() {
    const cat = controller.getCurrentCat();
    this.image.src = cat.imageUrl;
    this.name.textContent = cat.name;
    this.counter.textContent = cat.counter;
  }
};

const controller = {
  init() {
    model.currentCat = model.cats[0];
    view.initList();
    view.initCat();
  },
  getCats() {
    return model.cats;
  },
  setCurrentCat(cat) {
    model.currentCat = cat;
  },
  getCurrentCat() {
    return model.currentCat;
  },
  incrementCounter() {
    model.currentCat.counter++;
    view.renderCat();
  },
  }
};

controller.init();
