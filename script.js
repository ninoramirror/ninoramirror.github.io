document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.mirror-card');

    // Intersection Observer to fade in mirrors as you scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight delay for each card for a "staggered" look
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});