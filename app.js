const catList = {
  cats: [
    {
      imageUrl:
        'https://farm2.staticflickr.com/1126/625069434_db86b67df8_q.jpg',
      counter: 0,
    },
    {
      imageUrl:
        'https://farm3.staticflickr.com/2298/2290467335_89067c7b51_q.jpg',
      counter: 0,
    },
  ],
};

const view = {
  displayCats() {
    const body = document.querySelector('body');
    body.innerHTML = '';

    catList.cats.forEach(cat => {
      const section = document.createElement('section');

      const counter = document.createElement('p');
      counter.textContent = cat.counter;

      const image = document.createElement('img');
      image.src = cat.imageUrl;
      image.addEventListener('click', () => {
        cat.counter++;
        counter.textContent = cat.counter;
      });

      section.appendChild(image);
      section.appendChild(counter);
      body.appendChild(section);
    });
  },
};

view.displayCats();
