(()=>{
    const span = document.querySelector('.text span');
    span.addEventListener('click',event => {
        var growDiv = document.querySelector('.text p');
        console.log(growDiv.clientHeight);
        if (growDiv.clientHeight != 100 ) {
            growDiv.style.maxHeight = '100px';
            growDiv.style.transition = 'max-height 0.25s ease-out;';
        } else {
            growDiv.style.maxHeight = '1000px';
            growDiv.style.transition = 'max-height 0.25s ease-in';
        }
    });
})();