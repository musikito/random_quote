$(document).ready(function(){
  $('#newquote').click(function(){
    var color=['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678']; /* array of hex color */
    var index=color[Math.floor(Math.random()*color.length)]; /* random color from color array */
    getRandomQuote();
  });
});

/** ajax function which make api call to random-famous-quote-api **/
function getRandomQuote(){
  var color=['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678']; /* array of hex color */
  var index=color[Math.floor(Math.random()*color.length)]; /* random color from color array */
  
$.ajax({
    url: "https://favqs.com/api/qotd",
    type: "GET",
    datatype: "json",
    success: function(data){
      //console.log(JSON.stringify(data));
       //console.log(JSON.stringify(data.quote.body));
       //console.log(JSON.stringify(data.quote.author));
       console.log(JSON.stringify(data.quote.tags));

       var quote = data.quote.body;
       var author = data.quote.author;
       var tag = data.quote.tags;

       $(".quote #data").html(quote);
       $(".quote h4").html("-"+author);
       $(".quote h3").html(tag);
       
       $('body').css('background-color', index);
       $('.col').css('background-color', index);
       $('.socialmedia a').css('background-color', index);
       $('#newquote').css('color','white');
       $('.color').css('color', index);
       $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+quote+" "+author);
    },
    error: function (err) {
        $(".quote #data").html("There's a problem, try again later");
      }


});


}//end function getRandomQuote