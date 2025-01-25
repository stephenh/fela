const prefix = /^(:|\[|>|&)/

export default function isNestedSelector(property) {
  return prefix.test(property) || property.endsWith('&')
}
