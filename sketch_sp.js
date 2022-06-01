const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");


const textArray = ["스튜디오 육육구구프레스", "이재영 디자이너의 특강이", "서울시립대학교 조형관 오층 세미나실에서", "유월 칠일 화요일 오후 네시에",
 "있습니다"];
const typingDelay = 110;
const erasingDelay = 50;
const newTextDelay = 500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);

}
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, newTextDelay+1100);

  }
}

document.addEventListener("DOMContentLoaded", function(){
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
