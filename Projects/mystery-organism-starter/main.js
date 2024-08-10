// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function to create pAequors
const pAequorFactory = (num, baseArray) => {
  return {
    specimenNum: num,
    dna: baseArray,
    // mutate function to take a random base and modify it to a new base
    mutate() {
      let newBase = returnRandBase();
      let updateBaseIndex = Math.floor(Math.random() * 15)

      while (newBase === this.dna[updateBaseIndex]) {
        newBase = returnRandBase();
      }
      this.dna[updateBaseIndex] = newBase;
    },
    // comparison function to compare two pAequor and return the % they are the same
    compareDNA(pAequor) {
      let count = 0
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      const percentInCommon = (count / 15 * 100).toFixed(2);
      return `specimen #1 and specimen #2 have ${percentInCommon}% DNA in common`
    },
    // returns a true/false value if pAequor has 60% C or G bases
    willLikelySurvive() {
      survivalPercent = 0
      this.dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          survivalPercent++;
        }
      })
      return (survivalPercent / 15 > .6)
    }
  }
}

// create an array of 30 pAequors
const pAequorArray = []

for (let i = 0; i < 30; i++) {
  pAequorArray.push(pAequorFactory(i, mockUpStrand()));
}

console.log(pAequorArray)