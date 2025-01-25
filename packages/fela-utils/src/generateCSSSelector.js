export default function generateCSSSelector(
  className,
  pseudo = '',
  specificityPrefix = '',
  propertyPriority = 1
) {
  const classNameSelector = `.${className}`.repeat(propertyPriority)
  if (pseudo.includes('&')) {
    pseudo = pseudo.replace('&', classNameSelector)
    return `${specificityPrefix}${pseudo}`
  }
  return `${specificityPrefix}${classNameSelector}${pseudo}`
}
