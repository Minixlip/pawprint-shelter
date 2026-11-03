type CaseStatus =
  | { status: 'Available' }
  | { status: 'Adopted'; adoptedName: string; adoptedDate: string }
  | { status: 'Pending'; prospectiveName: string }
  | { status: 'Medical Hold'; reason: string }
  | { status: 'Returned'; adoptedName: string; reason: string };

function describeCase(record: CaseStatus): string {
  switch (record.status) {
    case 'Adopted':
      return `This animal is adopted by ${record.adoptedName} on the ${record.adoptedDate}`;
    case 'Pending':
      return `This animal is pending and the prospective person is ${record.prospectiveName}`;
    case 'Medical Hold':
      return `This animal is in a hospital for ${record.reason}`;
    case 'Returned':
      return `This animal was returned, the last owner ${record.adoptedName} stated it was because ${record.reason}`;
    default:
      return 'This animal is Available';
  }
}

const test2: CaseStatus = { status: 'Available' };

const test3: CaseStatus = { status: 'Pending', prospectiveName: 'craig' };

const test4: CaseStatus = {
  status: 'Adopted',
  adoptedName: 'jeff',
  adoptedDate: '11 October 2026',
};

const test5: CaseStatus = {
  status: 'Medical Hold',
  reason: 'Broken legs',
};

console.log(describeCase(test5));
