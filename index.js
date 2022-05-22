const makeFrequencyObject = word => {
    const letters = {}

    word.split('').forEach(letter => {
        if (letters[letter]) {
            letters[letter]++
        } else {
            letters[letter] = 1
        }
    })

    return letters
}

const solution = (sentence, wordsArr) => {
    const words = sentence.split(' ')

    return wordsArr.filter(word => {
        const letterFrequency = makeFrequencyObject(word)

        return words.some(sentenceWord => {
            const sentenceFrequency = makeFrequencyObject(sentenceWord)

            return Object.keys(letterFrequency).every(letter => {
                return sentenceFrequency[letter] === letterFrequency[letter]
            })
        })
    })
}

// test your solution
console.log(solution('dvvd  pddp', ['ddvv', 'dvcd', 'vvdd', 'pdpd']))
// ['ddvv', 'vvdd', 'pddp']

console.log(solution('laser space', ['lazing', 'lazy', 'lacer']))
// []
console.log(solution('We will eat tenderising meat at Rivera with no regally plate because there is none',['administration', 'ingredients', 'admit', 'beat', 'arrive', 'blood', 'door', 'each', 'on', 'economic', 'gallery', 'edge', 'three', 'drop']))
  // ['ingredients', 'arrive', 'on', 'gallery', 'three']