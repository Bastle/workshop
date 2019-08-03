/**
 * Created by cyb on 2019/3/10.
 */

import './style/index.css';
import _ from 'lodash';
import printMe from './print';



if(process.env.NODE_ENV === 'production'){
  console.log('this is production env');
}

function component(){
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _.join(['hello','webpack'], ' ');
  btn.innerHTML = 'click this button and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
