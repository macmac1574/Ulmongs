// Optionally, you can add custom JS here. For now, this is just a placeholder.
// Example: Auto-play music when image is clicked

window.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('mainImage');
    const audio = document.getElementById('audioPlayer');
    const musicOverlay = document.getElementById('musicOverlay');

    // Blur effect: remove blur after image loads
    function revealImage() {
        img.classList.add('loaded');
    }
    if (img.complete) {
        setTimeout(revealImage, 200);
    } else {
        img.addEventListener('load', function() {
            setTimeout(revealImage, 200);
        });
    }

    // Try to auto-play music after a short delay (may require user interaction on some browsers)
    setTimeout(() => {
        audio.play().catch(() => {
            // Autoplay failed (browser restriction); show overlay
            if (musicOverlay) musicOverlay.style.display = 'flex';
        });
    }, 900);

    // Overlay: tap button to play music
    if (musicOverlay) {
        const btn = musicOverlay.querySelector('.music-overlay-btn');
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            audio.play();
            musicOverlay.style.display = 'none';
        });
    }

    // Optional: toggle play/pause on image click
    img.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
