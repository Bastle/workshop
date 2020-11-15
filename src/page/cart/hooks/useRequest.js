import { useState, useEffect } from 'react';

const useRequest = (fun, deps) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fun().then(res => {
      setData(res);
      setLoading(false)
    })
  }, deps);
  return [data, loading]
}


export default useRequest;
