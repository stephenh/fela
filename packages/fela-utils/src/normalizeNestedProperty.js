export default function normalizeNestedProperty(nestedProperty) {
  if (nestedProperty.charAt(0) === '&') {
    return nestedProperty.substr(1)
  }
  if (nestedProperty.endsWith('&')) {
    return nestedProperty.substr(0, nestedProperty.length - 1)
  }

  return nestedProperty
}
