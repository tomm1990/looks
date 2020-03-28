(()=>{
    "use strict";
    let car = new Glide('.glide',{
        type: 'carousel',
        startAt: 0,
        perView: 1,
        // autoplay : 2000
    });

    car.mount();
})();
