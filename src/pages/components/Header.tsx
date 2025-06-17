import { SiGithub } from "@icons-pack/react-simple-icons"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="container mx-auto px-6 py-8 relative z-10">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
            <Link to={'/'}>
              <motion.img src="./pfp.png" alt="Home" className="h-10 rounded-full border border-cyan-300 transition-all"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  // ease: "easeIn"
                }}
              />
            </Link>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/GustavoFantin">
            <SiGithub className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/gustavo-barros-70361632a">
              <Linkedin className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
            </a>
            <Link to={'/contact-me'}>
              <Mail className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
            </Link>
          </div>
        </nav>
      </header>
  )
}

export default Header