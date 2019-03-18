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
        val_count=[]
        let nameField=document.getElementById('name')
        nameField.onkeypress=function(){
            nameField.style.borderColor="#666";
        }
        if (nameField.value == "") {
            nameField.style.borderColor="red";
            val_count.push(1)
        }
        // //required (address)
        let addressField=document.getElementById('position')
        addressField.onkeypress=function(){
            addressField.style.borderColor="black";

        }
        if (addressField.value == "") {
            addressField.style.borderColor="red";
            val_count.push(2)
        }
        // //required
        let emailField=document.getElementById('email')
        emailField.onkeypress=function(){
            emailField.style.borderColor="black";
         }
         let emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
         let emailPass = emailPattern.test(emailField.value);
         if (emailPass == false) {
             if (emailField.value.length == 0) {
                 emailField.style.borderColor="red";
                 val_count.push(3)
             } else {
                 emailField.style.borderColor="red";
                 val_count.push(3)
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
        let publishBooleanValue
        if(publishBoolean.length===0){
            let validatePublishBoolean=document.querySelectorAll('label.milli.yes')
            validatePublishBoolean.forEach(radio=>{
                radio.addEventListener('click',()=>{
                    validatePublishBoolean.forEach(r=>r.style.color='black')
                })
                radio.style.color="red"

            })
            val_count.push(5)
            console.log(validatePublishBoolean);
        }else{
            publishBooleanValue=publishBoolean[0].attributes.id.value
        }

        // //required
        let taxEmailField=document.getElementById('tax-email')

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
            val_count.push(6)
        }else{
            checkbox_days.forEach((dayClicked)=>{

                let day=dayClicked.getAttribute("id")
                checked_days.push(day);
            })
        }

        let startDateField=document.getElementById('start-date')
        startDateField.addEventListener('click',()=>{ startDateField.style.borderColor="black";})

        if (startDateField.value == "") {
            startDateField.style.borderColor="red";
            val_count.push(7)
        }
        let frequencyArray=document.querySelectorAll('[name=collection-frequency]:checked')
        let frequencyValue
        let collectionFreq=document.querySelectorAll(".collection-freq")
        collectionFreq.forEach(b=>{

                b.addEventListener('click',()=>{
                  collectionFreq.forEach(cf=>cf.style.color="black")
                })
            b.style.color="black";
        })
        if(frequencyArray.length===0){
            let collecting=document.querySelectorAll(".collection-freq")
        collecting.forEach(b=>{
            b.style.color="red";

        })
        val_count.push(8)
        }else{
         frequencyValue=frequencyArray[0].attributes.id.value
        }
        let otherHoursField=document.getElementById("other-hours")

        let storageBoolean=document.querySelectorAll('[name=litre-storage]:checked')
        let storageValue;
        if(storageBoolean.length===0){
            let validatestorageBoolean=document.querySelectorAll('.storage')
            validatestorageBoolean.forEach(radio=>{
                radio.addEventListener('click',()=>{
                    validatestorageBoolean.forEach(r=>r.style.color='black')
                })
                radio.style.color="red"

            })
            val_count.push(9)
            console.log(validatestorageBoolean);
        }else{
            storageValue=storageBoolean[0].attributes.id.value
        }
       let additionalInfoField=document.getElementById("additional-info")
       console.log(val_count);
       let tform=sessionStorage.getItem("formClicked");
       console.log(tform)
       if(val_count.length==0&&(tform=="graphic-colour-three")){
        let responsesArray=[nameField.value,addressField.value,emailField.value,phoneField.value,publishBooleanValue,taxEmailField.value,checked_days,startDateField.value,otherHoursField.value,frequencyValue,storageValue,`Restaurant client application: ${additionalInfoField.value}`];
        init.sendToDb(responsesArray)
    }else if(val_count.length==0&&(tform=="graphic-colour-one")){
        let responsesArray=[nameField.value,addressField.value,emailField.value,phoneField.value,publishBooleanValue,taxEmailField.value,checked_days,startDateField.value,otherHoursField.value,frequencyValue,storageValue,`Residential client application: ${additionalInfoField.value}`];
        init.sendToDb(responsesArray)
    }else if(val_count.length==0&&(tform=="graphic-colour-two")){
        let responsesArray=[nameField.value,addressField.value,emailField.value,phoneField.value,publishBooleanValue,taxEmailField.value,checked_days,startDateField.value,otherHoursField.value,frequencyValue,storageValue,`Residential client application: ${additionalInfoField.value}`];
        init.sendToDb(responsesArray)
    }
    else{
        window.scrollTo(0, 0);
        let msgH2=document.getElementById("msg-form");
        let msg=document.querySelector(".transparent-background.absolute");
        msgH2.textContent="Could not submit, ensure all required fields are provided."
         console.log(init.msgH2);
        msg.className="transparent-background-show absolute"
        console.log(init.msg)
        setTimeout(()=>{
            msg.className="transparent-background absolute"
        }, 5000)
    }
    },
    sendToDb:function(data){
        console.log(data)

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
        fd.append('additional-info',data[11])
        let opt={
            method:'POST',
            body:fd,
            mode:'cors'
        }

        fetch('https://bottlework.ca/db/api/form.php', opt)
        .then((response)=>{return response.json()})
        .then(init.confirmSubmit)
        .catch(err=>{console.log("Error", err)})
    },
    confirmSubmit: (data)=>{
       console.log(data);
        window.scrollTo(0, 0);
        let msgH2=document.getElementById("msg-form");
        let msg=document.querySelector(".transparent-background.absolute");
        msgH2.textContent="Thank you, your form was submitted successfully."
         console.log(init.msgH2);
        msg.className="transparent-background-show absolute"
        console.log(init.msg)
        setTimeout(()=>{
            msg.className="transparent-background absolute"

             window.history.back()
        }, 5000)
    sessionStorage.setItem("formPassed", true);

    }

}
document.addEventListener('DOMContentLoaded', init.formChange)
