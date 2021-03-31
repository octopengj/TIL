function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML = `<div class="character">
    <div class="character-face-con character-head">
      <div class="character-face character-head-face face-front"></div>
      <div class="character-face character-head-face face-back"></div>
    </div>
    <div class="character-face-con character-torso">
      <div class="character-face character-torso-face face-front"></div>
      <div class="character-face character-torso-face face-back"></div>
    </div>
    <div class="character-face-con character-arm character-arm-right">
      <div class="character-face character-arm-face face-front"></div>
      <div class="character-face character-arm-face face-back"></div>
    </div>
    <div class="character-face-con character-arm character-arm-left">
      <div class="character-face character-arm-face face-front"></div>
      <div class="character-face character-arm-face face-back"></div>
    </div>
    <div class="character-face-con character-leg character-leg-right">
      <div class="character-face character-leg-face face-front"></div>
      <div class="character-face character-leg-face face-back"></div>
    </div>
    <div class="character-face-con character-leg character-leg-left">
      <div class="character-face character-leg-face face-front"></div>
      <div class="character-face character-leg-face face-back"></div>
    </div>
  </div>`;

  document.querySelector(".stage").appendChild(this.mainElem);

  this.mainElem.style.left = info.xPos + "%";
  //스크롤 중인지 아닌지
  this.scrollState = false; //default값이 false이나 명시
  this.lastScrollTop = 0;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const self = this;

    window.addEventListener("scroll", function () {
      clearTimeout(self.scrollState);

      if (!self.scrollState) {
        self.mainElem.classList.add("running");
      }

      self.scrollState = setTimeout(function () {
        self.scrollState = false;
        self.mainElem.classList.remove("running");
      }, 500);

      // 이전 스크롤 위치와 현재 스크롤 위치 비교
      if (self.lastScrollTop > pageYOffset) {
        // 이전 스크롤 위치가 크다 -> 스크롤 올림
        self.mainElem.setAttribute("data-direction", "backward");
      } else {
        // 현재 스크롤 위치가 크다 -> 스크롤 내림
        self.mainElem.setAttribute("data-direction", "forward");
      }

      self.lastScrollTop = pageYOffset;
    });

    window.addEventListener("keydown", function (e) {
      if (e.keyCode == 37) {
        self.mainElem.setAttribute("data-direction", "left");
        self.mainElem.classList.add("running");
      } else if (e.keyCode == 39) {
        self.mainElem.setAttribute("data-direction", "right");
        self.mainElem.classList.add("running");
      }
    });

    window.addEventListener("keyup", function () {
      self.mainElem.classList.remove("running");
    });
  },
};
