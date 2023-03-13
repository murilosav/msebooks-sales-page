let header = document.querySelectorAll(".accordion-header");

header.forEach(
  (header) => {
    header.addEventListener("click", function (e) {
      let accordion = document.querySelectorAll(".accordion");
      let parentElm = header.parentElement;
      let siblings = this.nextElementSibling;

      accordion.forEach((element) => {
            element.children[1].style.maxHeight = null;
      });

      parentElm.classList.toggle("active");
      if (parentElm.classList.contains("active")) {
        accordion.forEach((element) => {
            element.classList.remove("active");
        });

    parentElm.classList.toggle("active");
        if (siblings.style.maxHeight) {
            siblings.style.maxHeight = null;
        } else {
            siblings.style.maxHeight = siblings.scrollHeight + "px";
        }
      }
    });
  }
);