"use client"

import { Navigation } from "@/components/navigation"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Gears */}
          <div className="absolute top-20 left-10 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-0"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 bg-accent/25 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary/30 rounded-full animate-bounce delay-1000"></div>

          {/* Floating Code Elements */}
          <div className="absolute top-32 right-40 animate-bounce delay-500">
            <div className="w-12 h-8 bg-primary/10 rounded border border-primary/20 flex items-center justify-center">
              <Code className="w-4 h-4 text-primary/60" />
            </div>
          </div>

          <div className="absolute bottom-32 left-40 animate-bounce delay-800">
            <div className="w-10 h-6 bg-secondary/10 rounded border border-secondary/20 flex items-center justify-center">
              <Globe className="w-3 h-3 text-secondary/60" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Welcome to my world</span>
                  <span className="text-primary animate-bounce">✨</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    Hi, I&apos;m <span className="text-primary">Junior Developer</span>
                  </h1>

                  {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    <span className="text-primary">Full-Stack</span> <span className="text-foreground">Developer</span>
                  </h2> */}
                </div>

                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Menciptakan pengalaman digital yang intuitif dan menarik secara visual serta  mengubah ide menjadi aplikasi tanpa batas yang memenuhi harapan pengguna.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  My Projects
                </button>
                <button className="px-8 py-4 border-2 border-border text-foreground rounded-full hover:bg-accent hover:border-accent transition-all duration-300 font-medium text-lg">
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/sayu0044", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Animated Tech Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main animated illustration */}
                <div className="relative animate-bounce">
                  <img
                    src="/assets/WordPress Website Development Services.gif"
                    alt="Animated tech illustration with floating elements"
                    className="w-full h-auto max-w-lg mx-auto object-contain"
                  />
                </div>

                {/* Additional floating elements around the main image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary rounded-full opacity-60 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full opacity-70 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 animate-bounce"
              aria-label="Scroll to about section"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Hello, I&apos;m Sayu Damar Yunan</h3>
              <p className="text-muted-foreground mb-4">
                Seorang mahasiswa Teknik Informatika yang memiliki ketertarikan besar dalam pengembangan Front-End, UI/UX Design, serta pengembangan Backend dan aplikasi mobile. Saya berfokus pada menciptakan pengalaman digital yang menarik, intuitif, dan responsif, serta selalu berusaha memberikan solusi terbaik dan inovatif dalam setiap proyek yang saya kerjakan.
              </p>
              {/* <p className="text-muted-foreground mb-6">
                My journey in web development started several years ago, and I've been continuously learning and
                adapting to new technologies. I believe in writing clean, maintainable code and creating user
                experiences that make a difference.
              </p> */}
              <br></br>
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

            {/* Circular Image Frames with Bouncing Animation */}
            <div className="relative">
              {/* Main circular frame with bouncing animation */}
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center animate-bounce">
                  <div className="w-72 h-72 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center overflow-hidden">
                    <img src="/assets/me_1.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>

              {/* Smaller floating circular frames */}
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full border-2 border-secondary/30 bg-secondary/10 animate-bounce delay-300 flex items-center justify-center">
                <Code className="w-8 h-8 text-secondary/60" />
              </div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border-2 border-accent/30 bg-accent/10 animate-bounce delay-700 flex items-center justify-center">
                <Palette className="w-6 h-6 text-accent/60" />
              </div>

              <div className="absolute top-1/2 -right-12 w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 animate-bounce delay-1000 flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary/60" />
              </div>

              <div className="absolute top-1/4 -left-12 w-14 h-14 rounded-full border-2 border-secondary/30 bg-secondary/10 animate-bounce delay-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-secondary/60" />
              </div>
            </div>
          </div>

          {/* Skills Grid with Bouncing Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Code, title: "Frontend Development", delay: "delay-0" },
              { icon: Globe, title: "Backend Development", delay: "delay-200" },
              { icon: Palette, title: "UI/UX Design", delay: "delay-400" },
              { icon: Smartphone, title: "Mobile Development", delay: "delay-600" },
            ].map((skill, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-lg border border-border hover:animate-bounce ${skill.delay} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-card-foreground mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">Creating amazing digital experiences</p>
              </div>
            ))}
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
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:animate-pulse"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
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
