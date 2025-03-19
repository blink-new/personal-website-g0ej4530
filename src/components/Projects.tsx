import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality. Built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current weather and forecasts for any location. Utilizes OpenWeatherMap API and geolocation.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "API Integration", "CSS", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects with features like drag-and-drop, categories, and due dates.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-secondary-50">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary-900">My Projects</h2>
            <p className="mt-4 text-xl text-secondary-700 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900">{project.title}</h3>
                <p className="mt-2 text-secondary-700">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary-100 rounded text-xs font-medium text-secondary-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-3">
                  {project.liveUrl && (
                    <Button size="sm" className="flex items-center gap-1">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}