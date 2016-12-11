var rideList = [];


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
    var newRide = new Ride($("#rideName").val(), $("#rideColor").val(), $("#ridePpl").val(), $("#rideLvl").val());
    rideList.push(newRide);
    $("#rideName, #rideColor, #ridePpl, #rideLvl").val("");
  }
}

//displayRide takes in value of array index
function displayRide(ride){
  var displayString = ride.name+" - Color: "+ride.color+" No. Riders: "+ride.riders+" Ride Level: "+ride.level;
  $("#rideList").append("<li>"+displayString+"</li>");
}

function showRides(event){
  event.preventDefault();
  $("#rideList").empty();
  $.each(rideList, function(index, value){
    displayRide(value);
  });
}


$(document).ready(function(){
  $("#rideAdd").on("click", function(event){addRide(event)});
  $("#rideShow").on("click", function(event){showRides(event)});
});
