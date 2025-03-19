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
$('#Mydiv').click(function(){

    $(this).addClass('clicked')
})
.find('span')
.attr('tittle', 'Hover Over Me')

$('#btn3').click(function(){

    $('.hidden').show('slow')
});
$('#btn4').click(function(){

    $('.hidden').hide('slow')
});
$('#square').click(function(){
    $('#square').animate({
        'width': '200px',
        'height': '200px'
    })
})
$('.testing').click(function(){
    $('.testing').animate({
        'left':  '200px',
        'opacity':  '0.25',
        'font-size': '30px'
    })
})