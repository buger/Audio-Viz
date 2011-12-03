(function() {
  var amount, animloop, colors, container, counter, items, mouse_position, num, rect, render;

  this.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
    return window.setTimeout(callback, 1000 / 60);
  };

  amount = 60;

  colors = ['red', 'white', 'blue', 'white'];

  container = $('<div class="container">');

  for (num = 1; 1 <= amount ? num <= amount : num >= amount; 1 <= amount ? num++ : num--) {
    rect = $('<div>').css({
      'border-radius': '5px',
      width: '20px',
      height: '20px',
      'background-color': colors[num % 4],
      'animation-iteration-count': 'infinite'
    });
    container.append(rect);
  }

  container.appendTo(document.body);

  items = container.find('div');

  render = function() {
    var angle, item, scale, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      angle = Math.sin((counter + _i) / 10) * 7 * 0.2;
      scale = (1 - _i / amount) * 40;
      _results.push($(item).css({
        '-webkit-transform': "scale3d(" + scale + "," + scale + ",1) rotate3d(0,0,1," + angle + "rad)"
      }));
    }
    return _results;
  };

  mouse_position = [100, 100];

  $(document).on('mousemove', function(evt) {});

  counter = 0;

  animloop = function() {
    counter++;
    requestAnimFrame(animloop);
    return render();
  };

  animloop();

}).call(this);
