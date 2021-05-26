# Javascript

- 브라우저에서 사용하기 위해 만들어진 언어로 시작, 웹페이지에서 뿐만아니라 앱에서도 사용(React.Native, NativeScript)



#### 변수

- var, let, const 가 있으나 var는 es6이후로 사용을 자제 변수 let, 상수 const 사용할 것을 권장
- 텍스트는 문자열이라고 하며 ' ', " "사용
- boolean은 true와 false로 표현되는 값
- null, undefined 없음을 의미 null은 진짜 없다. undefined는 아직 정해진 것이 없다.

#### 연산자

- 프로그래밍언어에서 사용하는 문자
- 대입, 산술, 논리, 비교 연산자
  - 산술: +, -, /, *, ++, --
  - 대입: =, +=, -=, /=, =*
  - 논리: !, &&, ||  ,  연산순서는 not, and, or
  - 비교: 값과 타입을 비교 ==(동등,값만 비교), ===(일치, 값과 타입일치), >, >= ,<,<=

#### 조건문

- if , else if, else

  ```javascript
  if() {
  
  }
  ```

  ```javascript
  if() {
  
  }else if () {
             
  }else {
      
  }
  ```

  ```javascript
  if() {
  
  }else {
  
  }
  ```

  - switch, case

  ```javascript
  switch () {
    case 값 :
      console.log( );
      braak;
    case 값 :
      console.log( );
      braak;
    case 값 :
      console.log( );
      braak;
    default:
      console.log( );
  }
  ```

#### 함수

- 파라미터를 처리해서 결과를 만들어냄

  ```javascript
  function 함수명(파라미터) {
    return 실행할 코드   // return을 하면 그 함수는 종료
  }
  함수명();  //호출문	
  ```

- 템플릿 리터럴

  ```javascript
  `${}`
  `문자 ${} 문자`
  ```

- 화살표함수

  ```javascript
  const 변수명 = (파라미터) => {
    return 
  }
  
  const 변수명 = (파라미터) => 실행할 코드;
  ```

#### 객체

- 객체는 키와 값으로 구성된다.

  ```javascript
  const 변수명 = {
  	키 : 값,
  	키 : 값,
  }
  ```

  변수명.키로 접근이 가능하다.

  ```javascript
  console.log(변수명.키)
  ```

- 비구조화할당: 객체구조분해(특정값들을 객체에서 빼온다.)

  ```javascript
  const peng = {
    name: "펭수",
    citizenship: "남극",
    age: 10
  };
  
  function passport(penguin) {
    const text = `${penguin.name}의 나이는 ${penguin.age}이고 ${penguin.citizenship}에서 왔다.`;
    console.log(text);
  }
  
  passport(peng);
  
  ```

  위의 코드를 비구조화할당하면 아래의 구조로 변경.

  ```javascript
  const peng = {
    name: "펭수",
    citizenship: "남극",
    age: 10
  };
  
  function passport(penguin) {
    const {name, citizenship, age} = penguin;
    const text = `${name}의 나이는 ${age}이고 ${citizenship}에서 왔다.`;
    console.log(text);
  }
  
  passport(peng);
  
  ```

  ```javascript
  const peng = {
    name: "펭수",
    citizenship: "남극",
    age: 10
  };
  
  function passport({name, citizenship, age}) {
    const text = `${name}의 나이는 ${age}이고 ${citizenship}에서 왔다.`;
    console.log(text);
  }
  
  passport(peng);
  ```

- getter

  특정값을 호출할 때가 아니라 조회하려고 할 때 사용

  return 값이 있어야 한다.

  ```javascript
  const num = {
    a: 1,
    b: 2,
    get sum() {
      console.log('sum실행');
      return this.a + this.b;
    }
  };
  console.log(num.sum); // sum실행 
  					// 3
  number.b = 3;
  console.log(num.sum); // sum실행 
  					// 4
  ```

- setter

  파라미터값을 설정해줘야한다.

  특정 값을 설정할 때마다 밸류를 파라미터로 받아와서 값을 설정하고 코드를 실행

  ```javascript
  const peng = {
    _name: '펭수',
    set name(value) {
      this._name = value;
    }
  };
  
  console.log(peng._name); // 펭수
  
  ```

- 배열

  여러개의 항목들이 들어있는 리스트

  숫자, 문자, 객체, 배열 무엇이든 들어갈 수 있다.

  ```javascript
  const arr = [1, 'a', {}];
  console.log(arr); //[1, 'a', Object]
  console.log(arr[0]); // 1
  console.log(arr[1]); // a
  ```

- 반복문

  - for 

    ```javascript
    for (let i= 0; i < 5; i++) {
      console.log(i);
    };
    // 0
       1
       2
       3
       4
    ```

    ```javascript
    const alpha = ['a', 'b', 'c'];
    
    for (let i = 0; i < alpha.length; i++) {
      console.log(alpha[i]);
    }
    // a
       b
       c
    ```

  - while

    ```javascript
    let i = 0;
    
    while (i < 5) {
      conosole.log(i);
      i++;
    }
    // 0
       1
       2
       3
       4
    ```

    ```javascript
    let i = 0;
    let cal = true;
    
    while (cal === true) {
      conosole.log(i);
      i++;
      if (i === 5) {
        cal = false;
      }
    }
    // 0
       1
       2
       3
       4
    ```

  - for of, for in

    ```javascript
    const nums = [1, 2, 3, 4, 5];
    
    for (let num of nums) {
      console.log(num);
    }
    // 1
       2
       3
       4
       5
    ```

    ```javascript
    const peng = {
      name: '펭수',
      age: 7
    };
    
    for (let key in peng) {
      console.log(key);
    }
    // name
       age
       
    
    for (let key in peng) {
        console.log(`${key}: ${peng[key]}`);
    }
    // name: 펭수
       age: 7
    ```

  - continue, break

    ```javascript
    for (let i = 0; i < 5; i++) {
        if (i === 2) continue;
        console.log(i);
    }
    // 0 
       1
       3
       4
    ```

    ```javascript
    for (let i = 0; i < 5; i++) {
        if (i === 2) continue;
        console.log(i);
        if (i === 3) break;
    }
    // 0 
       1
       3
    ```

- 내장함수

  - forEach

    ```javascript
    const alpha = ['a', 'b', 'c'];
    
    for (let i = 0; i < alpha.length; i++) {
      console.log(alpha[i]);
    }
    // a
       b
       c
    ```

    ```javascript
    const alpha = ['a', 'b', 'c'];
    
    function print(alp) {
      console.log(alp);
    }
    
    alpha.forEach(print);
    // a
       b
       c
    ```

    ```javascript
    const alpha = ['a', 'b', 'c'];
    
    alpha.forEach(function(alp) {
      console.log(alp);
    });
    // a
       b
       c
    ```

    ```javascript
    const alpha = ['a', 'b', 'c'];
    
    alpha.forEach(alp => {
      console.log(alp);
    });
    // a
       b
       c
    ```

  - map

    ```javascript
    const arr = [1, 2, 3];
    
    const squared = [];
    for (let i = 0; i < arr.length; i++) {
      squared.push(arr[i] * arr[i]);
    }
    console.log(squared);
    // [1, 3, 9]
    ```

    ```javascript
    const arr = [1, 2, 3];
    
    const squared = [];
    arr.forEach(n => {
      squared.push(n * n);
    });
    console.log(squared);
    // [1, 3, 9]
    ```

    ```javascript
    const arr = [1, 2, 3];
    
    const square = n => n * n;
    const squared = arr.map(square);
    
    console.log(squared);
    // [1, 3, 9]
    ```

    ```javascript
    const arr = [1, 2, 3];
    
    const squared = arr.map(n => n * n);
    
    console.log(squared);
    // [1, 3, 9]
    ```

  - indexOf

    ```javascript
    const alpha = ['a', 'b', 'c'];
    const idx = alpha.indexOf('b');
    console.log(idx);
    // 1
    ```

  - findIndex

    객체이거나 특정조건을 찾을 때

    ```javascript
    const todos = [
      {
        id: 1,
        text: 'html',
      },
      {
        id: 2,
        text: 'css'
      }
    ]
    
    const idx = todos.findIndex(todo => todo.id === 2);
    console.log(idx);
    // 1
    
    ```

  - find

    찾은 값을 반환

    ```javascript
    const todos = [
      {
        id: 1,
        text: 'html',
      },
      {
        id: 2,
        text: 'css'
      }
    ]
    
    const todo = todos.find(todo => todo.id === 2);
    console.log(todo);
    //  Object {id: 2, text: 'css'}
    ```

  - filter

    특정 조건을 만족하는 원소를 찾아서 새로운 배열을 만들 떄

    ```javascript
    const todos = [
      {
        id: 1,
        text: 'html',
        done: true
      },
      {
        id: 2,
        text: 'css'
        done: true
      },
      {
      id: 3,
      text: 'java' 
      done: false
      }
    ]
    
    const notDone = todos.filter(todo => todo.done === false);
    console.log(notDone);
    // [Object]
        0: Object
           id: 3
           text: 'java'
           done: false
    ```

  - splice

    특정항목을 제거 [기존의 배열을 건드림]

    ```javascript
    const num = [1, 2, 3, 4];
    const idx = num.indexOf(3);
    const spliced = num.splice(idx, 1);
    
    console.log(num);  // [1, 2, 4]
    console.log(spliced); // [3]
    ```

  - slice

    특정항목을 제거 [기존의 배열을 건드리지 않음]

    ```javascript
    const num = [1, 2, 3, 4];
    const sliced = num.slice(0, 2);
    
    console.log(sliced); // [1, 2]
    console.log(num); // [1, 2, 3, 4]
    ```

  - shift

    첫번째 원소를 배열에서 추출

    ```javascript
    const num = [1, 2, 3, 4]
    
    const val = num.shift();
    console.log(val); // 1
    console.log(num); // [2, 3, 4]
    ```

  - pop

    마지막 원소를 배열에서 추출

    ```javascript
    const num = [1, 2, 3, 4]
    
    const val = num.pop();
    console.log(val); // 4
    console.log(num); // [1, 2, 3]
    ```

  - push (pop과 push는 짝=> pop은 추출 push는 삽입)

    배열의 마지막에 원소를 추가

    ```javascript
    const num = [1, 2, 3, 4]
    
    num.push(5);
    console.log(num); // [1, 2, 3, 4, 5]
    ```

  - unshift

    배열의 첫번째 원소를 추가

    ```javascript
    const num = [1, 2, 3, 4]
    num.unshift(0);
    
    console.log(num); // [0, 1, 2, 3, 4]
    ```

  - shift

    배열의 첫번째 원소를 추출

    ```javascript
    const num = [1, 2, 3, 4]
    num.shift();
    
    console.log(num); // [2, 3, 4]
    ```

  - concat

    배열을 합침 [ 기존의 배열을 건드리지 않음]

    ```javascript
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    
    const concated = arr1.concat(arr2);
    console.log(concated); // [1, 2, 3, 4, 5, 6]
    ```

  - spread연산자

    배열을 합침

    ```javascript
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    
    const spread = [...arr1, ...arr2];
    console.log(spread); [1, 2, 3, 4, 5, 6]
    ```

  - join

    배열안에 있는 값들을 문자열로 합칠 때

    ```javascript
    const arr = [1, 2, 3, 4]
    console.log(arr.join()); // 1,2,3,4
    console.log(arr.join(' ')); // 1 2 3 4
    console.log(arr.join(', ')); // 1, 2, 3, 4
    
    ```

  - reduce

    배열안에있는 모든 값들을 사용해서 연산을 할 때

    ```javascript
    const num = [1, 2, 3, 4, 5]
    
    let sum = 0;
    num.forEach(n => {
      sum += n;
    });
    
    console.log(sum); // 15
    ```

    ```javascript
    const num = [1, 2, 3, 4, 5]
    
    const sum = num.reduce((accumulator, current) => accumulator + current, 0);
    // const sum = num.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);  // 15
    
    // 0이 초기값으로 acc로 들어가고 cur로 배열읜 첫번째 값 1이 들어가고 연산되고 그 값이 acc로 들어가고 cur에 두번째 값 2가 들어가서 3이 되고 acc에 3이 들어가고 cur에 세번째 값 3이 들어감
    ```

    평균값구하기

    ```javascript
    const num = [1, 2, 3, 4, 5]
    
    const avg = num.reduce((accumulator, current, index, array) => {
      if (index === array.length - 1) {
        return (accumulator + current) / array.length;
      }
      return accumulator + current;
    }, 0);
    
    console.log(avg); // 3
    ```

- 객체생성자

  ```javascript
  function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
      console.log(this.sound)
    }
  }
  
  const tiger = new Animal('호랑이', '랑이', '어흥');
  const lion = new Animal('사자', '자자', '흐엉');
  
  tiger.say();  // 어흥
  lion.say();  // 흐엉
  ```

  프로토타입으로 function이 반복적으로 생성이 되는 것을 방지

  ```javascript
  function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
   Animal.prototype.say = function() {
      console.log(this.sound)
    }
  
  const tiger = new Animal('호랑이', '랑이', '어흥');
  const lion = new Animal('사자', '자자', '흐엉');
  
  tiger.say();  // 어흥
  lion.say();  // 흐엉
  ```

- class문법

  객체생성자와 프로토타입을 조금 더 쉽게 사용하기 위한 문법

  ```javascript
  class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  const tiger = new Animal('호랑이', '랑이', '어흥');
  const lion = new Animal('사자', '자자', '흐엉');
  
  tiger.say(); // 어흥
  lion.say(); // 흐엉
  ```

  - 상속

  ```javascript
  class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  class Tiger extends Animal {
      constructor(name, sound) {
          super('호랑이', name, sound);
      }
  }
  class Lion extends Animal {
      constructor(name, sound) {
          super('사자', name, sound);
      }
  }
  
  const tiger = new Tiger('랑이', '어흥')
  const lion = new Lion('자자', '흐엉');
  
  tiger.say(); //어흥
  lion.say(); //흐엉
  ```

- 삼항연산자

  ```javascript
  condition ? true : false	
  ```

  ```javascript
  const arr = [1, 2];
  let text = ' ';
  if(arr.length === 0) {
    text = '배열이 비어있습니다.'
  }else {
    text = '배열이 비어있지 않습니다.'
  }
  console.log(text);
  ```

  삼항연산자 식으로 바꾸면

  ```javascript
  const arr = [1, 2];
  let text = arr.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
  console.log(text);
  ```

- true false

  ```javascript
  function print(person) {
    console.log(person.name);  //Peng
  }
  
  const person = {
    name: 'Peng'
  };
  
  print(person);
  ```

  print( );일경우 TypeError

  ```javascript
  function print(person) {
    console.log(person.name);  //TypeError : Cannot read property 'name' of undefined
  }
  
  const person = {
    name: 'Peng'
  };
  
  print();
  ```

  에러방지

  ```javascript
  function print(person) {
    if (person === undefined) {
        return;
    }
    console.log(person.name);  
  
  const person = {
    name: 'Peng'
  };
  
  print();
  ```

  person 값이 없을 경우 null 체킹

  ```javascript
  function print(person) {
    if (person === undefined || person === null) {
        return;
    }
    console.log(person.name);  
  
  const person = null
  
  print(person);
  ```

  단순화

  ```javascript
  function print(person) {
    if (!person) {
        return;
    }
    console.log(person.name);  
  
  const person = null
  
  print(person);
  ```

  falsy한 값

  - undefinde
  - null
  - 0
  - ' '
  - NaN

- 조건문 단축

  ```javascript
  function isAnimal(text) {
    return (
    	text === '펭귄' || text === '물범'
    );
  }
  
  console.log(isAnimal('펭귄')); // true
  console.log(isAnimal('범'));  // false
  ```

  - includes

  ```javascript
  function isAnimal(text) {
    const animals = ['펭귄', '물범'];
    return animals.includes(text);
  }
  
  console.log(isAnimal('펭귄')); // true
  console.log(isAnimal('범'));  // false
  ```

  - 화살표함수

  ```javascript
  const isAnimal = text => ['펭귄', '물범'].includes(text);
  
  console.log(isAnimal('펭귄')); // true
  console.log(isAnimal('범'));  // false
  ```

- 비구조화(객체)

  ```javascript
  const obj = {a:1, b:2};
  const {a, b} = obj;
  console.log(a); // 1
  console.log(b); // 2	
  ```

  - 함수의 파라미터

  ```javascript
  const obj = {a:1, b:2};
  
  function print({a, b}) {
    console.log(a);  // 1
    conosle.log(b);  // 2
  }
  
  print(obj);
  ```

  - b가 없을 때 비구조화

  ```javascript
  const obj = {a:1};
  
  const {a, b = 2} = obj;
  
  console.log(a); // 1
  console.log(b); // 2
  ```

- 비구조화(배열)

  ```javascript
  const arr = [1, 2];
  
  const one = arr[0];
  const two = arr[1];
  
  console.log(one); // 1
  console.log(two); // 2
  ```

  ```javascript
  const arr = [1, 2];
  
  const [one, two] = arr;
  
  console.log(one); // 1
  console.log(two); // 2
  ```

- spread

  ...

  ```javascript
  const peng = {
    name: '펭수'
  };
  
  const giantPeng = {
    name: '펭수',
    size: 'big'
  };
  
  const whiteGiantPeng = {
    name: '펭수',
    size: 'big',
    color: 'white'
  };
  
  console.log(peng);
  console.log(giantPeng);
  console.log(whiteGiantPeng);
  ```

  ```javascript
  {name: "펭수"}
  {name: "펭수", size: "big"}
  {name: "펭수", size: "big", color: "white"}
  ```

  - spread문법

  ```javascript
  const peng = {
    name: '펭수'
  };
  
  const giantPeng = {
    ...peng,
    size: 'big'
  };
  
  const whiteGiantPeng = {
    ...giantPeng,
    color: 'white'
  };
  
  console.log(peng);
  console.log(giantPeng);
  console.log(whiteGiantPeng);
  ```

  ```javascript
  {name: "펭수"}
  {name: "펭수", size: "big"}
  {name: "펭수", size: "big", color: "white"}
  ```

  - 덮어쓰기

  ```javascript
  const peng = {
    name: '펭수'
  };
  
  const giantPeng = {
    ...peng,
    size: 'big'
  };
  
  const whiteGiantPeng = {
    ...giantPeng,
    color: 'white'
  };
  
  const purpleGiantPeng = {
    ...whiteGiantPeng,
    color: 'purple'   
  }
  console.log(peng);
  console.log(giantPeng);
  console.log(whiteGiantPeng);
  console.log(purpleGiantPeng);
  
  ```

  ```javascript
  {name: "펭수"}
  {name: "펭수", size: "big"}
  {name: "펭수", size: "big", color: "white"}
  {name: "펭수", size: "big", color: "purple"}
  ```

  - 배열

  ```javascript
  const animals = ['펭귄', '물범'];
  const others = [...animals, '뽀로로'];
  
  console.log(animals);
  console.log(others);
  ```

  ```javascript
  (2) ["펭귄", "물범"]
  (3) ["펭귄", "물범", "뽀로로"]
  ```

   concat이랑 같다

  ```javascript
  const animals = ['펭귄', '물범'];
  const others = animals.concat('뽀로로');
  
  console.log(animals);
  console.log(others);
  ```

  ```javascript
  (2) ["펭귄", "물범"]
  (3) ["펭귄", "물범", "뽀로로"]
  ```

- rest

  ```javascript
  const whiteGiantPeng = {
    name: '펭수',
    size: 'big',
    color: 'white'
  };
  
  const {color, ...rest} = whiteGiantPeng;
  
  
  console.log(color);
  console.log(rest);
  ```

  ```javascript
  white 
  {name: "펭수", size: "big"}
  ```

  - 배열

  rest가 앞에 올 수는 없다. 배열에서 rest는 맨 마지막에 와야한다.

  ```javascript
  const numbers = [0, 1, 2, 3, 4];
  
  const [one, ...others] = numbers;
  console.log(one);
  console.log(others);
  ```

  ```javascript
  0
  (4) [1, 2, 3, 4]
  ```

  - 함수에서 rest

  ```javascript
  function sum(a, b, c, d, e) {
    return a + b + c + d + e;
  }
  
  console.log(sum(1,2,3,4,5)); // 15
  // 하나라도 없으면 undefined
  ```

  ```javascript
  function sum(a, b, c, d, e, f) {
    let result = 0;
    if (a) result += a;
    if (b) result += b;
    if (c) result += c;
    if (d) result += d;
    if (e) result += e;
    if (f) result += f;
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6)); // 21
  ```

  ```javascript
  function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6)); // 21
  ```

- scope

  - global : 코드의 모든 범위
  - function : 특정함수의 내부
  - block : 중괄호로 감싸진 블록내부에서만 사용(if, for)

  ```javascript
  const value = 'hello'; //global
  
  function myFunction() {
    console.log('myFunction: ');
    console.log(value);
  }
  
  function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye'; //function
    const aValue = 'byebye';
    console.log(value);
  }
  
  myFunction();
  otherFunction();
  
  console.log('global scope: ');
  console.log(value);
  console.log(aValue);
  ```

  ```javascript
  myFunction:  
  hello 
  otherFunction:  
  bye 
  global scope:  
  hello 
  ReferenceError: aValue is not defined  // 함수스코프를 벗어날 수 없어서 ReferenceError
  ```

  다른 예시

  ```javascript
  const value = 'hello';
  
  function myFunction() {
    const value = 'bye';
    if (true) {
      const value = 'world';
      console.log('block scope: ');
      console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
  }
  
  myFunction();
  console.log('global scope: ');
  console.log(value);
  ```

  ```
  block scope:  
  world 
  function scope:  
  bye 
  global scope:  
  hello 
  ```

- hoisting

  아직 선언되지 않은 함수 또는 변수를 끌어올려 사용할 수 있는 작동 방식

  ```javascript
  myFunction()
  
  function myFunction () {
    console.log('hello world');
  }
  ```

  호출을 상단에 작성해도 출력이 된다. 사용하지 않는 것이 좋다.

  ```
  hello world 
  ```

  const나 let은 호이스팅이 발생하지 않지만 var는 호이스팅이 발생한다.

- 비동기 처리

  동기적처리: 1, 2, 3, 4의 작업이 있다면 1이 끝나고 2하고 2가 끝나고 3하고 3끝나고 4를 처리한다.

  ```javascript
  function work() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {
     
    }
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  
  work();  // 이작업이 끝날 때까지 다음작업이 실행되지 못함
  console.log('다음작업');
  ```

  ```
  621ms
  다음작업
  ```

  비동기처리

  ```javascript
  function work() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {
     
      }
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 0)
  }
  
  console.log('작업시작');
  work();  // 이 작업이 실행되는 동안 다음작업도 동시에 실행
  console.log('다음작업');
  ```

  ```
  작업시작
  다음작업
  734ms
  ```

  work 함수가 끝난 다음에 다음 작업이 실행되도록 하고 싶다면 콜백함수를 파라미터 값으로 전달

  - 콜백함수

    함수타입의 값을 파라미터로 넘겨줘서 파라미터로 받은 함수를 특정 작업이 끝나고 나서 호출

  ```javascript
  function work(callback) {     								// 3번
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {
     
      }
      const end = Date.now();
      console.log(end - start + 'ms');						// 4번
      callback(end - start)								   // 5번
    }, 0)
  }
  
  console.log('작업시작');  									// 1번
  work((ms) => {										       // 2번  // 6번
    console.log('작업끝');									 // 7번
    console.log(ms + 'ms 걸렸음');
  });  // 이작업이 끝날 때까지 다음작업이 실행되지 못함
  console.log('다음작업');
  
  1번 실행
  2번 work함수 호출
  3번 work함수 실행
  4번 work함수 종료
  5번 work함수 작업이 끝나고 callback이 호출
  6번 5번의 (end - start) 값이 ms로 넘어옴
  7번 ms를 함수 내부에서 받아와서 실행
  ```

  ```
  작업시작
  다음작업
  645ms
  작업끝
  645ms 걸렸음
  ```

- promise

  비동기 작업을 조금 더 편리하게 사용(ES6)

  비동기 작업을 처리할 때 콜백함수를 이용해서 처리했는데 비동기 작업이 많아질 경우에 코드가 난잡해짐

  그래서 ES6에서 promise가 등장

  콜백지옥

  ```javascript
  function increaseAndPrint(n, callback) {
    setTimeout(() => {
      const increased = n + 1;
      console.log(increased);
      if(callback) {
        callback(increased)
      }
    }, 1000)
  }
  
  increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          increaseAndPrint(n, n => {
            console.log('작업끝')
          });
        });
      });
    });
  });
  ```

  ```
  1
  2
  3
  4
  5
  작업끝 
  // 1초 마다 실행 후 작업 끝	
  ```

  promise 예제(resolve)

  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result');
    }, 1000)
  });
  
  myPromise.then(result => {
    console.log(result);  
  })
  ```

  ```
  result
  ```

  

  promise 예제(reject)

  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 1000)
  });
  
  myPromise.then(result => {
    console.log(result);
  }).catch(e => {
    console.error(e);
  })
  ```

  ```
  Error
  ```

  promise를 만드는 함수예제

  ```javascript
  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) {
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);      
      }, 1000);
    })
  }
  
  increaseAndPrint(0).then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e);
  })
  
  // 에러를 잡을 때 어떤 부분에서 발생한 것인지 파악하기 어렵다
  // 분기를 나누는 작업도 어렵다
  // 그래서 사용하는 문법이 async, await
  ```

  ```
  
  1
  2
  3
  4
  ValueIsFiveError
  ```

- async, await(ES6)

  ```javascript
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // ms이후 resolve함수 실행
    }
  
  async function process() {
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다');
  }
  
  process();
  ```

  ```
  안녕하세요 
  반갑습니다 //1초 후 출력
  ```

- promise문법에서 error발생과 잡아낼 때 

  발생: throw, 잡아낼 때: try, catch

  ```javascript
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
    }
  
  async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
  }
  
  async function process() {
    try {
      await makeError();
    } catch (e) {
      console.error(e);
    }
  }
  
  process();
  ```

  ```
  Error // 1초 후 Error	
  ```

  