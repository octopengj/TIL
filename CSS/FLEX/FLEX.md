## FLEX

- display: flex,

  flex-direction: row(default), column (축의 정렬 개념 -> 꼬치) 


- direction 그림설명

  - row

    

  - ![image-20210325135930504](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210325135930504.png)

  - column

    ![image-20210325140255683](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210325140255683.png)



- flex-wrap
  - wrap
  - nowrap

- justify-content

  - flex-start
  - flex-end
  - center
  - space-between
  - space-around
  - space-evenly : ms계열 작동 안함

- align-items

  - stretch(default)

  - flex-start
  - flex-end
  - center
  - baseline

- align-self 

  align-items로 정렬된 것을 개별적으로 설정, align-self는 align-items보다 우선권이 있다.

  - stretch(default)

  - flex-start
  - flex-end
  - center
  - baseline

- align-content

  - stretch(default)

  - flex-start
  - flex-end
  - center
  - space-between
  - space-around
  - space-evenly: ms계열 작동 안함

- flex-basis 

  아이템의 기본 크기를 설정(컨텐츠를 포함한 비율)

  - flex-direction: row -> 너비, flex-direction: column -> 높이

  - auto(default)
  - 값: 숫자, %, px, rem, content

- flex-grow

  아이템의 컨텐츠영역을 제외한 여백의 비율을 나눠가짐(늘어날때) 

  - default값 : 0;

  ```
  <div class="flex">
  	<div class="flex-item"></div>
  	<div class="flex-item"></div>
  	<div class="flex-item"></div>
  </div>
  
  .flex-item {
  	flex-grow: 1;   <!-- flex-item 여백을 1의 비율로 -->
  }
  ------------------------------------------------------------------
  .flex-item:nth-child(2) {
  	flex-gorw: 3;    <!-- flex-item2번째 자식을 3 나머지 1 -->
  }
  ```

- flex-shrink

  아이템의 컨텐츠영역을 제외한 여백의 비율을 나눠가짐(줄어들때)

  - default 값: 1;

- flex-grow, flex-shrink, flex-basis 축약형 => flex

  축약형으로 사용시 flex-basis의 기본값이 auto가 아닌 0이된다. 직접 명시해야함.

  ```
  flex: 1;
  /* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
  
  flex: 1 1 auto;
  /* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
  
  flex: 3 100px;
  /* flex-grow: 3; flex-shrink: 1; flex-basis: 100px */
  ```

- order

  순서 배치, 시각적배치->스크린리더에서는 abc순서로 읽기 때문에 접근성에 문제가 있다.

  ```
  <div>
  	<div class="item">a</div>
  	<div class="item">b</div>
  	<div class="item">c</div>
  </div>
  --------------------------------------------------------------------
  .item:nth-child(1) {order: 3;} /*c*/ 
  .item:nth-child(2) {order: 1;} /*a*/
  .item:nth-child(3) {order: 2;} /*b*/
  ```

- z-index

  flex가 적용된 상태에서 사용가능