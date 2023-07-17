[el1, el2] = document.querySelectorAll(".container");

ox1 = 100;
oy1 = 100;

ox2 = 350;
oy2 = 100;

// console.log(el);

addEventListener("mousemove", (object) => {
  // console.log(object.layerX, object.layerY);
  el1.style.rotate =
    Math.PI * (object.layerX - ox1 < 0) +
    Math.atan((object.layerY - oy1) / (object.layerX - ox1)) +
    "rad";

  el2.style.rotate =
    Math.PI * (object.layerX - ox2 < 0) +
    Math.atan((object.layerY - oy2) / (object.layerX - ox2)) +
    "rad";
});
