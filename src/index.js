import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Guide from './guide.png';
import Data from './data.xml';

function component() {
 var element = document.createElement('div');
 element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 element.classList.add('hello');

 var btn = document.createElement('button');

 btn.innerHTML = 'click me and check the console!';
 btn.onclick = printMe;

 element.appendChild(btn);

 // 将图像添加到现有的div中
 var myImg = new Image();
 myImg.src = Guide;

 element.appendChild(myImg);

 console.log(Data);

 return element;
}

document.body.appendChild(component());
