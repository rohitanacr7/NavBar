// Testionails
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      name: "Frank",
      comment:
        "I've been collaborating with Rishu for five years now. Initially, I worked with him from Singapore, and later I continued our partnership from Belgium. His keen sense of design adds a special flair to his animations, elevating them to another level. I can highly recommend him. Success with Story Humor Studio!",
    },
    {
      name: "Kristiina",
      comment:
        "Had a great help from Rishu and his colleagues. Beautiful work and easy to communicate.",
    },
    {
      name: "Rohit",
      comment:
        "Rishu is a talented professional who listens closely to feedback and delivers outstanding results. His animations have brought my projects to life in ways I couldn't have imagined!",
    },
    {
      name: "Manisha",
      comment:
        "Rishu and his team did an excellent job on our animation project. The end result was exactly what we were hoping for, and the communication throughout was seamless.",
    },
  ];

  let currentIndex = 0;
  const commentElement = document.getElementById("comment");
  const nameElement = document.getElementById("name");

  function showTestimonial(index) {
    commentElement.style.opacity = "0";
    nameElement.style.opacity = "0";

    setTimeout(function () {
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
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  document
    .querySelector(".bi-arrow-left")
    .addEventListener("click", previousTestimonial);
  document
    .querySelector(".bi-arrow-right")
    .addEventListener("click", nextTestimonial);

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
dropdown.addEventListener("change", function () {
  const selectedValue = dropdown.value;
  hideSelectedOption(selectedValue);
});

window.addEventListener("load", hideSelectedOption);

document.addEventListener("DOMContentLoaded", function () {
  // Check if the modal has been shown before using sessionStorage
  if (!sessionStorage.getItem("modalShown")) {
    var myModal = new bootstrap.Modal(
      document.getElementById("quickCallModal")
    );
    myModal.show();

    // Set a boolean in sessionStorage indicating that the modal has been shown
    sessionStorage.setItem("modalShown", "true");
  }
});

//Page Load Contact Form
document.addEventListener("DOMContentLoaded", function () {
  // Quick Call Modal Form
  const homeForm = document.getElementById("home-form");
  if (homeForm) {
    homeForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Extract form data
      const formData = new FormData(this);
      const data = {
        to: "storyhumorstudio@gmail.com",
        email: formData.get("email"),
        subject: "StoryHumor Notification",
        message: formData.get("home_message"),
        phoneNo: formData.get("home_phone"),
        name: formData.get("name"),
        companyName: formData.get("home_companyname") || "", // Optional field
      };

      try {
        // Send the data to the API
        const response = await fetch(
          "https://storyhumoremail.vercel.app/send-email-with-company",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        // Check if the response is ok (status in the range 200-299)
        if (response.ok) {
          const responseData = await response.json();

          // Show the success alert
          const successAlert = document.getElementById("success-alert");
          successAlert.style.display = "block";
          // Hide the alert after 3 seconds
          setTimeout(() => {
            successAlert.style.display = "none";
          }, 3000);

          // Optionally, you can reset the form
          this.reset();
          // Close the modal
          const modal = bootstrap.Modal.getInstance(
            document.getElementById("quickCallModal")
          );
          if (modal) modal.hide();
        } else {
          // Log the response status and text for debugging
          const errorText = await response.text();
          console.error("Error response:", response.status, errorText);
          alert("There was an error sending your message. Please try again.");
        }
      } catch (error) {
        // Log the error for debugging
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
      }
    });
  }

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Extract form data
      const formData = new FormData(this);
      const data = {
        to: "storyhumorstudio@gmail.com",
        email: formData.get("user_email"),
        subject: "Test Email",
        message: formData.get("message"),
        phoneNo: formData.get("user_contact"),
        name: formData.get("user_name"),
        referral: formData.get("dropdown1"),
      };

      try {
        // Send the data to the API
        const response = await fetch(
          "https://storyhumoremail.vercel.app/send-email-with-referral",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        // Check if the response is ok (status in the range 200-299)
        if (response.ok) {
          const responseData = await response.json();

          // Show the success alert
          const contactSuccessAlert = document.getElementById(
            "contact-success-alert"
          );
          contactSuccessAlert.style.display = "block";
          // Hide the alert after 3 seconds
          setTimeout(() => {
            contactSuccessAlert.style.display = "none";
          }, 3000);

          // Optionally, you can reset the form
          this.reset();
        } else {
          // Log the response status and text for debugging
          const errorText = await response.text();
          console.error("Error response:", response.status, errorText);
          alert("There was an error sending your message. Please try again.");
        }
      } catch (error) {
        // Log the error for debugging
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
      }
    });
  }
});

//navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 50) {
    // Add class after 50px of scrolling
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
