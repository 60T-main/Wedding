function getName() {
    const params = new URLSearchParams(window.location.search);

    if (params.has("name")) {
        return params.get('name');
        
}
    
} 

function showName(guestName) {
    document.getElementById('guestName').innerHTML = `Zvirfaso ${guestName}`
}



const guestName = getName()
showName(guestName)