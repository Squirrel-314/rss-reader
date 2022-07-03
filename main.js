const FEED_URL = `https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss`;

$.get(FEED_URL, function (data) {
   $(data).find("entry").each(function () { // or "item" or whatever suits your feed
       var el = $(this);

       console.log("------------------------");
       console.log("title      : " + el.find("title").text());
       console.log("author     : " + el.find("author").text());
       console.log("description: " + el.find("description").text());
   });
});