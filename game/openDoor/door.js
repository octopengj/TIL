(function () {
  const stageElem = document.querySelector(".stage");
  let currentItem;

  function eventHnadler(e) {
    const targetElem = e.target;

    if (currentItem) {
      currentItem.classList.remove("door-opened");
    }

    if (targetElem.classList.contains("door-body")) {
      targetElem.parentNode.classList.add("door-opened");
      currentItem = targetElem.parentNode;
    }
  }

  stageElem.addEventListener("click", eventHnadler);
})();
