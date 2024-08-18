const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){

    bar.addEventListener('click',() =>{

            nav.classList.add('active');
        console.log('bar clicked');
    })   

}

if(close){

    close.addEventListener('click',() =>{

            nav.classList.remove('active');
        console.log('remove clicked');
    })   

}


// Image Replacement Code 

var mainImg=document.getElementById('MainImg');
var smallImg=document.getElementsByClassName('small-img');

smallImg[0].onclick=function(){

    mainImg.src=smallImg[0].src;
}
smallImg[1].addEventListener('click',()=>{

    mainImg.src=smallImg[1].src;
})
smallImg[2].addEventListener('click',()=>{

    mainImg.src=smallImg[2].src;
})
smallImg[3].addEventListener('click',()=>{

    mainImg.src=smallImg[3].src;
})