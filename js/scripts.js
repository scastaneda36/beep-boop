function beepBoop(num){
  var beeps = "beep!";
  var boop = "boop!";
  var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
  var array = [];

  var i;
     for(i = 0; i < num; i++) {
       var num = parseInt($ ("#number").val());
      if (i%3 === 0 && i > 0) {
        array.push (dave);
      } else if (num.includes ("1")) {
        array.push (boop);
      } else if (num.includes ("0")) {
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
