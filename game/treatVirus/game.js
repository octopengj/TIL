// (function () {
//   const virusGroup = document.querySelectorAll(".virus");
//   const container = document.querySelector(".container");

//   function treatVirus(e) {
//     container.removeChild(this);
//   }

//   for (let i = 0; i < virusGroup.length; i++) {
//     virusGroup[i].addEventListener("click", treatVirus);
//   }
// })();
// 불러오는 데이터가 많아지는 경우 배열을 사용하면 성능저하의 우려가 있다.

//이벤트 위임
(function () {
  const container = document.querySelector(".container");

  function treatVirus(e) {
    if (e.target.classList.contains("virus")) {
      container.removeChild(e.target);
    }
  }

  container.addEventListener("click", treatVirus);
})();
