/**
 * Created by cyb on 2019/10/16.
 */

const isFunction = value => typeof value === 'function';

const PEDDING = 'PEDDING';
const FUFILLED = 'FUFILLED';
const REJECTED = 'REJECTED';

export class MyPromise {
  constructor(handle){
    if(!isFunction(handle)){
      throw new Error('MyPromise must accept a function as a parameter');
    }
    this._status = PEDDING;

    this._value = undefined;

    try{
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch (err){
      this._reject(err)
    }
  }

  _resolve(value) {
    if (this._status !== PEDDING) return;
    this._status = FUFILLED;
    this._value = value;
  }

  _reject(err) {
    if(this._status !== PEDDING) return;
    this._status = REJECTED;
    this._value = err;
  }

  then(onFulfilled, onRejected){
    const { _status, _value } = this;
    switch(_status){
      case PEDDING:
        this._fulfilledQueues.push(onFulfilled);
        this._rejectedQueues.push(onRejected);
        break;
      case FUFILLED:
        onFulfilled(_value);
        break;
      case REJECTED:
        onRejected(_value);
        break;
    }
    return new MyPromise((onFulfilledNext, onRejectedNext) => {})
  }
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

promise2 = promise1.then(res => {
  return '这里返回一个普通值';
})

promise2.then(res => {
  console.log(res);
})