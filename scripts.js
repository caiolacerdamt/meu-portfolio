window.sr = ScrollReveal({ reset: true });

const scrollreveal = {
  duration: 3000,
  easing: "ease",
  scale: 0.9,
};

const scrollLeft = {
  duration: 2000,
  origin: "left",
  distance: "20%",
  easing: "ease",
  scale: 0.9,
};

const scrollRight = {
  duration: 2000,
  origin: "right",
  distance: "20%",
  easing: "ease",
  scale: 0.9,
};

const revealMap = {
  ".eu": scrollreveal,
  "#exemplo-do-projeto1": scrollreveal,
  "#sobre-o-projeto1": scrollreveal,
  "#exemplo-do-projeto2": scrollreveal,
  "#sobre-o-projeto2": scrollreveal,
};

for (const selector in revealMap) {
  sr.reveal(selector, revealMap[selector]);
}

const btn = document.querySelector("#ver-mais");
const projeto3 = document.querySelector(".projeto3");
const projeto4 = document.querySelector(".projeto4");

btn.addEventListener("click", () => {
  if (projeto3.style.display === "flex" && projeto4.style.display === "flex") {
    projeto3.style.display = "none";
    projeto4.style.display = "none";
    btn.innerText = "VER MAIS";

    const projeto2 = document.querySelector(".projeto2");
    projeto2.scrollIntoView({ behavior: "smooth" });
  } else {
    projeto3.style.display = "flex";
    projeto4.style.display = "flex";
    btn.innerText = "VER MENOS";

    const projeto3Element = document.querySelector(".projeto3");
    projeto3Element.scrollIntoView({ behavior: "smooth" });
  }

  sr.reveal(".formulario", scrollreveal);
  sr.reveal(".box-contatos", scrollreveal);
});

