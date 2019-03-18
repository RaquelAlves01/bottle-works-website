//class="link-box grey-text island bc-card-div">

let formColor=document.querySelectorAll('.link-box.grey-text.island.bc-card-div');
console.log(formColor);
formColor.forEach((element)=>{
    element.addEventListener('click', getClick)
})
function getClick(ev){
ev.preventDefault()
console.log("this happened")
let targetColor=ev.currentTarget.getAttribute('id')
console.log(targetColor);
// sessionStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");

switch(targetColor){
    case 'residential-green-one':
    sessionStorage.setItem("formClicked", 'graphic-colour-one');
    window.location.href = 'https://bottleworks.ca/form';
    return;
    case 'commercial-grey-two':
    sessionStorage.setItem("formClicked", 'graphic-colour-two');
    window.location.href = 'https://bottleworks.ca/form';
    return;
    case 'restaurant-blue-three':
    sessionStorage.setItem("formClicked", 'graphic-colour-three');
    window.location.href = 'https://bottleworks.ca/form';
    return;
    default:
    break;
}
//
}
console.log(formColor);
console.log(window.location.href);

//
