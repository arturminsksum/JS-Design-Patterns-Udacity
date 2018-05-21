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

    for (var i = 0; i < catList.cats.length; i++) {
      const section = document.createElement('section');

      const counter = document.createElement('p');
      counter.textContent = catList.cats[i].counter;

      const image = document.createElement('img');
      image.src = catList.cats[i].imageUrl;
      image.addEventListener(
        'click',
        (function(j) {
          return function() {
            catList.cats[j].counter++;
            counter.textContent = catList.cats[j].counter;
          };
        })(i),
      );

      section.appendChild(image);
      section.appendChild(counter);
      body.appendChild(section);
    }
  },
};

view.displayCats();
