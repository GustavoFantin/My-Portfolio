import { Download, HeartHandshake, Monitor, SquareTerminal } from 'lucide-react';
import { SiAstro, SiBootstrap, SiExpress, SiGraphql, SiJavascript, SiJsonwebtokens, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSass, SiShadcnui, SiSocketdotio, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';
import { Link } from 'react-router-dom';
import ProjectSection from './ProjectSection';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';

const Portfolio = () => {
  const containerDiv = "bg-slate-900/90 rounded-xl h-32 flex items-center justify-center text-4xl border border-slate-700/50 flex-col p-3 hover:bg-slate-800/50 hover:border-cyan-400/40 "

  

  return (
    <div>
      <section className="container mx-auto px-6 py-16 text-center relative z-10">

        <div className="relative z-20 inline-block">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent tracking-tight drop-shadow-2xl min-w-[300px] min-h-[120px]">
            GUSTAVO
          </h1>
          <h2 className="text-3xl md:text-4xl text-cyan-300/90 mb-16 font-light tracking-wide drop-shadow-lg min-w-[300px] min-h-[70px]">
            <Typewriter words={["Frontend", "Backend", "Fullstack Web Developer"]} cursorBlinking={true} cursor deleteSpeed={30}/>
          </h2>
        </div>
        
        <motion.div 
          className="max-w-2xl mx-auto mb-20 relative z-20 origin-center"
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">About Me</h3>
            <div className='flex flex-col gap-4'>
            <p className="text-gray-300/90 text-lg leading-relaxed">
              I'm a 19 years old web developer who loves building new experiences!
            </p>
            <p className="text-gray-300/90 text-lg leading-relaxed">
              I always been interested in the tech world, since I'm a kid I have tried to learn how to use computers by my own, what each hardware does and how it works, and now I find myself building websites!
            </p>
            <div className='flex flex-row items-center w-full justify-between'>
              <a href="/GUSTAVO_BARROS_Tech_Resume.pdf" download>
                <button className='flex flex-row gap-2 bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 hover:bg-cyan-800/60 hover:border-cyan-400/30 hover:transition-all hover:duration-300'>
                  Download Resume <Download />
                </button>
              </a>

              <div className='flex justify-end w-auto text-gray-600 hover:text-cyan-300  '>
                <Link to={"/about-me"} className='flex gap-2 hover:transform hover:translate-x-1 transition-all duration-300 ease-in-out'>Know me better <HeartHandshake /> </Link>
              </div>

            </div>
            </div>
          </div>
        </motion.div>

        <ProjectSection />

        <h3 className="text-4xl font-bold text-gray-500 mb-12">Skills</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className='bg-slate-900/90 rounded-xl h-auto p-6 gap-8 border border-slate-700/50 grid grid-cols-2 md:grid-cols-3'>
            <div className='col-span-full text-4xl flex flex-row justify-center items-center gap-3'>
              <Monitor className='w-10 h-10 text-cyan-300'/>
              <h3>Frontend</h3> 
            </div>
            <motion.div className={containerDiv}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}
            >
              <SiJavascript color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Javascript</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiTypescript color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Typescript</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiReact color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>React</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiNextdotjs color='#a1a1a1' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Next.js</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiTailwindcss color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Tailwindcss</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiBootstrap color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Bootstrap</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiShadcnui color='white' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>ShadCnUI</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiAstro color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Astro</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }}  className={containerDiv}>
              <SiSass color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Sass</p>
            </motion.div>
          </div>
          <div className='bg-slate-900/90 rounded-xl h-auto p-6 gap-8 border border-slate-700/50 grid  grid-cols-2 md:grid-cols-3'>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className='col-span-full text-4xl flex flex-row justify-center items-center gap-3'>
              <SquareTerminal className='w-10 h-10 text-cyan-300'/>
              <h3>Backend</h3> 
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <SiNodedotjs color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Node.js</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <SiExpress color='white' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Express</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <SiSocketdotio color='white' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>Socket.io</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <img src='./jwt.png' className='h-30 w-30 object-contain md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>JWT/Auth</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <SiMongodb color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>MongoDB</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <SiPostgresql color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>PostgreSQL</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ y: 0 }} className={containerDiv}>
              <SiGraphql color='default' className='h-30 w-30 md:h-20 md:w-20 lg:h-20 lg:w-30' />
              <p className='text-xl'>GraphQL</p>
            </motion.div>
          </div>
        </div>


      </section>
    </div>
  );
};

export default Portfolio;