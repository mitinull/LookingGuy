el = document.querySelector("div");

ox = 100;
oy = 100;

// console.log(el);

addEventListener("mousemove", (object) => {
  // console.log(object.layerX, object.layerY);
  el.style.rotate =
    Math.PI * (object.layerX - ox < 0) +
    Math.atan((object.layerY - oy) / (object.layerX - ox)) +
    "rad";
});
