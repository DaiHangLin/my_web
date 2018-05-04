import _ from 'lodash';
import './style.css';
import Guide from './guide.png';

function component() {
 var element = document.createElement('div');
 element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 element.classList.add('hello');

 // 将图像添加到现有的div中
 var myImg = new Image();
 myImg.src = Guide;

 element.appendChild(myImg);

 return element;
}

document.body.appendChild(component());
