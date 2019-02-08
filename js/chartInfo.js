let chart={
    init: function(ev){


let data=[]
let totalData=[10]
// let ctx=document.getElementById("myChart").getContext('2d');
let labels=["",""]
ev.forEach(user=>{
    data.push(parseInt(user.number_of_bottles))
})

let getSum=(total, num)=>{

    return total + num
}

let randomRestaurant=ev[Math.floor(Math.random()*ev.length)];


let dataSum=data.reduce(getSum)/10;
let dataS=data.reduce(getSum);
console.log(dataSum);
console.log(dataS);
let img=document.querySelector('.embed-item.graph-image');
if(randomRestaurant.image_name==""){
    img.src="../images/logo-regular.svg"
}else{
img.src=`http://bottlework.ca/db/images/${randomRestaurant.image_name}`;
}
let title=document.querySelector(".graph-partner-name").textContent=randomRestaurant.restaurant_name;
let bottlesCollected=document.querySelector(".graph-bottles").textContent=randomRestaurant.number_of_bottles;
let bottlesTotal=document.querySelector(".bottles-total").textContent=dataSum;


        let chartSet=[randomRestaurant.number_of_bottles, dataSum]

let backgroundColor=['rgb(175, 189, 56)','rgb(236, 239, 210)']

let dataset=[{
    label:"",
    backgroundColor:'rgba(255, 255, 0,.5)',
    borderWidth: 1,
    data:data[0],
}]
}}
