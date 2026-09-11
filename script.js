
const siteHeader = document.querySelector("#siteHeader");

function updateStickyHeader() {
  if (!siteHeader) {
    return;
  }

  if (window.scrollY > 40) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
}

window.addEventListener("scroll", updateStickyHeader, {
  passive: true
});

updateStickyHeader();

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});