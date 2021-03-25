## FLEX

- display: flex,

  flex-direction: row(default), column (축의 정렬 개념 -> 꼬치) 

  justify-content: flex-start / flex-end / flex-center / space-between / space-around (축방향정렬)

  align-items: stretch / flex-start / flex- end / center 

  flex-grow: 1; (비율정의 - > 컨텐츠를 제외한 여백의 비율)

  flex-shrink: 1; (grow의 반대개념)

  flex-basis: auto(default); / 0 ; (컨텐츠를 포함한 비율)

  

  flex : 1;

  - 축약형으로 작성하면 아래와같이 flex-basis가 default값 auto가 아닌 0%이 된다.

    flex: 1;

      flex-grow: 1;

      flex-shrink: 1;

      flex-basis: 0%;



- direction 그림설명

  - row

    

  - ![image-20210325135930504](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210325135930504.png)

  - column

    ![image-20210325140255683](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210325140255683.png)

