import { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: ReactNode
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} space-y-4`}>
      <h2 className="text-4xl font-bold text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}
