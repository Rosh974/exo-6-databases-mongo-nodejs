
    $.ajax({
        type: 'GET',
        url: "http://localhost:3777/mongo",
        success: function (data) {
            console.log(data);
            
                $('#m').append( '<p class="text-center mt-5">' + "prénom : " + data.name + '<br/>' + 'genre : ' +  data.genre + '</p>')
            
           },
  
  });  
  