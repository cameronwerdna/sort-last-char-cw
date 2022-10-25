function lastChar(x){
    return x.split(' ').sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)))
  }


console.log(lastChar('why would the fox attempt to jump that darn wall')) // => ['would','the','wall','darn','to', 'jump','attempt', 'that','fox', 'why']
console.log(lastChar('will the dam ever get repaired')) // => [ 'repaired', 'the', 'will', 'dam', 'ever', 'get' ]