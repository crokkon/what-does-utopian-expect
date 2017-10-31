var url = "https://api.utopian.io/api/stats";

function colHeader(title) {
  return "<th scope=\"col\">" + title + "</th>";
}

function tblCell(content) {
  if (typeof(content) == 'number') {
    content = Math.round(content);
  }
  return "<td>" + content + "</td>";
}

var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();
var results = JSON.parse(xhr.response);
var stats = results.stats;
var votes = stats.votes;
var categories = stats.categories;
var html = "<table class=\"table\"><thead><tr>" + 
    colHeader("Category") + colHeader("Total Posts") + 
    colHeader("Avg. post length") + colHeader("Avg. images/post") + 
    colHeader("Avg. links/post") + colHeader("Avg. tags/post") +
    "</tr></thead><tbody>";
for (var key in categories) {
  c = categories[key];
  html += "<tr><th scope=\"row\">" + key + "</th>" + 
    tblCell(c.total_posts) + tblCell(c.average_posts_length) +
    tblCell(c.average_images_per_post) + tblCell(c.average_links_per_post) +
    tblCell(c.average_tags_per_post) + "</tr>";
}
html += "</tbody></table>";
document.write(html);
