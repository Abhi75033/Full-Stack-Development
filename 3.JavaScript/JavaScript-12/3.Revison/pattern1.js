let pattern ='Skill'

const pat = /skill/

const pat1 = new RegExp('world')

console.log(pat.test('SKILL'));
console.log(pat.test('skill'));
console.log(pat1.test('World'));
console.log(pat1.test('world'));