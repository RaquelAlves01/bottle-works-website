function initMap(){
    //map Options
    var options={
        zoom: 12,
        center: {lat:45.4215, lng:-75.6972}
    }
    //New map
    let map = new google.maps.Map(document.getElementById('map'),options);
    //create array of markerts
    var markers=[
        {   id:0,
            props:{lat:45.4074,lng:-75.7186},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Beyond The Pale</h1>"
        },
        {   id:1,
            props:{lat:45.4066,lng:-75.6323},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Bicycle Craft Brewery</h1>"
        },
        {   id:2,
            props:{lat:45.3278,lng:-75.7116},
            img:{
                url:"../images/map-marker.svg",
                scaledSize: new google.maps.Size(40, 40)
              },
            content:"<h1>Broahead</h1>"
        },
        {   id:3,
            props:{lat:45.4597,lng:-75.5819},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Broken Stick</h1>"
        },
        {   id:4,
            props:{lat:45.3475,lng:-76.3446},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Cartwright Springs</h1>"
        },
        {   id:5,
            props:{lat:45.2773,lng:-75.9036},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>The Covered Bridge</h1>"
        },
        {   id:6,
            props:{lat:45.3301,lng:-75.8194},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Whiprsnapr Brewery</h1>"
        },
        {   id:7,
            props:{lat:45.3422,lng:-75.7156},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h1>Nita Beer Company</h1>"
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
    let infoWindow= null;
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
        infoWindow = new google.maps.InfoWindow({
            content:coords.content
            })
    //make event listener and pass map and marker
    marker.addListener("click", function(){
        infoWindow.open(map, marker)
    })
// clicks
let locationDivs=document.querySelectorAll(".locations")
    locationDivs.forEach((div, index)=>{
        div.addEventListener("click", function(ev){
        locationDivs.forEach(windowOpen=>{
            infoWindow.close(map, marker)
        })
        let dataId=ev.currentTarget.getAttribute("data-id")
            if(dataId==marker.markerId){
                console.log("open")
            infoWindow.open(map, marker)
            }
        })
    
    })
    }
    }
}
