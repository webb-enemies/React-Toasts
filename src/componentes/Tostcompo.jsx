import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"
import { hidetost } from '../store/Tostslice'

const Tostcompo = () => {
    const { display, massage, color, icon, timeing } = useSelector(state => state.tostredicer.tost)
    const dispach = useDispatch()
    let timeout = null

    if (display) {
        timeout = setTimeout(() => {
            dispach(hidetost())
        }, `${timeing}`)
    }

    const hidetostonclick = () => {
        clearTimeout(timeout)
        dispach(hidetost())
    }

    return display ? (
        <>
            <motion.div 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{
                type:"spring",
                stiffness:1000,
                damping:35
            }}

            className=' w-[35rem] fixed flex flex-col justify-between bottom-2 right-2 h-[5rem] rounded-md bg-black text-white z-[999] p-2'>

                <div className='flex w-full justify-between h-[50%] items-center'>
                    <div className='flex gap-1'>
                        <span className="material-symbols-outlined">{icon}</span>
                        <p className=' font-semibold capitalize'>{massage}</p>
                    </div>
                    <div>
                        <button onClick={hidetostonclick}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>

                <div className='w-[100%] h-[5px] bg-slate-400 rounded-full overflow-hidden'>
                    <motion.div
                        layout
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: `${timeing / 1000}` }}
                        className={` h-full ${color}`}>
                    </motion.div>
                </div>

            </motion.div>
        </>
    ) : null
}

export default Tostcompo