function printStatus(record) {
    switch (record.status) {
        case 'Adopted':
            return "This animal is adopted by ".concat(record.adoptedName, " on the ").concat(record.adoptedDate);
        case 'Pending':
            return "This animal is pending and the prospective person is ".concat(record.prospectiveName);
        case 'Medical Hold':
            return "This animal is in a hospital for ".concat(record.reason);
        default:
            return 'This animal is Available';
    }
}
var test2 = { status: 'Available' };
console.log(printStatus(test2));
