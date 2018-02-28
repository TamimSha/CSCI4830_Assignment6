$(document).ready(function() { // do this when the document is loaded
    $("#content_dialer").show(); // show the element with ID "element"
    $("#content_list").hide();
    $("#content_third").hide(); // hide the element with ID "otherElement"
    $("#content_gesture").hide();
    $("#alert-sug").hide();
});

$("#b1").click(function() { // when "button_id" is clicked
    $("#content_dialer").show(); // show element
    $("#content_list").hide();
    $("#content_third").hide(); // hide other element
    $("#content_gesture").hide();
});

$("#b2").click(function() { // when "button_id" is clicked
    $("#content_list").show(); // show element
    $("#content_dialer").hide();
    $("#content_third").hide(); // hide other element
    $("#content_gesture").hide();
});

$("#b3").click(function() { // when "button_id" is clicked
    $("#content_third").show(); // show element
    $("#content_dialer").hide();
    $("#content_list").hide(); // hide other element
    $("#content_gesture").hide();
});

$("#b4").click(function() {
    $("#content_third").hide();
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_gesture").show();
});

$("#dialer1").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "1")
});

$("#dialer2").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "2")
});

$("#dialer3").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "3")
});

$("#dialer4").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "4")
});

$("#dialer5").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "5")
});

$("#dialer6").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "6")
});

$("#dialer7").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "7")
});

$("#dialer8").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "8")
});

$("#dialer9").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "9")
});

$("#dialer0").click(function() { // when "button_id" is clicked
    $("#form_dialer").val($("#form_dialer").val() + "0")
});

$("#dialerClear").click(function() { // when "button_id" is clicked
    $("#form_dialer").val("");
});

var downX = 0;
var downY = 0;

$("#gesture_area").mousedown(function(event) {
    $("#gesture_output").val("Mouse Down");
    downX = event.pageX;
    downY = event.pageY;
});

$("#gesture_area").mouseup(function(event) {
    var upX = event.pageX;
    var upY = event.pageY;
    if (downX > upX){
        $("#gesture_output").val("Swipe Left");
    }
    else if (downX < upX){
        $("#gesture_output").val("Swipe Right");
    }
    else{
        $("#gesture_output").val("Mouse Up");
    }
});

$("#suggestion-button").click(function(){
    $("#alert-sug").show();
})
