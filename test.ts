export function IString(value: any) {
  return (typeof value === 'string') || (value instanceof String)
}