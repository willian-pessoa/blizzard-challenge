import { useEffect, useState } from 'react'

import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        setError(err)
        setError('An error occurred. Awkward..')
      }).finally(() => {
        setLoaded(true)
      })

  }, [url])

  return {data, loaded, error}
}

export default useFetch