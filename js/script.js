(function () {
    let btnMenu = document.getElementById('btnHamburguer');
    let navMob = document.getElementById('menu');

    navMob.style.display = 'none';

    btnMenu.addEventListener('click', function () {

        if (navMob.style.display == 'none') {
            navMob.style.display = 'flex';
        } else if (navMob.style.display == 'flex'){
            navMob.style.display = 'none';
        }
    });
})()