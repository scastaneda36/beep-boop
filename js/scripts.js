function beepBoop(num){
  var result = ""
     var i;
     for(i = 0; i < num; i++) {

     }
  //if (num.includes("0")){
//return result
  Output ((result += "The number is " +i));
}
$(document).ready(function() {
$("#beepBoop").submit(function(event) {
  event.preventDefault();
  var num = parseInt($ ("#number").val());
  var finalResult = beepBoop(num);

  $("#result").text(finalResult);
  });
});
