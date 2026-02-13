let shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', function () {
    if (document.getElementById('footer').classList.contains('active-design-footer')) {
        console.log('hola');
        document.getElementById('active-footer').classList.add('card-footer-movile');
        document.getElementById('footer-profile').classList.remove('none');
        document.getElementById('footer').classList.remove('active-design-footer');
        document.querySelector('.return-icon').classList.remove('active');
        document.querySelector('.share-icon').classList.remove('hidden');
        document.querySelector('#content-footer').classList.remove('design-desktop');

    } else {
        console.log('adios');
        document.getElementById('active-footer').classList.remove('card-footer-movile');
        document.getElementById('footer-profile').classList.add('none');
        document.getElementById('footer').classList.add('active-design-footer');
        document.querySelector('.return-icon').classList.add('active');
        document.querySelector('.share-icon').classList.add('hidden');
        document.querySelector('#content-footer').classList.add('design-desktop');
    }
});