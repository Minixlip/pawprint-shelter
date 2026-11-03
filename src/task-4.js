function formatChipReading(reading) {
    if (typeof reading === 'number') {
        return "Chip #".concat(reading);
    }
    else {
        return "Chip #".concat(reading, " (hand-entered)");
    }
}
console.log(formatChipReading('l'));
