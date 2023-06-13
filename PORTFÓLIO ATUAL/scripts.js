window.sr = ScrollReveal({ reset: true });

const scrollreveal = {
    duration: 3000,
    easing: 'ease',
    scale: 0.90,
};

const scrollLeft = {
    duration: 2000,
    origin: 'left',
    distance: '30%',
    easing: 'ease',
    scale: 0.90
}

const scrollRight = {
    duration: 2000,
    origin: 'right',
    distance: '30%',
    easing: 'ease',
    scale: 0.90
}

sr.reveal('.eu', scrollreveal)
sr.reveal('#exemplo-do-projeto1', scrollreveal)
sr.reveal('#sobre-o-projeto1', scrollreveal)
sr.reveal('#exemplo-do-projeto2', scrollreveal)
sr.reveal('#sobre-o-projeto2', scrollreveal)
sr.reveal('.formulario', scrollLeft)
sr.reveal('.box-contatos', scrollRight)

const btn = document.querySelector('#ver-mais')
const projeto3 = document.querySelector('.projeto3')
const projeto4 = document.querySelector('.projeto4')

btn.addEventListener('click', () => {
    if (projeto3.style.display && projeto4.style.display === 'flex') {
        projeto3.style.display = 'none'
        projeto4.style.display = 'none'
        btn.innerText = 'VER MAIS'
        sr.reveal('#exemplo-do-projeto3', scrollreveal)
        sr.reveal('#sobre-o-projeto3', scrollreveal)
        sr.reveal('#exemplo-do-projeto4', scrollreveal)
        sr.reveal('#sobre-o-projeto4', scrollreveal)

        const projeto2 = document.querySelector('.projeto2');
        projeto2.scrollIntoView({ behavior: 'smooth' });

    } else {
        projeto3.style.display = 'flex'
        projeto4.style.display = 'flex'
        btn.innerText = 'VER MENOS'
        sr.reveal('#exemplo-do-projeto3', scrollreveal)
        sr.reveal('#sobre-o-projeto3', scrollreveal)
        sr.reveal('#exemplo-do-projeto4', scrollreveal)
        sr.reveal('#sobre-o-projeto4', scrollreveal)

        const projeto3Element = document.querySelector('.projeto3');
        projeto3Element.scrollIntoView({ behavior: 'smooth' });

    }
})

/*const textarea = document.querySelector('#mensagem')

textarea.addEventListener('focus', () => {
    textarea.classList.add('hide-placeholder')

    textarea.addEventListener('blur', () => {
        if (textarea.value === '') {
            textarea.classList.remove('hide-placeholder')
        }
    })
})
*/









