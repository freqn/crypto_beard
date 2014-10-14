//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image);

// Add caption to overlay
$overlay.append($caption);

// Add overlay to body
$("body").append($overlay);

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){

  // Prevent the default behavior when clicking the link to ensure intended behavior
  event.preventDefault();

  // Set image location to image link
  var imageLocation = $(this).attr("href");

  // Set image source to image location
  $image.attr("src", imageLocation);

  // Show the overlay.
  $overlay.show();

  // Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");

  // Set the paragraph test to the text from the alt attribute
  $caption.text(captionText);
});

// Add click function to overlay to cause overlay to disappear
$overlay.click(function(){
  // Hide the overlay
  $overlay.hide();
});
