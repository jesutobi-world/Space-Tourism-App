import { Layout } from "../Layout"
import {motion, AnimatePresence} from 'framer-motion'
import data from '../../data.json'
import '../../destination.css'
import { useState } from "react"


export const Destination:React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<
    Destination
  >(data.destinations[0]);
  const handleNavClick = (destination:Destination) => {
    setSelectedDestination(destination);
  };
  interface Destination {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, transition: { duration: 0.75 } }
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.75, delay: 0.2 } }
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.5 } }
  };
  return (
    <motion.div 
    className="destination"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <Layout>
      <div className="title">
        <h1><span>01</span>PICK YOUR DESTINATION</h1>
      </div>
      <div className="content">
        <AnimatePresence mode="popLayout">
        <div className="planet-div">
          <motion.img src={selectedDestination.images.png} alt={selectedDestination.name} variants={imageVariants} />
        </div>
        </AnimatePresence>
        <AnimatePresence>
        <motion.div className="text-content" variants={textVariants}>
          <nav className="nav">
          {data.destinations.map(destination => (
            <p
              key={destination.name}
              className={`link ${destination.name} ${onclick=() =>{'active'}}`}
              onClick={() => handleNavClick(destination)}
            >
              {destination.name}
            </p>
          ))}
          </nav>
          <div className="description">
            <div className="name">
              <h2>{selectedDestination.name}</h2>
            </div>
            <div className="intro">
              <p>{selectedDestination.description}</p>
            </div>
          </div>
          <div className="statistics">
            <div className="distance">
              <h3>AVG. DISTANCE</h3>
              <p>{selectedDestination.distance}</p>
            </div>
            <div className="time">
              <h3>Est. travel time</h3>
              <p>{selectedDestination.travel}</p>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  </motion.div>
  )
}
