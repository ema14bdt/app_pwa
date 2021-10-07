let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    document.querySelector('.pwa-popup').classList.add('active');
});

document.querySelector('.pwa-popup button').addEventListener('click', async () => {
    document.querySelector('.pwa-popup').classList.remove('active');

    deferredPrompt.prompt();
    const {outcome} = await deferredPrompt.userChoice;
    deferredPrompt = null;
});

window.addEventListener('appinstalled', () => {
    document.querySelector('.pwa-popup').classList.remove('active');
    deferredPrompt = null;
});
