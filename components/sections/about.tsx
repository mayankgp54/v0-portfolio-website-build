'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/section-title'
import { AnimatedCounter } from '@/components/common/animated-counter'
import { Card } from '@/components/ui/card'

export function AboutSection() {
  const stats = [
    { label: 'Projects Completed', value: 7 },
    { label: 'Years Experience', value: 4 },
    { label: 'Active Users (Rankify)', value: '5000+' },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="4+ years of experience building full-stack applications with MERN Stack (MongoDB, Express, React, Node.js)"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              I&apos;m a MERN Stack Developer with 4+ years of hands-on experience architecting and delivering scalable, full-stack web applications. My expertise spans React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL with a proven track record of optimizing frontend and backend performance.
            </p>

            <p className="text-lg text-muted-foreground">
              At Moon Technolabs, I engineered reusable component libraries, reduced page load times by 30%, designed robust backend APIs with Express.js, and led implementation of real-time features using Firebase across multiple product lines (Startizta social platform, Keicho HRM, insurance systems). Additionally, I developed and launched Rankify, a comprehensive AI-powered tools platform with 50+ utilities, integrated Google AdSense monetization, and serve 5000+ monthly active users.
            </p>

            <p className="text-lg text-muted-foreground">
              I&apos;m passionate about building scalable full-stack digital products, monetizing SaaS platforms with AdSense and subscriptions, and contributing to innovative projects with modern MERN technologies. Recognized for exceptional contributions to user acquisition and product scaling. Available for immediate joining.
            </p>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={stat.value} />
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </Card>
            ))}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/50">
              <p className="text-sm font-semibold text-primary mb-2">Featured Achievement</p>
              <p className="text-lg font-bold text-foreground">Rankify SaaS Platform</p>
              <p className="text-sm text-muted-foreground mt-2">50+ tools, Google AdSense monetized, 5000+ MAU, SEO optimized</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
