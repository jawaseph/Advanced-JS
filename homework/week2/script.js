// Using the jQuery .ready() function!
$(document).ready(function() {
  loadReddit();
  $("#refresh").click(function() {
    // Ex. 1: Refresh Refresher code here
      var d = new Date();

      var month = d.getMonth()+1;
      var day = d.getDate();
      var seconds = d.getSeconds();
      var hours = d.getHours();
      var minutes = d.getMinutes();

      var output = 
          (month<10 ? '0' : '') + month + '/' +
          (day<10 ? '0' : '') + day + '/' + d.getFullYear() + ' at ' + hours + '.' + minutes + '.' + seconds;


    loadReddit();
    $('#refreshed').empty().append('Last refreshed: ' + output.toString());
    console.log(output.toString());
    person.miniBio();
  });

  $(window).mousemove(function(e) {
    // Ex. 3: My Shadow code here

    // You can change the css of an element with the .css function—
    //   look up the documentation for it on jQuery.com!
    $(document).mousemove(function(e){
    $("#follow-dot").stop().animate({left:e.pageX, top:e.pageY}); }); // Just to see what's going on. 
    // Optionally, add a delay. Hint: look up the setTimeout function!
  });

  getFB(); // Defined below
});

// Ex. 2: Objectify Me code here
// An example person
var person = {
  fname: "Joe",
  lname: "Calamia",
  favoriteCereal: "Cracklin Oat Bran",
  interests: ['cycling', 'nature', 'animated gifs', 'reading', 'Scott Pilgrim vs. the World'],
  
  fullname: function() {
    // Make sure to use `this`
    return this.fname + ' ' + this.lname;
  },

  miniBio: function() {
    toPrint = "Hi my name is " + this.fullname() + ', ';
    // "toPrint += X" is a shortcut for "toPrint = toPrint + X"
    toPrint += "and my favorite cereal is " + this.favoriteCereal + '. ';
    toPrint += "In my free time, I like: ";
    for (var i in this.interests) {
      toPrint += this.interests[i] + ', '
    }
    console.log(toPrint + '.');
    return toPrint + '.';
  }
}

// Gets data from Reddit
var loadReddit = function() {
  console.log("loading hottest stories...");
  $.get("http://www.reddit.com/hot.json", function(response) {
    $("#list").empty(); // Empty all the stuff in the list first.
    var stories = response.data.children;
    var counter = 1;
    for(var i in stories) { // For each story
      story = stories[i].data; // Get the actual object of the story
      var elem = $("<div class='item' ></div>"); // Create an empty list element
      // // Create a link inside a paragraph
      $(elem).append("<div style='text-align: center; height: 300px; background: url(" + story.thumbnail + ") no-repeat center;'><a href='http://reddit.com" + story.permalink +
        "'>" + counter.toString() + '. ' + story.title + "</a> (" + story.score + "points)</div>");
      counter = counter + 1;
      $("#list").append(elem);
    }
  });
};

// Ex 4: Me online! Code here
// Get data from Facebook
var getFB = function() {
  $.ajax({
    method: "get", // Using GET
    url: "https://graph.facebook.com/me", // Get my own info
    data: {
      fields: "id, name, gender, picture.url, cover.source", // What goes here? 
      // Access token obtained at https://developers.facebook.com/tools/explorer
      // Note that it expires after a while, so you occasionally need to go back
      //   and get another one. 
      access_token: "CAACEdEose0cBAAj6dyPPjotW8jngxJQiCwaU0laEnZAIOF7cUKACMfpp4o1QZAY79V4BhwkMH1Tjfg1GxTvpT0WFtHJZAsLXZAb9yRgO81ZAVnE871Y0kLePlfysrMIQnPpo892TrMfBPeDxZBM8LwsZCpFRANVMACGa3UYHyZAjT8TZAadIQ9cYMxzqLncbcZAPt20ESesmVWm6kVpSUo3hgy"
    },
    success: function(response) {
      console.log(response);
      // Write code to display the name and userID on the page here.
      // If you got the profile picture, make it show up in an <img> tag
      
      var profileurl = response.picture.data.url;
      $("#photo").append("<div style='height: 200px; background-image: url(" + profileurl.toString() + ")'></div>" );
      $("#welcome").append("Hello, "+ response.name + ", better known as " + response.id + ".");
    }, 
    error: function(jxqr, text) {
      console.log(jxqr, text);
      // Error handling is a big part of coding, and we all know website that
      // show you no (or even worse, unhelpful) error messages. How will your
      // web page handle errors?
    }
  });
};

