//<section class="form-colour-three">

let init={
    formChange: function(ev){
        ev.preventDefault()
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
        console.log(changeColorCircle)

        

        let submitBtn=document.getElementById('submit')
        submitBtn.addEventListener('click', init.validation)
    },
    validation: function(ev){
        console.log(ev.currentTarget);
       ev.preventDefault();
        //required
        let nameField=document.getElementById('name')
        //required (address)
        let addressField=document.getElementById('position')
      
        //required
        let emailField=document.getElementById('email')
    
        //not required
        let phoneField=document.getElementById('phone')
       
        //required
        //child element = yes : no
        //consent-yes
        //consent-no
        let publishBoolean=document.querySelectorAll('[name=consent]')
        let publishBooleanValue=null
        publishBoolean.forEach(button=>{
            let checkedBtn=button.checked
            if(checkedBtn==true){
                publishBooleanValue=button.value
            }
      
        })
        //required
        let taxEmailField=document.getElementById('tax-email')
  
        //collection days
        let collectDaysArray=document.querySelectorAll('[name=collection-days]')
        let daysChecked=[]
        collectDaysArray.forEach(dayChecked=>{
            if(dayChecked.checked){
            daysChecked.push(dayChecked.id)
            }
        })

        //date
        let startDateField=document.getElementById('start-date')
 
        //text
        let otherHoursField=document.getElementById('other-hours')
  
        //Frequency get all input>type='radio' child elements
        let frequencyArray=document.querySelectorAll('[name=collection-frequency]')
        
      
            let frequencyValue=null
            frequencyArray.forEach((button)=>
            {
                if(button.checked){
                  frequencyValue=button.id
            }               
            })
    
        //required yes : no type:radio
        let storageBoolean=document.querySelectorAll('[name=litre-storage]')
     
        let storageValue=null
        storageBoolean.forEach(option=>{
             
            if(option.checked){
                let regEx= new RegExp(/yes/);
                let testReg=regEx.test(option.id)?storageValue='yes':storageValue='no'
            }
            })

        //text
        let additionalInforField=document.getElementById('additional-info')
        
        let responsesArray=[nameField.value,addressField.value,emailField.value,phoneField.value,publishBooleanValue,taxEmailField.value,daysChecked,startDateField.value,otherHoursField.value,frequencyValue,storageValue,additionalInforField.value]
        console.log(responsesArray);
        
        sendToDb(responsesArray)
    },
    sendToDb:function(data){
    /////////////////////////////////////////////////
        //    //     //     /////   ///  //
      /////  //     //     ///     // / //
     //  // ////// ////// //////  //  ///
    /////////////////////////////////////////////////
    /*
    I had to comment out the code below so the page would not break.
    but the string values below are the field names I will need
    in the form database. The ones in '': 'name', 'email' etc..
    */

    
        data.preventDefault();
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
        fd.append('additonal-info',data[10])
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

