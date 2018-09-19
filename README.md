# Techscreen

#Question 2

The article that I have been interested in lately is this one https://blog.tepapa.govt.nz/2018/07/30/the-language-of-agile-methodology-in-te-reo-maori-being-kakama/ by Daniel Crichton-Rouse.

It looks at increasing our use of te reo everyday by having the ability to use kupu to describe agile methods. It is not necessarily solely applicable to the tech industry, however, coming from a career where the implementation of biculturalism was valued, I was interested in ways to bring that naturally and meaningfully into the tech sector as well.

The article is very practical for use in a workplace context and I liked the fact that the meaning of what was trying to be conveyed through agile methods was the goal rather than just a direct translation word for word into te reo.

It's helpful for non speakers because it has the pronounciation examples and I think it's something that's easily implemented in the workplace.

#Question 3

let arr = [[1,2,[3]],4]

function flatten(arr) {
  return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
}
