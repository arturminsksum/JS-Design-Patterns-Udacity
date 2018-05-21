const model = {
  cats: [
    {
      id: '0',
      name: 'Mickey',
      imageUrl:
        'https://farm2.staticflickr.com/1126/625069434_db86b67df8_q.jpg',
      counter: 0,
    },
    {
      id: '1',
      name: 'Max',
      imageUrl:
        'https://farm3.staticflickr.com/2298/2290467335_89067c7b51_q.jpg',
      counter: 0,
    },
    {
      id: '2',
      name: 'Orange',
      imageUrl:
        'https://farm2.staticflickr.com/1276/624215185_6ee2b029b5_q.jpg',
      counter: 0,
    },
  ],
};

const app = document.getElementById('app');

const view = {
  displayList() {
    const listUl = document.createElement('ul');

    model.cats.forEach(cat => {
      const listLi = document.createElement('li');
      listLi.textContent = cat.name;
      listLi.addEventListener('click', () => {
        controller.chooseCat(cat);
      });
      listUl.appendChild(listLi);
    });

    app.appendChild(listUl);
  },
  displayCats(cat = model.cats[0]) {
    const figure = document.createElement('figure');
    figure.id = cat.id;

    const image = document.createElement('img');
    image.src = cat.imageUrl;
    image.addEventListener('click', event => {
      controller.changeCount(event.target);
    });

    const figcaption = document.createElement('figcaption');

    const name = document.createElement('p');
    name.textContent = cat.name;

    const counter = document.createElement('i');
    counter.textContent = cat.counter;

    figcaption.appendChild(name);
    figcaption.appendChild(counter);

    figure.appendChild(image);
    figure.appendChild(figcaption);
    app.appendChild(figure);
  },
};

const controller = {
  chooseCat(cat) {
    const figure = document.querySelector('figure');
    figure.id = cat.id;

    const image = document.querySelector('img');
    image.src = cat.imageUrl;

    const name = document.querySelector('p');
    name.textContent = cat.name;

    const counter = document.querySelector('i');
    counter.textContent = cat.counter;
  },
  changeCount(target) {
    const targetId = target.parentNode.id;
    const cat = model.cats.find(cat => cat.id === targetId);
    cat.counter++;
    const counter = document.querySelector('i');
    counter.textContent = cat.counter;
  },
};

view.displayList();
view.displayCats();
