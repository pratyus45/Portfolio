import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GreenCart Grocery",
    description: "Full-stack grocery application with Stripe payment integration and product management.",
    image: "/projects/Greencart.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    demoUrl: "https://greencart-gs.vercel.app",
    githubUrl: "https://github.com/pratyus45/grocery_frontend",
    backendUrl: "https://github.com/pratyus45/grocery_backend", // Optional: add backend link
  },
  {
    id: 2,
    title: "Web Chat App",
    description: "Real-time chat application with one-to-one messaging and typing indicators.",
    image: "/projects/Chat_App.png",
    tags: ["React", "Socket.IO", "Node.js", "Tailwind", "Cloudinary"],
    demoUrl: "https://chat-frontend-latest-cqvh.vercel.app/login",
    githubUrl: "https://github.com/pratyus45/chat_frontend_latest",
    backendUrl: "https://github.com/pratyus45/chat_backend_latest", // Optional: add backend link
  },
  {
    id: 3,
    title: "Resume Builder",
    description: "AI-powered resume builder with template rendering and PDF export functionality.",
    image: "/projects/Resume_Builder.png",
    tags: ["React", "OpenAI API", "MongoDB", "Node.js", "PDF Export"],
    demoUrl: "https://github.com/pratyus45/resume-frontend",
    githubUrl: "https://github.com/pratyus45/resume-frontend",
    backendUrl: "https://github.com/pratyus45/resume-backend", // Optional: add backend link
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my recent full-stack projects showcasing modern web development skills. Each project was built with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full"
                      aria-label={`View ${project.title} demo`}
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full"
                      aria-label={`View ${project.title} source code`}
                      title="Source Code"
                    >
                      <Github size={20} />
                    </a>
                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full text-xs font-medium"
                        aria-label={`View ${project.title} backend code`}
                        title="Backend Code"
                      >
                        API
                      </a>
                    )}
                  </div>
                  
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    Live Demo
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pratyus45"
          >
            View All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};