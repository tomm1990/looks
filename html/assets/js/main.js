(()=>{
    const span = document.querySelector('.text span'),
        growDiv = document.querySelector('.text p');
    span.addEventListener('click',event => {
        if (growDiv.clientHeight != 100 ) {
            growDiv.style.maxHeight = '100px';
            span.innerHTML = 'Read More';
        } else {
            growDiv.style.maxHeight = '1000px';
            span.innerHTML = 'Read Less';
        }
    });
})();