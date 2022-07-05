function createImageSlider(
    images,
    {
        currentSliderIndex = 0,
        duration = 750,
        easing = 'ease',
        slideShowInterval = 4000
    } = {}
) {
    const slider = document.createElement('div');
    slider.className = 'slider';
    slider.innerHTML = `
        <div class="slides-wrapper"></div>
        <div class="slide-indicators">
        </div>
        <button type="button" class="prev-button"><i class="fa-solid fa-angles-left"></i></button>
        <button type="button" class="next-button"><i class="fa-solid fa-angles-right"></i></button>
    `;
    const [wrapper, indicators, prevBtn, nextBtn] = slider.children;
    const fill = 'forwards';
    // const timer = null;

    // for each image, creating slide div, button, and img element
    // set the index to have the active class when the index is the same as the current slide's index
    // add 'activeClass' to slide and button
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        const button = document.createElement('button');
        const image = document.createElement('img');
        const activeClass = index === currentSliderIndex ? 'active' : '';

        slide.className = `slide ${activeClass}`;
        button.className = activeClass;
        image.src = img;

        slide.appendChild(image);
        wrapper.appendChild(slide);
        indicators.appendChild(button);
    });

    // create slideTo function to allow user to click through images
    const slideTo = (index) => {
        if(index === currentSliderIndex) {
            return;
        }

        const currentSlide = wrapper.children[currentSliderIndex];
        const nextSlide = wrapper.children[index];

        indicators.children[currentSliderIndex].classList.remove('active');
        indicators.children[index].classList.add('active');
        const position = index > currentSliderIndex ? '-100%' : '100%';


        nextSlide.animate([
            {transform: `translate(${parseInt(position, 10) * -1}% 0)`},
            {transform: `translate(0, 0)`}
        ], {duration, fill, easing});


        currentSlide.animate([
            {transform: `translate(0, 0)`},
            {transform: `translate(${position}, 0)`}
        ], {duration, fill, easing});

    
        currentSliderIndex = index;
    };

    // add a click events: 
        // for nextBtn: increment index, but no more than the images length minus one
        //for prevBton: decrement index, but never below zero
    nextBtn.addEventListener('click', () => 
        slideTo(Math.min(currentSliderIndex + 1, images.length - 1)));
    prevBtn.addEventListener('click', () => slideTo(Math.max(currentSliderIndex - 1, 0)));

    return slider;
}

// add images to slider
const slider1 = createImageSlider([
    './assets/UTS-1.png',
    './assets/UTS-2.png',
    './assets/UTS-3.png',
    './assets/UTS-4.png',
    './assets/UTS-5.png'
]);

const slider2 = createImageSlider([
    './assets/horoscope-1.png',
    './assets/horoscope-2.png',
    './assets/horoscope-3.png',
    './assets/horoscope-4.png',
    './assets/horoscope-5.png',
    './assets/horoscope-6.png'
])

const slider3 = createImageSlider([
    './assets/DD-1.png',
    './assets/DD-2.png',
    './assets/DD-3.png',
    './assets/DD-4.png'
]);

const slider4 = createImageSlider([
    './assets/memory-test-1.png',
    './assets/memory-test-2.png',
    './assets/memory-test-3.png'
]);


const slider5 = createImageSlider([
    './assets/fof-1.png',
    './assets/fof-2.png',
    './assets/fof-3.png',
    './assets/fof-4.png'
]);


// append slider to page
document.querySelector('#uts-javascript-here').appendChild(slider1);

document.querySelector('#horoscope-js-here').appendChild(slider2);

document.querySelector('#dd-javascript-here').appendChild(slider3);

document.querySelector('#mg-javascript-here').appendChild(slider4);

document.querySelector('#fof-javascript-here').appendChild(slider5);


const app = {};

app.menuBtn = document.querySelector('.fa-plus');
app.mobileMenu = document.querySelector('.mobile-nav')

app.userClick = function(){
    document.querySelector('.fa-plus').addEventListener('click', function(){
        app.menuBtn.classList.toggle('is-active');
        app.mobileMenu.classList.toggle('is-active');
    })
}

// when there's time:
// To clear the form after it's been submitted:
// write a function that uses the fetch api to submit a post request to the form endpoint.
// have a fetch request with a POST 
// set url to be formspree
// pass in param and pass to formspree
// if everythings fine, replace html with "all good" message
// if not, alert an error
// include prevent default


app.clearForm = function() {
    document.querySelector('#name').innerHTML = '';
    document.querySelector('#email').innerHTML = '';
    document.querySelector('#message').innerHTML = '';
}


app.init = () => {
    // toggleBtn();
    app.userClick();
    app.clearForm();
};

app.init();