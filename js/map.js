function initMap(){
    //map Options
    var options={
        zoom: 12,
        center: {lat:45.4215, lng:-75.6972}
    }

    //New map
    let map = new google.maps.Map(document.getElementById('map'),options);
        /////////////////////////////////////////////////////
    //          Add event listener to map
    ////////////////////////////////////////////////////

    google.maps.event.addListener(map, 'click', function(event){
        addMarker({props:event.latLng});
    })



    //////////////////////

    //create array of markerts
    var markers=[
        {   id:0,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:1,
            props:{lat:45.4196,lng:-75.6968},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Stella Luna</h1>"
        },
        {   id:2,
            props:{lat:45.4188,lng:-75.6968},
            content:"<h1>Ottawa</h1>"
        },
        {   id:3,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:4,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:5,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:6,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:7,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:8,
            props:{lat:45.3939,lng:-75.6831},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Tosca</h1>"
        }]
    //Add Marker function
    markers.forEach((marker, index)=>{
        addMarker(marker, index)
    })
    function addMarker(coords, index){
        let marker= new google.maps.Marker({
        position:coords.props,
        map:map,
        markerId:coords.id
//     this works but it's better to handle
//undefined values before seeting the icon
//        icon:coords.img
    });
    //This will handle any undefined img values.
        //Check for custom icon
        if(coords.img){
            marker.setIcon(coords.img);
        } else {
          marker.setIcon('../images/map-marker.svg');
          // scaledSize: new google.maps.Size(10, 10);
        }
       //This will handle any undefined content values.
        //Check for content
    if(coords.content){
                let infoWindow =new google.maps.InfoWindow({
        content:coords.content
    })
    //make event listenrr and pass map and marker
    marker.addListener("click", function(){
        infoWindow.open(map, marker)
    })
// clicks
let locationDivs=document.querySelectorAll(".locations")
// console.log(locationDivs)
//        console.log(div);
    let markerTarget=locationDivs[index];
    console.log(markerTarget)
    markerTarget.addEventListener("click", function(ev){
        // locationDivs.forEach((itemClicked, index)=>{
        // let infoclose=new google.maps.InfoWindow({content:coords.content}).close(map, marker)
        // })
    let dataId=ev.currentTarget.getAttribute("data-id")
        if(dataId==marker.markerId){
            console.log("open")
        infoWindow.open(map, marker)
        }
    })

    }
    }
}
