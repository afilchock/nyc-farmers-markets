
$("#noShow").hide();
// modify css styles for the photo gallery button
$("#togglePhotos").css({
    "background-color": "green",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});

$("#togglePhotos").click(function() {
    $("#photos").toggle();
  });

$("#noShow").hide();


  
// modify css styles for the bookshelf button
$("#toggleBookshelf").css({
    "background-color": "blue",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});
$("#toggleBookshelf").click(function() {
    $("#bookshelf").toggle();
  });
$("img").css({  
    "width": "200px",
    "height": "150px",})