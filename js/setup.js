'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var FAMILES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var setupElement = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardList = document.querySelector('.setup-similar-list');
var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};

var getRandomFromArray = function (arr) {
  return arr[getRandomArbitrary(0, arr.length)];
};

var generateWizardsData = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: getRandomFromArray(NAMES) + ' ' + getRandomFromArray(FAMILES),
      coatColor: getRandomFromArray(COAT_COLOR),
      eyesColor: getRandomFromArray(EYES_COLOR)
    });
  }
  return wizards;
};

var renderWizards = function (wizardData) {
  var template = wizardTemplate.cloneNode(true);
  template.querySelector('.setup-similar-label').textContent = wizardData.name;
  template.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  template.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;
  return template;
};

var draftWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizards(wizards[i]));
  }
  wizardList.appendChild(fragment);
};

var init = function () {
  setupElement.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  var wizards = generateWizardsData();
  draftWizards(wizards);
};

init();
