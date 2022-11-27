$("#buttonPrompt").click(function() {
    let ask = prompt("Are you interested in food inequality? Y/N");
    if (ask == 'no'){
        $("h1").html("I'm just here to find my closest farmers market.");
    } 
    else if (ask == 'yes'){
        alert("Great! Let's take a look.");
        $("h1").html("Farmers Markets in New York City");
    };
});
$("#noShow").hide();
// modify css styles for the button
$("#toggleSongs").css({
    "background-color": "green",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});
$("#toggleSongs").click(function() {
    $("#song").toggle();
  });
$("img").css({  
    "border-radius": "25px",
    "border": "2px solid #73AD21",
    "padding": "20px",
    "width": "200px",
    "height": "150px",})
