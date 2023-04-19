export function isNullOrWhitespace(value: string): boolean {
  return !value || value.trim().length < 1;
}
