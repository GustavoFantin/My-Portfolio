import { MoveLeft } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const AboutMe = () => {

  return (
    <>
      
      <div className="w-screen mx-auto mb-20 relative z-20 grid grid-cols-2 justify-items-center items-center">
        <div className="flex col-span-full flex-start w-[90%] left-10 mb-5">
          <Link to={'/'}>
            <MoveLeft className="h-10 w-20 text-gray-600 hover:text-cyan-300 hover:transform hover:translate-x-1 transition-all duration-300 ease-in-out  bg-slate-900/90 rounded-xl p-3 hover:bg-slate-800/50 hover:border-cyan-400/40 border border-slate-700/50 items-center justify-center"/>
          </Link>
        </div>

        <motion.div 
          className="max-w-2xl ml-6 bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-cyan-400/30 hover:transition-all hover:duration-300"
          animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.5,
              stiffness: 40,
            }}
            initial={{
              x: 4000,
            }}
        >
            <motion.div className="flex flex-col">
              <p>Hi there, I'm Gustavo, a new web developer who has loved technology (and gaming) for as long as I can remember.</p>
              <p>Currently, I'm finishing my web development course at CICCC Vancouver, which has given me a solid foundation in both frontend and backend technologies. Although I'm just starting out, I already consider myself a fullstack developer. Moving forward, I'm excited to improve my knowledge in backend development with Node.js and explore many other programming languages.</p>
              <p>
                I've been having a lot of fun working with tools like React, Node.js, and Next.js to build fast and interactive web apps. TypeScript is my go-to for writing cleaner and safer code.
                On the backend side, I'm comfortable with Express, Socket.io, and databases like MongoDB and PostgreSQL — which let me create everything from APIs to real-time features.
                For authentication, I use JWT, and when it comes to styling, Tailwind CSS is my favorite way to make things look sharp and responsive
              </p>
              <p>
                When I'm not coding, you'll usually find me shredding on my guitar, at the skatepark, or playing some FPS games. These hobbies keep me relaxed, distracted and happy!
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.5,
              stiffness: 40,
              delay: 0.5

            }}
            initial={{
              x: 4000,
            }}
          >
            <img src="./pfp.png" alt="Profile Picture" className="rounded-xl w-md" />
          </motion.div>
        </div>
    </>
  )
}

export default AboutMe