interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  label,
  title,
  description,
  tone = 'light',
}: SectionHeadingProps) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-slate-900'
  const descriptionColor = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div>
      <p className="section-label">{label}</p>
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`section-description ${descriptionColor}`}>{description}</p>
      )}
    </div>
  )
}
