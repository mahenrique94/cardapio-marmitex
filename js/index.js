document.addEventListener('DOMContentLoaded', function(e) {
    var target = document.getElementsByClassName('js-link')[0];
    var close = document.getElementsByClassName('js-close')[0];

    let links = document.querySelectorAll('a[data-target][data-type]');
    if (links != undefined && links.length > 0) {
        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', e => {
                if (target != undefined && close != undefined) {
                    close.style.display = 'block';
                    target.src = `img/pratos/${e.target.dataset.target}.${e.target.dataset.type}`;
                    target.style.display = 'block';
                }
            });
        }
    }

    if (close != undefined) {
        close.addEventListener('click', e => {
            close.style.display = 'none';
            target.style.display = 'none';
            target.src = '';
        })
    }

});