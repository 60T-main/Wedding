const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');


yesBtn.addEventListener('click', () => {yesButton()});
noBtn.addEventListener('click', () => {noButton()});

const section1 = document.querySelector('.infoSection'),
section2 = document.querySelector('.infoSection2'),
section3 = document.querySelector('.infoSection3');

const sections = [section1, section2, section3];

if (localStorage.getItem("yesClicked")) {
    showSections();
};

const thanksCard = document.querySelector('.thanksCard');
const sorryCard = document.querySelector('.sorryCard');


const music = new Audio('./audio/wedding.mp3');
const sadMusic = new Audio('./audio/sad-music.mp3');
const pauseButton = document.querySelector('.pauseButton');
const playButton = document.querySelector('.playButton');

const loader = document.querySelector('.loaderDiv')
const main = document.querySelector('.main')

const locationBetlemi = document.querySelector('.zemoBetlemi');
const locationShuaguli = document.querySelectorAll('.shuaguli');

locationBetlemi.addEventListener('click', () => {
    linkMap('betlemi')
})

locationShuaguli.forEach((location) => {
    location.addEventListener('click', () => {
        linkMap()
    })
    
})

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "block";
    }, 2000); 
});
      
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
    

    localStorage.setItem("yesClicked", "True");

    musicFunc('wedding')

    thanksCard.style.setProperty("display", "flex", "important");
    thanksCard.classList.add('animate');

    setTimeout(() => {
            showSections();
      section1.scrollIntoView({
        behavior: "smooth"
      });
        
        thanksCard.style.setProperty("display", "none", "important");
}, 5000); 
}


function noButton() {

    musicFunc('sad')
    
    sorryCard.style.setProperty("display", "flex", "important");
    sorryCard.classList.add('animate');

    setTimeout(() => {

        sorryCard.style.setProperty("display", "none", "important");
        
    }, 8000);

}

function linkMap(location) {

    let link = (location == 'betlemi') ? 'https://maps.app.goo.gl/PatECL6BxgohpPHK7' : 'https://maps.app.goo.gl/HrXuD2SRMjg9UzDr9';
    
    window.open(link, '_blank');
}

let lastPlayed = null;

function musicFunc(type) {

    sadMusic.volume = 0.09;

    let currentMusic = (type === "wedding") ? music : sadMusic;
    let otherMusic = (type === "wedding") ? sadMusic : music;

     lastPlayed = type;
    
    
    if (!otherMusic.paused) {
        otherMusic.pause();
        otherMusic.currentTime = 0; 
    }

    if (currentMusic.paused) {
        currentMusic.play();
        pauseButton.style.setProperty("display", "flex", "important");
        playButton.style.setProperty("display", "none", "important");
    } else {
        currentMusic.pause();
        pauseButton.style.setProperty("display", "none", "important");
        playButton.style.setProperty("display", "flex", "important");
    }
}

pauseButton.addEventListener('click', () => {
    if (lastPlayed) musicFunc(lastPlayed);
});

playButton.addEventListener('click', () => {
    if (lastPlayed) musicFunc(lastPlayed);
});



function showSections(){
    sections.forEach(section => {
        section.style.setProperty("visibility", "visible", "important");
        section.style.setProperty("display", "flex", "important");
    });
}


// animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));



const guestName = getName()
showName(guestName)