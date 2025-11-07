import { GradientArrowIcon } from "./gradient-arrow-icon"

interface FeatureItemProps {
  title: string
  description: string
}

export function NewFeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 mt-1">
        <GradientArrowIcon />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[#2D2D2D] leading-snug">{title}</h3>
        <p className="text-base text-[#4D4D4D] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
