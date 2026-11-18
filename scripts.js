document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.newsletter form');
  var email = document.querySelector('#email');
  var message = document.querySelector('.message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var value = email.value.trim();

    if (value === '') {
      message.textContent = 'Please enter a valid email address.';
    } else {
      message.textContent =
        'Thank you! Your email address ' + value +
        ' has been added to our mailing list!';
    }
  });
});