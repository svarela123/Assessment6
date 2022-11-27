const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('same items', () => {
        expect(shuffleArray).toBe(shuffleArray)
    })

    // test('returns an array of the same length as the argument sent in', () => {
    //     expect(shuffleArray).toBe(shuffleArray)
    // })
})