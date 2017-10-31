var url = "https://api.utopian.io/api/stats";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();
var results = JSON.parse(xhr.response);
var stats = results.stats;
var votes = stats.votes;
var categories = stats.categories;
for (var key in categories) {
  c = categories[key];
  var line = "<p>Category :" + key + " total_posts: " + c.total_posts + "</p>";
  document.write(line);
}
