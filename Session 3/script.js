const con = document.querySelector(".container");
const miniImg = document.getElementsByClassName("my-img");
let img = [
  "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
];

let i = 0;

// Initialize the gallery
miniImg[i].classList.add("active");

function next() {
  miniImg[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
}

function prev() {
  miniImg[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
}

// Add click event for thumbnails
for (let j = 0; j < miniImg.length; j++) {
  miniImg[j].addEventListener('click', function() {
    miniImg[i].classList.remove("active");
    i = j;
    miniImg[i].classList.add("active");
    con.style.backgroundImage = 'url("' + img[i] + '")';
  });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    next();
  } else if (e.key === 'ArrowLeft') {
    prev();
  }
});
