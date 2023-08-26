import { Layout } from "../Layout"
import {motion} from 'framer-motion'
import data from '../../data.json'
import '../../destination.css'
import {Link} from 'react-router-dom';
const moonImageSrc = data.destinations[0].images.png;


export const Destination:React.FC = () => {
  return (
    <motion.div className="destination"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75 }}
    >
    <Layout>
      <div className="title">
        <h1><span>01</span>PICK YOUR DESTINATION</h1>
      </div>
      <div className="content">
        <div className="planet-div">
          <img src={moonImageSrc} alt={data.destinations[0].name} />
        </div>
        <div className="text-content">
          <nav className="nav">
            <Link to={data.destinations[0].name} className="moon link">Moon</Link>
            <Link to={data.destinations[1].name} className="mars link">Mars</Link>
            <Link to={data.destinations[2].name} className="europa link">Europa</Link>
            <Link to={data.destinations[3].name} className="titan link">Titan</Link>
          </nav>
          <div className="description">
            <div className="name">
              <h2>{data.destinations[0].name}</h2>
            </div>
            <div className="intro">
              <p>{data.destinations[0].description}</p>
            </div>
          </div>
          <div className="statistics">
            <div className="distance">
              <h3>AVG. DISTANCE</h3>
              <p>{data.destinations[0].distance}</p>
            </div>
            <div className="time">
              <h3>Est. travel time</h3>
              <p>{data.destinations[0].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </motion.div>
  )
}
