// Define the story as an array of scenes
const story = [
  {
    id: "Start",
    text: "... It's loud.",

    button1: {
      text: "NEXT",
      next: "Listen",
    },
    location: "Outside",
  },
  {
    id: "Listen",
    text: "The resonant whispers of the weeping willows that line the outside of the yard and the persistant buzz of the cicada emergence nearby fills your thoughts with unpleasent feelings of angst. ",
    button1: {
      text: "NEXT",
      next: "The grass",
    },
    location: "Outside",
  },
  {
    id: "The grass",
    text: "You're sitting on your front porch, staring up at the heavy moon that shines down on the dewy grass from the rain earlier. The smell of the wet grass triggers a sentimental feeling of nostalgia, but you cant recall any specific memories.",
    button1: {
      text: "NEXT",
      next: "Remember",
    },
    location: "Outside",
  },
  {
    id: "Remember",
    text: "You forgot to take your pills this morning. Do you go inside and take them?",
    button1: {
      text: "TAKE YOUR PILLS",
      next: "Take your pills",
    },
    button2: {
      text: "GO TO THE CREEK",
      next: "The creek",
    },
    button3: {
      text: "LOOK FOR YOUR CAT",
      next: "Search for cat",
    },
    location: "Outside",
  },
  {
    id: "Take your pills",
    text: "You go inside, walking over to your bedroom to retrieve your pills from the bedside table. You shake the bottle, attempting to guage how many are left in there. There are enough left for a couple more days before you need a refill at the pharmacy. Are you sure you want to take them? ",
    button1: {
      text: "TAKE THEM",
      next: "Neutral ending",
    },
    button2: {
      text: "THROW THEM AWAY",
      next: "Throw them away",
    },
    location: "Bedroom",
  },
  {
    id: "Neutral ending",
    text: "You take one of the pills out of the bottle, swallowing it dry. You feel the small lump go down your throat, and you feel a small sense of regret. You look outside. The moon seems bigger than usual. The dizziness takes over you, and you just barely manage to make your way over to your bed before passing out.",
    button1: {
      text: "RESTART",
      next: "Start",
    },
    location: "Pills",
    status: "neutral",
  },
  {
    id: "Throw them away",
    text: "You open the bottle before walking over to your bathroom and flushing all your pills down the toilet. You know what you did was wrong, but the sedation is such a horrifying thought. The phone buzzes on your bed, along side your mothers ring tone. Do you wish to speak to her?",
    button1: {
      text: "ANSWER",
      next: "Answer the call",
    },
    button2: {
      text: "DECLINE",
      next: "Decline the call",
    },
    location: "Bathroom",
  },
  {
    id: "Decline the call",
    text: "You unlock your phone to see who’s calling you even if you know from the ring tone its your mother. You don’t want to talk to her right now. You just know she's going to nag you about taking your medication or making sure i eat enough. ",
    button1: {
      text: "GO TO BED",
      next: "In bed",
    },
    button2: {
      text: "LOOK FOR YOUR CAT",
      next: "Search for cat",
    },
    button3: {
      text: "GO TO THE CREEK",
      next: "The creek",
    },
    location: "Bedroom",
  },
  {
    id: "Answer the call",
    text: "She speaks up first, saying how she’s 5 minutes away and to be ready. You've missed her, hearing her voice fills you with a relief, like a heavy stone has been lifted off you. Surely enough, she arrives shortly after with some groceries and snacks for you. You explain to her your day, and how you flushed your pills, and she hugs you. Despite it being the middle of the night, it's like her motherly senses knew something was wrong.",
    button1: {
      text: "LISTEN TO HER",
      next: "Listen to her",
    },
    location: "Kitchen",
  },
  {
    id: "Listen to her",
    text: "'It's okay, i understand. But you still need to take them. How about tomorrow morning we go down to the pharmacy and get you some new ones?' She says.",
    button1: {
      text: "AGREE",
      next: "Good ending",
    },
    location: "Kitchen",
  },
  {
    id: "Good ending",
    text: "The next day, you wake up next to your mother. You feel a warm, fuzzy feeling of nostalgia, reminding you of when you were a child and your mother would soothe you to sleep after having a nightmare. She's still asleep, so knowing she'd wake you when she woke up you felt safe going back to sleep.",
    button1: {
      text: "RESTART",
      next: "Start",
    },
    location: "Bedroom",
    status: "good",
  },
  {
    id: "Stay outside",
    text: "The weight of your feelings is too much to bear for you to stand up for now, so you decide to stay outside. There is a part of you that is nagging you about being slothful. 'Don't be lazy, take your pills.' you can hear your inner voice say. 'You know what happens if you don’t. You need them.' It's loud. Everything is too loud, it feels like you're being engulfed by the sounds around you. This is wrong, something is wrong. Will you go look for your cat or head down to the creek?",
    button1: {
      text: "GO TO THE CREEK",
      next: "The creek",
    },
    button2: {
      text: "LOOK FOR YOUR CAT",
      next: "Search for cat",
    },
    location: "Outside",
  },
  {
    id: "The creek",
    text: "You decide to head down to the creek that leads down to the river brook. There are many autumn leaves that have fallen and are drifting through the cold stream, and the rocks that make up the bed for the beck. Among the rocks, you see a white piece of cloth that catches your eye.",
    button1: {
      text: "LEAVE THE CREEK",
      next: "Leave the creek",
    },
    button2: {
      text: "PICK UP THE CLOTH",
      next: "The cloth",
    },
    location: "Creek",
  },
  {
    id: "Leave the creek",
    text: "Despite the calming sound of running water, you decide to leave after a sudden chill spreads through you. Do you go inside or go look for your cat?",
    button1: {
      text: "LOOK FOR YOUR CAT",
      next: "Search for cat",
    },
    button2: {
      text: "GO INSIDE",
      next: "The bedroom",
    },
    location: "Creek",
  },
  {
    id: "The cloth",
    text: "After reaching your hand in to the numbing cold water, you pick up the cloth and observe it. It's soaked, but you can make out a dark red stain in the left corner of the cloth, which you assume was someone's handkerchief. A sudden feeling of unease washes upon you, as if you felt a pair of eyes on you. You quickly drop the handkerchief, looking around you hurriedly, searching for any sign of life, but finding none. The trees bring shade from the silvery moon, making everything harder to see. In your panic you slip on the wet mud, causing you to fall down in to the running creek and drenching you in ice cold water. ",
    button1: {
      text: "LEAVE",
      next: "Going inside",
    },
    location: "Water",
  },
  {
    id: "Going inside",
    text: "You stand up, your clothes dripping. The air suddenly and unsurprisingly feels much colder than before, the sparse forest feeling unwelcoming. While you're walking out of the forest to go dry off at home, you feel the unease of someone watching disappear. As you enter the front door, you glance over your cat's food bowl. how long has that been empty? you cant remember. You pay it no more mind.",
    button1: {
      text: "ENTER THE BATHROOM",
      next: "The bathroom",
    },
    location: "Inside",
  },
  {
    id: "The bathroom",
    text: "You take off your wet clothes and throw them in the laundry bin, as you look at yourself in the mirror. You look like a mess. You have heavy eye bags, and your hair has matts. On the sink, there are several bottles of pills, and you eyes run to the bottle of aspirin. Thinking about it, your head hurt and you hadn't slept properly in weeks. There are voices coming from outside of the bathroom, two voices yelling something inaudible. But you know the house is empty. You're scared.",
    button1: {
      text: "TAKE YOUR PILLS",
      next: "Take your pills",
    },
    button2: {
      text: "GO TO SLEEP",
      next: "In bed",
    },
    location: "Bathroom",
  },
  {
    id: "Search for cat",
    text: "You remember how you have yet to see your cat Caligo today. You feel the frantic urge to go find her, to make sure she is okay. she usually comes home at night for her food, so you are worried something might have happened. Where will you look for her?",
    button1: {
      text: "SEARCH INSIDE",
      next: "Search inside",
    },
    button2: {
      text: "SEARCH THE PARK",
      next: "The park",
    },
    location: "Kitchen",
  },
  {
    id: "Search inside",
    text: "You enter your home, calling your cats name softly. Grabbing a pack of treats, you shake it hoping she'll recognize the sound and come to you. Soon after, you hear some faint noises or whines coming from the garage. It must be your cat.",
    button1: {
      text: "SEARCH THE GARDEN",
      next: "Bad ending 2",
    },
    button2: {
      text: "SEARCH THE GARAGE",
      next: "Search garage",
    },
    location: "Inside",
  },
  {
    id: "Search garage",
    text: "you enter the chilly garage, now hearing noises that cannot be described as something that could leave the mouth of a cat. It's a commanding voice shouting something at you, but you can not make out what they are saying or exactly where the noise is coming from. This fills you with a feeling of foreboding fear. Your brain is sending you warning signs, something bad will happen. its a disgusting feeling that overflows in your brain, telling you to get out. to do anything but stay here. Where will you go? ",
    button1: {
      text: "GO TO YOUR BEDROOM",
      next: "The bedroom",
    },
    location: "Garage",
  },
  {
    id: "The bedroom",
    text: "You walk up the stairs of your home, entering your bedroom and shutting the door behind you. Nothing feels right, but you cant quite tell why. You stare at the now empty pill bottle on your bedside table. You don't remember finishing the bottle, in fact you cant recall taking any of your pills this week. Your stomach drops, and you don't want to do anything apart from lay in your bed. The room is spinning, and you cant tell where you are standing anymore. You should lay down.  ",
    button1: {
      text: "LAY DOWN",
      next: "In bed",
    },
    location: "Bedroom",
  },
  {
    id: "In bed",
    text: "You lay down, feeling your body relax upon the feeling of your cold duvet covering your clothed body. The bed suddenly feels softer than it had ever felt. There are empty bottles of wine and spirits on the floor that you don't remember bringing up, let alone drinking. You cant seem to remember anything properly these days. Your eyes shut, falling asleep, drifting off quickly. ",
    button1: {
      text: "WAKE UP",
      next: "Awake",
    },
    location: "Bedroom",
  },
  {
    id: "Awake",
    text: "You wake up, and you look out of the window. its still dark outside, so you must not have slept much. you don't remember what you dreamt off, but you feel like you're dying. you're out of breath and sweating through your clothes, and you have an undeniable angst that you're being watched. like something is there. a cold shiver runs through your spine as you look around the room. Your eyes wander to the empty pill bottle on your night stand.  The air in the room starts feeling uncomfortable to breathe, and the pressure shifts. ",
    button1: {
      text: "STAND UP",
      next: "Bad ending 1",
    },
    location: "Bedroom",
  },
  {
    id: "Bad ending 1",
    text: "Your head falls in to your hands as you try to stabilize yourself, but you cant stop yourself from hearing the voice of someone whispering inaudibly to you. This was bad, you knew it was. this wasn't real, nothing was real anymore. You stand up, but the room tilts and your tongue starts feeling inexplicitly dry. All the shadows in the room starts staring at you, directly at you. They sway and lean towards you like they're mocking you. ",
    button1: {
      text: "RESTART",
      next: "RestartScreen",
    },
    location: "Hallucinations",
    status: "bad",
  },
  {
    id: "The park",
    text: "The park is totally empty, but you can still see the faint movements from the swing as if someone was using them recently. It smells like cigarettes and fresh cut grass, a smell that makes you uncomfortable. You call out for your cat, gently repeating her name in an attempt to lure her in. Your cat is no where to be seen, and you've grown tired. Where will you go? ",
    button1: {
      text: "SEARCH THE GARDEN",
      next: "Bad ending 2",
    },
    location: "Park",
  },
  {
    id: "Bad ending 2",
    text: "After walking around the neighborhood for half an hour with no result, you decide to search in your yard to see if she might have gotten hurt. You walk up to your hedge, crawling on your knees trying to look under the bushes. Not soon after, you find her. She's not moving, nor responding to your worried commands. You grab her body, pulling her out of the bushes. She's dead. She has no visible injuries, so you try to think about what might have killed her, that's when you remember that you haven't fed her in over a week. You killed her. ",
    button1: {
      text: "RESTART",
      next: "Start",
    },
    location: "Park",
    status: "bad",
  },
];
// DOM references
let textCard = document.getElementById("textCardContent");
let textCardOptions1 = document.getElementById("textCardOptions1");
let textCardOptions2 = document.getElementById("textCardOptions2");
let textCardOptions3 = document.getElementById("textCardOptions3");
let locationCard = document.getElementById("locationCard");
let startPage = document.querySelector(".startPage");
let mainCard = document.querySelector(".mainCard");
let endingScene = document.getElementById("endingScene");
let endingCard = document.getElementById("endingCard");

let currentSceneId = "Start";
let sceneHistory = [];
let gameStarted = false;

// Audio setup
let startSound = new Audio("audio/start.mp3");
startSound.loop = true;
let gameBgrSound = new Audio("audio/bgr.mp3");
gameBgrSound.loop = true;

function stopLoopingSounds() {
  startSound.pause();
  gameBgrSound.pause();
}

function playLoopSound(audio) {
  stopLoopingSounds();
  audio.currentTime = 0;
  audio.play();
}

// Load scene
function loadScene(sceneId, skipHistory) {
  const scene = story.find((s) => s.id === sceneId);
  if (!scene) return;

  if (!skipHistory && currentSceneId !== sceneId) {
    sceneHistory.push(currentSceneId);
  }

  currentSceneId = scene.id;
  localStorage.setItem("currentSceneId", scene.id);

  loadBackground(scene.location);

  textCard.textContent = scene.text;
  textCardOptions1.textContent = scene.button1.text;
  textCardOptions1.onclick = () => loadScene(scene.button1.next);

  if (scene.button2) {
    textCardOptions2.textContent = scene.button2.text;
    textCardOptions2.style.display = "block";
    textCardOptions2.onclick = () => loadScene(scene.button2.next);
  } else {
    textCardOptions2.style.display = "none";
  }

  if (scene.button3) {
    textCardOptions3.textContent = scene.button3.text;
    textCardOptions3.style.display = "block";
    textCardOptions3.onclick = () => loadScene(scene.button3.next);
  } else {
    textCardOptions3.style.display = "none";
  }

  // Show location or ending
  if (scene.status) {
    endingScene.style.display = "flex";
    endingCard.textContent = scene.status.charAt(0).toUpperCase() + scene.status.slice(1) + " ending";
    locationCard.style.display = "none";
    stopLoopingSounds();
  } else {
    endingScene.style.display = "none";
    locationCard.style.display = "block";
    if (gameStarted && gameBgrSound.paused) playLoopSound(gameBgrSound);
  }

  currentLocation();
}

// Start game
function startGame() {
  gameStarted = true;
  startPage.style.display = "none";
  mainCard.style.display = "block";
  locationCard.style.display = "block";
  endingScene.style.display = "none";
  sceneHistory = [];
  playLoopSound(gameBgrSound);
  loadScene("Start");
}

// Show start screen
function showStartScreen() {
  gameStarted = false;
  startPage.style.display = "block";
  mainCard.style.display = "none";
  locationCard.style.display = "none";
  endingScene.style.display = "none";
  document.body.style.backgroundImage = "url('./img/Start.jpg')";
  playLoopSound(startSound);
}

// Background
function loadBackground(location) {
  let bg;
  switch (location) {
    case "Creek": bg = "img/Creek.jpg"; break;
    case "Pills": bg = "img/Pills.jpg"; break;
    case "Hallucinations": bg = "img/Hallucinations.jpg"; break;
    case "Outside": bg = "img/Outside.jpg"; break;
    case "Water": bg = "img/Water.jpg"; break;
    case "Inside": bg = "img/Kitchen.jpg"; break;
    case "Kitchen": bg = "img/Kitchen.jpg"; break;
    case "Bedroom": bg = "img/Bedroom.jpg"; break;
    case "Park": bg = "img/Park.jpg"; break;
    case "Garden": bg = "img/Garden.jpg"; break;
    case "Garage": bg = "img/Garage.jpg"; break;
    case "Bathroom": bg = "img/Bathroom.jpg"; break;
    default: bg = "img/Start.jpg";
  }
  document.body.style.backgroundImage = `url('${bg}')`;
}

// Current location display
function getLocationDisplayName(location) {
  const textLocation = {
    Hallucinations: "Bedroom",
    Pills: "Bedroom",
    Water: "Creek",
    Outside: "Outside",
    Inside: "Kitchen",
    Kitchen: "Kitchen",
    Bedroom: "Bedroom",
    Park: "Park",
    Garden: "Garden",
    Garage: "Garage",
    Bathroom: "Bathroom",
    Creek: "Creek",
  };
  return textLocation[location] || location;
}

function currentLocation() {
  const scene = story.find((s) => s.id === currentSceneId);
  if (scene && !scene.status) locationCard.textContent = getLocationDisplayName(scene.location);
}

// Keyboard controls
document.addEventListener("keydown", function (event) {
  if (!gameStarted) return; // ignore keypresses on start screen

  if (event.key === "r" || event.key === "Escape") {
    localStorage.removeItem("currentSceneId");
    showStartScreen();
  } else if (event.key === "Backspace") {
    if (sceneHistory.length > 0) {
      const previousScene = sceneHistory.pop();
      loadScene(previousScene, true);
    }
  } else if (event.key === "1" || event.key === " ") {
    if (textCardOptions1.onclick) textCardOptions1.click();
  } else if (event.key === "2") {
    if (textCardOptions2.style.display !== "none") textCardOptions2.click();
  } else if (event.key === "3") {
    if (textCardOptions3.style.display !== "none") textCardOptions3.click();
  }
});

// Load saved scene
const savedScene = localStorage.getItem("currentSceneId");
if (savedScene) {
  gameStarted = true;
  startPage.style.display = "none";
  mainCard.style.display = "block";
  locationCard.style.display = "block";
  endingScene.style.display = "none";
  playLoopSound(gameBgrSound);
  loadScene(savedScene);
} else {
  showStartScreen();
}