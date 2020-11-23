var canvas = document.querySelector('.hex-background__canvas'),
  can_w = parseInt(canvas.getAttribute('width')),
  can_h = parseInt(canvas.getAttribute('height')),
  ctx = canvas.getContext('2d');

// console.log(typeof can_w);

var ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    alpha: 1,
    phase: 0,
  },
  // ball_color = {
  //   r: 64,
  //   g: 113,
  //   b: 137
  // },
  ball_color = {
    r: 236,
    g: 96,
    b: 45,
  },
  R = 2,
  balls = [],
  hexes = [],
  alpha_f = 0.03,
  alpha_phase = 0,
  // Line
  link_line_width = 0.8,
  dis_limit = 260,
  hex_limit = 120,
  add_mouse_point = true,
  mouse_in = false,
  mouse_ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    type: 'mouse',
  };

function hexagon(x, y, r) {
  ctx.save();
  ctx.translate(x, y);
  let angle = 0;
  for (let i = 0; i < 6; i++) {
    ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    angle += Math.PI / 3; // 60 degrees
  }
  ctx.closePath();
  ctx.restore();
}

// Random speed
function getRandomSpeed(pos) {
  var min = -1,
    max = 1;
  switch (pos) {
    case 'top':
      return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
      break;
    case 'right':
      return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
      break;
    case 'bottom':
      return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
      break;
    case 'left':
      return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
      break;
    default:
      return;
      break;
  }
}
function randomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumFrom(min, max) {
  return Math.random() * (max - min) + min;
}
// Random Ball
function getRandomBall() {
  var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
  switch (pos) {
    case 'top':
      return {
        x: randomSidePos(can_w),
        y: -R,
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
    case 'right':
      return {
        x: can_w + R,
        y: randomSidePos(can_h),
        vx: getRandomSpeed('right')[0],
        vy: getRandomSpeed('right')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
    case 'bottom':
      return {
        x: randomSidePos(can_w),
        y: can_h + R,
        vx: getRandomSpeed('bottom')[0],
        vy: getRandomSpeed('bottom')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
    case 'left':
      return {
        x: -R,
        y: randomSidePos(can_h),
        vx: getRandomSpeed('left')[0],
        vy: getRandomSpeed('left')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      };
      break;
  }
}
function randomSidePos(length) {
  return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls() {
  Array.prototype.forEach.call(balls, function (b) {
    if (!b.hasOwnProperty('type')) {
      ctx.fillStyle = 'rgba(' + ball_color.r + ',' + ball_color.g + ',' + ball_color.b + ',' + b.alpha + ')';
      ctx.beginPath();
      ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  });
}

// Update balls
function updateBalls() {
  var new_balls = [];
  Array.prototype.forEach.call(balls, function (b) {
    b.x += b.vx;
    b.y += b.vy;

    if (b.x > -50 && b.x < can_w + 50 && b.y > -50 && b.y < can_h + 50) {
      new_balls.push(b);
    }

    // alpha change
    b.phase += alpha_f;
    b.alpha = Math.abs(Math.cos(b.phase));
    // console.log(b.alpha);
  });

  balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf() {}

// Draw lines
function renderLines() {
  var fraction, alpha;
  for (var i = 0; i < balls.length; i++) {
    for (var j = i + 1; j < balls.length; j++) {
      fraction = getDisOf(balls[i], balls[j]) / dis_limit;

      if (fraction < 1) {
        alpha = (1 - fraction).toString();

        ctx.strokeStyle = 'rgba(236, 96, 45,' + alpha + ')';
        ctx.lineWidth = link_line_width;

        ctx.beginPath();
        ctx.moveTo(balls[i].x, balls[i].y);
        ctx.lineTo(balls[j].x, balls[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

// Draw hexagons
function renderHex() {
  Array.prototype.forEach.call(hexes, function (b) {
    var alpha = 0;
    for (var i = 0; i < balls.length; i++) {
      fraction = getDisOf(balls[i], b) / hex_limit;

      if (fraction < 1) {
        if (1 - fraction > alpha) {
          alpha = 1 - fraction;
        }

        //style = "rgba(150,150,150," + alpha + ")";
      }
    }

    ctx.strokeStyle = 'rgba(0, 98, 138,' + alpha.toString() + ')';
    // rgb(236, 96, 45)
    ctx.beginPath();
    hexagon(b.x, b.y, b.r);
    ctx.stroke();
  });
}

// calculate distance between two points
function getDisOf(b1, b2) {
  var delta_x = Math.abs(b1.x - b2.x),
    delta_y = Math.abs(b1.y - b2.y);

  return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
}

// add balls if there a little balls
function addBallIfy() {
  if (balls.length < 20) {
    balls.push(getRandomBall());
  }
}

// update hexes

// Render
function render() {
  ctx.clearRect(0, 0, can_w, can_h);

  renderBalls();
  renderHex();
  renderLines();

  updateBalls();

  addBallIfy();

  window.requestAnimationFrame(render);
}

// Init Hexes
function initHexes() {
  const radius = 50;
  const ydelta = Math.sin(Math.PI / 3) * radius;
  let even = false;
  let shift = 0;
  for (let y = 0; y < Math.max(can_w, can_h) + 100; y += ydelta) {
    ctx.save();
    shift = 0;
    if (even) {
      shift = radius * 1.5;
    }
    for (let x = 0; x < Math.max(can_w, can_h) + 100; x += radius * 3) {
      hexes.push({
        x: x + shift,
        y: y,
        r: radius,
        alpha: 1,
      });
    }
    ctx.restore();
    even = !even;
  }
}

// Init Balls
function initBalls(num) {
  for (var i = 1; i <= num; i++) {
    balls.push({
      x: randomSidePos(can_w),
      y: randomSidePos(can_h),
      vx: getRandomSpeed('top')[0],
      vy: getRandomSpeed('top')[1],
      r: R,
      alpha: 1,
      phase: randomNumFrom(0, 10),
    });
  }
}

// Init Canvas
function initCanvas() {
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);

  can_w = parseInt(canvas.getAttribute('width'));
  can_h = parseInt(canvas.getAttribute('height'));
}
window.addEventListener('resize', function (e) {
  initCanvas();
});

function goMovie() {
  initCanvas();
  initBalls(30);
  initHexes();
  window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener('mouseenter', function () {
  mouse_in = true;
  balls.push(mouse_ball);
});

canvas.addEventListener('mouseleave', function () {
  mouse_in = false;
  var new_balls = [];
  Array.prototype.forEach.call(balls, function (b) {
    if (!b.hasOwnProperty('type')) {
      new_balls.push(b);
    }
  });
  balls = new_balls.slice(0);
});

canvas.addEventListener('mousemove', function (e) {
  var e = e || window.event;
  mouse_ball.x = e.pageX;
  mouse_ball.y = e.pageY;
});
