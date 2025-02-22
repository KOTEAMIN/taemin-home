
$(document).ready(function () {
    $(".main-menu").hover(
        function () {
            $(this).children(".sub-menu").stop().slideDown(200); // 서브메뉴 펼침
        },
        function () {
            $(this).children(".sub-menu").stop().slideUp(200); // 서브메뉴 숨김
        }
    );
});
JS

// 버튼 요소 선택

const bgmToggle = document.getElementById('bgm-toggle');

​

// 오디오 객체 생성

const bgm = new Audio('https://www.bensound.com/bensound-music/bensound-happyrock.mp3');

bgm.loop = true;

​

// 초기 상태

let isPlaying = false;

​

// 버튼 클릭 이벤트

bgmToggle.addEventListener('click', () => {

  if (isPlaying) {

    bgm.pause(); // 음악 멈춤

    bgmToggle.textContent = 'Play BGM';

    bgmToggle.classList.remove('pause');

    bgmToggle.classList.add('play');

  } else {

    bgm.play(); // 음악 재생

    bgmToggle.textContent = 'Pause BGM';

    bgmToggle.classList.remove('play');

    bgmToggle.classList.add('pause');

  }

​

  // 상태 반전

  isPlaying = !isPlaying;

});
// 닫기 버튼 생성 및 추가

var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  myNodelist[i].appendChild(span);

}

​

// 닫기 버튼 클릭 시 항목 숨기기

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

​

// 체크 표시 토글

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

  }

}, false);

​

// 새 항목 추가

function newElement() {

  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {

    alert("내용을 입력해주세요!");

  } else {

    document.getElementById("myUL").appendChild(li);

  }

  document.getElementById("myInput").value = "";

​

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  li.appendChild(span);

​

  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";

    }

  }

}

