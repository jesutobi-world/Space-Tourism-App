import { Layout } from "../Layout"
import { motion } from 'framer-motion'
import '../../crew.css'
import data from '../../data.json'
import { useState } from "react"

export const Crew: React.FC = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState<
  Crew
>(data.crew[0]);
const [selectedDot, setSelectedDot] = useState(data.crew[0].name);
const handleDotClick = (dot:Crew) => {
  setSelectedCrewMember(dot);
  setSelectedDot(dot.name)
};
interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, transition: { duration: 0.75 } }
  };

  // const textVariants = {
  //   hidden: { y: -20, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 0.75, delay: 0.2 } }
  // };
  // const imageVariants = {
  //   hidden: { scale: 0 },
  //   visible: { scale: 1, transition: { duration: 0.5, delay: 0.5 } }
  // };
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
            <div className="text-content">
              <div className="info">
                <div className="role">
                  <h3>{selectedCrewMember.role}</h3>
                </div>
                <div className="name">
                  <h2>{selectedCrewMember.name}</h2>
                </div>
                <div className="bio">
                <p>{selectedCrewMember.bio}</p>
                </div>
              </div>
              <nav className="dot-nav">
                {data.crew.map(crewMember => (
                  <div 
                  className={`dot ${crewMember.name === selectedDot ? 'active' : ''}`}
                  key={crewMember.name}
                  onClick={() => handleDotClick(crewMember)}>

                  </div>
                ))}
              </nav>
            </div>
            <div className="image-div">
              <img src={selectedCrewMember.images.png} alt={selectedCrewMember.name}/>
            </div>
        </div>
      </Layout>
    </motion.div>
  )
}
