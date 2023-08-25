import { Layout } from "../Layout"
import {motion} from 'framer-motion'

export const Technology:React.FC = () => {
  return (
    <motion.div className="technology"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75 }}
    >
    <Layout>
      
    </Layout>
  </motion.div>
  )
}
