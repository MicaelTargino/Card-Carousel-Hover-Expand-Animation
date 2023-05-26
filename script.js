// btns and card-groups variables
const btnX = document.querySelector('button#x');
const btnS2 = document.querySelector('button#heart');
const cards = document.querySelectorAll('.card-group');

// insert eventlisteners
btnX.addEventListener('click', getBefore);
btnS2.addEventListener('click', getAfter);


// function to get the before 
function getBefore() {
    // get active index
    const atual = document.querySelector('.card-group.card-active');
    const index = atual.dataset.index;

    // remove active
    cards[index].classList.remove('card-active');
    cards[index].classList.remove('card-active-before');
    cards[index].classList.remove('card-active-after');
    cards[index].classList.add('card-inactive-before');
    cards[index].classList.add('card-inactive');

    // bring next
    const index_novo = getNextIndex(index, 'before');
    const novo = document.querySelector(`[data-index='${index_novo}']`);
    novo.classList.remove('card-inactive');
    novo.classList.remove('card-inactive-before');
    novo.classList.remove('card-inactive-after');
    novo.classList.add('card-active-after');
    novo.classList.add('card-active');
    
    // update dataset of next and before correctly
    novo.dataset.status = 'active';
    const index_acima = getNextIndex(index_novo, 'after');
    const index_abaixo = getNextIndex(index_novo, 'before');
    const novo_mais_um = document.querySelector(`[data-index='${index_acima}']`);
    const novo_menos_um = document.querySelector(`[data-index='${index_abaixo}']`);
    novo_mais_um.dataset.status = 'after';
    novo_menos_um.dataset.status = 'before';
}

// function to get the next
function getAfter() {
    //get active index
    const atual = document.querySelector('.card-group.card-active');
    const index = atual.dataset.index;

    // remove the active
    cards[index].classList.remove('card-active');
    cards[index].classList.remove('card-active-before');
    cards[index].classList.remove('card-active-after');
    cards[index].classList.add('card-inactive-after');
    cards[index].classList.add('card-inactive');

    // bring the next
    const index_novo = getNextIndex(index, 'after');
    const novo = document.querySelector(`[data-index='${index_novo}']`);
    novo.classList.remove('card-inactive');
    novo.classList.remove('card-inactive-before');
    novo.classList.remove('card-inactive-after');
    novo.classList.add('card-active-before');
    novo.classList.add('card-active');

    // update dataset of next and before correctly
    novo.dataset.status = 'active';
    const index_acima = getNextIndex(index_novo, 'after');
    const index_abaixo = getNextIndex(index_novo, 'before');
    const novo_mais_um = document.querySelector(`[data-index='${index_acima}']`);
    const novo_menos_um = document.querySelector(`[data-index='${index_abaixo}']`);
    novo_mais_um.dataset.status = 'after';
    novo_menos_um.dataset.status = 'before';
}


// function to get the next index without getting out of range (0-2)
function getNextIndex(index, sentido) {
    if (sentido == 'after') {
        if ((parseInt(index) + 1) > 2) {
            return 0
        } else {
            return (parseInt(index) + 1)
        }
    } else {
        if ((parseInt(index) - 1) < 0) {
            return 2
        } else {
            return (parseInt(index) - 1)
        }
    }
}