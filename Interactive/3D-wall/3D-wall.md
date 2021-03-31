### 3D-wall

- CSS 

  perspective:  공간을 3D 느낌이 나도록 만들어주는 속성  ex) perspective: 1000px;

  transform-style: preserve-3d; : 부모에게 정의한 perspective효과가 자식들에게도 적용이 되도록 정의하는 속성 

  -> webkit기반의 브라우저에서만 잘 작동한다. (익스플로러x, 파이어폭스:버벅거림)

  ```html
  <style>
  .a {
    perspective: 1000px;
  }
  .b {
    transform-style: preserve-3d;
  }
  </style>
  -----------------------------------------------------------
  <div class="a">
  	<div class="b">
              <div class="c"></div>   <!-- 이 영역까지 3d효과가 잘 전달되게 만들어야한다. 
  									  a와 c사이의 b에게 preserve-3d를 적용해야한다.-->
      </div>
  </div>
  ```

  transform: rotateY() -> Y축을 기준으로 회전

  transform: translateZ() -> Z축으로 이동

  

  

- JS

  - scroll 영역

    pageYOffset: 스크롤되는 수치(스크롤을 얼마나 했는지)

    body.offsetHeight: 페이지의 전체 높이

    innerHeight: 현재 창의 높이

    body.offsetHeight - innerHeight = 스크롤 되는 영역(범위)

    => pageYOffset / (body.offsetHeight - innerHeight) = 얼마나 스크롤했는지 비율

    ```javascript
    (function () {
      const houseElem = document.querySelector(".house");
      let maxScrollValue;
    
      function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
      }
    
      window.addEventListener("scroll", function () {
        const zMove = (pageYOffset / maxScrollValue) * 980 - 490;
        houseElem.style.transform = "translateZ(" + zMove + "vw)";
      });
    
      window.addEventListener("resize", resizeHandler);
      resizeHandler();
    })();
    
    ```

  - mousemove

    가운데를 원점으로 설정

    x축 => -1 ~ +1

    y축 => -1 ~ +1

    ```javascript
    const mousePos = { x: 0, y: 0 };
    
    window.addEventListener("mousemove", function (e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
      });
    
    ```

  - scroll 위치 비교

    ```javascript
    this.lastScroll = 0;
    
    window.addEventListener('scroll', function() {
    if (lastScroll > pageYOffset) {
    } else {
    }
    lastScroll = pageYOffset;
    });
    ```

  - 키보드값

    ```javascript
    window.addEventListener('keydown', function(){
    
    })
    
    window.addEventListener('keyup', function() {
    
    })
    ```

    



- HTML

  JS에서 new생성자 함수로 HTML 삽입

  main.js

  ```javascript
  new Character();
  ```

  Character.js

  ```javascript
  function Character() {
    this.mainElem = document.createElement("div");
    this.mainElem.classList.add("class명");
    this.mainElem.innerHTML = `<div>
    <div>abcd</div>
    </div>`;
  
    document.querySelector(".부모class").appendChild(this.mainElem);
  }
  
  ```

  

