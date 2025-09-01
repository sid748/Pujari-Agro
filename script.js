// faq accordion code here
document.querySelectorAll(".faq-content").forEach(content => {
  content.addEventListener("click", function (e) {
    let parent = this.closest(".faq-item");
    let answer = parent.querySelector(".faq-answer");

    // close all others (true accordion)
    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== parent) {
        item.classList.remove("active");
        let ans = item.querySelector(".faq-answer");
        ans.style.maxHeight = null;
      }
    });

    // toggle current
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});


// About page tab section here

  const yearBoxes = document.querySelectorAll('.year-box');
const timelineImage = document.getElementById('timelineImage');

yearBoxes.forEach(box => {
  box.addEventListener('click', () => {
    // Remove active class
    yearBoxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    // Change image
    timelineImage.src = box.getAttribute('data-image');
  });
});


