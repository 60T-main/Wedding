const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {yesButton()});
noBtn.addEventListener('click', () => { });


const section1 = document.querySelector('.infoSection'),
      section2 = document.querySelector('.infoSection2'),
    section3 = document.querySelector('.infoSection3');


const thanksCard = document.querySelector('.thanksCard');
      
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



    thanksCard.style.setProperty("display", "flex", "important");
    thanksCard.classList.add('animate');

    setTimeout(() => {
            sections.forEach(section => {
        section.style.setProperty("visibility", "visible", "important");
        section.style.setProperty("display", "flex", "important");
        section.style.setProperty("display", "flex", "important");
    });
      section1.scrollIntoView({
        behavior: "smooth"
        });
}, 3000); // time in milliseconds


}


const guestName = getName()
showName(guestName)