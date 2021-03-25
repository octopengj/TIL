## EVENT



이벤트를 발생시킬 요소를 선택해주고 이벤트코드를 입력

- addEventListener('type', listener)

  ```html
  <div class="peng"></div>
  ```

  ```css
  .peng {
  
  }
  .something {
  
  }
  ```

  ```javascript
  const peng = document.querySelector('.peng');
  
  peng.addEventListener('click', function() {
  
  	peng.classList.add('something');
  
  });
  
  ----------------------------------------------------
  
  const peng = document.querySelector('.peng');
  
  function clickPeng() {
  	peng.classList.toggle('something');
  }
  
  peng.addEventListener('click', clickPeng);
  
  -----------------------------------------------------
  
  const peng = document.querySelector('.peng');
  
  const clickPeng = () => {
      peng.classList.toggle('something');
  }
  
  peng.addEventListener('click', clickPeng);
      
  ```

   위 3개의 코드는 전역변수로 사용되고 있어서 충돌의 우려가 있다.

  ```javascript
  (function() {
      const peng = document.querySelector('.peng');
  
  	function clickPeng = () => {
      	peng.classList.toggle('something');
  	}
  
  	peng.addEventListener('click', clickPeng);
  })();
  ```

  



