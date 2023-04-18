const str = `
010-6212-0567
theswp84@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

console.log(str.match(/\b\w{1,}\b/g))