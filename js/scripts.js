function beepBoop(num){
  var beeps = "beep!";
  var boop = "boop!";
  var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
  var array = [];
  var i;
     for(i = 0; i < num; i++) {
      if (i%3 === 0 && i > 0) {
        array.push (dave);
      } else if (array.includes ("1")) {
        array.push (boop);
      } else if (array.includes ("0")) {
        array.push (beeps)
      } else {
        array.push (i)
      }
    }

   return array;

}
$(document).ready(function() {
$("#beepBoop").submit(function(event) {
  event.preventDefault();
  var num = parseInt($ ("#number").val());
  var finalResult = beepBoop(num);

  $("#result").text(finalResult);
  });
});
