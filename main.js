// $(window).ready(function() {
//     alert("Its working")
// })


// $('#hidden')
// $('#testing')
// $('.square')

$('li').click(function() {
    alert('Clicked');
})

$('#btn').click(function(){
    $('#h1').text("Extra Text");
    $('#h1').append(" One");
})
$('#btn2').on('click', function(){
    console.log("Second Button ");
})