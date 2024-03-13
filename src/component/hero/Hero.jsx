import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          
          <div className="hero-title">
            <div className="orange-circle" div />
            <motion.h1
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }}
            >
                Discover Most<br /> Suitable Property <br />
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of Property that suits you very easily and at reasonable value</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>
         
        <div className="flexCenter Stats">
            <div className="flexColStart stats">
                <span>
                    <CountUp starts={8800} end={9000} duration={4}/>
                    <span>+</span>
                    </span><span className="secondaryText">
                        Premium Products
                    </span>
            </div>
        </div>

        <div className="flexCenter Stats">
            <div className="flexColStart stats">
                <span>
                    <CountUp starts={1250} end={5000} duration={4}/>
                    <span>+</span>
                    </span><span className="secondaryText">
                        Happy Customers
                    </span>
            </div>
        </div>

        <div className="flexCenter Stats">
            <div className="flexColStart stats">
                <span>
                    <CountUp end={28}/>
                    <span>+</span>
                    </span><span className="secondaryText">
                        Checklisted 
                    </span>
            </div>
        </div>
        </div>
         {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
        </div>
    </section>
  )
}

export default Hero