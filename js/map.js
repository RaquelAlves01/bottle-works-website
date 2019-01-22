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
            content:"<h2>Beyond The Pale</h2>\n<p>250 City Centre Ave, Ottawa</p>"
        },
        {   id:1,
            props:{lat:45.4066,lng:-75.6323},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h2>Bicycle Craft Brewery</h2>\n<p>850 Industrial Ave. &#35;12</p>"
        },
        {   id:2,
            props:{lat:45.3278,lng:-75.7116},
            img:{
                url:"../images/map-marker.svg",
                scaledSize: new google.maps.Size(40, 40)
              },
            content:"<h2>Broahead</h2>\n<p>81 Auriga Drive &#35;14</p>"
        },
        {   id:3,
            props:{lat:45.4597,lng:-75.5819},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h2>Broken Stick</h2>\n<p>5450 Canotek Road</p>"
        },
        {   id:4,
            props:{lat:45.3475,lng:-76.3446},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h2>Cartwright Springs</h2>\n<p>239 Deer Run Road</p>"
        },
        {   id:5,
            props:{lat:45.2773,lng:-75.9036},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h2>The Covered Bridge</h2>\n<p>119 Iber Road &#35;6</p>"
        },
        {   id:6,
            props:{lat:45.3301,lng:-75.8194},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h2>Whiprsnapr Brewery</h2>\n<p></p>"
        },
        {   id:7,
            props:{lat:45.3422,lng:-75.7156},
            img:{
              url:"../images/map-marker.svg",
              scaledSize: new google.maps.Size(40, 40)
            },
            content:"<h2>Nita Beer Company</h2>\n<p></p>"
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
    let lastInfoWindow=null;
    marker.addListener("click", function(){
    if(lastInfoWindow&&lastInfoWindow===marker.id){
            infoWindow.close(map,marker)
        }else{
            lastInfoWindow=marker.id
        }
        
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
