const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// prepend(), appendChild() 둘 다 상관 ㄴ CSS로 바꿀 꺼지롱
document.body.prepend(bgImage);
