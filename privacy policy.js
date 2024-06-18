document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.wrap-1');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    faqItems.forEach(item => observer.observe(item));
});
