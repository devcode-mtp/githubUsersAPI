import { FaArrowLeft } from "react-icons/fa6";
import getUserReposAPI from "../features/useFetchUserRepos";

export default function UserData({ selectedUser, onClick }) {

  const repos = getUserReposAPI(selectedUser)

  if (!selectedUser) {
    return (
      <div className="flex items-start lg:items-center justify-center h-full">
        <div className="flex justify-center items-center gap-10 bg-gray-800 rounded py-3 px-6 sm:py-6 sm:px-10">
          <FaArrowLeft className="text-white text-4xl" />
          <p className="text-white text-sm lg:text-2xl">Sélectionnez un utilisateur pour voir ses détails</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative border border-zinc-900/20 min-h-[600px] py-14">
      <button
        onClick={onClick}
        className="absolute top-4 content-center sm:right-4 bg-red-600 text-slate-50 sm:text-xl hover:bg-red-600/80 px-4 py-1 rounded"
      >
        Clear
      </button>

      <div className="flex flex-col items-center gap-10">
        <h2 className="break-words text-zinc-950 text-2xl lg:text-4xl 2xl:text-6xl font-bold">{selectedUser.login} </h2>
        <img className="rounded-full w-24 sm:w-60" src={selectedUser.avatar_url} alt={selectedUser.login} />
      </div>

      <p className="text-center mt-14 text-lg sm:text-2xl text-black font-bold">Repositories :</p>
      <ul className="px-2 sm:px-4 mt-10">
        {repos && (repos.map(repos =>
          <li key={repos.id}>
            <a className="break-words text-xs sm:text-lg hover:text-blue-700 hover:font-medium" href={repos.html_url} target="_blank" rel="noopener noreferrer" > {repos.html_url} </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

