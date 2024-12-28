document.getElementById('aboutMeButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('aboutMeContainer').scrollIntoView({ behavior: 'smooth' });
});

    document.addEventListener('DOMContentLoaded', function() {
        const contents = document.querySelectorAll('.content');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        });

        contents.forEach(content => {
            observer.observe(content);
        });
    });
