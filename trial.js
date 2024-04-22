// Optional: If you want to hide label when user focuses on the input field.
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', function () {
        this.setAttribute('placeholder', '');
      });
      input.addEventListener('blur', function () {
        if (!this.value) {
          this.setAttribute('placeholder', this.getAttribute('data-placeholder'));
        }
      });
    });
  });
  