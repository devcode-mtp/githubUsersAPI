import { useState } from "react"

export default function useFetchUserRepos(selectedUser) {

  const [repos, setRepos] = useState(null)

  if (selectedUser) {
    const url = selectedUser.repos_url

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau')
        }
        return response.json()
      })
      .then(data => {
        setRepos(data)

      })
      .catch((error) => {
        console.log(error);
      })
  }

  return repos
}


