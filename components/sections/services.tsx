'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/section-title'
import { Card } from '@/components/ui/card'
import { services } from '@/data/services'
import { Code2, Palette, Zap, Database, Cloud, Headphones } from 'lucide-react'

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Code2,
  Palette,
  Zap,
  Database,
  Cloud,
  Headphones,
}

export function ServicesSection() {
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
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services I Offer"
          subtitle="Comprehensive solutions tailored to your needs"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-1">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
