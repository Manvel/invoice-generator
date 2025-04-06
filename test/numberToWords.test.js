// Import the numberToWords function
import { numberToWords } from '../src/numberToWords.js';
import assert from 'node:assert/strict';

// Test cases
const testCases = [
    { input: 0, expected: 'zero' },
    { input: 1, expected: 'one' },
    { input: 10, expected: 'ten' },
    { input: 11, expected: 'eleven' },
    { input: 20, expected: 'twenty' },
    { input: 21, expected: 'twenty one' },
    { input: 100, expected: 'one hundred' },
    { input: 101, expected: 'one hundred and one' },
    { input: 110, expected: 'one hundred and ten' },
    { input: 111, expected: 'one hundred and eleven' },
    { input: 1000, expected: 'one thousand' },
    { input: 1001, expected: 'one thousand one' },
    { input: 1010, expected: 'one thousand ten' },
    { input: 1100, expected: 'one thousand one hundred' },
    { input: 1101, expected: 'one thousand one hundred and one' },
    { input: 2000, expected: 'two thousand' },
    { input: 2001, expected: 'two thousand one' },
    { input: 2010, expected: 'two thousand ten' },
    { input: 2100, expected: 'two thousand one hundred' },
    { input: 2101, expected: 'two thousand one hundred and one' },
    { input: 9999, expected: 'nine thousand nine hundred and ninety nine' },
    { input: 10000, expected: 'ten thousand' },
    { input: 10001, expected: 'ten thousand one' },
    { input: 10010, expected: 'ten thousand ten' },
    { input: 10100, expected: 'ten thousand one hundred' },
    { input: 10101, expected: 'ten thousand one hundred and one' },
    { input: 11000, expected: 'eleven thousand' },
    { input: 11001, expected: 'eleven thousand one' },
    { input: 11010, expected: 'eleven thousand ten' },
    { input: 11100, expected: 'eleven thousand one hundred' },
    { input: 11101, expected: 'eleven thousand one hundred and one' },
    { input: 20000, expected: 'twenty thousand' },
    { input: 20001, expected: 'twenty thousand one' },
    { input: 20010, expected: 'twenty thousand ten' },
    { input: 20100, expected: 'twenty thousand one hundred' },
    { input: 20101, expected: 'twenty thousand one hundred and one' },
    { input: 99999, expected: 'ninety nine thousand nine hundred and ninety nine' },
    { input: 100000, expected: 'one hundred thousand' },
    { input: 100001, expected: 'one hundred thousand one' },
    { input: 100010, expected: 'one hundred thousand ten' },
    { input: 100100, expected: 'one hundred thousand one hundred' },
    { input: 100101, expected: 'one hundred thousand one hundred and one' },
    { input: 101000, expected: 'one hundred one thousand' },
    { input: 101001, expected: 'one hundred one thousand one' },
    { input: 101010, expected: 'one hundred one thousand ten' },
    { input: 101100, expected: 'one hundred one thousand one hundred' },
    { input: 101101, expected: 'one hundred one thousand one hundred and one' },
    { input: 110000, expected: 'one hundred ten thousand' },
    { input: 110001, expected: 'one hundred ten thousand one' },
    { input: 110010, expected: 'one hundred ten thousand ten' },
    { input: 110100, expected: 'one hundred ten thousand one hundred' },
    { input: 110101, expected: 'one hundred ten thousand one hundred and one' },
    { input: 200000, expected: 'two hundred thousand' },
    { input: 200001, expected: 'two hundred thousand one' },
    { input: 200010, expected: 'two hundred thousand ten' },
    { input: 200100, expected: 'two hundred thousand one hundred' },
    { input: 200101, expected: 'two hundred thousand one hundred and one' },
    { input: 999999, expected: 'nine hundred ninety nine thousand nine hundred and ninety nine' }
];

// Run tests
console.log('Running numberToWords tests...\n');

let passed = 0;
let failed = 0;

testCases.forEach(({ input, expected }) => {
    try {
        const result = numberToWords(input);
        assert.strictEqual(result, expected, `Input: ${input}`);
        passed++;
        console.log(`✅ PASS: ${input} -> "${result}"`);
    } catch (error) {
        failed++;
        console.error(`❌ FAIL: ${error.message}`);
    }
});

console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0); 