// Testionails
document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [{
            name: "Rishu Sharma",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            name: "Omkar",
            comment: "I love how user-friendly this video editing website is! It made editing my videos a breeze, even for someone like me who's not very tech-savvy."
        },
        {
            name: "Rohit",
            comment: "I've been using this video editing website for a while now, and I'm constantly impressed by the updates and new features they add. It's great to see a platform that keeps up."
        },
        {
            name: "Manisha",
            comment: "This video editing website has been a game-changer for my YouTube channel. The rendering speed is fantastic, and I appreciate the cloud storage for my projects"
        }
    ];

    let currentIndex = 0;
    const commentElement = document.getElementById("comment");
    const nameElement = document.getElementById("name");

    function showTestimonial(index) {
        commentElement.style.opacity = "0";
        nameElement.style.opacity = "0";

        setTimeout(function() {
            commentElement.textContent = testimonials[index].comment;
            nameElement.textContent = testimonials[index].name;

            commentElement.style.opacity = "1";
            nameElement.style.opacity = "1";
        }, 200); 
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function previousTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    document.querySelector(".bi-arrow-left").addEventListener("click", previousTestimonial);
    document.querySelector(".bi-arrow-right").addEventListener("click", nextTestimonial);

    const autoSlideInterval = 3000;

    function autoSlide() {
        nextTestimonial();
    }

    setInterval(autoSlide, autoSlideInterval);

    showTestimonial(currentIndex);
});

//Contact Us
const dropdown = document.getElementById("dropdown1");
const selectedValue = "How did you hear about us?";

function hideSelectedOption(selectedValue) {
    const options = dropdown.getElementsByTagName("option");

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.value === selectedValue) {
            option.style.display = "none";
        } else {
            option.style.display = "block";
        }
    }
}
hideSelectedOption(selectedValue);
dropdown.addEventListener("change", function() {
    const selectedValue = dropdown.value;
    hideSelectedOption(selectedValue);
});

window.addEventListener('load', hideSelectedOption);