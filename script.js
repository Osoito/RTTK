function zoomImage(img) {
    // Create overlay if it doesn't exist
    let overlay = document.getElementById('zoom-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'zoom-overlay';
        document.body.appendChild(overlay);
    }

    if (!img.classList.contains('zoomed')) {
        // Zoom in
        img.classList.add('zoomed');
        overlay.style.display = 'block';
        
        // Click anywhere to zoom out
        overlay.onclick = function() {
            img.classList.remove('zoomed');
            overlay.style.display = 'none';
        };
    } else {
        // Zoom out
        img.classList.remove('zoomed');
        overlay.style.display = 'none';
    }
} 