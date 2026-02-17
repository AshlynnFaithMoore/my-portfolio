'use client'
import { useState } from 'react'

export default function Home() {
  const [showResume, setShowResume] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50 relative">
      {/* Overall Page Container with Gradient Background */}
      {/* Resume Scroll Modal */}
      {showResume && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowResume(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute -top-12 right-0 text-white hover:text-rose-300 transition z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scroll Container */}
            <div className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 rounded-lg shadow-2xl border-8 border-amber-800/40">
              {/* Wooden Rod - Top */}
              <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-amber-900 to-amber-800 rounded-t-lg shadow-lg">
                <div className="absolute -left-8 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 rounded-full shadow-xl"></div>
                <div className="absolute -right-8 top-0 bottom-0 w-16 bg-gradient-to-l from-amber-950 via-amber-900 to-amber-800 rounded-full shadow-xl"></div>
              </div>

              {/* Wooden Rod - Bottom */}
              <div className="absolute -bottom-6 left-0 right-0 h-6 bg-gradient-to-t from-amber-900 to-amber-800 rounded-b-lg shadow-lg">
                <div className="absolute -left-8 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 rounded-full shadow-xl"></div>
                <div className="absolute -right-8 top-0 bottom-0 w-16 bg-gradient-to-l from-amber-950 via-amber-900 to-amber-800 rounded-full shadow-xl"></div>
              </div>

              {/* Aged Paper Texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40 rounded-lg pointer-events-none"></div>

              {/* Wax Seal */}
              <div className="absolute -right-6 top-8 w-16 h-16 bg-rose-600 rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-rose-700">
                <div className="w-10 h-10 border-2 border-rose-200 rounded-full flex items-center justify-center">
                  <span className="text-rose-100 text-sm font-bold" style={{ fontFamily: 'Georgia, serif' }}>AM</span>
                </div>
              </div>

              {/* PDF Viewer / Resume Content */}
              <div className="relative overflow-y-auto max-h-[80vh] p-8 md:p-12">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[70vh] border-none rounded"
                  title="Resume"
                />
                
                {/* Download Link at Bottom */}
                <div className="mt-6 text-center">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-amber-800 text-amber-50 px-6 py-3 rounded-lg hover:bg-amber-900 transition shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Scroll
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-screen py-20">
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
              Aspiring Software Engineer
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a proactive computer science graduate with strong programming skills, excited about web development and software engineering. I aim to utilize my coding expertise to create innovative applications that elevate user experiences and drive technological progress.
            </p>

            {/* Navigation Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#about" 
                className="bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition"
              >
                About
              </a>
              <a 
                href="#projects"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
              >
                Projects
              </a>
              <a 
                href="#contact"
                className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition"
              >
                Contact
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
      
      

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-slate-800 text-center mb-4">
            About Me
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            A bit more about my background and expertise
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Bachelor of Science in Computer Science</h4>
                  <p className="text-orange-600 font-semibold">Western Governors University</p>
                  <p className="text-slate-600">Expected March 2026</p>
                </div>
                
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-lg text-slate-800">Bachelor of Science in Biological Sciences</h4>
                  <p className="text-orange-600 font-semibold">University of Nevada, Las Vegas</p>
                  <p className="text-slate-600">Graduated</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="border-t border-slate-200 pt-4">
                <h4 className="font-bold text-slate-800 mb-2">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ITIL v4
                  </span>
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">
                    LPI Linux Essentials
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-800">Technical Skills</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">JavaScript</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">Python</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">Swift</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Java</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">React</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">SwiftUI</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Git</span>
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">Linux</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ancient Scroll Resume Button */}
<div className="mt-16 flex justify-center">
  <button 
    onClick={() => setShowResume(true)}
    className="group relative"
  >
    {/* Scroll Container */}
    <div className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 px-12 py-6 rounded-lg shadow-2xl border-4 border-amber-800/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
      {/* Aged Paper Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40 rounded-lg"></div>
      
      {/* Scroll Edges */}
      <div className="absolute -left-2 top-0 bottom-0 w-4 bg-gradient-to-r from-amber-700 to-amber-600 rounded-l-full shadow-inner"></div>
      <div className="absolute -right-2 top-0 bottom-0 w-4 bg-gradient-to-l from-amber-700 to-amber-600 rounded-r-full shadow-inner"></div>

      {/* Content */}
      <div className="relative flex items-center gap-4">
        <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div>
          <p className="text-2xl font-bold text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>
            View Resume
          </p>
            <p className="text-sm text-amber-700 italic">Ancient Scroll Edition</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                href="mailto:ashlynnfaith22@gmail.com"
                className="text-xl text-slate-700 hover:text-orange-600 transition"
              >
                ashlynnfaith22@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8">
              <a 
                href="https://github.com/AshlynnFaithMoore"
                target="_blank"
                className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/ashlynnmoore"
                target="_blank"
                className="flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Right Decorative Ombre */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(251, 207, 232, 0.6), rgba(252, 231, 243, 0.4), transparent)'
        }}
      ></div>
    </div>
  )
}
