import { motion } from "framer-motion";
import videoBg from '../assets/herobg.mp4';
import { styles } from "../styles"; // Assuming styles is defined in ../styles
import { ComputersCanvas } from "./canvas"; // Assuming ComputersCanvas is defined

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} >
      <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover absolute inset-0" />
        {/* Assuming videoBg is the path to your video and has appropriate styling */}
        
        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#484848]' />
            <div className='w-1 sm:h-80 h-40 white-grey-gradient' />
          </div>

          <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
  <span className='text-[#FFA500]'>Discover the </span>
  <span className='text-[#ffffff]'> Cosmos </span>
</h1>
            <p className={`${styles.heroSubText} mt-2 text-[#FFA500]`}>
              <br className='sm:block hidden' />
              Unveiling the 
              <span className='text-[#ffffff]'> Mysteries Beyond </span>
            </p>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
