const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {yesButton()});
noBtn.addEventListener('click', () => { });


const section1 = document.querySelector('.infoSection'),
      section2 = document.querySelector('.infoSection2'),
    section3 = document.querySelector('.infoSection3');


const thanksCard = document.querySelector('.thanksCard');

const music = new Audio('./audio/wedding.mp3');
const pauseButton = document.querySelector('.pauseButton')
const playButton = document.querySelector('.playButton')
pauseButton.addEventListener('click', () => {
    musicFunc()
});
playButton.addEventListener('click', () => {
    musicFunc()
});

const loader = document.querySelector('.loaderDiv')
const main = document.querySelector('.main')

window.onload = () => {
    loader.style.display = "none"
    main.style.display = "block";
}
      
function getName() {
    const params = new URLSearchParams(window.location.search);

    if (params.has("name")) {
        if (params.get("name") == "") {
            return "stumaro"
        } else {
            return params.get("name")
        }
    } else {
        return "stumaro"
        }; 
    
} 

function showName(guestName) {
    document.getElementById('guestName').innerHTML = `Zvirfaso ${guestName}`
}


function yesButton() {
    const sections = [section1, section2, section3];

    music.play();
    pauseButton.style.setProperty("display", "flex", "important");

    thanksCard.style.setProperty("display", "flex", "important");
    thanksCard.classList.add('animate');

    setTimeout(() => {
            sections.forEach(section => {
        section.style.setProperty("visibility", "visible", "important");
        section.style.setProperty("display", "flex", "important");
    });
      section1.scrollIntoView({
        behavior: "smooth"
      });
        
        thanksCard.style.setProperty("display", "none", "important");
}, 3000); // time in milliseconds
}

function musicFunc() {
    if (!music.paused) {
        music.pause();
        pauseButton.style.setProperty("display", "none", "important");
        playButton.style.setProperty("display", "flex", "important");
    } else {
        music.play();
        pauseButton.style.setProperty("display", "flex", "important");
        playButton.style.setProperty("display", "none", "important");
    }
}

const guestName = getName()
showName(guestName)