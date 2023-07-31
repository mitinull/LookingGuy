[el1, el2] = document.querySelectorAll(".LOOKING_GUY__outer-eye");

face = document.querySelector(".LOOKING_GUY");

faceWidth = face.clientWidth;

addEventListener("mousemove", (object) => {
  // console.log(object);
  ox1 = el1.offsetLeft + el1.clientWidth / 2;
  oy1 = el1.offsetTop + el1.clientHeight / 2;

  ox2 = el2.offsetLeft + el2.clientWidth / 2;
  oy2 = el2.offsetTop + el2.clientHeight / 2;
  
  el1.style.rotate =
    Math.PI * (object.pageX - ox1 < 0) +
    Math.atan((object.pageY - oy1) / (object.pageX - ox1)) +
    "rad";

  el2.style.rotate =
    Math.PI * (object.pageX - ox2 < 0) +
    Math.atan((object.pageY - oy2) / (object.pageX - ox2)) +
    "rad";
});
