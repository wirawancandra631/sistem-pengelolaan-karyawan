const data = ['andra', 'hitam', 'vibes'];
const regexP = /.*a.*/gi;
const searchResult = data.filter((d) => regexP.test(d));
console.log(searchResult);
