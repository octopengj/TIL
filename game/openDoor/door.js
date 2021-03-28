(function () {
  const stageElem = document.querySelector(".stage");
  let currentItem;

  function activate(elem) {
    elem.classList.add("door-opened");
    currentItem = elem;
  }

  function inactivate(elem) {
    elem.classList.remove("door-opened");
  }

  function eventHnadler(e) {
    const targetElem = e.target;

    if (currentItem) {
      inactivate(currentItem);
    }

    if (targetElem.classList.contains("door-body")) {
      activate(targetElem.parentNode);
    }
  }

  stageElem.addEventListener("click", eventHnadler);
})();
