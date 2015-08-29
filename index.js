var marked = require('marked')
var alpha = require('jtype')
var ui = require('getids')()

var styles = {}
styles.fontFamily = 'Courier'
styles.fontSize = '24px'
styles.letterSpacing = '3px'
styles.lineHeight = '24px'

//for(x in ui) document.body.removeChild(ui[x])


var max = parseInt(getCSS(ui.leftFront, 'width'))

module.exports = function(text){
  graph(text.split(/[\n\r]/))
  var dict = alpha(styles)
  var alphaDict = alpha(text, styles)
//  console.log(dict)
  console.log(alphaDict)
}

function writeLine(arr, str){
  str += arr.shift()
  var dict = alpha(str)
  var l = dict.total[0]
  if(l < max && arr.length) {
    str += ' '
    return writeLine(arr, str)
  }
  else return str
}

function graph(text){
console.log(text)
  var str = writeLine(text[2].split(/\s/).filter(Boolean), '')
  console.log(str)
}


function getCSS(el, prop){
  return document.defaultView.getComputedStyle(el).getPropertyValue(prop)
}
