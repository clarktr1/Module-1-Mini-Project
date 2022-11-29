const observer = new IntersectionObverser((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classlist.add('show');
        } else {
            entry.target.classlist.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('hidden');
hiddenElements.forEach((el) => observer.observe(el));