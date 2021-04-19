import { generateRoutes } from './generateRoutes';

export default { generateRoutes };


export const retry = (pro, times, delay) => {
  return new Promise((resolve, reject) => {
    const myTry = () => {
      pro().then(res => {
        console.log('show res',res)
        resolve(res)
      }).catch(err => {
        console.log('catch err', err)
        times--;
        if(times <= 0) {
          reject(err)
        } else {
          setTimeout(myTry, delay)
        }
      })
    }
    myTry()
  })
}