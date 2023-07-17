[el1, el2] = document.querySelectorAll(".container");

face = document.querySelector(".face-container");

faceWidth = face.clientWidth;

ox1 = el1.offsetLeft + el1.clientWidth / 2;
oy1 = el1.offsetTop + el1.clientHeight / 2;
console.log(ox1, oy1);

ox2 = el2.offsetLeft + el2.clientWidth / 2;
oy2 = el2.offsetTop + el2.clientHeight / 2;

// console.log(el);

addEventListener("mousemove", (object) => {
  // log object and see other props other than layerX and layerY to fix mouse enter eye problem
  console.log(object.layerX, object.layerY);
  el1.style.rotate =
    Math.PI * (object.layerX - ox1 < 0) +
    Math.atan((object.layerY - oy1) / (object.layerX - ox1)) +
    "rad";

  el2.style.rotate =
    Math.PI * (object.layerX - ox2 < 0) +
    Math.atan((object.layerY - oy2) / (object.layerX - ox2)) +
    "rad";
});
