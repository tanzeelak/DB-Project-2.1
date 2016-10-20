$(document).ready(function(){
  $.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson", function(data){
    console.log(data);
    console.log(data.metadata.api);

    var source   = $("#entry-template").html();
    console.log(source);
    var template = Handlebars.compile(source);
    console.log(template);

    // var context = {title: "My New Post", body: "This is my first post!"};
    var html    = template(data);
    console.log(html);

    $("#data").html(html);
  });
});
