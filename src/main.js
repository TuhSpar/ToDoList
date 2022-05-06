document.addEventListener("DOMContentLoaded", function(event){
    
    const colorItemOne = document.getElementById('color-one');
    const colorItemTwo  = document.getElementById('color-two');
    const colorItemThree = document.getElementById('color-three');

    let eOne = colorItemOne.addEventListener("click", (event) =>{
        if (!eTwo, !eThree){
            event.target.style.background = '#911bff'
        };
    });

    let eTwo = colorItemTwo.addEventListener("click", (event) =>{
        if(!eOne, !eThree){
            event.target.style.background = '#dfff2a'
        };
    });

    let eThree = colorItemThree.addEventListener("click", (event) =>{
        if(!eOne, !eTwo){
            event.target.style.background = '#70ff2e'
        };
    });


})