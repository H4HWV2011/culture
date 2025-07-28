'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Mountain, Camera, Palette, Users, Award, Star, ArrowRight, Play, ExternalLink, Video, Globe, Zap } from 'lucide-react'

export default function CulturePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleScroll = () => setScrollY(window.scrollY)
    
    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const freeOfferings = [
    {
      icon: Globe,
      title: 'Professional Website Development',
      description: 'Complete custom website creation with SEO optimization and ongoing technical support',
      highlight: true
    },
    {
      icon: Star,
      title: 'Appalachian Artisan Spotlight',
      description: 'Featured article with cross-platform promotion and newsletter inclusion',
      highlight: true
    },
    {
      icon: Video,
      title: 'Professional Content Documentation',
      description: 'High-quality video recording, editing, and photography of your work',
      highlight: false
    },
    {
      icon: Mountain,
      title: 'Historic Walking Trail Integration',
      description: 'Feature your story in our acclaimed digital heritage experience',
      highlight: false
    },
    {
      icon: Palette,
      title: 'Marketing Package',
      description: 'Professional graphic design, social media templates, and promotional materials',
      highlight: false
    },
    {
      icon: Users,
      title: 'Collaboration Platform Access',
      description: 'Equipment borrowing, networking opportunities, and partnership resources',
      highlight: false
    }
  ]

  const showcaseProjects = [
    {
      title: 'Mount Hope Historic Walking Trail',
      description: 'Interactive digital storytelling connecting visitors to Appalachian heritage through the Clio App',
      impact: '1000+ monthly visitors',
      type: 'Digital Heritage Platform',
      featured: true
    },
    {
      title: 'Appalachian Artisan Video Series',
      description: 'Professional documentation of regional craftspeople and cultural traditions',
      impact: '50K+ total views',
      type: 'Cultural Documentation',
      featured: true
    },
    {
      title: 'Word of the Day Series',
      description: 'Preserving Appalachian dialect and language through engaging daily content',
      impact: '25K+ engagement',
      type: 'Language Preservation',
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-3 h-3 bg-amber-400 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Mountain Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-800 to-transparent"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-emerald-900/40 to-indigo-900/40"
            style={{
              clipPath: 'polygon(0 100%, 20% 50%, 40% 70%, 60% 30%, 80% 60%, 100% 20%, 100% 100%)',
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-slate-700/60 to-slate-600/60"
            style={{
              clipPath: 'polygon(0 100%, 15% 75%, 35% 85%, 55% 55%, 75% 80%, 90% 45%, 100% 65%, 100% 100%)',
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Mountain className="absolute top-1/4 left-1/4 w-6 h-6 text-emerald-400/20 animate-pulse" />
          <Palette className="absolute top-1/3 right-1/3 w-5 h-5 text-amber-400/20 animate-bounce" style={{ animationDelay: '1s' }} />
          <Camera className="absolute bottom-1/3 left-1/6 w-5 h-5 text-indigo-400/20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-400 bg-clip-text text-transparent">
              H4H CULTURE
            </span>
          </h1>
          
          <div className="relative mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-light tracking-wide text-slate-200">
              Where <span className="text-amber-400 font-semibold">Appalachian Heritage</span> Meets<br className="hidden sm:block" />
              <span className="text-emerald-400 font-semibold">Professional Content Creation</span>
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/10 to-amber-600/10 blur-xl opacity-60" />
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Partner with Harmony for Hope to amplify your creative voice through professional production support, 
            authentic cultural storytelling, and innovative digital experiences — <span className="text-amber-400 font-semibold">completely free</span> or funded through grants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl font-semibold text-lg hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30">
              <span className="relative z-10">Explore Partnerships</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-slate-600 rounded-xl font-semibold text-lg hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              See Our Impact
            </button>
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 text-slate-400 animate-bounce" />
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              What We Offer <span className="text-amber-400">Content Creators</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Professional resources and authentic Appalachian connections that amplify your creative vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeOfferings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <div 
                  key={offering.title}
                  className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 ${
                    offering.highlight 
                      ? 'bg-gradient-to-br from-emerald-900/40 to-amber-900/40 border-emerald-500/50' 
                      : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {offering.highlight && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FREE
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    offering.highlight ? 'bg-gradient-to-r from-emerald-600 to-amber-600' : 'bg-slate-700'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-full border border-emerald-500/30">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-lg font-semibold">All foundation services provided at no cost</span>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Our <span className="text-emerald-400">Cultural Impact</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              See how we've preserved heritage and amplified creative voices through innovative digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {showcaseProjects.filter(p => p.featured).map((project, index) => (
              <div 
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:bg-slate-750 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-block px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-semibold">
                      {project.type}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-amber-400">{project.impact}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold group-hover:gap-3 transition-all duration-300">
                    Explore Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://theclio.com/entry/147083/tour" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 rounded-xl hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
            >
              <span>View Mount Hope Walking Trail</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Simple <span className="text-amber-400">Partnership Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Project', desc: 'Share your creative vision through our GitHub repository' },
              { step: '02', title: 'Discovery Call', desc: 'Schedule a conversation with our Executive Director' },
              { step: '03', title: 'Custom Package', desc: 'Receive tailored partnership proposal' },
              { step: '04', title: 'Create Together', desc: 'Begin collaborative content creation' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-indigo-900/20" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
            Ready to <span className="text-amber-400">Amplify</span> Your Voice?
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join our community of creators preserving Appalachian heritage through professional storytelling. 
            Your vision, our expertise, authentic impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl font-bold text-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30">
              Submit Your Project
            </button>
            
            <button className="px-10 py-5 border-2 border-slate-600 rounded-xl font-bold text-xl hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300">
              Schedule Discovery Call
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Partner Projects' },
              { number: '100%', label: 'Foundation Tier' },
              { number: '24/7', label: 'Digital Showcase' },
              { number: '∞', label: 'Creative Possibilities' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-black text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Mountain className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">H4H Culture Repository</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.facebook.com/HarmonyForHopeinc" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Facebook
              </a>
              <a 
                href="https://www.youtube.com/@harmonyforhopeinc" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                YouTube
              </a>
              <a 
                href="mailto:partnerships@harmonyforhope.org" 
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2025 Harmony for Hope. Preserving heritage, fostering creativity, building community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
