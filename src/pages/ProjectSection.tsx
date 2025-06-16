import { useState } from "react";
import ProjectProp from "./components/ProjectProp"
import Modal from "./components/Modal";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

const ProjectSection = () => {
   const [isModalOpen, setModalOpen] = useState(false);
   const containerDiv = "bg-slate-900/90 rounded-xl h-32 flex items-center justify-center text-md border border-slate-700/50 flex-col p-3 hover:bg-slate-800/50 hover:border-cyan-400/40 transition-all duration-300"
  return (
   <>
    <div className="mb-16 relative z-20">
          <h3 className="text-4xl font-bold text-gray-500 mb-12">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               <ProjectProp repo="https://github.com/GustavoFantin/Fake-Store-Website-with-OOP" title='Shop Haven' description='Fake store responsible website with fully functional cart built with OOP principles.' tech={["Javascript [OOP]", 'HTML', 'CSS']} img='./shopHaven.png' />
             <ProjectProp repo="https://github.com/GustavoFantin/Movie-Web-App" title='Cine Toon' description='CineToon, a movie website based on MovieDB API for data, with live searching, trending movies and dark mode!' tech={["Javascript", 'HTML', 'CSS', 'TheMovieDB API']} img='./cineToon.jpg'/>
          </div>
        </div>
        <div className="mb-16 relative z-20">
          <h3 className="text-4xl font-bold text-gray-500 mb-12">Group Projects</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               <ProjectProp title='Pong Game' description='Pong Game website is a online real time updating pong game where you can create rooms, invite your friends and play with them, with recorded history!' img='./pong.png' tech={["Typescript", 'React', 'Node.js', 'Express', 'Socket.io']} />
               <ProjectProp repo="https://github.com/GustavoFantin/KanBan-Board-Group-Project" title='Kanban Board' description='Kanban board to keep in track of your tasks where you are able to create how many boards you want and also search for the tasks.' img='./kanban.png' tech={["Typescript", 'Astro', 'Tailwind']} />
               
               <ProjectProp title='Daisuki' description='Daisuki is a web application where you can find someone to enjoy a day with you as a service.' img='./daisuki.png' tech={["Typescript", 'Next.js', 'Tailwind', 'JWT', 'Node.js', 'Stripe']} onClick={() => setModalOpen(true)}/>
               <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                     <h2 className="text-2xl font-semibold mb-2">Daisuki</h2>
                     <div className="grid grid-cols-2 gap-5">
                        <a href="https://github.com/GustavoFantin/Daisuki-V2" className={containerDiv}  target="_blank">
                           <SiGithub className="w-15 h-15 mb-3"/>
                           <p>GitHub Repositorie</p>
                        </a>
                        <a href="https://daisuki-ver2.vercel.app/" className={containerDiv}  target="_blank">
                           <Globe className="w-15 h-15 mb-3" />
                           <p>Visit Website</p>
                        </a>
                     </div>
               </Modal>
          </div>
        </div>
   </>
  )
}

export default ProjectSection