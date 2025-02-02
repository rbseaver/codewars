export const dnaStrand = (dna: string) => {
  const pairMap: Record<string, string> = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }

  return dna.replace(/./g, c => pairMap[c]);

}