// Animate Smooth scroll

// Grab ID to view work, when the button is clicked run a function.
// Create a variable called images and set it to jQuery images and get the top position
$("#view-work").on("click", function () {
  const images = $("#images").position().top;

  // Add the animation to the HTML and body. Animate will take in an object scroll top so that it scrolls to the top of the image
  // Indicate a time parameter EX 900 milliseconds to scroll
  $("html, body").animate(
    {
      scrollTop: images,
    },
    900
  );
});
