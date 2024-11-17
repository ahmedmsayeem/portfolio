import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from './components/ui/button' 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import TEST from './components/test'
export default function App() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    { title: 'EcoCharge', description: 'Ml integrated site that helps with finding and establishing EV charging stations ', link: 'https://ecocharge.vercel.app/' },
    { title: 'StudyChamber', description: 'A study-related platform built in 4 hour event by RISE, NMAMIT.', link: 'https://luo-tang-ji.vercel.app/' },
    { title: 'MVC-Workshop', description: 'An MVC based website i created to deliver a workshop for group of students. ', link: 'https://iseworkshop.onrender.com/' },
    { title: 'CloudinaryDashboard', description: 'A Custom Cloudinary dashboard to manage media.', link: 'https://github.com/ahmedmsayeem/Cloudinary_Dashboard' },
  ]

  const skills = ['React', 'TypeScript', 'Node.js', 'Bun.js','Next.js', "Prisma",'ganache','flask','mongoDB','SQL']

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
      

    
      

<br />
        <div className="relative flex items-center justify-between space-x-4 ">
        <div className="relative flex items-center justify-center space-x-4">
  {/* Image Section */}
  <div className="flex flex-col items-center space-y-4">
  {/* Image Section */}
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    whileDrag={{ scale: 0.9, rotate: 10 }}
    drag
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="bg-slate-400 rounded-full p-3"
  >
    <img
      src="https://avatars.githubusercontent.com/u/108409022?v=4"
      alt="Profile"
      className="rounded-full w-[150px] pointer-events-none"
    />
  </motion.div>

  {/* Name Section */}
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl font-bold text-gray-800">M Sayeem Ahmed</h1>
    <p className="text-xl text-gray-600">Full-Stack Developer & Ts and Js</p>
  </motion.div>
</div>
</div>


            {/* TEST Section */}
            <div className=" right-0">
              <TEST />
            </div>
        </div>

        

        <section className='pt-12'>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${activeProject === index ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveProject(index)}
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <Card>
            <CardContent className="flex justify-center space-x-4 py-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ahmedmsayeem" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/m-sayeem-ahmed-651a7b254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:msayeemahmed76@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

   
        <footer className="text-center text-gray-600 mt-8">
          {/* <p>© 2023 Jane Doe. All rights reserved.</p> */}
        </footer>
      </div>
    </div>
  )
}