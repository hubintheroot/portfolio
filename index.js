import About from "./src/About.js";
import Skills from "./src/Skills.js";
import Projects from "./src/Projects.js";
import Snow from "./src/Snow.js";

new About(document.querySelector('#about'));

new Skills(document.querySelector('#skills'));

new Projects(document.querySelector('#projects'));

//  change design for christmas
if (checkXMas()) {
    toXMas();
} else {
    toDeafult();
}

function checkXMas() {
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    if (month === 12 && day <= 25) {
        return true;
    }
    return false;
}

function toXMas() {
    const colorWhite = 'var(--white-color)';
    
    // 눈 내리는 배경을 추가
    const $canvasContainer = document.createElement('div');
    $canvasContainer.classList.add('canvas-container');
    document.querySelector('main')
        .appendChild($canvasContainer);
        
    new Snow($canvasContainer);
    
    // 색상 변경
    document.querySelector('body')
        .style.backgroundColor = 'var(--xMas-bg-color)';

    document.querySelector('header')
        .style.backgroundColor = 'var(--transparent-black-color-8)';
    
    document.querySelectorAll('.header-inner > .container nav > a')
        .forEach( $menu => {
        $menu.style.color = colorWhite;
        $menu.classList.add('white-underLine');
    });
    document.querySelector('.footer-inner').
        style.backgroundColor = 'var(--transparent-black-color-5)'
}

function toDeafult() {
    const colorBlack = 'var(--transparent-black-color)';
    const colorWhite = 'var(--white-color)';
    
    const $headerContainer = document.querySelector('header');
    $headerContainer.style.backgroundColor = colorWhite;
    
    const navMenus = document.querySelectorAll('.header-inner > .container nav > a');
    navMenus.forEach( $menu => {
        $menu.style.color = colorBlack;
        $menu.classList.remove('white-underLine');
    });
}