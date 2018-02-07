$(function(){
  Twitch.init({clientId: 'jyckx3hg9w4r3vmi177y5mfmk2j2r5'}, function(error, status) {

    if (status.authenticated) {
      $('.twitch-disconnect').hide();

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


  }


  $('.twitch-connect').click(function(e){
    e.preventDefault();

    login();
  })

  $('.twitch-connect').click(function(e){
    e.preventDefault();

    logout();
  })

})
