// when there's time, I want to restructure the js to have a better carousel


const app = {};



app.menuBtn = document.querySelector('.fa-plus');
app.mobileMenu = document.querySelector('.mobile-nav')

app.userClick = function(){
    document.querySelector('.fa-plus').addEventListener('click', function(){
        app.menuBtn.classList.toggle('is-active');
        app.mobileMenu.classList.toggle('is-active');
    })
}

app.init = () => {
    app.userClick();
};

app.init();