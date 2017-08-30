console.log('Loaded!');

//change the text of the main div

var element = document.getElementById('main-text');

element.innerHTML = 'new value';

// MOVE THE IMAGE  OR ANIMATE

var img =document.getElemnetById('madi');

img.onclick = function(){
    img.style.marginLeft = '100px';
};