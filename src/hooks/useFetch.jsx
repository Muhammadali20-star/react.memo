import { useEffect, useState } from "react"
import { api } from "../api"

export const useFetch = (endpoind) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
  const [loading, setonLoading] = useState(false)
    

    useEffect(()=> {
        setonLoading(true)
        api
      .get(endpoind)
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(()=> setonLoading(false))
    }, [])

    return {data, error, loading}
}