export default function generateCSSSelector(
  className,
  pseudo = '',
  specificityPrefix = '',
  propertyPriority = 1,
  psuedoPrefix = false
) {
  const classNameSelector = `.${className}`.repeat(propertyPriority)
  if (psuedoPrefix) {
    return `${specificityPrefix}${pseudo}${classNameSelector}`
  }
  return `${specificityPrefix}${classNameSelector}${pseudo}`
}
