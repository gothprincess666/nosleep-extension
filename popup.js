$.getJSON('https://www.reddit.com/r/nosleep.json', function(data){
  redditArr = data.data.children;
  _.each(redditArr, function(item, idx, arr) {
    $('body').append("<br/><a href = '" + item.data.url + "'>" + item.data.title + "</a><br />");

  });
  $(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({
         url: $(this).attr('href')
       });
   });
});

});
