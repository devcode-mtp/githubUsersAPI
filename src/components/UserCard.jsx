export default function UserCard({ user, onClick }) {
  return (
    <li
      onClick={onClick}
      className="py-3 flex flex-col items-center justify-center gap-2 shadow border cursor-pointer hover:transform hover:scale-110 transition duration-200 hover:shadow-xl hover:bg-slate-200">
      <img src={user.avatar_url} alt={`${user.login} avatar`} className="w-16 h-16 rounded-full mx-auto" />
      <p>{user.login} </p>
    </li>
  )
}


