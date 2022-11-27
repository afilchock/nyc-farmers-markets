$("#buttonPrompt").click(function() {
    let ask = prompt("Are you interested in food inequality? yes/no");
    if (ask == 'no'){
        $("h1").html("Just Show Me the Farmers Markets");
    } 
    else if (ask == 'yes'){
        alert("Great! Let's take a look.");
        $("h1").html("NYC Farmers Markets in Relation to Food Deserts");
    };
});
$("#noShow").hide();
// modify css styles for the photo gallery button
$("#togglePhotos").css({
    "background-color": "green",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});
$("#togglePhotos").click(function() {
    $("#photos").toggle();
  });
$("img").css({  
    "border-radius": "25px",
    "border": "2px solid #73AD21",
    "padding": "20px",
    "width": "200px",
    "height": "150px",})
$("#noShow").hide();
// modify css styles for the bookshelf button
$("#toggleBookshelf").css({
    "background-color": "blue",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});
$("#toggleBookshelf").click(function() {
    $("#bookshelf").toggle();
  });
$("img").css({  
    "border-radius": "25px",
    "border": "2px solid #73AD21",
    "padding": "20px",
    "width": "200px",
    "height": "150px",})