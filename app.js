import ko from 'knockout';

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
  this.currentCat = ko.observable(
    new Cat({
      name: 'Mickey',
      imageUrl: './img/22252709_010df3379e_z.jpg',
      counter: 0,
      nickNames: ['Maxick', 'Orange', 'Ruby', 'Max']
    })
  );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
