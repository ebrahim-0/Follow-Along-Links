const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");

document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  console.log(linkCoords);
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
