let progress = 0; // Initial progress value

function updateProgress() {
    if (progress < 100) {
        progress += 10; // Increase progress by 10%
        document.getElementById('progressBar').style.width = progress + '%';
    }
}
