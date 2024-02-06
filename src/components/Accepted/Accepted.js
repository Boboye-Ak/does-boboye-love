import "./Accepted.css"
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
const Accepted = ({ setIsAccepted, playSound, stopSound }) => {
    return <motion.div className="accepted" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="close-icon" onClick={() => {
            setIsAccepted(false)
            stopSound()
        }}><Icon icon="mi:close" /></div>
        <div className="text"> <Typewriter onInit={(typewriter) => {
            typewriter.typeString("You bet your fine ass you are.").pauseFor(3000).deleteAll().typeString("Don't ever forget it.").pauseFor(3000).deleteAll().typeString("You are Loved... <3 :)").start()
        }} /></div>

    </motion.div>
}


export default Accepted