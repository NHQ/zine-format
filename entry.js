var fs = require('fs')

var aleph = require('./')
var ui = require('getids')()

var text = fs.readFileSync('./ereshkiga.txt', 'utf8')

console.log(ui)

var dict = aleph(text)



