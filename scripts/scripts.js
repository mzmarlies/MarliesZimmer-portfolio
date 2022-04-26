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