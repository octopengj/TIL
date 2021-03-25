## DOM Script (Document Object Model)

- const/let 변수명 document.querySelector('.class명' );

  변수선언 없이 document.querySelector('.class명' );

  공통class를 가지고 있는 여러개의 태그가 있을 경우 첫번째가 선택된다.

  모두 선택하려면

  document.querySelectorAll('.class명');

  만약 같은 클래스를 가진 태그가 여러개인경우 .common*4 3번째 선택

  const  commonGrounp = document.querySelector('.common'); 하면

  배열이 생성되고 

  commonGroup[2]로 index를 사용하여 불러내면 된다.

  또 다른 방법

  document.querySelector('.common:nth-child(3)');

  

- data 속성

  - 속성 추가

    const add = document.querySelector('.common');

    add.setAttribute('data-id', abc); -> data-id라는 속성이 만들어지고 값으로 abc가 들어간다.

    ```html
    <div class="common" data-id="abc"></div>
    ```

    값을 얻어 올때

    add.getAttribute('data-id');

  

- 요소(element)

  - element생성

    const elem = document.createElement('p');

    ```html
    <p></p>
    ```

    elem.innerHTML = 'Hello Javascript';

    ```html
    <p>
    Hello Javascript
    </p>
    ```

  - element 추가

    const commonElem = document.querySelector('.common');

    commonElem.appendChild(elem);

    ```html
    <div class="common">
      <div class="common-child"></div>
      <p>Hello Javascript</p>
    </div>
    ```

  - element 제거

    commonElem.removeChild( document.querySelector('.common-child') );

    ```html
    <div class="common">
      <p>Hello Javascript</p>
    </div>
    ```

  

- Class 붙이기

  const commonAppend = document.querySelector('.common');

  - 추가

    commonAppend.classList.add('something');

    ```html
    <div class="common"></div>
    
    <div class="common something"></div>
    ```

  - 제거

    commonAppend.classList.remove('common');

    ```html
    <div class="common something"></div>
    
    <div class="something"></div>
    ```

  - 변경

    commonAppend.className = 'something';

    ```html
    <div class="common"></div>
    
    <div class="something"></div>
    ```

  - toggle(on/off)

    commonAppend.classList.toggle('something');

    ```javascript
    commonAppend.classList.toggle('something');
    ->true
    commonAppend.classList.toggle('something');
    ->false
    commonAppend.classList.toggle('something');
    ->true
    ```

    

  