import { useState, useEffect } from "react";

const useRequest = <T>(fun: () => Promise<T>, deps?: React.DependencyList) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fun().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, deps);
  return [data, loading] as [T, boolean];
};

export default useRequest;
