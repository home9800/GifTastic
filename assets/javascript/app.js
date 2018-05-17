$('#submit').on('click', function() {

    var animalName = $('#textArea').val();

    $('#textArea').val('');

    $('#header').append("<button>" + animalName + "</button>");

});
