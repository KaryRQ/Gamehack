$(function(){

  var getInfo = function(callback){
    Twitch.api({method: 'channel'}, function(error, channel) {
      callback(channel);
    });

  }

  Twitch.init({clientId: 'jyckx3hg9w4r3vmi177y5mfmk2j2r5'}, function(error, status) {

      console.log(status);

    if (status.authenticated) {
      $('.twitch-disconnect').hide();

      getInfo(function(data){

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
