const lazyLoading = () => {
    let lazyImgs = document.querySelectorAll('.lazy');

    let observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(
            entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    img.classList.add('loaded');
                    obs.unobserve(img);
                }
            }
        )
    })


    lazyImgs.forEach(img => {
        observer.observe(img);

    })
}

export { lazyLoading };