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
};

const view = {
  displayList() {
    const app = document.getElementById('list');
    const listUl = document.createElement('ul');
    let listLi;
    const cats = controller.getCats();

    cats.forEach(cat => {
      listLi = document.createElement('li');
      listLi.textContent = cat.name;
      listLi.addEventListener('click', () => {
        controller.chooseCat(cat);
      });
      listUl.appendChild(listLi);
    });

    app.appendChild(listUl);
  },
  displayCat(cat) {
    const figure = document.querySelector('figure');
    figure.id = cat.id;

    const image = document.querySelector('img');
    image.src = cat.imageUrl;
    image.addEventListener('click', controller.changeCount);

    const name = document.querySelector('figcaption p');
    name.textContent = cat.name;

    const counter = document.querySelector('figcaption i');
    counter.textContent = cat.counter;
  }
};

const controller = {
  getCats() {
    return model.cats;
  },
  chooseCat(cat) {
    view.displayCat(cat);
  },
  changeCount(event) {
    const targetId = event.target.parentNode.id;
    const cat = model.cats.find(cat => cat.id === targetId);
    cat.counter++;
    const counter = document.querySelector('i');
    counter.textContent = cat.counter;
  },

  init() {
    view.displayList();
  }
};

controller.init();
