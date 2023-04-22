document.querySelector('.order').addEventListener('click', function(e) {
    let button = e.target;
    if (!button.classList.contains('animate')) {
    button.classList.add('animate');
    setTimeout(() => {
    button.classList.remove('animate');
    }, 10000);
    }
    });