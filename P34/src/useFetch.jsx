import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal;
    fetch(url, {signal})
    .then(res => {
      if(!res.ok){
        throw Error("could not fetch the data for that recourse")
      }
      return res.json()
    })
    .then(data => {
      // console.log(data)
      setData(data)
      setIsPending(false)
      setError(null)
    })
    .catch(err => {
      if(err !== 'EbortError'){
        setError(err.message)
        setIsPending(false)
        setData(null)
      }
    })
  }, [url])
  return {data, isPending, error}
}

export default useFetch