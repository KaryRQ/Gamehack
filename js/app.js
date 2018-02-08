/* Funcionalidad log in con twitch*/

$(function(){
/*función que trae data del usuario*/
  var getInfo = function(callback){
    Twitch.api({method: 'channel'}, function(error, channel) {
      callback(channel);
    });

  }
/*inicializando twitch*/
  Twitch.init({clientId: 'jyckx3hg9w4r3vmi177y5mfmk2j2r5'}, function(error, status) {
      console.log(status);
/*sí su estado está inicializado traeme la data del usuario y cambia de vista*/

      if (status.authenticated) {
          window.location.href = window.location.origin + "/views/info.html";
 /*función añade esta imagen ye ste texto de acuerdo a el log in*/
      getInfo(function(data){
          $('strong').text(data.display_name);
          $('#picture').attr('src',"https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg");
      });


    }else{
      $('#login-info').hide();
    }

  });


  var login = function()
  {
      Twitch.login({
        scope: ['user_read', 'channel_read']
      });

  }

/*función sale y regresa a la pantalla principal*/
  var logout = function()
  {
    Twitch.logout(function(error) {
      $('.twitch-connect').show();

      $('strong').text('');
      $('#picture').attr('src','');

      $('#login-info').hide();
    });
  }
/*se llama a los botones y se previene su funcionalida de estos por default */
  $('.twitch-connect').click(function(e){
    e.preventDefault();

    login();
  })

  $('#btn-logout').click(function(e){
    e.preventDefault();

    logout();
  })
})
