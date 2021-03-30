(function () {
  const outputElem = document.querySelector(".output");
  const emojiElem = document.querySelector(".emoji");

  function value() {
    // outputElem.innerHTML = window.pageYOffset;
    // outputElem.innerHTML = emojiElem.offsetTop;
    let posiY = emojiElem.getBoundingClientRect().top;
    outputElem.innerHTML = posiY; //output 출력코드

    // console.log(window.innerHeight);
    if (posiY < window.innerHeight * 0.2) {
      emojiElem.classList.add("zoom");
    } else {
      emojiElem.classList.remove("zoom");
    }
  }

  window.addEventListener("scroll", function () {
    value();
  });
})();
