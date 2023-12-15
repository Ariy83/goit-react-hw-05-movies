import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useHttp = (fn, param) => {
  const [data, setData] = useState(null)

  const getData = useCallback(async () => {
		try {
      const res = await fn(param)
      setData(res)
		} catch (err) {
      toast.error(err.message)
		} 
	}, [fn, param])

  useEffect(() => {
   getData()
  }, [getData])

  return [data, setData]
}

export default useHttp