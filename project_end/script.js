let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
// Переключение цвета темы
darkThemeButton.onclick = function(){
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
}
lightThemeButton.onclick = function(){
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
}
serifFontButton.onclick = function(){
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
}
//Переключение шрифта
sansSerifFontButton.onclick = function(){
    document.body.classList.remove('serif');
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
}

//Статьи
let blogArticles = document.querySelectorAll('.blog-article.short');

for(let blogArticle of blogArticles){
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function(){
        blogArticle.classList.remove('short');
    }
}

// Раскладка карточек
let gridButtonViewCard = document.querySelector('.card-view-button-grid');
let listButtonViewCard = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

listButtonViewCard.onclick = function(){
    gridButtonViewCard.classList.remove('active');
    listButtonViewCard.classList.add('active');
    cardsList.classList.add('list');
}
gridButtonViewCard.onclick = function(){
    listButtonViewCard.classList.remove('active');
    gridButtonViewCard.classList.add('active');
    cardsList.classList.remove('list');
}

// Галерея
let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for(let activeImage of previews){
    activeImage.onclick = function(evt){
        evt.preventDefault();
        mainImage.src = activeImage.href;
        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    }
}
