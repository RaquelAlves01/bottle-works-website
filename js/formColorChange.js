//class="link-box grey-text island bc-card-div">
let formColor=document.querySelectorAll('.link-box.grey-text.island.bc-card-div');
formColor.forEach((element)=>{
    element.addEventListener('click', getClick)
})
function getClick(ev){
ev.preventDefault()
let targetColor=ev.currentTarget.getAttribute('id')

// sessionStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");

switch(targetColor){
    case 'residential-green-one':
    sessionStorage.setItem("formClicked", 'graphic-colour-one');
    window.location.href = 'http://127.0.0.1:4000/bottle-works-website/form';
    return;
    case 'commercial-grey-two':
    sessionStorage.setItem("formClicked", 'graphic-colour-two');
    window.location.href = 'http://127.0.0.1:4000/bottle-works-website/form';
    return;
    case 'restaurant-blue-three':
    sessionStorage.setItem("formClicked", 'graphic-colour-three');
    window.location.href = 'http://127.0.0.1:4000/bottle-works-website/form';
    return;
    default:
    break;
}
// 
}
console.log(formColor);
console.log(window.location.href);

// 