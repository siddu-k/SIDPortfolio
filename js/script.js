document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.getElementById('showMoreCerts');
    const showLessBtn = document.getElementById('showLessCerts');
    // Select loosely to handle dynamically toggled class
    // actually class selection is static. 
    // Re-querying or just toggling class is better.

    const certGrid = document.getElementById('certGrid');
    // Select all cards that are initially hidden

    // Logic: Identify which ones were intended to be hidden. 
    // In HTML they have 'hidden-cert' class.

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Find all currently hidden certs
            const hiddenItems = certGrid.querySelectorAll('.hidden-cert');
            hiddenItems.forEach(cert => {
                cert.classList.remove('hidden-cert');
                cert.classList.add('revealed-cert'); // Mark them so we know which to hide later
            });
            showMoreBtn.classList.add('hidden-btn');
            showLessBtn.classList.remove('hidden-btn');
        });
    }

    if (showLessBtn) {
        showLessBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Find all revealed certs
            const revealedItems = certGrid.querySelectorAll('.revealed-cert');
            revealedItems.forEach(cert => {
                cert.classList.add('hidden-cert');
                cert.classList.remove('revealed-cert');
            });
            showMoreBtn.classList.remove('hidden-btn');
            showLessBtn.classList.add('hidden-btn');

            document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
