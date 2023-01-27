console.log('Hello!');

const nextBtnEl = document.querySelector('.next-btn');
const prevBtnEl = document.querySelector('.prev-btn');
const mainContainerEl = document.querySelector('.container');
const mainArticleEl = document.querySelector('.main-article');
const mainDetailHeaderEl = document.querySelector('.main-detail h1');
const mainDetailParagraphEl = document.querySelector('.main-detail p');
const mobileMenuEl = document.querySelector('.mobile-menu');
const menuEl = document.querySelector('.menu');
const closeEl = document.querySelector('.close');
const unorderedListEl = document.querySelector('.mobile-menu ul');
const logoEl = document.querySelector('.logo');

let counter = 1;

function increaseCounter() {
    if(counter < 3) {
        counter += 1;
    } else {
        counter = 1;
    }
    return counter;
}

function decreaseCounter() {
    counter -= 1;
    if(counter <= 0) {
        return counter = 3;
    } else {
        return counter;
    }
}

nextBtnEl.addEventListener('click', function() {
    let updatedCounter = increaseCounter();
    mainArticleEl.style.backgroundImage = `url(images/desktop-image-hero-${updatedCounter}.jpg)`;
    if(updatedCounter == 2) {
        let title = `We are available all across the globe`;
        let paragraph = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
        mainDetailHeaderEl.innerHTML = title;
        mainDetailParagraphEl.innerHTML = paragraph;
    } else if(updatedCounter == 3) {
        let title = `Manufactured with the best materials`;
        let paragraph = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
        mainDetailHeaderEl.innerHTML = title;
        mainDetailParagraphEl.innerHTML = paragraph;
    } else {
        let title = `Discover innovative ways to decorate`;
        let paragraph = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
        mainDetailHeaderEl.innerHTML = title;
        mainDetailParagraphEl.innerHTML = paragraph;
    }
})

prevBtnEl.addEventListener('click', function() {
    let updatedCounter = decreaseCounter();
    mainArticleEl.style.backgroundImage = `url(images/desktop-image-hero-${updatedCounter}.jpg)`;
    if(updatedCounter == 2) {
        let title = `We are available all across the globe`;
        let paragraph = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
        mainDetailHeaderEl.innerHTML = title;
        mainDetailParagraphEl.innerHTML = paragraph;
    } else if(updatedCounter == 3) {
        let title = `Manufactured with the best materials`;
        let paragraph = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
        mainDetailHeaderEl.innerHTML = title;
        mainDetailParagraphEl.innerHTML = paragraph;
    } else {
        let title = `Discover innovative ways to decorate`;
        let paragraph = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
        mainDetailHeaderEl.innerHTML = title;
        mainDetailParagraphEl.innerHTML = paragraph;
    }
})

menuEl.addEventListener('click', function() {
    logoEl.style.display = 'none';
    unorderedListEl.style.display = 'block';
    closeEl.style.display = 'block';
    mobileMenuEl.style.backgroundColor = `hsl(0, 0%, 100%)`;
    mainContainerEl.style.opacity = '0.5';
    this.style.display = 'none';
})

closeEl.addEventListener('click', function() {
    logoEl.style.display = 'block';
    unorderedListEl.style.display = 'none';
    menuEl.style.display = 'block';
    mobileMenuEl.style.backgroundColor = 'transparent';
    mainContainerEl.style.opacity = '1';
    this.style.display = 'none';
})