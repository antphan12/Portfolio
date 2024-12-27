// script.js

document.getElementById('learn-more').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Message sent!',
        text: 'Thank you for reaching out. I will get back to you soon.',
    });
});

const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        Swal.fire({
            title: `Project ${projectId}`,
            text: `Detailed description of project ${projectId}.`,
            icon: 'info',
        });
    });
});

const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

AOS.init();
