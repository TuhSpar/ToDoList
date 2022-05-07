document.addEventListener("DOMContentLoaded", function (event) {

    const colorItemOne = document.getElementById('color-one');
    const colorItemTwo = document.getElementById('color-two');
    const colorItemThree = document.getElementById('color-three');

    let defaultColorTwoThree = () => {
        colorItemTwo.style.background = '#6c757d';
        colorItemThree.style.background = '#6c757d';
    }

    let defaultColorOneThree = () => {
        colorItemOne.style.background = '#6c757d';
        colorItemThree.style.background = '#6c757d';
    }

    let defaultColorOneTwo = () => {
        colorItemTwo.style.background = '#6c757d';
        colorItemOne.style.background = '#6c757d';
    }

    let eOne = colorItemOne.addEventListener("click", (event) => {
        event.target.style.background = '#911bff';

        defaultColorTwoThree();
    });

    let eTwo = colorItemTwo.addEventListener("click", (event) => {
        event.target.style.background = '#dfff2a';
        defaultColorOneThree();

    });

    let eThree = colorItemThree.addEventListener("click", (event) => {
        event.target.style.background = '#70ff2e';
        defaultColorOneTwo();
    });

})