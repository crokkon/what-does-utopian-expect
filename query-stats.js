var url = "https://api.utopian.io/api/stats";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();
var result = JSON.parse(xhr.response);
document.write(results);
