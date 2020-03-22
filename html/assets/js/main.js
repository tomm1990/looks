(()=>{
    const span = document.querySelector('.text span');
    span.addEventListener('click',event => {
        var growDiv = document.querySelector('.text p');
        console.log(growDiv.clientHeight);
        if (growDiv.clientHeight != 100 ) {
            span.innerHTML = 'Read More';
            growDiv.style.maxHeight = '100px';
        } else {
            span.innerHTML = 'Read Less';
            growDiv.style.maxHeight = '1000px';
        }
    });
})();