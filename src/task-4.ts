function formatChipReading(reading: number | string): string {
  if (typeof reading === 'number') {
    return `Chip #${reading}`;
  } else {
    return `Chip #${reading} (hand-entered)`;
  }
}

console.log(formatChipReading('l'));
