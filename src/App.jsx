import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import UserCard from './components/UserCard';
import UserData from './components/UserData';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, clearUser } from "./features/sliceUsers"
import spinner from "./assets/spinner.svg"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useFetchUsersData from './features/useFetchUsersData';


export default function App() {
  const { pageIndex, previousPage, nextPage } = useFetchUsersData()
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  return (
    <div className="flex flex-col min-h-screen bg-slate-400/10">
      <Header />
      <main className="flex flex-grow px-2 sm:px-6 py-10">
        <div className="w-1/2 p-3 sm:p-4 relative pt-4">
          <p className='sm:text-xl font-semibold'>Page {pageIndex + 1}</p>

          <div className='flex sm:gap-12 gap-6 absolute top-2 w-full items-center justify-center'>
            <IoIosArrowDropleftCircle className='sm:w-10 sm:h-10 w-6 h-6 cursor-pointer hover:text-blue-900' onClick={previousPage} />
            <IoIosArrowDroprightCircle className='sm:w-10 sm:h-10 w-6 h-6 cursor-pointer hover:text-blue-900' onClick={nextPage} />
          </div>

         <div className='flex justify-center items-center'>
         {users.isLoading && <img src={spinner} alt="loading" />}
         </div>
          {users.hasError && <p>Une erreur est survenu..</p>}

          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 pt-10'>
            {users.users && !users.isLoading && !users.hasError && users.users.map(user =>
              <UserCard key={user.id} user={user} onClick={() => dispatch(selectUser(user))} />
            )}
          </ul>
        </div>

        <div className="w-1/2 sm:p-4 pt-10">
          <UserData selectedUser={users.selectedUser} onClick={() => dispatch(clearUser(users.selectedUser))} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
