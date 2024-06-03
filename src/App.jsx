import { useDispatch } from 'react-redux'
import { showtost } from './store/Tostslice'

const App = () => {

  const dispatch = useDispatch()



  return (
    <>
    <button 
    onClick={()=> dispatch(showtost({massage:"you are loged in", color:"bg-green-500", icon:"face", timeing:"3030"}))}
    className=' px-2 py-1 bg-green-500 capitalize font-semibold m-6 rounded-md'>login tost</button>

    <button 
    onClick={()=> dispatch(showtost({massage:"you are log out", color:"bg-red-500", icon:"logout", timeing:"2300"}))}
    className=' px-2 py-1 bg-green-500 capitalize font-semibold m-6 rounded-md'>logout tost</button>

    <button 
    onClick={()=> dispatch(showtost({massage:"chack your email", color:"bg-white", icon:"alternate_email", timeing:"5100"}))}
    className=' px-2 py-1 bg-green-500 capitalize font-semibold m-6 rounded-md'>email tost</button>
    </>
  )
}

export default App