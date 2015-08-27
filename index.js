var alpha = require('jtype')
var ui = require('getids')()

var styles = {}
styles.fontFamily = 'Courier'
styles.fontSize = '24px'
styles.letterSpacing = '3px'
styles.lineHeight = '24px'

//for(x in ui) document.body.removeChild(ui[x])

var max = parseInt(getCSS(ui.leftFront, 'width'))

console.log(max)

module.exports = function(text, styles){
  graph(text.split(/[\n\r]/))
  var dict = alpha(styles)
  var alphaDict = alpha(text, styles)
  console.log(dict)
  console.log(alphaDict)
}

function graph(text){
  var c = true
  var i = 0
  var str = '<p>'
}


function getCSS(el, prop){
  return document.defaultView.getComputedStyle(el).getPropertyValue(prop)
}
