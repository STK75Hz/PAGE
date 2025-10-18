// Update active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// 🪄 Typewriter Effect (เคอร์เซอร์สีทอง)
const textElement = document.getElementById("typeText");
const textContent = "Welcome To SOUL TYPE The Best Typing Score Website.";
let index = 0;
let deleting = false;
let showCursor = true;

function typeLoop() {
  const visibleText = textContent.substring(0, index);
  const cursorHTML = showCursor
    ? '<span style="color:#ffd84a;">|</span>'
    : '<span style="color:transparent;">|</span>';
    
  textElement.innerHTML = visibleText + cursorHTML;

  if (!deleting && index <= textContent.length) {
    index++;
  } else if (deleting && index >= 0) {
    index--;
  }

  if (index === textContent.length + 1) {
    deleting = true;
    setTimeout(typeLoop, 1500);
    return;
  }

  if (index < 0) {
    deleting = false;
    setTimeout(typeLoop, 600);
    return;
  }

  showCursor = !showCursor;
  const speed = deleting ? 35 : 75;
  setTimeout(typeLoop, speed);
}

typeLoop();

