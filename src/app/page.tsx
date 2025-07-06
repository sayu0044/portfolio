"use client"

import { Navigation } from "@/components/navigation"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">YN</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Hi, I&apos;m <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A passionate full-stack developer creating beautiful and functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about my background, skills, and what drives my passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I&apos;m a dedicated full-stack developer with a passion for creating innovative web solutions. With
                expertise in modern technologies and a keen eye for design, I bring ideas to life through code.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in web development started several years ago, and I&apos;ve been continuously learning and
                adapting to new technologies. I believe in writing clean, maintainable code and creating user
                experiences that make a difference.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"].map(
                  (skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ),
                )}
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-card-foreground mb-2">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">Creating responsive and interactive user interfaces</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-card-foreground mb-2">Backend Development</h4>
                <p className="text-sm text-muted-foreground">Building robust server-side applications and APIs</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Palette className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-card-foreground mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">Designing intuitive and beautiful user experiences</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Smartphone className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-card-foreground mb-2">Mobile Development</h4>
                <p className="text-sm text-muted-foreground">Creating mobile-first responsive applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management application with real-time updates and team collaboration features.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Weather Dashboard",
                description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
                tech: ["Vue.js", "Chart.js", "Weather API", "Tailwind CSS"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Social Media Analytics",
                description:
                  "An analytics dashboard for social media metrics with data visualization and reporting features.",
                tech: ["React", "D3.js", "Python", "FastAPI"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Portfolio Website",
                description: "A modern, responsive portfolio website with dark mode support and smooth animations.",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Chat Application",
                description: "A real-time chat application with multiple rooms, file sharing, and emoji support.",
                tech: ["React", "Socket.io", "Express", "Redis"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-sm">
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 border border-border text-foreground rounded hover:bg-accent transition-colors duration-200 text-sm">
                      <Github className="h-3 w-3" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and interesting projects. Let&apos;s connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear
                from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">github.com/yourusername</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 Your Name. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
