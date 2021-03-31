### 3D-wall

- CSS 

  perspective:  공간을 3D 느낌이 나도록 만들어주는 속성  ex) perspective: 1000px;

  transform-style: preserve-3d; : 부모에게 정의한 perspective효과가 자식들에게도 적용이 되도록 정의하는 속성 

  

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

  

  

