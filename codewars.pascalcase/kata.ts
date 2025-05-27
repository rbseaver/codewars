export const toPascalCase = (value: string): string => {
  if (value === '') {
    return '';
  }

  const words = value.split(/\s+/).filter(Boolean);

  return words
    .map(word => `${word[0]?.toUpperCase()}${word.substring(1)}`)
    .join('');
}