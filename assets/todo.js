$(document).ready(function(){

  $('form').on('submit',function(){

    var item=$('form input');
    var todo = {item:item.val()};

    $.ajax({
      type:'POST',
      url:'/index',
      data:todo,
      success: function(data){
        location.reload();
      }
    })
    return false;
  });
  $('li').on('click',function(){

    var item = $(this).text().replace(/ /g,"-");
    console.log(item);
    $.ajax({
      type: 'DELETE',
      url:'/index/' + item,
      success: function(data){
        location.reload();
      }
    });
  });

});
