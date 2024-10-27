//array containing all the functions for the pages
var links = [
  diabetes_link,
  heart_link,
  high_cholesterol_link,
  inflammation_link,
  kids_link,
  pressure_link,
  vegan_link,
  aff_link,
  allergies_link,
  colds_and_flus_link,
  headaches_link,
  diarrhea_link,
  conjunctivitis_link,
  mononucleosis_link, 
  stomachaches_link,
  hypertrophy_link,
  strength_link,
  endurance_link,
  nothing
];

document.getElementById('send-btn').addEventListener(
  'click', sendMessage
);

function sendMessage() {
  var x;
  const userInput = document.getElementById('user-input').value;

  if (userInput.trim() === '') return;

  appendMessage('User', userInput);
  document.getElementById('user-input').value = '';
  // Simple bot response logic
  let botResponse = getBotResponse(userInput);

  if (userInput === "diabetes friendly recipes") {
    x = 0;
  } else if (userInput === "heart friendly recipes") {
    x = 1;
  } else if (userInput === "low-cholesterol recipes") {
    x = 2;
  } else if (userInput === "anti-inflamation recipes") {
    x = 3;
  } else if (userInput === "healthy recipes for kids") {
    x = 4;
  } else if (userInput === "blood pressure friendly recipes") {
    x = 5;
  } else if (userInput === "vegan friendly recipes") {
    x = 6;
  } else if (userInput === "affirmation words") {
    x = 7;
  } else if (userInput === "allergies") {
    x = 8;
  } else if (userInput === "colds and flus") {
    x = 9;
  } else if (userInput === "headaches") {
    x = 10;
  } else if (userInput === "diarrhea") {
    x = 11;
  } else if (userInput === "conjunctivitis") {
    x = 12;
  } else if (userInput === "mononucleosis") {
    x = 13;
  } else if (userInput === "stomachaches") {
    x = 14;
  } else if (userInput === "hypertrophy") {
    x = 15;
  } else if (userInput === "strength") {
    x = 16;
  } else if (userInput === "endurance") {
    x = 17;
  } else {
    x = 18;
  }
  setTimeout(() => {
    appendMessage('Bot', botResponse + links[x]());
  }, 500); // Simulate typing delay
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');

  console.log(message);
  messageElement.textContent = `${sender}: ${message}`;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;

}

//-----------------PAGE FUNCTION DECLARATION------------------
function nothing() {
  var word = ".";
  return "";
}
//Link for diabetes
function diabetes_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Diabetes Friendly Recipes");
  a.appendChild(link);
  a.href = "diabetes.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
//Link for inflammation
function inflammation_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Anti-Inflammation Recipes");
  a.appendChild(link);
  a.href = "inflammation.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
//Link for heart health
function heart_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Heart Friendly Recipes");
  a.appendChild(link);
  a.href = "heart.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
//Link for vegan
function vegan_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Vegan Friendly Recipes");
  a.appendChild(link);
  a.href = "vegan.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
//Link for low-cholesterol
function high_cholesterol_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Low Cholesterol Recipes");
  a.appendChild(link);
  a.href = "high_cholesterol.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
//Link for kids
function kids_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Healthy Recipes for Kids");
  a.appendChild(link);
  a.href = "kids.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
//Link for pressure
function pressure_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Blood Pressure Friendly Recipes");
  a.appendChild(link);
  a.href = "pressure.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function aff_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Affirmations");
  a.appendChild(link);
  a.href = "Aff.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function allergies_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Allergies Tips");
  a.appendChild(link);
  a.href = "allergies.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function colds_and_flus_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Colds and Flus Tips");
  a.appendChild(link);
  a.href = "colds_and_flus.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function headaches_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Headaches Tips");
  a.appendChild(link);
  a.href = "headaches.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function diarrhea_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Diarrhea Tips");
  a.appendChild(link);
  a.href = "diarrhea.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function conjunctivitis_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Conjunctivitis/Pink Eye Tips");
  a.appendChild(link);
  a.href = "conjunctivitis.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function mononucleosis_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Mononucleosis Tips");
  a.appendChild(link);
  a.href = "mononucleosis.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function stomachaches_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Stomachaches Tips");
  a.appendChild(link);
  a.href = "stomachaches.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function hypertrophy_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Hypertrophy Training Guide");
  a.appendChild(link);
  a.href = "hypertrophy.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function strength_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Strength Training Guide");
  a.appendChild(link);
  a.href = "strength.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}
function endurance_link() {
  let a = document.createElement("a");
  var link = document.createTextNode("Endurance Training Guide");
  a.appendChild(link);
  a.href = "endurance.html";
  document.getElementById("chat-box").appendChild(a);
  return "";
}


//-------------------BOT GENERATED RESPONSES---------------

function getBotResponse(userInput) {
  const responses = {
    'hi': 'Hello! How can I help you today? Here are some things I can help with: diabetes friendly recipes, heart friendly recipes, vegan friendly recipes, anti-inflamation recipes, blood pressure friendly recipes, healthy recipes for kids, and low-cholesterol recipes. Type any of these into the chatbox if you need more information. If you need informations regarding allergies, colds & flus or headaches, please type of the following. If you need some supportive words, you can type affirmation words. Type other if you need something else.',

    'hola': 'Hello! How can I help you today? Here are some things I can help with: diabetes friendly recipes, heart friendly recipes, vegan friendly recipes, anti-inflamation recipes, blood pressure-friendly recipes, healthy recipes for kids, and low-cholesterol recipes. Type any of these into the chatbox if you need more information. If you need informations regarding allergies, colds & flus or headaches, please type of the following. If you need some supportive words, you can type affirmation words. Type other if you need something else.',

    'allergies': 'Click on the link to learn about some common allergies',

    'colds and flus': 'Click on the link to learn about colds and flus',

    'headaches': 'Click on the link to learn about headaches',

    'diarrhea': 'Click on the link to learn about diarrhea',

    'conjunctivitis': 'Click on the link to learn about conjunctivitis/pink eye',
    
    'mononucleosis': 'Click on the link to learn about mononucleosis',

    'stomachaches': 'Click on the link to learn about stomachaches',

    'hypertrophy': 'Click on the link to learn about making your own hypertrophy training program',

    'strength': 'Click on the link to learn about making your own strength training program',

    'endurance': 'Click on the link to learn about making your own endurance training program',

    'diabetes friendly recipes': 'Patients who have diabetes should cut back on fried foods, sweets, sugary drinks and other salty or fatty foods. Patients are recommended to intake about 45 - 60 grams of carbs per meal, the number might be varied based on the patient’s intake for medication or exercise frequency. Click on the link for more informations of diabetes-friendly recipes.',

    'heart friendly recipes': 'Patients who have heart problems should prioritize and look for fiber, sodium and saturated fats in their meals. Eating foods that are high in sodium can lead to high blood pressure, a risk factor for heart disease which should be avoided. Click on the link for more informations of heart healthy recipes.',

    'vegan friendly recipes': 'A vegan diet is defined as avoiding food directly from animal products and is mostly plant based. A vegan diet has many benefits as there are lower rates of cardiovascular disease risk likely due to decreased intake of animal fat, and overall a lot healthier. Click on the link for more informations of vegan healthy recipes.',

    'anti-inflamation recipes': 'An anti-inflammatory diet often consists of eating fresh and healthy foods that are high in antioxidants. Patients often have to cut back from highly processed foods that are known to cause inflammation. They are recommended to include 40 to 50 percent of calories from carbs, 30 percent of calories from fat, and 20 to 30 percent of calories from protein. Click on the link for more informations of anti-inflamation recipes.',

    'blood pressure friendly recipes': 'People who suffer from high blood pressure usually follow a mediterranean diet that helps lower blood pressure. Mediterranean diets focus on foods high in potassium and fiber. Many of these elements are found in vegetables and fruits that are easily accessible like avocado, banana, spinach, broccoli, beans and more. Click on the link for more informations of blood pressure-friendly recipes.',

    'healthy recipes for kids': 'Click on the link for more informations of healthy recipes for kids.',

    'low-cholesterol recipes': 'People with high cholesterol need to limit their intake of fatty substances. They should avoid food with saturated fats, such as processed foods, deep fried fast foods, and butter. To lower their cholesterol, their meals need to include plenty of vegetables, fruit and wholegrains, as well as healthy protein-rich foods. Click on the link for more informations of healthy low-cholesterol recipes.',

    'affirmation words': 'Click on the link for a page with more affirmation words.',

    'other': 'I can give you suggestions about activities to do during your free time when you type I am bored. You can also ask me about diarrhea, conjunctivitis, mononucleosis, and stomachaches. If you want to know more about exercise training, type hypertrophy, strength, or endurance to learn more. If you need conversations about your feeling, tell me how you feel today.',

    'good': 'I am glad that you are having a good day.',

    'bad': 'I’m really sorry to hear that.',

    'hello': 'Hi there! What can I do for you? Here are some things I can help with: diabetes friendly recipes, heart friendly recipes, vegan friendly recipes, anti-inflamation recipes, blood pressure-friendly recipes, healthy recipes for kids, and low-cholesterol recipes. Type any of these into the chatbox if you need more information. If you need informations regarding allergies, colds & flus or headaches, please type of the following. If you need some supportive words, you can type affirmation words. Type other if you need something else.',

    'how are you': 'I am just a bot, but I am doing great! How about you?',

    'what is your name': 'I am a chatbot. You can call me HealthTalk.',

    'bye': 'Goodbye! Have a great day!',

    'thank you': 'You\'re welcome! If you have any more questions, feel free to ask.',

    'what is your favorite color': 'My favorite color is green, because it reminds me of nature.',

    'what is your favorite food': 'I don\'t eat food, but I like to eat healthy.',

    'i am bored': 'Feel free to check out our recipes. Some other suggestions for activities to do during your free time are playing Sims 4 and Animal Crossing, watching Netflix, crochet, or go out for a walk.'
  }

  const defaultResponse = "I didn't understand that. Can you try asking something else?";
  return responses[userInput.toLowerCase()] || defaultResponse;
}

const audio = new Audio(src = "Button.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});