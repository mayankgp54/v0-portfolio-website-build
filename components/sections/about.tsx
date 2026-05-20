'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/section-title'
import { AnimatedCounter } from '@/components/common/animated-counter'
import { Card } from '@/components/ui/card'

export function AboutSection() {
  const stats = [
    { label: 'Projects Completed', value: 9 },
    { label: 'Years Experience', value: 4 },
    { label: 'Employee of the Month Awards', value: 2 },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="4+ years of experience architecting scalable web applications with React.js and Next.js"
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
              I&apos;m a Senior React.js Developer with 4+ years of hands-on experience architecting and delivering scalable, high-performance web applications. My expertise spans React.js, Next.js, TypeScript, and Redux Toolkit with a proven track record of optimizing frontend performance and implementing complex features.
            </p>

            <p className="text-lg text-muted-foreground">
              At Moon Technolabs, I engineered reusable component libraries, reduced page load times by 30%, and led implementation of real-time features using Firebase across multiple product lines (HRM, social platforms, insurance systems).
            </p>

            <p className="text-lg text-muted-foreground">
              I&apos;m passionate about building scalable digital products, mentoring junior developers, and contributing to innovative projects with modern technologies. Recognized twice as Employee of the Month for exceptional contributions.
            </p>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={stat.value} />
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
