const btnMaximize = document.getElementById('maximize');
const divModal = document.getElementsByClassName('div-modal')[0];
const btnClose = document.getElementById('close');
const modal = document.getElementsByClassName('modal')[0]

btnMaximize.addEventListener('click', () => {
    divModal.classList.add('fullscreen');
})

btnClose.addEventListener('click', () => {
    modal.classList.add('close-modal');
})

const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', () => {
        console.log('olá')
        const cardId = card.getAttribute('id');
        if(cardId == 0){
            divModal.classList.remove('fullscreen');
            modal.classList.remove('close-modal');
            document.getElementsByClassName('iframe-modal')[0].setAttribute('src','')
            document.getElementsByClassName('iframe-modal')[0].setAttribute('src','https://rocketseat.com.br/starter')
        }else if(cardId == 1){
            divModal.classList.remove('fullscreen');
            modal.classList.remove('close-modal');
            document.getElementsByClassName('iframe-modal')[0].
            setAttribute('src','https://rocketseat.com.br/launchbase')
        }else if(cardId == 2){
            divModal.classList.remove('fullscreen');
            modal.classList.remove('close-modal');
            document.getElementsByClassName('iframe-modal')[0].setAttribute('src','https://rocketseat.com.br/gostack')
        }
    })
}