'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Hi, I&apos;m{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Mayank Prajapati
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
            MERN Stack Developer &amp; Full-Stack Architect
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            I craft beautiful, scalable, and high-performance web applications using MERN stack (MongoDB, Express.js, React.js, Node.js). Specialized in optimizing frontend performance (30%+ load time reduction), architecting reusable component libraries, and building full-stack solutions.
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Button size="lg" className="gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-muted-foreground rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
