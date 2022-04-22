const App = {}

document.querySelectorAll('.carousel').forEach((carousel) => {
    const items = carousel.querySelectorAll('.carousel-item');
    const buttonsHtml = Array.from(items, () => {
        return `
            <span class="carousel-button"></span>
        `;
    });

    console.log(buttonsHtml)
});