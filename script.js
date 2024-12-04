const infor = document.getElementById('info');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let cardId = 0

const cards = (id) => {
    fetch("main.json")
    .then((res) => res.json())
    .then((data) => {
        const card = data[id]
        if(card) {
            const {name,info,img,id} = card
            infor.innerHTML = `
            <h2 id="name">${name}</h2>
            <p id="inforamtion">${info}</p>
            <img src="${img}" alt="">
            `;
            document.body.style.backgroundImage = `url('${img}')`;
            document.body.style.backgroundSize = 'cover';
        }
    })
}
cards(cardId)

next.onclick = () => {
    cardId++
    if(cardId > 11) cardId = 0
    cards(cardId)
}
prev.onclick = () => {
    cardId--
    if(cardId < 0) cardId = 11
    cards(cardId)
}
document.onkeydown = (e) => {
    if(e.key === 'ArrowRight') {
        cardId++
        if(cardId > 11) cardId = 0
        cards(cardId)
    } else if (e.key === 'ArrowLeft') {
        cardId--
        if(cardId < 1) cardId = 11
        cards(cardId)
    }
}