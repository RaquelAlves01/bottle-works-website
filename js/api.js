let bottleWorks={
    baseurl:"http://bottlework.ca/db/bottleworksform2.php",
    init: function(){
    let options={
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers:{
                "Access-Control-Allow-Origin":"*"}
    };

    fetch(bottleWorks.baseurl)
        .then(response=>response.json())
        .then(bottleWorks.runChart)
        .catch(err=>{console.log(err)})
    },
    runChart: function(data){
        chart.init(data)
    }
}
document.addEventListener("DOMContentLoaded", bottleWorks.init)
