export const substrStringByComma = (string: string): string => {
  const indexOfComma = string.indexOf(',')

  return string.substring(0, indexOfComma === -1 ? string.length : indexOfComma)
}
