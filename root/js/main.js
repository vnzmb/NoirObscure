let animation = anime({
  targets: '.content',
  translateX: 100,
  borderRadius: 200,
  duration: 2000,
  //   easing: 'linear',
  direction: 'alternate',
});

let animation2 = anime({
  targets: '.animate-div1',
  translateX: 200,
  borderRadius: 200,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
});
let animation3 = anime({
  targets: '.animate-div2',
  translateX: -200,
  borderRadius: 200,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
});
let animation4 = anime({
  targets: '.animate-div3',
  translateX: 200,
  borderRadius: 200,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
});
let animation5 = anime({
  targets: '.animate-div4',
  translateX: -200,
  borderRadius: 200,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
});

// MODAL STUFF //

let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

/////////////////////////////////////////////////

let modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img2 = document.getElementById('myImg2');
let modalImg2 = document.getElementById('img02');
let captionText2 = document.getElementById('caption2');
img2.onclick = function () {
  modal2.style.display = 'block';
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName('close2')[0];
let span3 = document.getElementsByClassName('close3')[0];

span2.addEventListener('click', function (e) {
  modal2.style.display = 'none';
});
span3.addEventListener('click', function (e) {
  modal3.style.display = 'none';
});

let modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img3 = document.getElementById('myImg3');
let modalImg3 = document.getElementById('img03');
let captionText3 = document.getElementById('caption3');
img3.onclick = function () {
  modal3.style.display = 'block';
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};
