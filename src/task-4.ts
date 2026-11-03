interface StrayIntake {
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'guinea-pig';
  ageYears: number;
  foundLocation: string;
  notes?: string;
}

interface SurrenderIntake {
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'guinea-pig';
  ageYears: number;
  surrenderReason: string;
  notes?: string;
}

type IntakeRecord = StrayIntake | SurrenderIntake;

function formatChipReading(reading: number | string): string {
  if (typeof reading === 'number') {
    return `Chip #${reading}`;
  } else {
    return `Chip #${reading} (hand-entered)`;
  }
}

function describeIntake(record: IntakeRecord): string {
  if ('foundLocation' in record) {
    return `This stray was found in ${record.foundLocation}`;
  }
  if ('surrenderReason' in record) {
    return `The surrender reason is ${record.surrenderReason}`;
  }

  return '';
}

function isUrgentStray(record: IntakeRecord): record is StrayIntake {
  if ('foundLocation' in record) {
    return record.species === 'dog';
  }
  return false;
}

function priorityList(record: IntakeRecord): 'prioritise' | 'standard queue' {
  if (isUrgentStray(record)) {
    return 'prioritise';
  }

  return 'standard queue';
}

const test1: StrayIntake = {
  name: 'mo',
  ageYears: 28,
  species: 'dog',
  foundLocation: 'glasgow',
  notes: 'chicken',
};
console.log(describeIntake(test1));

console.log(priorityList(test1));

console.log(formatChipReading('l'));
