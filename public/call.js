console.log('test')



// this.client_.
//   login('drewtest', window.PROFILE, window.AUTH_TOKEN).
//        done(this.init_, this);

  function login(serviceId) {
  var $client, $session;
  $client = vline.Client.create({serviceId: serviceId});
  $client.login(serviceId).done(function(session) {
    $session = session;
   }, this);

// // app init function invoked when login succeeds
// function MyApp.prototype.init_ = function(session) {
//    this.session_ = session;
// //   // ...
};
	

$(document).ready(function() {
	$("#login").click(function (){
// this.client_ = vline.Client.create({
//     serviceId: 'drewtest'
	login("drewtest");
	//$('#login').replaceWith(<input type="button" id="logout" value="Logout">);
  });
});