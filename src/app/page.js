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
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-200 to-rose-200 flex items-center justify-center shadow-2xl">
              {/* Placeholder for photo*/}
              <p className="text-slate-600 text-center px-8">photo will go here</p>
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
    </div>
  )
}