
$(document).ready(function () {
$('.demo').anijs({
image: "boy.jpg",
fps: 20,
frameWidth: 150,
frameHeight: 150,
isReady : function ($this) {}
});
});


$(document).ready(function () {
$(".start").click(function () {
$('#controls').anijs("enable");
});
$(".stop").click(function () {
$('#controls').anijs("disable");
});
$(".destroy").click(function () {
$('#controls').anijs("destroy");
});
});


