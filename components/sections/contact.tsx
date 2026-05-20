'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/section-title'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mayankgp5400@gmail.com',
      link: 'mailto:mayankgp5400@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8980385218',
      link: 'tel:+918980385218',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Available for immediate joining. Let&apos;s build something amazing together"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full flex flex-col items-center text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mb-2">{info.label}</p>
                  <a
                    href={info.link}
                    className="text-lg font-semibold hover:text-primary transition"
                  >
                    {info.value}
                  </a>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
