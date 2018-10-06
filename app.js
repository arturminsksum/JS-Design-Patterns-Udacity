import ko from 'knockout';

var model = [
  {
    name: 'Mickey',
    imageUrl: './img/22252709_010df3379e_z.jpg',
    imageAttr: 'https://farm2.staticflickr.com/1126/625069434_db86b67df8_q.jpg',
    counter: 0,
    nickNames: ['Mike']
  },
  {
    name: 'Max',
    imageUrl: './img/434164568_fea0ad4013_z.jpg',
    imageAttr: 'https://farm3.staticflickr.com/2298/2290467335_89067c7b51_q.jpg',
    counter: 0,
    nickNames: ['Maxic']
  },
  {
    name: 'Orange',
    imageUrl: './img/1413379559_412a540d29_z.jpg',
    imageAttr: 'https://farm2.staticflickr.com/1276/624215185_6ee2b029b5_q.jpg',
    counter: 0,
    nickNames: ['Ryjic']
  },
  {
    name: 'Ruby',
    imageUrl: './img/9648464288_2516b35537_z.jpg',
    imageAttr: 'https://farm3.staticflickr.com/2406/2177097057_df86bce3f8_q.jpg',
    counter: 0,
    nickNames: ['Rubistka']
  }
];

var Cat = function(data) {
  var { name, imageUrl, counter, nickNames } = data;

  this.cats = ko.observableArray(nickNames);

  this.clickCount = ko.observable(counter);
  this.name = ko.observable(name);
  this.imgSrc = ko.observable(imageUrl);

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
  this.catList = ko.observableArray([]);

  model.forEach(catItem => {
    this.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCurrentCat = clickedCat => {
    this.currentCat(clickedCat);
  };
};

ko.applyBindings(new ViewModel());
