## GRID



- flex는 한방향이고 grid는 두방향의 축을 기준으로 한다.

- grid 구성

  - 컨테이너: grid의 전체 영역

  - 아이템 : 컨테이너의 자식요소

  - 트랙: grid의 행(row)와 열(column)

  - 셀: grid의 한칸을 가리키는 말

  - 라인: grid 셀을 구분한는 선

  - 번호: grid 라인의 번호

  - 갭: grid 셀 사이의 간격

  - 영역: grid 셀의 집합

    

- 기본 형태

  - grid-template-columns

  - grid-template-rows

    - 값 형식:  fr(fraction: 비율), px, %, repeat 

      ```css
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, minmax(200px, auto));
      
      ```

      

- 자동채움
  - auto-fill : 자동으로 채움
  - auto-fit: 갯수가 모자라는 경우 자동으로 빈공강 채움

- 간격
  - row-gap: row사이의 간격
  - column-gap: column사이의 간격
  - gap

- 자동정의

  자동으로 columns와 rows의 값이 정의된다. grid-template 처럼 repeat가 필요가 없다.

  - grid-auto-columns
  - grid-auto-rows

- 각 셀의 영역 지정 [grid-item들에 적용]

  - grid-column-start
  - grid-column-end
  - grid-column
  - grid-row-start
  - grid-row-end
  - grid-row

- 영역 이름 사용

  - grid-template-areas

  ```
  .container {
  	display: grid;
  	grid-template-columns: 1fr 3fr 1fr;
  	grid-template-areas:
  		"header header header"
  		" a main b"
  		" . . . "
  		"footer footer footer";
  }
  .header {gird-area: header;}
  .sidebar-a {gird-area: sidebar-a;}
  .sidebar-b {grid-area: sidebar-b;}
  .main {grid-area: main;}
  .footer {grid-area:footer;}
  
  ----------------------------------------------------------------------
  
  <body>
  	<div class="grid-container">
  		<div class="header"></div>
  		<div class="sidebar-a"></div>
  		<div class="sidebar-b"></div>
  		<div class="main"></div>
  		<div class="footer"></div>
  	</div>
  </body>
  ```



- grid-auto-flow 

  아이템이 흐름대로 자동배치

  - row
  - column
  - dense
  - row dense
  - column dense

- 정렬

  - align-items : 세로(column축) 방향 정렬

    - stretch
    - start
    - center
    - end

  - jusfity-items: 가로(row축) 방향 정렬

    - stretch
    - start
    - center
    - end

  - place-items: align-items와 jutify-items의 축약형

    순서대로 사용하면된다.

    ```
    .item {
    place-items: start center   //하나만 작성시 둘다 적용
    }
    ```

    

  - align-content (세로방향)

    셀들을 통째로 묶어서 정렬

    - stretch
    - start
    - center
    - end
    - space-between
    - space-around
    - space-evenly

  - justify-content

    - stretch
    - start
    - center
    - end
    - space-between
    - space-around
    - space-evenly

  - place-content: align-content와 justify-content의 축약형

    순서대로 사용하면 된다.

    

  - align-self

    개별 아이템 column(세로) 정렬

    - stretch
    - start
    - center
    - end

  - jutify-self

    개별 아이템 row(가로) 정렬

    - stretch
    - start
    - center
    - end

  - place-self

    align-self와 jutify-self의 축약형

    순서대로 사용



 - 배치 

   - order

   ```
   .item:nth-child(1) {order: 3; }
   .item:nth-child(2) {order: 1; }
   .item:nth-child(3) {order: 2; }
   ```

   - z-index

     