module.exports = function toReadable (number) {
    let Newnumber = number + ''
    let workArray = Newnumber.split('')
    let waLength = workArray.length
    toDelete = true
     if (waLength == 1){
        if (workArray[0] == "0"){
            workArray[0] = "zero"
        }
        if (workArray[0] == "1"){
            workArray[0] = "one"
        }
        if (workArray[0] == "2"){
            workArray[0] = "two"
        }
        if (workArray[0] == "3"){
            workArray[0] = "three"
        }
        if (workArray[0] == "4"){
            workArray[0] = "four"
        }
        if (workArray[0] == "5"){
            workArray[0] = "five"
        }
        if (workArray[0] == "6"){
            workArray[0] = "six"
        }
        if (workArray[0] == "7"){
            workArray[0] = "seven"
        }
        if (workArray[0] == "8"){
            workArray[0] = "eight"
        }
        if (workArray[0] == "9"){
            workArray[0] = "nine"
        }
    } 
    else if (waLength == 2)
    {

        if (workArray[0] == "1" && workArray[1] == "0"){
            workArray[0] = "ten"
            workArray.splice(1, 1)
        }

        if (workArray[0] == "1" && workArray[1] == "1"){
            workArray[0] = "eleven"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "2"){
            workArray[0] =  "twelve"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "3"){
            workArray[0] =  "thirteen"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "4"){
            workArray[0] =  "fourteen"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "5"){
            workArray[0] =  "fifteen"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "6"){
            workArray[0] =  "sixteen"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "7"){
            workArray[0] =  "seventeen"
            workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "8"){
            workArray[0] =  "eighteen"
        workArray.splice(1, 1)
        }
        if (workArray[0] == "1" && workArray[1] == "9"){
            workArray[0] =  "nineteen"
            workArray.splice(1, 1)
        }
        
        if (workArray[0] == "2"){
            workArray[0] = "twenty"
        }
        if (workArray[0] == "3"){
            workArray[0] = "thirty"
        }
        if (workArray[0] == "4"){
            workArray[0] = "forty"
        }
        if (workArray[0] == "5"){
            workArray[0] = "fifty"
        }
        if (workArray[0] == "6"){
            workArray[0] = "sixty"
        }
        if (workArray[0] == "7"){
            workArray[0] = "seventy"
        }
        if (workArray[0] == "8"){
            workArray[0] = "eighty"
        }
        if (workArray[0] == "9"){
            workArray[0] = "ninety"
        }

        if (workArray[1] == "0"){
            workArray.splice(1,1)
        }
        if (workArray[1] == "1"){
            workArray[1] = "one"
        }
        if (workArray[1] == "2"){
            workArray[1] = "two"
        }
        if (workArray[1] == "3"){
            workArray[1] = "three"
        }
        if (workArray[1] == "4"){
            workArray[1] = "four"
        }
        if (workArray[1] == "5"){
            workArray[1] = "five"
        }
        if (workArray[1] == "6"){
            workArray[1] = "six"
        }
        if (workArray[1] == "7"){
            workArray[1] = "seven"
        }
        if (workArray[1] == "8"){
            workArray[1] = "eight"
        }
        if (workArray[1] == "9"){
            workArray[1] = "nine"
        }
    }

    else if (waLength == 3){
        
        if (workArray[0] == "1"){
            workArray[0] = "one hundred"
        }
        if (workArray[0] == "2"){
            workArray[0] = "two hundred"
        }
        if (workArray[0] == "3"){
            workArray[0] = "three hundred"
        }
        if (workArray[0] == "4"){
            workArray[0] = "four hundred"
        }
        if (workArray[0] == "5"){
            workArray[0] = "five hundred"
        }
        if (workArray[0] == "6"){
            workArray[0] = "six hundred"
        }
        if (workArray[0] == "7"){
            workArray[0] = "seven hundred"
        }
        if (workArray[0] == "8"){
            workArray[0] = "eight hundred"
        }
        if (workArray[0] == "9"){
            workArray[0] = "nine hundred"
        }

        if (workArray[1] == "1" && workArray[2] == "0"){
            workArray[1] = "ten"
            workArray.splice(2, 1)
        }

        if (workArray[1] == "1" && workArray[2] == "1"){
            workArray[1] = "eleven"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "2"){
            workArray[1] =  "twelve"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "3"){
            workArray[1] =  "thirteen"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "4"){
            workArray[1] =  "fourteen"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "5"){
            workArray[1] =  "fifteen"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "6"){
            workArray[1] =  "sixteen"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "7"){
            workArray[1] =  "seventeen"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "8"){
            workArray[1] =  "eighteen"
            workArray.splice(2, 1)
        }
        if (workArray[1] == "1" && workArray[2] == "9"){
            workArray[1] =  "nineteen"
            workArray.splice(2, 1)
        }

        if (workArray[1] == "0"){
            toDelete = false
            workArray.splice(1,1)
        }
        
        if(toDelete){
            if (workArray[1] == "2"){
                workArray[1] = "twenty"
            }
            if (workArray[1] == "3"){
                workArray[1] = "thirty"
            }
            if (workArray[1] == "4"){
                workArray[1] = "forty"
            }
            if (workArray[1] == "5"){
                workArray[1] = "fifty"
            }
            if (workArray[1] == "6"){
                workArray[1] = "sixty"
            }
            if (workArray[1] == "7"){
                workArray[1] = "seventy"
            }
            if (workArray[1] == "8"){
                workArray[1] = "eighty"
            }
            if (workArray[1] == "9"){
                workArray[1] = "ninety"
            }
        }
        else{
            if (workArray[1] == "1"){
                workArray[1] = "one"
            }
            if (workArray[1] == "2"){
                workArray[1] = "two"
            }
            if (workArray[1] == "3"){
                workArray[1] = "three"
            }
            if (workArray[1] == "4"){
                workArray[1] = "four"
            }
            if (workArray[1] == "5"){
                workArray[1] = "five"
            }
            if (workArray[1] == "6"){
                workArray[1] = "six"
            }
            if (workArray[1] == "7"){
                workArray[1] = "seven"
            }
            if (workArray[1] == "8"){
                workArray[1] = "eight"
            }
            if (workArray[1] == "9"){
                workArray[1] = "nine"
            }

        }
        
        if (workArray[2] == "0"){
            workArray.splice(2,1)
        }
        if (workArray[2] == "1"){
            workArray[2] = "one"
        }
        if (workArray[2] == "2"){
            workArray[2] = "two"
        }
        if (workArray[2] == "3"){
            workArray[2] = "three"
        }
        if (workArray[2] == "4"){
            workArray[2] = "four"
        }
        if (workArray[2] == "5"){
            workArray[2] = "five"
        }
        if (workArray[2] == "6"){
            workArray[2] = "six"
        }
        if (workArray[2] == "7"){
            workArray[2] = "seven"
        }
        if (workArray[2] == "8"){
            workArray[2] = "eight"
        }
        if (workArray[2] == "9"){
            workArray[2] = "nine"
        }
    }

    let constructed = ''
    for (let element of workArray){
        if (element != ''){
            if (element == workArray[workArray.length-1]){
                constructed += element + ''
            }
            else{
                constructed += element + ' '
            }
        }
        else{
            //pass
        }
    }
    console.log(constructed)
    return constructed 
}
