
$(document).ready(function() {

  initValidation(); // sets up submit handling




  // <---------- Code Below for hiding/showing content on a page ---------->  //
  
  // Get array of all nav p's. When one is clicked, set all to hide except the clicked one.
  let pages = document.getElementsByClassName('menuItem');
  let contents = document.getElementsByTagName('section');
  
  // to show the home content
  $('.home').click(function(){
    $('.content').hide();
    $('#homeContent').show();
  });
  
  // to show the Live Streaming content
  $('.streaming').click(function(){
    $('.content').hide();
    $('#streamingContent').show();
  });
  
  // to show the Videos content
  $('.videos').click(function(){
    $('.content').hide();
    $('#videosContent').show();
  });
  
  // to show the community content
  $('.community').click(function(){
    $('.content').hide();
    $('#communityContent').show();
  });
  
  // to show the branding content
  $('.branding').click(function(){
    $('.content').hide();
    $('#brandingContent').show();
  });
  
  // to show the visitor log
  $('.visitors').click(function(){
    $('.content').hide();
    $('#log-visit').show();
  });
  
  
  // Toggle Theme Button functionality here
  let themeSheet = '<link id="theme" rel="stylesheet" href="theme.css">'
  
  let bool = false;
  
  $("#toggle").click(function(){
    console.log("Clicked");
    // check if theme.css is in head
    if (bool) {
      $("#theme").remove();
      bool = false;
    } else {
      $("#baseStyling").after(themeSheet);
      bool = true;
    }
  });
});


// Functions to be used below //

function loadVisitors() {
  // called when visitors menu item is clicked 
}

function submitForm() {
  // called when a form is submitted 

  // this gets contents of the form and creates a visitor object

  // calls modelAddVisitor function
}

function addVisitor(visitor) {
  // called when "new visitor" is clicked
}

function deleteVisitor(id) {
  // called when "delete" icon is clicked 
  // calls modelDeleteVisitor
}