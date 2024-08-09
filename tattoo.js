// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js}', // Adjust this path according to your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});