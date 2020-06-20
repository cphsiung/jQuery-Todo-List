//Check off specific todos by clicking
//.on() needs to be add to ul so future elements in ul can have eventlisteners
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
  //remove parent instead of just remove the span
  $(this).parent().fadeOut(500, function(){
    //remove will happen after fadeOut
    $(this).remove();
  });
  //click listener won't bubble up to parent elements
  event.stopPropagation()
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    let todoText = $(this).val();
    //set text input back to empty
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
