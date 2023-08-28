import { Layout } from "../Layout"
import {AnimatePresence, motion} from 'framer-motion'
import '../../crew.css'

export const Crew:React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, transition: { duration: 0.75 } }
  };

  // const textVariants = {
  //   hidden: { y: -20, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 0.75, delay: 0.2 } }
  // };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.5 } }
  };
  return (
    <motion.div 
    className="crew"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <Layout>
      <div className="title">
        <h1><span>02</span>MEET YOUR CREW</h1>
      </div>
      <div className="content">
        <AnimatePresence mode="popLayout">
          <motion.div className="text-content"></motion.div>
          <motion.div className="commander-div">
            <motion.img src="" alt="" variants={imageVariants} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  </motion.div>
  )
}
