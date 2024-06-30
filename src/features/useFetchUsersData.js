import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { addUsersFromAPI, addLoading, addError } from "./sliceUsers"

export default function useFetchUsersData() {

  const dispatch = useDispatch()

  const [pageIndex, setPageIndex] = useState(0)
  const [maxPages, setMaxPages] = useState(0)

  let perPage = 10;

  useEffect(() => {
    dispatch(addLoading())
    fetch(`https://api.github.com/search/users?q=type:user&per_page=${perPage}&page=${pageIndex + 1}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau')
        }
        return response.json()
      })
      .then(data => {
        dispatch(addUsersFromAPI(data.items))
        setMaxPages(Math.ceil(data.total_count / 10))

      })
      .catch((error) => {
        dispatch(addError(error.message))
      })

  }, [pageIndex])

  const previousPage = () => {
    setPageIndex(prevIndex => Math.max(prevIndex - 1, 0))
  }

  const nextPage = () => {
    setPageIndex(prevIndex => prevIndex + 1 < maxPages ? prevIndex + 1 : prevIndex)
  }


  return { pageIndex, maxPages, previousPage, nextPage }
}


