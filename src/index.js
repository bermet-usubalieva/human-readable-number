module.exports = function toReadable(number) {
    let newNumber = String(number)
    let hundreds = Math.floor(newNumber / 100)
    let dozens = String(newNumber - (hundreds * 100))
    let units = dozens % 10;
    let answerDozens;


    if (newNumber.length == 3) {
        if (newNumber % 100 == 0) {
            return (toUnits(hundreds) + ' hundred')
        } else if (newNumber[1] == 0) {
            return (toUnits(hundreds) + ' hundred ' + toUnits(units))
        } else if (dozens[0] == 1) {
            answerDozens = toDozens(dozens)
        } else {
            answerDozens = toHundreds(dozens)
        }
        return (toUnits(hundreds) + ' hundred ' + answerDozens)
    } else if (newNumber.length == 2 && newNumber[0] != 1) {
        return toHundreds(newNumber)
    } else if (newNumber.length == 2 && newNumber[0] == 1) {
        return toDozens(newNumber)
    } else if (newNumber.length == 1) {
        return toUnits(newNumber)
    }
}
function toUnits(a) {
    if (a == 0) {
        return 'zero'
    } else if (a == 1) {
        return 'one'
    } else if (a == 2) {
        return 'two'
    } else if (a == 3) {
        return 'three'
    } else if (a == 4) {
        return 'four'
    } else if (a == 5) {
        return 'five'
    } else if (a == 6) {
        return 'six'
    } else if (a == 7) {
        return 'seven'
    } else if (a == 8) {
        return 'eight'
    } else if (a == 9) {
        return 'nine'
    }
}
function toDozens(a) {
    if (a[0] == 1) {
        if (a[1] == 0) {
            return 'ten'
        } else if (a[1] == 1) {
            return 'eleven'
        } else if (a[1] == 2) {
            return 'twelve'
        } else if (a[1] == 3) {
            return 'thirteen'
        } else if (a[1] == 4) {
            return 'fourteen'
        } else if (a[1] == 5) {
            return 'fifteen'
        } else if (a[1] == 6) {
            return 'sixteen'
        } else if (a[1] == 7) {
            return 'seventeen'
        } else if (a[1] == 8) {
            return 'eighteen'
        } else if (a[1] == 9) {
            return 'nineteen'
        }
    }
}
function toHundreds(a) {
    if (a[0] == 2) {
        if (a[1] == 0) {
            return 'twenty'
        } else {
            let twenty = 'twenty' + ' ' + toUnits(a[1])
            return twenty
        }
    } else if (a[0] == 3) {
        if (a[1] == 0) {
            return 'thirty'
        } else {
            let thirty = 'thirty' + ' ' + toUnits(a[1])
            return thirty
        }
    } else if (a[0] == 4) {
        if (a[1] == 0) {
            return 'forty'
        } else {
            let forty = 'forty' + ' ' + toUnits(a[1])
            return forty
        }
    } else if (a[0] == 5) {
        if (a[1] == 0) {
            return 'fifty'
        } else {
            let fifty = 'fifty' + ' ' + toUnits(a[1])
            return fifty
        }
    } else if (a[0] == 6) {
        if (a[1] == 0) {
            return 'sixty'
        } else {
            let sixty = 'sixty' + ' ' + toUnits(a[1])
            return sixty
        }
    } else if (a[0] == 7) {
        if (a[1] == 0) {
            return 'seventy'
        } else {
            let seventy = 'seventy' + ' ' + toUnits(a[1])
            return seventy
        }
    } else if (a[0] == 8) {
        if (a[1] == 0) {
            return 'eighty'
        } else {
            let eighty = 'eighty' + ' ' + toUnits(a[1])
            return eighty
        }
    } else if (a[0] == 9) {
        if (a[1] == 0) {
            return 'ninety'
        } else {
            let ninety = 'ninety' + ' ' + toUnits(a[1])
            return ninety
        }
    }
}