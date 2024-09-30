const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll' , scrollbox)
scrollbox();

function scrollbox(){
    const triggerbotton = window.innerHeight/5*4;
    
    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;
    
        if(boxtop<triggerbotton){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
};