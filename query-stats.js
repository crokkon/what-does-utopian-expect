var url = "https://api.utopian.io/api/stats";

function colHeader(var title) {
  return "<th scope=\"col\">" + title + "</th>";
}

function tblCell(var content) {
  return "<td>" + content + "</td>";
}

var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();
var results = JSON.parse(xhr.response);
var stats = results.stats;
var votes = stats.votes;
var categories = stats.categories;
document.write("<table class="table"><thead><tr>" + colHeader("Category) + colHeader("Total Posts") + </tr></thead><tbody>");
for (var key in categories) {
  c = categories[key];
  document.write("<tr><th scope=\"row\">" + key + "</th>" + tblCell(c.total_posts) + "</tr>");
}
document.write("</tbody></table>");
