export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50">
      {/* Overall Page Container with Gradient Background */}
      {/* Navigation Bar */}
      <nav className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Welcome to my website!</h1>
          <ul className="flex gap-8">
            <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-orange-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-[calc(100vh-72px)]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Photo */}
<div className="flex justify-center">
  <div 
    className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-orange-200"
    style={{ marginTop: '-60px' }}
  >
    <img 
      src="/profile_pic.jpeg" 
      alt="Ashlynn Moore"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-slate-800">
              Ashlynn Moore
            </h1>
            <p className="text-2xl text-orange-600 font-semibold">
              Aspiring Software Developer
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a proactive computer science graduate with strong programming skills, excited about web development and software engineering. I aim to utilize my coding expertise to create innovative applications that elevate user experiences and drive technological progress.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/AshlynnFaithMoore" 
                target="_blank"
                className="bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ashlynnmoore" 
                target="_blank"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:ashlynnfaith22@gmail.com"
                className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-slate-800 text-center mb-4">
            My Projects
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            Here are some of the projects I've built
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1: WorkoutBuilder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">WorkoutBuilder</p>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">
                  WorkoutBuilder App
                </h3>
                <p className="text-slate-600">
                  An iOS app for creating custom workout routines with pre-defined exercises, GIFs, and progress tracking. Features HIIT timer, swipe-to-delete, and persistent storage.
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Swift
                  </span>
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">
                    SwiftUI
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    iOS
                  </span>
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://github.com/AshlynnFaithMoore/WorkoutBuilder"
                    target="_blank"
                    className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Portfolio Website */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">Portfolio</p>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">
                  Portfolio Website
                </h3>
                <p className="text-slate-600">
                  A modern, responsive portfolio website showcasing my projects and skills. Built with React and Next.js with smooth animations and a clean design.
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                    React
                  </span>
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Next.js
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Tailwind CSS
                  </span>
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://github.com/AshlynnFaithMoore/my-portfolio"
                    target="_blank"
                    className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Right Decorative Ombre */}
      {/* Bottom Right Decorative Ombre */}
      <div 
        className="fixed bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(251, 207, 232, 0.8), rgba(252, 231, 243, 0.5), transparent)'
        }}
      ></div>
    </div>
  )
}