
let dBdata = {
init: ()=>{
    fetch('https://bottlework.ca/db/bottleworksform2.php')
        .then(response=>response.json())
        .then(data=> {
           let publish=data.filter(client=>client.publish==true?true:false)
            console.log(publish);
            dBdata.doMath(publish)
        })
        .catch(err=>console.log(`Error: ${err}`))
    },
    doMath: (data)=>{
        console.log(data);
        let arrayOfRandom=[]
        // get the amount of items
        getRandom=(index)=>{
            let items= data[(Math.floor((Math.random() * data.length) + 0))]
            arrayOfRandom.push(items)
        }
        let divs= document.querySelectorAll('.partner-ligroup')
        divs.forEach((div, index)=>{
            getRandom(index)
        })
        console.log(arrayOfRandom)
        let noDupRandom= arrayOfRandom.filter((object, index, self) =>{
            console.log("self",self[index])
            console.log("ob",object)
            console.log(index)
            let counter=0;
        self.findIndex((t) => {
            console.log("t",t.id);
            console.log("objId",object.id)
            if(t.id===object.id){
                counter++
            }
        })
        if(counter>1){
            return true
        }
    })

        // if(noDupRandom!=0){
        //     console.log(noDupRandom.length)
        //     console.log(arrayOfRandom.findIndex((dup)=>{
        //         return dup == noDupRandom.id
        //     })
        //     )
        // }



        divs.forEach((div, index)=>{

            let image=div.childNodes[1].childNodes[1];
            console.log(image);
            let rest_name=div.childNodes[2].nextElementSibling.children[0]
            let paragraph=div.childNodes[2].nextElementSibling.children[1].children[0]

            // !arrayOfRandom[index].image_name==""
            if(arrayOfRandom[index].image_name==""){

                image.src="./images/logo-regular.svg"

            }else{

            image.src=`https://bottlework.ca/db/images/${arrayOfRandom[index].image_name}`
            }
            rest_name.textContent=`${arrayOfRandom[index].restaurant_name}`
            paragraph.textContent=`${arrayOfRandom[index].number_of_bottles}`
        })
        //randomly select 4 items
        //validate that there are not duplicate values
        //if values are duplicate run math again.
    }

}
document.addEventListener("DOMContentLoaded", dBdata.init)
