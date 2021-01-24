//renard
const renard = document.querySelector(".renard");
setInterval(function () {
    let leftFox = parseInt(window.getComputedStyle(renard).getPropertyValue("left"));
    leftFox += 1.9;
    if (leftFox >= window.innerWidth) {
        leftFox = - parseInt(window.getComputedStyle(renard).getPropertyValue("width"));
    }
    renard.style.left = leftFox + "px";
}, 50);

const sapin1 = document.querySelector("#sapin1");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin1).getPropertyValue("left"));
    moveSapin -= 0.8;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin1).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin1.style.left = moveSapin + "px";
}, 50);

const sapin2 = document.querySelector("#sapin2");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin2).getPropertyValue("left"));
    moveSapin -= 1;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin2).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin2.style.left = moveSapin + "px";
}, 50);

const sapin5 = document.querySelector("#sapin5");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin5).getPropertyValue("left"));
    moveSapin -= 1;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin5).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin5.style.left = moveSapin + "px";
}, 50);

const sapin3 = document.querySelector("#sapin3");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin3).getPropertyValue("left"));
    moveSapin -= 2;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin3).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin3.style.left = moveSapin + "px";
}, 50);

const sapin4 = document.querySelector("#sapin4");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin4).getPropertyValue("left"));
    moveSapin -= 2;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin4).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin4.style.left = moveSapin + "px";
}, 50);



const sapin6 = document.querySelector("#sapin6");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin6).getPropertyValue("left"));
    moveSapin -= 2;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin6).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin6.style.left = moveSapin + "px";
}, 50);

const sapin7 = document.querySelector("#sapin7");
setInterval(function() {
    let moveSapin = parseInt(window.getComputedStyle(sapin7).getPropertyValue("left"));
    moveSapin -= 2;
    if (moveSapin <= - parseInt(window.getComputedStyle(sapin7).getPropertyValue("width"))) {
        moveSapin = window.innerWidth}
    sapin7.style.left = moveSapin + "px";
}, 50);





const Snow = (canvas, count, options) => {
    const ctx = canvas.getContext('2d');
    const snowflakes = [];
  
    const add = item => snowflakes.push(item(canvas));
  
    const update = () => _.forEach(snowflakes, el => el.update());
  
    const resize = () => {
      ctx.canvas.width = canvas.offsetWidth;
      ctx.canvas.height = canvas.offsetHeight;
  
      _.forEach(snowflakes, el => el.resized());
    };
  
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      _.forEach(snowflakes, el => el.draw());
    };
  
    const events = () => {
      window.addEventListener('resize', resize);
    };
  
    const loop = () => {
      draw();
      update();
      animFrame(loop);
    };
  
    const init = () => {
      _.times(count, () => add(canvas => SnowItem(canvas, null, options)));
      events();
      loop();
    };
  
    init(count);
    resize();
  
    return { add, resize };
  };
  
  const defaultOptions = {
    color: 'orange',
    radius: [0.5, 3.0],
    speed: [1, 3],
    wind: [-0.5, 3.0] };
  
  
  const SnowItem = (canvas, drawFn = null, opts) => {
    const options = { ...defaultOptions, ...opts };
    const { radius, speed, wind, color } = options;
    const params = {
      color,
      x: _.random(0, canvas.offsetWidth),
      y: _.random(-canvas.offsetHeight, 0),
      radius: _.random(...radius),
      speed: _.random(...speed),
      wind: _.random(...wind),
      isResized: false };
  
    const ctx = canvas.getContext('2d');
  
    const updateData = () => {
      params.x = _.random(0, canvas.offsetWidth);
      params.y = _.random(-canvas.offsetHeight, 0);
    };
  
    const resized = () => params.isResized = true;
  
    const drawDefault = () => {
      ctx.beginPath();
      ctx.arc(params.x, params.y, params.radius, 0, 2 * Math.PI);
      ctx.fillStyle = params.color;
      ctx.fill();
      ctx.closePath();
    };
  
    const draw = drawFn ?
    () => drawFn(ctx, params) :
    drawDefault;
  
    const translate = () => {
      params.y += params.speed;
      params.x += params.wind;
    };
  
    const onDown = () => {
      if (params.y < canvas.offsetHeight) return;
  
      if (params.isResized) {
        updateData();
        params.isResized = false;
      } else {
        params.y = 0;
        params.x = _.random(0, canvas.offsetWidth);
      }
    };
  
    const update = () => {
      translate();
      onDown();
    };
  
    return {
      update,
      resized,
      draw };
  
  };
  
  const el = document.querySelector('.container');
  const wrapper = document.querySelector('body');
  const canvas = document.getElementById('snow');
  
  const animFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
  
  Snow(canvas, 150, { color: 'white' });