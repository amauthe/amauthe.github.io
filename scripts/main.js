// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set up a callback function to run when the request is complete
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status === 200) {
    // Insert the navbar HTML into the <div> element with ID "navbar"
    document.getElementById("navbar").innerHTML = xhr.responseText;
    
    // Create a new XMLHttpRequest object
    var xhrFooter = new XMLHttpRequest();
    
    // Set up a callback function to run when the request is complete
    xhrFooter.onload = function() {
      // Check if the request was successful
      if (xhrFooter.status === 200) {
        // Insert the footer HTML into the <div> element with ID "footer"
        document.getElementById("footer").innerHTML = xhrFooter.responseText;
      }
    };
    
    // Send the request to the server to load the footer HTML
    xhrFooter.open('GET', 'footer.html', true);
    xhrFooter.send();
  }
};

// Send the request to the server to load the navbar HTML
xhr.open('GET', 'navbar.html', true);
xhr.send();
