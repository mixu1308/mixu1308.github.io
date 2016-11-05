var quote = ' ';
var author = ' ';
function getQuote() {
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    headers: {
      "X-Mashape-Key": "Ffysr0oWiTmshEMzk0a1Brc4QSHdp1uqPiLjsn7TbJFqJKe8Tb",
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    
    success: function(response) {
      var r = JSON.parse(response);
      $("#text").text(r.quote);
      $("#author").text(r.author);
      quote= r.quote;
      author= r.author;
      
    }});
}

$(document).ready(function(){
  getQuote();
  $("#new-quote").on('click', getQuote);
  $("#twitter").on('click', function(){
  var win = window.open("https://twitter.com/intent/tweet?text="+ encodeURIComponent(quote + "  -" + author+ " #quote"), '_blank');
    win.focus();
  })
});