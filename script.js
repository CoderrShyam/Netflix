const handleInputEvents = (inputElement, labelElement) => {
  // Add focus event listener
  inputElement.addEventListener("focus", () => {
    labelElement.style.fontSize = "12px";
    labelElement.style.top = "30%";
  });

  // Add blur event listener
  inputElement.addEventListener("blur", () => {
    if (inputElement.value === "") {
      labelElement.style.fontSize = "16px";
      labelElement.style.top = "50%";
    }
  });

  // Add click event listener to document
  document.addEventListener("click", (event) => {
    if (!inputElement.contains(event.target) && inputElement.value === "") {
      labelElement.style.fontSize = "16px";
      labelElement.style.top = "50%";
    }
  });
};

// Call handleInputEvents for email input
const emailInput = document.querySelector(".email-input");
const emailLabel = document.querySelector(".email-label");
handleInputEvents(emailInput, emailLabel);

// Call handleInputEvents for FAQ email input
const faqEmail = document.querySelector("#faq-email");
const faqEmailLabel = document.querySelector("#faq-email-label");
handleInputEvents(faqEmail, faqEmailLabel);

// Function to toggle the display style of FAQ description
function toggleFaqDescription(descriptionElement) {
  descriptionElement.classList.toggle("active");
}

function rotateImage(imgElement) {
  imgElement.classList.toggle("rotate");
}

// Mapping of FAQ button classes to corresponding description elements
const faqButtonDescriptionMap = [
  "faq-btn-netflix",
  "faq-btn-netflix-cost",
  "faq-btn-watch",
  "faq-btn-cancel",
  "faq-btn-netflix-watch",
  "faq-btn-netflix-kids",
];

for (const faqBtnClass of faqButtonDescriptionMap) {
  const faqBtn = document.querySelector("." + faqBtnClass);
  const faqDesc = faqBtn.parentElement.querySelector(".faq-description");
  const faqImg = faqBtn.querySelector("img");

  faqBtn.addEventListener("click", () => {
    toggleFaqDescription(faqDesc);
    rotateImage(faqImg);
  });
}
