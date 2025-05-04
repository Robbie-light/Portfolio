
        // Typewriter effect for section titles
        const sectionTitles = document.querySelectorAll('.section-title:not(.hero h1)');
        sectionTitles.forEach(title => {
            const text = title.textContent;
            title.textContent = '';
            
            let charIndex = 0;
            function typeTitle() {
                if (charIndex < text.length && title.classList.contains('show')) {
                    title.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeTitle, 100);
                }
            }
            
            // The typing will start when the element becomes visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeTitle, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(title);
        });

        // Intersection Observer for fade-in effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });