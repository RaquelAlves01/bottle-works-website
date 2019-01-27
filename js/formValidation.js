//<section class="form-colour-three">

let init={
    formChange: function(ev){
        let submitBtn=document.getElementById('submit')
        console.log(submitBtn);
        submitBtn.addEventListener('click', init.validation)
        let changeColorCircle=document.querySelector('.graphic-flex');
        let changeColorForm=document.getElementById('formColor');
        let targetForm=sessionStorage.getItem("formClicked");
        console.log('targetForm',targetForm);
        console.log('changeCircle', changeColorCircle)
        console.log('changeForm', changeColorForm)
        changeColorCircle.className=`graphic-flex ${targetForm}`
        switch(targetForm){
            case 'graphic-colour-one':
            changeColorForm.className=`form-colour-one`
            return;
            case 'graphic-colour-two':
            changeColorForm.className=`form-colour-two`
            return;
            case 'graphic-colour-three':
            changeColorForm.className=`form-colour-three`
            return;
            default:
            break;

        }
    },
    validation: function(ev){
        ev.preventDefault()
        //required
        let nameField=document.getElementById('name')
        nameField.onkeypress=function(){
            nameField.style.borderColor="#666";
            // let errName=nameField.nextElementSibling;
            // errName.classList.remove("error-message");
            // errName.classList.add("hide");
        }
        if (nameField.value == "") {
            nameField.style.borderColor="red";
        }
        // //required (address)
        let addressField=document.getElementById('position')
        addressField.onkeypress=function(){
            addressField.style.borderColor="#666";
            // let errName=nameField.nextElementSibling;
            // errName.classList.remove("error-message");
            // errName.classList.add("hide");
        }
        if (addressField.value == "") {
            addressField.style.borderColor="red";
        }
        // //required
        let emailField=document.getElementById('email')
        emailField.onkeypress=function(){
            emailField.style.borderColor="#666";
         }
         let emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
         let emailPass = emailPattern.test(emailField.value);
         if (emailPass == false) {
             if (emailField.value.length == 0) {
                 emailField.style.borderColor="red";
             } else {
                 emailField.style.borderColor="red";
             }
         }
      let phoneField=document.getElementById('phone')
         //validate phone
   
          phoneField.onkeypress=function(){
            phoneField.style.borderColor="#666";
         }
         if (!phoneField.value == "") {
             let phonePattern_dashes = new RegExp(/^([0-9][0-9][0-9])-?([0-9][0-9][0-9])-?([0-9][0-9][0-9][0-9])$/);
             let phonePass_dash = phonePattern_dashes.test(phoneField.value);
             if (!phonePass_dash) {
                 phoneField.style.borderColor="red";
             }
         }
       
       
        // //required
        // //child element = yes : no
        // //consent-yes
        // //consent-no
        let publishBoolean=document.querySelectorAll('[name=consent]:checked')
        if(publishBoolean.length===0){
            let validatePublishBoolean=document.querySelectorAll('label.milli.yes')
            validatePublishBoolean.forEach(radio=>{
                radio.addEventListener('click',()=>{
                    validatePublishBoolean.forEach(r=>r.style.color='black')
                })
                radio.style.color="red"})
            console.log(validatePublishBoolean);
        }

        // //required
        let taxEmailField=document.getElementById('tax-email')
  
        //collection days
        // let collectDaysArray=document.querySelectorAll('[name=collection-days]')
        // let daysChecked=[]
        // collectDaysArray.forEach(dayChecked=>{
        //     if(dayChecked.checked){
        //     daysChecked.push(dayChecked.id)
        //     }
        // })

        // //date
        let checkbox_days = document.querySelectorAll("input[name='collection-days']:checked");
        let checked_days=[]
        if(checkbox_days.length===0){
            
        let validateCheckbox_days=document.querySelectorAll("label.collection");
        console.log("valcHe",validateCheckbox_days);

        validateCheckbox_days.forEach(c=>{
                c.style.color="red"
                c.addEventListener('click',()=>{
                    validateCheckbox_days.forEach(cb=>{
                        cb.style.color="black"
                    })
                })
                
            }) 
        }else{
            checkbox_days.forEach((dayClicked)=>{
             
                let day=dayClicked.getAttribute("id")
                checked_days.push(day);
            })
        }
        
        let startDateField=document.getElementById('start-date')
        startDateField.addEventListener('click',()=>{ startDateField.style.borderColor="black";})
            // let errName=nameField.nextElementSibling;
            // errName.classList.remove("error-message");
            // errName.classList.add("hide");
        
        if (startDateField.value == "") {
            startDateField.style.borderColor="red";
        }
 
        // //text
        // let otherHoursField=document.getElementById('other-hours')
  
        // //Frequency get all input>type='radio' child elements
        // let frequencyArray=document.querySelectorAll('[name=collection-frequency]')
        
      
        //     let frequencyValue=null
        //     frequencyArray.forEach((button)=>
        //     {
        //         if(button.checked){
        //           frequencyValue=button.id
        //     }               
        //     })
    
        // //required yes : no type:radio
        // let storageBoolean=document.querySelectorAll('[name=litre-storage]')
     
        // let storageValue=null
        // storageBoolean.forEach(option=>{
             
        //     if(option.checked){
        //         let regEx= new RegExp(/yes/);
        //         let testReg=regEx.test(option.id)?storageValue='yes':storageValue='no'
        //     }
        //     })

        // //text
        // let additionalInforField=document.getElementById('additional-info')
        
        // let responsesArray=[nameField.value,addressField.value,emailField.value,phoneField.value,publishBooleanValue,taxEmailField.value,daysChecked,startDateField.value,otherHoursField.value,frequencyValue,storageValue,additionalInforField.value];
        // console.log("Reaching this line")
        // sendToDb(responsesArray)
        // ev.preventDefault();
        
    },
    sendToDb:function(data){
        let fd=new FormData()
        fd.append('name', data[0])
        fd.append('address', data[1])
        fd.append('email', data[2])
        fd.append('phone', data[3])
        fd.append('publish', data[4])
        fd.append('tax-email', data[5])
        fd.append('collection-days', `${data[6][0]},${data[6][1]}`)
        fd.append('date',data[7])
        fd.append('specific-hours', data[8])
        fd.append('pickup-frequency',data[9])
        fd.append('storage', data[10])
        fd.append('additional-info',data[10])
        let opt={
            method:'POST',
            body:fd,
            mode:'cors'
        }

        fetch('http://bottleworks.ca/db/info/postform.php', opt)
        .then((response)=>{console.log(response.json())})
        .catch(err=>{console.log("Error", err)})
    }

}
document.addEventListener('DOMContentLoaded', init.formChange)

