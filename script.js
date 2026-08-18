/* ======================================
   ENTER WEBSITE
====================================== */

const enterBtn =
  document.getElementById("enterBtn");

const introScreen =
  document.getElementById("introScreen");

const mainSite =
  document.getElementById("mainSite");


enterBtn.addEventListener(
  "click",
  () => {

    introScreen.classList.add("leave");

    mainSite.classList.remove(
      "hidden-site"
    );

    requestAnimationFrame(() => {

      mainSite.classList.add(
        "site-visible"
      );

    });

  }
);


/* ======================================
   PROFILE PICTURE EASTER EGG
====================================== */

const profilePicture =
  document.getElementById(
    "profilePicture"
  );

const pictureMessage =
  document.getElementById(
    "pictureMessage"
  );


const pictureMessages = [
  "ngah la loh!",
  "A ngah la loh ka ti cu",
  "Na ka uar pah ko hih 😌",
  "yup, that's still me.",
  "messenger in kan kuat la",
  "call me +240...",
  "Tha. you get +1 Van arbwar ✦"
];


let pictureClick = 0;

let pictureTimer;


profilePicture.addEventListener(
  "click",
  () => {

    pictureMessage.textContent =
      pictureMessages[
        pictureClick %
        pictureMessages.length
      ];


    pictureClick++;


    pictureMessage.classList.add(
      "show"
    );


    clearTimeout(pictureTimer);


    pictureTimer =
      setTimeout(() => {

        pictureMessage.classList.remove(
          "show"
        );

      }, 1800);

  }
);


/* ======================================
   MARRIAGE GAME
====================================== */

const noButton =
  document.getElementById(
    "noButton"
  );

const yesButton =
  document.getElementById(
    "yesButton"
  );

const noMessage =
  document.getElementById(
    "noMessage"
  );

const proposalStage =
  document.getElementById(
    "proposalStage"
  );

const yesStageTwo =
  document.getElementById(
    "yesStageTwo"
  );

const yesStageThree =
  document.getElementById(
    "yesStageThree"
  );

const proposalFinal =
  document.getElementById(
    "proposalFinal"
  );

const verySureButton =
  document.getElementById(
    "verySureButton"
  );

const thinkButton =
  document.getElementById(
    "thinkButton"
  );

const acceptButton =
  document.getElementById(
    "acceptButton"
  );

const restartProposal =
  document.getElementById(
    "restartProposal"
  );


const noMessages = [
  "nice try.",
  "wrong button 😭",
  "that option seems broken.",
  "no is currently unavailable.",
  "please select a valid answer.",
  "bro just say yes.",
  "system rejected your answer.",
  "404: no not found",
  "why are you chasing it? 😂"
];


let noAttempts = 0;


/*
  Moves the NO button somewhere
  else inside the proposal area.
*/

function moveNoButton() {

  const container =
    document.getElementById(
      "proposalButtons"
    );


  const containerWidth =
    container.clientWidth;

  const containerHeight =
    container.clientHeight;


  const buttonWidth =
    noButton.offsetWidth;

  const buttonHeight =
    noButton.offsetHeight;


  const maxX =
    containerWidth -
    buttonWidth;

  const maxY =
    containerHeight -
    buttonHeight;


  const randomX =
    Math.max(
      0,
      Math.random() * maxX
    );


  const randomY =
    Math.max(
      0,
      Math.random() * maxY
    );


  noButton.style.left =
    randomX + "px";

  noButton.style.top =
    randomY + "px";


  noMessage.textContent =
    noMessages[
      noAttempts %
      noMessages.length
    ];


  noAttempts++;

}


/*
  Desktop:
  NO escapes when mouse approaches.
*/

noButton.addEventListener(
  "mouseenter",
  moveNoButton
);


/*
  Mobile:
  NO escapes when touched.
*/

noButton.addEventListener(
  "touchstart",
  event => {

    event.preventDefault();

    moveNoButton();

  },
  {
    passive: false
  }
);


/*
  Just in case someone actually
  manages to click it...
*/

noButton.addEventListener(
  "click",
  event => {

    event.preventDefault();

    moveNoButton();

  }
);


/* YES */

yesButton.addEventListener(
  "click",
  () => {

    proposalStage.classList.add(
      "hidden"
    );

    yesStageTwo.classList.remove(
      "hidden"
    );

  }
);


/* VERY SURE */

verySureButton.addEventListener(
  "click",
  () => {

    yesStageTwo.classList.add(
      "hidden"
    );

    yesStageThree.classList.remove(
      "hidden"
    );

  }
);


/*
  "Let me think" doesn't actually
  escape the situation.
*/

thinkButton.addEventListener(
  "click",
  () => {

    thinkButton.textContent =
      "thinking time expired 😭";


    setTimeout(() => {

      thinkButton.textContent =
        "okay fine, continue →";


      thinkButton.onclick =
        () => {

          yesStageTwo.classList.add(
            "hidden"
          );

          yesStageThree.classList.remove(
            "hidden"
          );

        };

    }, 700);

  }
);


/* ACCEPT CONTRACT */

acceptButton.addEventListener(
  "click",
  () => {

    yesStageThree.classList.add(
      "hidden"
    );

    proposalFinal.classList.remove(
      "hidden"
    );

  }
);


/* RESTART */

restartProposal.addEventListener(
  "click",
  () => {

    proposalFinal.classList.add(
      "hidden"
    );

    proposalStage.classList.remove(
      "hidden"
    );


    noButton.style.left = "58%";
    noButton.style.top = "20px";


    noMessage.textContent = "";


    noAttempts = 0;

  }
);


/* ======================================
   COMPATIBILITY TEST
====================================== */

const compatibilityButton =
  document.getElementById(
    "compatibilityButton"
  );

const compatibilityNumber =
  document.getElementById(
    "compatibilityNumber"
  );

const compatibilityMessage =
  document.getElementById(
    "compatibilityMessage"
  );


const compatibilityMessages = [
  "Ke tawi ngang i Mawtaw dawi cah ngang😂",
  "Kaa thut ngang i Biathli chimh cah ngang😂",
  "Hnerhte a lu lian pi pi tlaih i seh ter😂",
  "Na mui chia na tein, Na zia zong tha hlei lo🥲",
  "Na dawh tuk na tein, Na cang tuk cang🥲",
  "Na nau rawl peknak zong tha,na voih bawm zong lian😌"
];


compatibilityButton.addEventListener(
  "click",
  () => {

    compatibilityButton.disabled = true;

    compatibilityButton.textContent =
      "analyzing...";


    compatibilityNumber.textContent =
      "0";


    compatibilityMessage.textContent =
      "checking vibes...";


    let current = 0;


    /*
      We intentionally make compatibility
      suspiciously high. 😌
    */

    const finalScore =
      Math.floor(
        Math.random() * 11
      ) + 90;


    const counter =
      setInterval(() => {

        current += 2;


        if (current >= finalScore) {

          current = finalScore;

          clearInterval(counter);


          compatibilityButton.disabled =
            false;


          compatibilityButton.textContent =
            "Search again";


          const randomMessage =
            compatibilityMessages[
              Math.floor(
                Math.random() *
                compatibilityMessages.length
              )
            ];


          compatibilityMessage.textContent =
            randomMessage;

        }


        compatibilityNumber.textContent =
          current;

      }, 25);

  }
);


/* ======================================
   RANDOM MOOD
====================================== */
/*
const moodButton =
  document.getElementById(
    "moodButton"
  );

const moodText =
  document.getElementById(
    "moodText"
  );


const moods = [
  "probably hungry",
  "pretending to be productive",
  "thinking about food",
  "online for absolutely no reason",
  "emotionally attached to my bed",
  "surviving somehow",
  "waiting for something interesting",
  "replaying the same song again",
  "doing nothing professionally",
  "99% tired",
  "currently buffering...",
  "thinking unnecessary thoughts",
  "existing successfully"
];


moodButton.addEventListener(
  "click",
  () => {

    const randomMood =
      moods[
        Math.floor(
          Math.random() *
          moods.length
        )
      ];


    moodText.style.opacity = "0";


    setTimeout(() => {

      moodText.textContent =
        randomMood;


      moodText.style.opacity = "1";

    }, 180);

  }
);
*/

/* ======================================
   DON'T CLICK BUTTON
====================================== */

const chaosButton =
  document.getElementById(
    "chaosButton"
  );

const chaosMessage =
  document.getElementById(
    "chaosMessage"
  );


const chaosMessages = [
  "I literally said don't click it.",
  "again??",
  "nothing happens here 😭",
  "you have too much free time.",
  "okay here's a ⭐",
  "fine, you win.",
  "bro 💀",
  "please find a hobby.",
  "still clicking?",
  "this button has trust issues now.",
  "+1 internet point ✦",
  "congratulations. absolutely nothing happened.",
  "suspicious behavior detected.",
  "your FBI agent is confused.",
  "okay now we're friends.",
  "plot twist: still nothing.",
  "stop 😭",
  "why is this entertaining you?",
  "I respect the dedication."
];


let previousChaos = -1;


chaosButton.addEventListener(
  "click",
  () => {

    let index;


    do {

      index =
        Math.floor(
          Math.random() *
          chaosMessages.length
        );

    }
    while (
      index === previousChaos
    );


    previousChaos = index;


    chaosMessage.textContent =
      chaosMessages[index];


    chaosMessage.classList.remove(
      "pop"
    );


    void chaosMessage.offsetWidth;


    chaosMessage.classList.add(
      "pop"
    );

  }
);




/* ======================================
   CURSOR GLOW
====================================== */

const cursorGlow =
  document.getElementById(
    "cursorGlow"
  );


document.addEventListener(
  "mousemove",
  event => {

    if (
      window.innerWidth < 700
    ) {
      return;
    }


    cursorGlow.style.left =
      event.clientX + "px";


    cursorGlow.style.top =
      event.clientY + "px";

  }
);