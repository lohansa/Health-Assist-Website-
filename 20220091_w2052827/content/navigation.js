document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 

            var targetPage = this.getAttribute("href");
            
            // Remove active class 
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add active class to the clicked 
            this.classList.add("active");

            document.querySelector(targetPage).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
