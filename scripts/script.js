// const app = {}
// // creating a function to create slider div
// // setting index default to zero
// // adding the structure to each slider child
// app.createImageSlider = (images, {
//         currentSliderIndex = 0,
//         duration = 750,
//         easing = 'ease',   
//         } = {}
//     ) => { {
//     const slider = document.createElement('div');
//     slider.className = 'slider';
//     slider.innerHTML = `
//         <div class="slides-wrapper"></div>
//         <div class="slide-indicators">
//         </div>
//         <button type="button" class="prev-button"><i class="fa-solid fa-angles-left"></i></button>
//         <button type="button" class="next-button"><i class="fa-solid fa-angles-right"></i></button>
//     `;
//     const [wrapper, indicators, prevBtn, nextBtn] = slider.children;
//     const fill = 'forwards';
//     // const timer = null;

//     // for each image, creating slide div, button, and img element
//     // set the index to have the active class when the index is the same as the current slide's index
//     // add 'activeClass' to slide and button
//     images.forEach((img, index) => {
//         const slide = document.createElement('div');
//         const button = document.createElement('button');
//         const image = document.createElement('img');
//         const activeClass = index === currentSliderIndex ? 'active' : '';

//         slide.className = `slide ${activeClass}`;
//         button.className = activeClass;
//         image.src = img;

//         slide.appendChild(image);
//         wrapper.appendChild(slide);
//         indicators.appendChild(button);
//     });

//     // create slideTo function to allow user to click through images
//     app.slideTo = (index) => {
//         if(index === currentSliderIndex) {
//             return;
//         }

//         // stop auto-animation when user clicks:
//         // clearTimeout(timer);

//         const currentSlide = wrapper.children[currentSliderIndex];
//         const nextSlide = wrapper.children[index];

//         indicators.children[currentSliderIndex].classList.remove('active');
//         indicators.children[index].classList.add('active');
//         const position = index > currentSliderIndex ? '-100%' : '100%';


//         nextSlide.animate([
//             {transform: `translate(${parseInt(position, 10) * -1}% 0)`},
//             {transform: `translate(0, 0)`}
//         ], {duration, fill, easing});


//         currentSlide.animate([
//             {transform: `translate(0, 0)`},
//             {transform: `translate(${position}, 0)`}
//         ], {duration, fill, easing});

    
//         currentSliderIndex = index;

//         // currentSlide.classList.remove('active');
//         // nextSlide.classList.add('active');
//     };

//     // add a click events: 
//         // for nextBtn: increment index, but no more than the images length minus one
//         //for prevBton: decrement index, but never below zero
//     nextBtn.addEventListener('click', () => 
//         slideTo(Math.min(currentSliderIndex + 1, images.length - 1)));
//     prevBtn.addEventListener('click', () => slideTo(Math.max(currentSliderIndex - 1, 0)));


//     // timer = setTimeout(() => slideTo(currentSliderIndex + 1), slideShowInterval);


//     return slider;
// }

// }

// app.init = () => {
//     app.createImageSlider();
//     app.slideTo();
// };

// app.init();
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

        // stop auto-animation when user clicks:
        // clearTimeout(timer);

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

        // currentSlide.classList.remove('active');
        // nextSlide.classList.add('active');
    };

    // add a click events: 
        // for nextBtn: increment index, but no more than the images length minus one
        //for prevBton: decrement index, but never below zero
    nextBtn.addEventListener('click', () => 
        slideTo(Math.min(currentSliderIndex + 1, images.length - 1)));
    prevBtn.addEventListener('click', () => slideTo(Math.max(currentSliderIndex - 1, 0)));


    // timer = setTimeout(() => slideTo(currentSliderIndex + 1), slideShowInterval);


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
    './assets/DD-1.png',
    './assets/DD-2.png',
    './assets/DD-3.png',
    './assets/DD-4.png'
]);

const slider3 = createImageSlider([
    './assets/PG-1.png',
    './assets/PG-2.png',
    './assets/PG-3.png',
    './assets/PG-4.png'
]);

// window.onload = function () {
//     const menuBtn = document.querySelector('.hamburger');
//     const mobileMenu = document.querySelector('.mobile-nav')

//     menuBtn.addEventListener('click', function() {
//         menuBtn.classList.toggle('is-active');
//         mobileMenu.classList.toggle('is-active');
//     })
// }


// append slider to page
document.querySelector('#uts-javascript-here').appendChild(slider1);

document.querySelector('#dd-javascript-here').appendChild(slider2);

document.querySelector('#pg-javascript-here').appendChild(slider3);


const app = {};


app.menuBtn = document.querySelector('.hamburger');
app.mobileMenu = document.querySelector('.mobile-nav')

app.userClick = function(){
    document.querySelector('.hamburger').addEventListener('click', function(){
        app.menuBtn.classList.toggle('is-active');
        app.mobileMenu.classList.toggle('is-active');
    })
}


// app.menuBtn.addEventListener('click', toggleBtn = () => {
//         menuBtn.classList.toggle('is-active');
//         mobileMenu.classList.toggle('is-active');
//     });

app.init = () => {
    // toggleBtn();
    app.userClick();
};

app.init();