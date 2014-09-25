console.log("javascript working!"); // Just to test. 
$(document).ready(function() {

  var getIt = function(response) {
    //$("#list").empty();
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;   
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      var title = story.title;
      var permalink = story.url;
      var upvoteCount = story.score;
      var elem = $('<li><a href="' + permalink + '">' + upvoteCount.toString() + " upvotes " + " -- " + title + "</a></li>");
       $("#list").append(elem)
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    }
  }

  $.get("http://www.reddit.com/hot.json", getIt)

    $("#refresh-button").click(function() {
      var d = new Date();

      var month = d.getMonth()+1;
      var day = d.getDate();
      var seconds = d.getSeconds();
      var hours = d.getHours();
      var minutes = d.getMinutes();

      var output = 
          (month<10 ? '0' : '') + month + '/' +
          (day<10 ? '0' : '') + day + '/' + d.getFullYear() + ' at ' + hours + '.' + minutes + '.' + seconds;

      $("#list").empty();
      $.get("http://www.reddit.com/hot.json", getIt);
      $("#list").append('<li><a> Last refreshed: ' + output +'</a></li>')
    });

});

