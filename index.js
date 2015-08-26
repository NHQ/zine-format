var alpha = require('jtype')
var ui = require('getids')()

var styles = {}
styles.fontFamily = 'Courier'
styles.fontSize = '24px'
styles.letterSpacing = '3px'
styles.lineHeight = '24px'

module.exports = function(text, styles){
  var dict = alpha(styles)
  var alphaDict = alpha(text, styles)
  console.log(dict)
  console.log(alphaDict)
}

