let colors = ['#14c5c5', 'rgb(222, 80, 80)', 'rgb(237, 156, 24)', 'rgb(63, 63, 220)', 'rgb(14, 134, 14)', 'violet']
const back = document.getElementById('divBack');
const span = document.querySelectorAll('span')
const h1 = document.querySelector('h1')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')


span.forEach((item) => item.addEventListener('click', (e)=>{
  const spnBtn = e.currentTarget.classList;
  if(spnBtn.contains('color1')){
    back.style.background = colors[0];
    h1.style.color = colors[0];
    button1.style.background = colors[0];
    button2.style.border = `2px solid ${colors[0]}`;
    button2.style.color = colors[0];
    text1.style.color = colors[0];
    text2.style.color = colors[0];
  }else if(spnBtn.contains('color2')){
    back.style.background = colors[1];
    h1.style.color = colors[1];
    button1.style.background = colors[1];
    button2.style.border = `2px solid ${colors[1]}`;
    button2.style.color = colors[1];
    text1.style.color = colors[1];
    text2.style.color = colors[1];

  }else if(spnBtn.contains('color3')){
    back.style.background = colors[2];
    h1.style.color = colors[2];
    button1.style.background = colors[2];
    button2.style.border = `2px solid ${colors[2]}`;
    button2.style.color = colors[2];
    text1.style.color = colors[2];
    text2.style.color = colors[2];3
  }else if(spnBtn.contains('color4')){
    back.style.background = colors[3];
    h1.style.color = colors[3];
    button1.style.background = colors[3];
    button2.style.border = `2px solid ${colors[3]}`;
    button2.style.color = colors[3];
    text1.style.color = colors[3];
    text2.style.color = colors[3];

  }else if(spnBtn.contains('color5')){
    back.style.background = colors[4];
    h1.style.color = colors[4];
    button1.style.background = colors[4];
    button2.style.border = `2px solid ${colors[4]}`;
    button2.style.color = colors[4];
    text1.style.color = colors[4];
    text2.style.color = colors[4];

  }else{
    back.style.background = colors[5];
    h1.style.color = colors[5];
    button1.style.background = colors[5];
    button2.style.border = `2px solid ${colors[5]}`;
    button2.style.color = colors[5];
    text1.style.color = colors[5];
    text2.style.color = colors[5];

  }
}))
