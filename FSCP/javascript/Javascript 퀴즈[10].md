## Javascript 퀴즈[1~10]



1. 배열의 삭제

   50을 삭제하는 code를 입력하세요.

   ```javascript
   var nums = [10, 20, 30, 40, 50];
   ```

   ```javascript
   console.log(nums.pop());
   console.log(nums);
   ```

   ```javascript
   50
   (4) [10, 20, 30, 40]
   ```

   

2. 배열의 내장함수

   <pot>부분에 배열의 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

   ```javascript
   var arr = [20, 10, 30];
   // pot
   console.log(arr);
   
   출력
   [20, 10, 100, 30]
   ```

   ```javascript
   var arr = [20, 10, 30];
   
   arr.splice(2, 0, 100);  // 인덱스2부터 0개 삭제 100삽입
   console.log(arr);
   ```

   ```javascript
   (4) [20, 10, 100, 30]
   ```

   

3.  변수의 타입

   다음 출력 값으로 옳은 것은?

   ```javascript
   var arr = [10, 20 ,30];
   console.log(typeof(arr));
   ```

   ```javascript
   object 
   ```

   원시타입: string, number, boolean, undefined, null 

   참조타입: object (원시타입을 제외한 나머지는 객체)

   단, 아래의 경우 예외로 자바스크립트의 오류

   ```javascript
   var val = null;
   console.log(typeof(val));
   
   // object 
   ```

   

4. for문 계산

   다음 코드의 출력값은?

   ```javascript
   var a = 10;
   var b=  2;
   
   for(var i=1; i<5; i+=2) {
     a += i;
   }
   
   console.log(a+b);
   ```

   ```javascript
   16
   ```

   

5. false가 아닌값은

   1) NaN  2) 1  3) " " 4) 0  5) undefined

   ```javascript
   console.log(isNaN(1)); // false
   console.log(isNaN(" ")); // false
   console.log(!undefined); // true
   ```

   falsy값: 0, " ", false, null, undefined

   

6. 변수명으로 사용할 수 없는 것

   사용가능: _, $, 문자열, 숫자

   사용불가능: 예약어, 기타 문자, 숫자가 첫번째로 나오는 경우

   

7. 객체 키 이름의 중복

   다음의 출력값은

   ```javascript
   var d = {
     "height": 180,
     "weight": 70,
     "weight": 80,
     "eyesight": 1
   }
   
   console.log(d["weight"]);
   ```

   ```javascript
   80
   ```

   console.log(d["weight"]); 처럼 [ ]를 사용할 경우 " "필수

   console.log(d.weight); 는 " "를 사용하지 않아도 된다.

   

8. concat 출력

   ```javascript
   var year = "2021";
   var month = "05";
   var day = "05";
   var hour = "12"
   var minute = "30"
   var second = "27";
   
   var result = ??
   
   console.log(result); 
   // 결과값: 2021/05/05/12/30:27 
   ```

   ```javascript
   var result = year.concat('/',month,'/',day,'/',hour,'/',minute,':',second);
   ```



9. map

   ```javascript
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
   
   [1, 4, 9, 16, 25, 36, 49, 64] 출력
   ```

   ```javascript
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
   
   const square = n = > n * n;
   const squared = arr.map(square);
   console.log(squared);
   ```

   

10. 별찍기

    type1

    ```
    *
    
    **
    
    ***
    
    ****
    
    *****
    ```

    ```
    for (var i = 0; i < 5; i++) {
      var string = "";
      for (var j = 0; j <= i; j++){
        string = string + "*";
      }
      console.log(string);
    }
    ```

    type2

    ```
    *****
    
     ****
    
      ***
    
       **
    
        *
    ```

    ```
    for (var i = 0; i < 5; i++) {
      var string = "";
      for (var j = 0; j < i; j++) {
        string = string+" ";
      }
      for (var j = 0; j < 5-i; j++){
        string = string+"*";
    }
      console.log(string);
    }
    ```

    type3

    ```
    *****
    
    ****
    
    ***
    
    **
    
    *
    ```

    ```
    for (var i = 0; i < 5; i++) {
      var string = "";
      for (var j = 0; j < 5-i; j++){
        string = string + "*";
      }
      console.log(string);
    }
    ```

    

