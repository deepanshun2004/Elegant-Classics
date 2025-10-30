// Change header background on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Filter functionality for blog posts
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value === "all") {
            $(".post-box").show(1000);
        } else {
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
                .filter("." + value)
                .show(1000);
        }
        // Add active class to the clicked filter item
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Add navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('header nav');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="bx bx-menu"></i>';
    document.querySelector('header .nav').appendChild(navToggle);

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});

// Back-to-top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Adjust this value as needed
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


