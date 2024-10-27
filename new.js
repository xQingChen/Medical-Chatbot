//Change the words when clicked
var factList = ["Happiness is a choice, and today I choose to be happy.", "I am a living, breathing example of motivation.", "Healthy food fuels my body.", "My life is a gift","I am worthy","I am exactly where I need to be at this moment","I treat myself with the same kindness and compassion as anyone else I love","I have enough. I know enough. I am enough.","There are no limits to what I can achieve","I am learning, growing, and becoming better every moment.","Every breath is a new beginning.","Happiness is my birthright.","I honor my body today and practice listening and responding to what it needs."];

var fact = document.getElementById("words");
const myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener(
  'click', displayQuote
);

function displayQuote() {
  console.log("button was clicked");
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

// Change image when clicked
var myImg = new Array("Aff1.png","Aff2.png","Aff3.png","Aff4.png","Aff5.png","Aff6.png","Aff7.png","Aff8.png","Aff9.png","Aff10.png","Aff11.png","Aff12.png","Aff13.png");

function choosePic() {
   var randomNum = Math.floor(Math.random() * myImg.length);
   document.getElementById("AffI").src = myImg[randomNum];
}

myBtn.addEventListener(
  'click', choosePic
);

//button click sound
const audio = new Audio(src = "Button.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
