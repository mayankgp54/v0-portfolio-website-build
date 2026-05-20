'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/section-title'
import { AnimatedCounter } from '@/components/common/animated-counter'
import { Card } from '@/components/ui/card'

export function AboutSection() {
  const stats = [
    { label: 'Projects Completed', value: 50 },
    { label: 'Happy Clients', value: 30 },
    { label: 'Years Experience', value: 6 },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about creating innovative digital solutions that make a difference"
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
              I&apos;m a full stack developer with over 6 years of experience building web applications. I love working with cutting-edge technologies and solving complex problems.
            </p>

            <p className="text-lg text-muted-foreground">
              My journey in tech started with curiosity about how things work. Today, I leverage that mindset to build scalable, maintainable solutions for my clients and users.
            </p>

            <p className="text-lg text-muted-foreground">
              When I&apos;m not coding, you can find me contributing to open source projects, writing technical articles, or exploring the latest web technologies.
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
