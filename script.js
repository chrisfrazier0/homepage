(function () {
  let msg = "%c Howdy 👋";
  let styles = `
            display: inline-block;
            padding: 12px 0;
            font-size: 14px;
            font-family: monospace;`;
  console.log(msg, styles);

  function navigate(dest) {
    var current = document.querySelector(".container.active");
    var next = document.getElementById(dest);
    if (!next || next === current) return;

    // which direction?
    var forward = dest !== "home";

    // if going back, position next to the left
    if (!forward) {
      next.style.transition = "none";
      next.classList.add("left");
      next.offsetHeight;
      next.style.transition = "";
    }

    // if going forward, current slides left
    current.classList.remove("active");
    if (forward) current.classList.add("left");

    // enter next
    next.classList.add("active");

    // cleanup after animation
    current.addEventListener(
      "transitionend",
      function () {
        current.classList.remove("left");
        next.classList.remove("left");
      },
      { once: true },
    );
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest("[data-nav]");
    if (!link) return;
    e.preventDefault();
    navigate(link.getAttribute("data-nav"));
  });
})();
