import { Layout } from "../Layout";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, transition: { duration: 0.75 } }
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.75, delay: 0.2 } }
  };

  const exploreVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.5 } }
  };

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Layout>
        <motion.div className="home-text" variants={textVariants}>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </motion.div>
        <div className="explore-div">
          <motion.div className="explore" variants={exploreVariants}>
            EXPLORE
          </motion.div>
        </div>

      </Layout>
    </motion.div>
  );
};
