$(function(){

  var getInfo = function(callback){
    Twitch.api({method: 'channel'}, function(error, channel) {
      callback(channel);
    });

  }

  Twitch.init({clientId: 'jyckx3hg9w4r3vmi177y5mfmk2j2r5'}, function(error, status) {

      console.log(status);

    if (status.authenticated) {
      $('.twitch-connect').hide();

      getInfo(function(data){
          $('strong').text(data.display_name)
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


  var logout = function()
  {
    Twitch.logout(function(error) {
        $('.twitch-connect').show();

        $('strong').text('');
        $('#picture').attr('src','');
        $('#login-info').hide();
    });
  }

  $('.twitch-connect').click(function(e){
    e.preventDefault();

    login();
  })

  $('.twitch-disconnect').click(function(e){
    e.preventDefault();

    logout();
  })

})
