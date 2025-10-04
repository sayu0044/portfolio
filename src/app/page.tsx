  "use client"

  import { Navigation } from "@/components/navigation"
  import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, Globe } from "lucide-react"
  import Image from "next/image"
  import { useState, useEffect } from "react"

  interface Repository {
    id: number
    name: string
    description: string | null
    html_url: string
    language: string | null
    topics: string[]
    updated_at: string
  }

  export default function Home() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      const fetchRepositories = async () => {
        try {
          setLoading(true)
          const response = await fetch('https://api.github.com/users/sayu0044/repos?sort=updated&per_page=100')
          
          if (!response.ok) {
            throw new Error('Failed to fetch repositories')
          }
          
          const repos: Repository[] = await response.json()
          
        // Remove duplicates based on repository name (case-insensitive)
        const uniqueRepos = repos.filter((repo, index, self) => 
          index === self.findIndex((r) => r.name.toLowerCase() === repo.name.toLowerCase())
        )
        
        // Filter to only show specific featured repositories
        const featuredRepoNames = ['workshop', 'sweetiepie-mobile', 'portfolio']
        const featuredRepos = uniqueRepos.filter((repo) => {
          const repoNameLower = repo.name.toLowerCase()
          return featuredRepoNames.some(featured => 
            repoNameLower.includes(featured.toLowerCase()) || 
            featured.toLowerCase().includes(repoNameLower)
          )
        })
        
        // Sort by the order we want: workshop, sweetiepie-mobile, portfolio
        const sortedRepos = featuredRepos.sort((a, b) => {
          const getOrder = (name: string) => {
            const nameLower = name.toLowerCase()
            if (nameLower.includes('workshop')) return 0
            if (nameLower.includes('sweetiepie')) return 1
            if (nameLower.includes('portfolio')) return 2
            return 3
          }
          return getOrder(a.name) - getOrder(b.name)
        })
          
          setRepositories(sortedRepos)
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
          setLoading(false)
        }
      }

      fetchRepositories()
    }, [])

    const formatRepoName = (name: string) => {
      // Convert repository name to more readable format
      return name.replace(/_/g, ' ').replace(/-/g, ' ')
    }

    const getLanguageColor = (language: string | null) => {
      const colors: { [key: string]: string } = {
        'JavaScript': 'bg-yellow-500',
        'TypeScript': 'bg-blue-500',
        'Python': 'bg-green-500',
        'Java': 'bg-red-500',
        'HTML': 'bg-orange-500',
        'CSS': 'bg-purple-500',
        'PHP': 'bg-indigo-500',
        'C++': 'bg-pink-500',
        'C': 'bg-gray-500',
        'Dart': 'bg-cyan-500',
      }
      return colors[language || ''] || 'bg-gray-400'
    }

    const getProjectPreview = (repoName: string) => {
      const name = repoName.toLowerCase()
      
      if (name.includes('sweetiepie') || name.includes('mobile')) {
        return (
          <div className="h-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center text-white p-4">
              <div className="w-16 h-24 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-sm">Mobile App</h4>
              <p className="text-xs opacity-90">Sweet Recipes</p>
            </div>
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-700"></div>
          </div>
        )
      }
      
      if (name.includes('workshop') || name.includes('ui')) {
        return (
          <div className="h-full bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center text-white p-4">
              <div className="w-20 h-12 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-sm">UI Workshop</h4>
              <p className="text-xs opacity-90">Learning Project</p>
            </div>
            <div className="absolute top-2 left-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-white/50 text-xs">
              &lt;/&gt;
            </div>
          </div>
        )
      }
      
      if (name.includes('portfolio')) {
        return (
          <div className="h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            <div className="relative z-10 text-center text-white p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-sm">Portfolio</h4>
              <p className="text-xs opacity-90">Personal Website</p>
            </div>
            <div className="absolute top-4 right-4">
              <div className="w-8 h-1 bg-white/30 rounded mb-1"></div>
              <div className="w-6 h-1 bg-white/20 rounded mb-1"></div>
              <div className="w-4 h-1 bg-white/10 rounded"></div>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="w-3 h-3 border border-white/30 rounded"></div>
              <div className="w-3 h-3 border border-white/20 rounded"></div>
            </div>
          </div>
        )
      }
      
      // Default fallback
      return (
        <div className="h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <Github className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <h4 className="font-semibold text-sm">Repository</h4>
          </div>
        </div>
      )
    }
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
                    Menciptakan pengalaman digital yang intuitif dan menarik secara visual serta mengubah ide menjadi aplikasi tanpa batas yang memenuhi harapan pengguna.
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
                  <a
                    href="/cv.pdf"
                    download
                    className="px-8 py-4 border-2 border-border text-foreground rounded-full hover:bg-accent hover:border-accent transition-all duration-300 font-medium text-lg text-center"
                    aria-label="Download CV"
                  >
                    Download CV
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  {[
                  { icon: Github, href: "https://github.com/sayu0044", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sayu-damar-yunan/", label: "LinkedIn" },
                  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=its.saiu04@gmail.com&su=Hello%20Sayu&body=Hi%20Sayu%2C%0A", label: "Email" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                <h3 className="text-2xl font-bold text-foreground mb-6"> I&apos;m Sayu Damar Yunan</h3>
                {/* <p className="text-muted-foreground mb-4">
                  I'm a dedicated full-stack developer with a passion for creating innovative web solutions. With
                  expertise in modern technologies and a keen eye for design, I bring ideas to life through code.
                </p> */}
                <p className="text-muted-foreground mb-6">
                  Seorang mahasiswa Teknik Informatika yang memiliki ketertarikan besar dalam pengembangan Front-End, UI/UX Design, serta pengembangan Backend dan aplikasi mobile. Saya berfokus pada menciptakan pengalaman digital yang menarik, intuitif, dan responsif, serta selalu berusaha memberikan solusi terbaik dan inovatif dalam setiap proyek yang saya kerjakan.
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
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  aria-label="Download Resume"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>

              {/* Circular Image Frames with Bouncing Animation */}
              <div className="relative">
                {/* Main circular frame with bouncing animation */}
                <div className="relative flex justify-center">
                  <div className="w-80 h-80 rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center overflow-hidden">
                      <img src="/assets/me_1.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Smaller floating circular frames */}
                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full border-2 border-secondary/30 bg-secondary/10  flex items-center justify-center">
                  <Code className="w-8 h-8 text-secondary/60" />
                </div>

                <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border-2 border-accent/30 bg-accent/10  flex items-center justify-center">
                  <Palette className="w-6 h-6 text-accent/60" />
                </div>

                <div className="absolute top-1/2 -right-12 w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10  flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary/60" />
                </div>

                <div className="absolute top-1/4 -left-12 w-14 h-14 rounded-full border-2 border-secondary/30 bg-secondary/10  flex items-center justify-center">
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
                  className="bg-card p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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

            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  Loading repositories...
                </div>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <p className="text-red-500 mb-4">Error: {error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {repositories.map((repo) => (
                  <div
                    key={repo.id}
                    className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="h-48 relative overflow-hidden">
                      {getProjectPreview(repo.name)}
                      <div className="absolute top-2 right-2">
                        <Github className="h-6 w-6 text-white bg-black/50 rounded-full p-1" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{repo.name}</h3>
                      <p className="text-muted-foreground mb-4 text-sm min-h-[3rem]">
                        {repo.description || 'No description available'}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.language && (
                          <span className={`px-2 py-1 text-white rounded text-xs ${getLanguageColor(repo.language)}`}>
                            {repo.language}
                          </span>
                        )}
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-sm"
                        >
                          <Github className="h-3 w-3" />
                          View Code
                        </a>
                        <a 
                          href={`${repo.html_url}#readme`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 border border-border text-foreground rounded hover:bg-accent transition-colors duration-200 text-sm"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos; d love to hear
                  from you. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">its.saiu04@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">LinkedIn</h4>
                      <p className="text-muted-foreground">Sayu Damar Yunan</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">GitHub</h4>
                      <p className="text-muted-foreground">github.com/sayu0044</p>
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
                <a href="https://github.com/sayu0044" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/sayu-damar-yunan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=its.saiu04@gmail.com&su=Hello%20Sayu&body=Hi%20Sayu%2C%0A" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
