$(function () {
    //Email Validation
  $('form').on('click', 'button', function (event) {
    event.preventDefault();

    var email = $('input').val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    event.preventDefault();
    console.log('User submitted the email address ' + email);

    if (filter.test(email)) {
      alert('Thank you for subscribing, ' + email + '!');

    } else {
      alert('Please enter a valid E-Mail address.');
    }

  });
});