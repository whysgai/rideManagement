var rideList = [];
//store in local storage, not just an array

function storage(){
  // Put the object into storage
  localStorage.setItem('test', JSON.stringify(rideList));
  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('test');
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

//Ride Constructor
function Ride (name,color,riders,level) {
  this.name = name;
  this.color = color;
  this.riders = riders;
  this.level = level;
}

function addRide(event){
  event.preventDefault();
  if ($(".formRow input").val()=="") {
    alert("Form incomplete. Please resubmit");
  }
  else {
    $("#rideLast").empty();
    var newRide = new Ride($("#rideName").val(), $("#rideColor").val(), $("#ridePpl").val(), $("#rideLvl").val());
    rideList.push(newRide);
    displayRide(rideList[rideList.length-1],$("#rideLast"))
    $("#rideName, #rideColor, #ridePpl, #rideLvl").val("");
  }
}

//displayRide takes in value of array index
function displayRide(ride, location){
  var displayString = ride.name+" - Color: "+ride.color+", No. Riders: "+ride.riders+", Ride Level: "+ride.level;
  location.append("<li>"+displayString+"</li>");
}

function showRides(event){
  event.preventDefault();
  $("#rideList").empty();
  $.each(rideList, function(index, value){
    displayRide(value, $("#rideList"));
  });
}

function removeRide(event){
  event.preventDefault();
  $("#rideLast").empty();
  rideList.splice(-1,1);
}

function clearRides(event){
  event.preventDefault();
  $("#rideLast").empty();
  $("#rideList").empty().append("<li>No rides are currently operating.</li>");
  rideList = [];
}


$(document).ready(function(){
  $("#rideAdd").on("click", function(event){addRide(event)});
  $("#rideShow").on("click", function(event){showRides(event)});
  $("#rideRemove").on("click", function(event){removeRide(event)});
  $("#rideClear").on("click", function(event){clearRides(event)});
});
