'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 100;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 120;
var barWidth = TEXT_WIDTH - GAP;
var xPossition = CLOUD_X + (TEXT_WIDTH - GAP);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);
  ctx.font = 'PT Mono 16px';

  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], xPossition + FONT_GAP, CLOUD_HEIGHT - GAP);
    ctx.fillRect(xPossition + FONT_GAP, (CLOUD_Y + GAP) * 4 + GAP, barWidth, (BAR_HEIGHT * times[i]) / maxTime);

    if (i === 0) {
      ctx.fillText(names[i], xPossition, CLOUD_HEIGHT - GAP);
      ctx.fillRect(xPossition, (CLOUD_Y + GAP) * 4 + GAP, barWidth, (BAR_HEIGHT * times[i]) / maxTime, 'rgba(255, 0, 0, 1)');
    } else {
      ctx.fillText(names[i], xPossition + FONT_GAP * 2, CLOUD_HEIGHT - GAP);
      ctx.fillRect(xPossition + FONT_GAP * 2, (CLOUD_Y + GAP) * 4 + GAP, barWidth, (BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
