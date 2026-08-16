if ($('.stats').length) {
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                document.querySelectorAll('.counter').forEach(counter => {

                    const target = +counter.dataset.target;
                    let current = 0;

                    const update = () => {

                        current += Math.ceil(target / 100);

                        if (current >= target) {
                            current = target;
                        }

                        if (counter.dataset.format === "k") {
                            if (current >= target) {
                                counter.textContent = "2k+";
                            } else {
                                counter.textContent = current;
                            }
                        } else {
                            counter.textContent = current;
                        }

                        if (current < target) {
                            requestAnimationFrame(update);
                        }

                    }
                    setTimeout(() => {
                        update();
                    }, 1000); // Delay before starting
                });
                observer.disconnect();
            }
        });
    });

    observer.observe(document.querySelector('.stats'));
}