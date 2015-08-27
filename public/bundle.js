(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var aleph = require('./')
var ui = require('getids')()

var text = "﻿Ereshkiga\r\n        To begin, I never asked to be the ruler of this realm. I was satisfied with my status as a sky deity from the moment my father's tears conceived me in the womb of mother ocean. Innocence lives in the sky, and innocent I was. In an eternal whim I could dissolve into clarity, come back as a cloud, watch and listen to the above and below. What a time that was.\r\n        They say all good things must come to an end, and so it did, just look what the Jews did to us with their “monotheism.” Our powers drained away into one megalomaniac of a deity that no one in the heavenly realm payed much attention to, until, with bitter luck he stumbled upon some influential couple in a tent, whispered in their ears, and sparked our demise, disintegration, and  the  destruction of our temples.\r\n        But demise, disintegration, and destruction are known to be among my most esteemed traits. Not as a sky deity of course, that has more to do with those human ideals that the vast majority of you put onto a pampered pedestal, while the honest minority are relegated to worship my current status at heavy metal shows and psy trance parties deep in the night.\r\n        The legend goes that it was the dragon Kun that did it to me, the first betrayal by one who was supposed to love me. He was my brother, though it is hard to track down proper familial relations when the mere mingling of tears and water can bring about birth. I was in a moment of reconfiguration,  transitioning from pure blue dissipation to a more watery form, when a net fine enough to catch the air itself pulled me. I felt myself sweeping downward, it was the fall of the very innocence and  kindness that had once formed me into a shady cumulous for a desert traveler. With each meter of decent I felt myself solidifying into a ruling form, and a ruler I was to be. By the time Kun deserted me on the tombstone throne, I was  fully anthropomorphic, and still am today.\r\n        Being the ruler of the underworld had its joys. Law giving came easily to me, as well as giving judgements, holding down security matters, and so on and so forth. Perhaps that is why no one has come to my rescue, they recognize my utmost capacity to preside over the dead. I do like to watch them dance though, swaying forms, slowing decomposing, a twist to the left as the arms flings off to the right. The dead love to dance here, it speeds up the process of decomposition, and no one wants to stay here too long. There are more ethereal realms to be explored, where body is but a hazy memory cloaked in poetry.\r\n        How many I have seen, kings and emperors, those worshiped as idols, all come here, until they are returned to pure earth, no doubt feeding the all loving powers of my bitch of a sister Ishtar, “oh great bringer of life and abundance!”\r\n         I should be the goddess of life and abundance, without my kingdom how would your gardens grow? I hear Shiva had a similar existential crisis once, that God of destruction, he become distraught confiding in his dear Parvati, “Oh love, what am I? Only destruction? where is my goodness?” “Lord” she is said to have answered, “Without your destruction where would creation be, you are destruction, but from you creation is birthed!” What a wise wise goddess, no one in my pantheon gives me such credit. I admire her beautiful combination of love and wisdom, though I never got the chance to meet her in person (I am not allowed to leave my subterranean realm). But my great servant Neti came  back with raving reviews of the goddess after some New Age witches conducted a ceremony involving me, Parvati, and Persephone, who he described as a more balanced version of myself.\r\n        Perhaps it was Parvati's love for Shiva that inspired me to seduce him, the great usurper Nergal. Locusts swarmed from his skin, and tumors raged in his loins. He was the only god to have visited me since Ishtar's failed attempted at imperialistic domination (another story for another day.) The people called him the God of pestilence and disease, of famine and cruelty. That was fine by my standards, after all, an internet search will bring forth my title of “the self-pitying goddess of the underworld.” Which is also fine, for pity is tied to mercy, and believe me, I could be much worse. Nergal first came down by edict of the divine council, he was to bring me tasty delights from the realms I am unable to visit. Most of the stories say that I intended him to see me get out of the bath, naked, and they are correct, for as you will remember, my innocence stayed in the skies. Though the delights turned to ash, our love making woke me up to a pleasure I did not believe could exist in these dismal halls. I loved him for this, or at least felt a yearning that tore at my heart like hungry claws into fresh meat.\r\n        I now understand this type of pleasure is well known amongst the anthropomorphs of the upper realms. It was of little deviation from his standard being, it was all the contact I had ever known. To make a long story short, I demanded his presence in my realm, how could they deprive more than they already had? Nergal was sent back to me, his tongue spewing malaria, his belly emaciated from his own famine. The story goes he entered my throne room, grasped me by my long black tendrils, threw me to the floor, he took my form, then sat upon my throne. The story is more or less accurate, though it leaves out a few details that would have delighted those horror loving medieval artists if that God of Abraham hadn't been such a greedy bastard. When he sat on my throne the dead all bowed, a gesture they had never given to me. In his horror they saw the makings of their own fates, they saw the very catalyst that had brought them to what had once been my kingdom.\r\n        Slowly my cult dwindled, the archaeological record will tell you that I speak the truth. The living came to worship him in my place, my throne became his. I am little more than a handmaiden and fuck toy to the reigning Mesopotamian God of the dead. This is fine by me. For it brings you to the moral of this story, and listen closely, because a moral from a Goddess is as eternal as belief. When stolen, raped, and dethroned, always tell your story. Pity is power too. Just light a candle for me tonight, we will see who rises to a great throne in the sky."

console.log(ui)

var dict = aleph(text)




},{"./":2,"getids":3}],2:[function(require,module,exports){
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

},{"getids":3,"jtype":4}],3:[function(require,module,exports){
module.exports = function(el){

    var ids = {};

    if('string' == typeof el) el = document.getElementById(el);

    if(!el) el = document;

    var children = el.getElementsByTagName('*');

    Array.prototype.forEach.call(children, function(e){

	if(e.id.length > 0){

	    ids[e.id] = e

	}

    })

    return ids

}

},{}],4:[function(require,module,exports){
var p = document.createElement('pre');
p.style.visibility = 'hidden';
p.style.zIndex = -10;
p.style.position = 'absolute';
p.style.left = '-3000px';
p.style.margin = '0';
p.style.padding = '0';
p.style.whiteSpace = 'nowrap';
p.textContent = '';

document.body.appendChild(p)
var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var punc = ',./;"\'<>?:"{}|!@#$%^&*()-=_+ '

module.exports = function(string, params){
  if(!('string' == typeof string)) {
    params = string || {}
    var aa = typify(alpha, params);
    var pp = typify(punc, params)
    var dict = {};
    dict.average = {alphabet: aa.average, punctuation: pp.average}
    for(var x in aa) dict[x] = aa[x]
    for(var y in pp) dict[y] = pp[y]
    dict.alphabet = aa;
    dict.punctuation = pp;
//    document.body.removeChild(p)
    return dict
  }
  else{

    var d =  typify(string, params)
//    document.body.removeChild(p)
    return d
  }
}

function typify(string, params){

  for(var x in params){
    p.style[x] = params[x]
  }  

  var dict = {}
  var a = string.split('');
  var alphabet = a.map(styleMap)
  var sumWidth= alphabet.reduce(function(p,e,i,d){
    return p + e[0]
  }, 0)
  var sumHeight = alphabet.reduce(function(p,e){
    return p + e[1]
  },0)
 
  a.forEach(function(e,i){
    dict[e] = alphabet[i]
  })
  dict.sum = {width: sumWidth, height: sumHeight}
  dict.max = {}
  dict.max.height = alphabet.reduce(function(p,e){
    return e[1] > p ? e[1] : p
  },0)
  dict.average = {height: sumHeight / alphabet.length, width: sumWidth / alphabet.length}
  dict.total = styleMap(string);

  return dict

  function styleMap(e,i){
    var o = {}
    p.textContent = e;
    var w = parseFloat(getCSS(p, 'width'))
    var h = parseFloat(getCSS(p, 'height'))
    return [w, h]
  }
  return dict

}

function getCSS(el, prop){
  return document.defaultView.getComputedStyle(el).getPropertyValue(prop);
}

},{}]},{},[1]);
