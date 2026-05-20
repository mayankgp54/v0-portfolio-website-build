'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/section-title'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Star, TrendingUp, Users, Code2, Zap } from 'lucide-react'

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: 'Employee of the Month',
      description: 'Recognized twice for exceptional contributions and outstanding performance at Moon Technolabs',
      year: '2023-2024',
      color: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Users,
      title: '5000+ Monthly Active Users',
      description: 'Rankify platform reaching 5000+ monthly active users with sustained growth and high engagement',
      year: '2024',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: TrendingUp,
      title: '30% Performance Improvement',
      description: 'Optimized frontend applications, reducing page load times by 30% across multiple projects',
      year: '2023-2024',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Code2,
      title: '7 Full-Scale Projects',
      description: 'Successfully delivered 7 complete projects from concept to production, spanning MERN stack and SaaS platforms',
      year: 'Ongoing',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Star,
      title: 'Google AdSense Monetization',
      description: 'Successfully integrated and monetized SaaS platform with Google AdSense, achieving consistent revenue generation',
      year: '2024',
      color: 'from-indigo-500/20 to-blue-500/20',
    },
    {
      icon: Zap,
      title: 'Technical Excellence',
      description: 'Architecture design, clean code standards, and mentoring of junior developers across organization',
      year: 'Ongoing',
      color: 'from-red-500/20 to-rose-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Achievements & Milestones"
          subtitle="Recognitions and key accomplishments in my professional journey"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`p-6 h-full flex flex-col bg-gradient-to-br ${achievement.color} border hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
