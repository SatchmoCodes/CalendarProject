// import data from '../data.json' assert {type:'json'}
// console.log(data.entries)

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the data object
    console.log(data.entries);
 

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"]

let fullDateArr = [] //array used for calculating view page statistics
let dateArr = [] //array used for actual calendar

for (let i = 0; i < data.entries.length; i++) {
    let date = new Date(data.entries[i].date)
    fullDateArr.push(date)
    let day = days[date.getDay()]
    let month = months[date.getMonth()]
    let dayNumber = date.getDate()
    dateArr.push(day + ', ' + month + ' ' + dayNumber + ', ' + '2022')
}

console.log(dateArr)
// for (let j = 0; j < dateArr.length; j++) {
//     let date = new Date(dateArr[j])
// }

// console.log(fullDateArr)


let preEntry = document.querySelector('.preReal')
let entry = document.querySelector('.entry')
let postEntry = document.querySelector('.postReal')



let postNew = document.querySelector('.postNew')
let postFake = document.querySelector('.postFake')
let mainEntry = document.querySelector('.fakeMain')
let preFake = document.querySelector('.preFake')
let preNew = document.querySelector('.preNew')

if (document.querySelector('.leftOne') != null) {
    document.querySelector('.leftOne').addEventListener("click", previous)
    document.querySelector('.rightOne').addEventListener("click", next)
    document.querySelector('.month').addEventListener("change", monthChange)
    document.querySelector('.dateChange').addEventListener("click", dateChange)
}

function next() {
    let id = document.querySelector('.mainTitle').dataset.id
    let x = parseInt(id) + 1
    console.log("after addition: " + x)
    if (x > data.entries.length) {
        x = 0
    }
    postNew.classList.add('newLeft')
    postFake.classList.add('postLeft')
    mainEntry.classList.add('mainLeft')
    preFake.classList.add('preLeft')
    preEntry.classList.add('hide')
    entry.classList.add('hide')
    postEntry.classList.add('hide')
    preNew.classList.add('hide')
    postNew.classList.remove('hide')
    preFake.classList.remove('hide')
    postFake.classList.remove('hide')

    setTimeout(() => {
        changeEntry(x)
        preEntry.classList.remove('hide')
        entry.classList.remove('hide')
        postEntry.classList.remove('hide')
        postNew.classList.remove('newLeft')
        postFake.classList.remove('postLeft')
        mainEntry.classList.remove('mainLeft')
        preFake.classList.remove('preLeft')
        postNew.classList.add('hide')
        preFake.classList.add('hide')
        postFake.classList.add('hide')
    }, "500")
}

function previous() {
    let id = document.querySelector('.mainTitle').dataset.id
    let x = parseInt(id) - 1
    if (x < 0) {
        x = 364
    }
    preNew.classList.add('newRight')
    preFake.classList.add('preRight')
    mainEntry.classList.add('mainRight')
    postFake.classList.add('postRight')
    preEntry.classList.add('hide')
    entry.classList.add('hide')
    postEntry.classList.add('hide')
    postNew.classList.add('hide')
    preNew.classList.remove('hide')
    preFake.classList.remove('hide')
    postFake.classList.remove('hide')

    setTimeout(() => {
        changeEntry(x)
        preEntry.classList.remove('hide')
        entry.classList.remove('hide')
        postEntry.classList.remove('hide')
        preNew.classList.remove('newRight')
        postFake.classList.remove('postRight')
        mainEntry.classList.remove('mainRight')
        preFake.classList.remove('preRight')
        preNew.classList.add('hide')
        preFake.classList.add('hide')
        postFake.classList.add('hide')
    }, "500")
}

let newLDateArr = [...document.querySelectorAll('.newLeftDate')]
let newLTitleArr = [...document.querySelectorAll('.newLeftTitle')]
let newLContentArr = [...document.querySelectorAll('.newLeftBody')]

let lDateArr = [...document.querySelectorAll('.leftDate')]
let lTitleArr = [...document.querySelectorAll('.leftTitle')]
let lContentArr = [...document.querySelectorAll('.leftBody')]

let mDateArr = [...document.querySelectorAll('.mainDate')]
let mTitleArr = [...document.querySelectorAll('.mainTitle')]
let mContentArr = [...document.querySelectorAll('.mainBody')]

let rDateArr = [...document.querySelectorAll('.rightDate')]
let rTitleArr = [...document.querySelectorAll('.rightTitle')]
let rContentArr = [...document.querySelectorAll('.rightBody')]

let newRDateArr = [...document.querySelectorAll('.newRightDate')]
let newRTitleArr = [...document.querySelectorAll('.newRightTitle')]
let newRContentArr = [...document.querySelectorAll('.newRightBody')]




newLDateArr.map(x => x.innerText = dateArr[363])
newLTitleArr.map(x => x.innerText = data.entries[363].title)
newLContentArr.map(x => x.innerText = data.entries[363].content)

lDateArr.map(x => x.innerText = dateArr[364])
lTitleArr.map(x => x.innerText = data.entries[364].title)
lContentArr.map(x => x.innerText = data.entries[364].content)

mDateArr.map(x => x.innerText = dateArr[0])
mTitleArr.map(x => x.innerText = data.entries[0].title)
mContentArr.map(x => x.innerText = data.entries[0].content)

rDateArr.map(x => x.innerText = dateArr[1])
rTitleArr.map(x => x.innerText = data.entries[1].title)
rContentArr.map(x => x.innerText = data.entries[1].content)

newRDateArr.map(x => x.innerText = dateArr[2])
newRTitleArr.map(x => x.innerText = data.entries[2].title)
newRContentArr.map(x => x.innerText = data.entries[2].content)

// Change text content of entries

function changeEntry(b) {
    b -= 2
    let numArr = []
    for (let i = 0; i < 5; i++) {
        switch (b) {
            case -2:
                b = 363
                break
            case -1:
                b = 364
                break
            case 365:
                b = 0
                break
            case 366:
                b = 1
                break
        }
        numArr.push(b)
        b++
    }
    console.log(numArr)

    let id = document.querySelector('.mainTitle')

    console.log(b)
    newLDateArr.map(x => x.innerText = dateArr[numArr[0]])
    newLTitleArr.map(x => x.innerText = data.entries[numArr[0]].title)
    newLContentArr.map(x => x.innerText = data.entries[numArr[0]].content)

    lDateArr.map(x => x.innerText = dateArr[numArr[1]])
    lTitleArr.map(x => x.innerText = data.entries[numArr[1]].title)
    lContentArr.map(x => x.innerText = data.entries[numArr[1]].content)

    mDateArr.map(x => x.innerText = dateArr[numArr[2]])
    mTitleArr.map(x => x.innerText = data.entries[numArr[2]].title)
    mContentArr.map(x => x.innerText = data.entries[numArr[2]].content)

    rDateArr.map(x => x.innerText = dateArr[numArr[3]])
    rTitleArr.map(x => x.innerText = data.entries[numArr[3]].title)
    rContentArr.map(x => x.innerText = data.entries[numArr[3]].content)

    newRDateArr.map(x => x.innerText = dateArr[numArr[4]])
    newRTitleArr.map(x => x.innerText = data.entries[numArr[4]].title)
    newRContentArr.map(x => x.innerText = data.entries[numArr[4]].content)

    id.dataset.id = numArr[2]
}








function monthChange() {
    let daySelect = document.querySelector('.day')
    let d = document.createElement('select')
    d.classList.add('day')
    d.setAttribute('name', 'day')
    let month = document.querySelector('.month').value
    let entryArr = [...data.entries]
    let monthArr = []
    for (let i = 0; i < entryArr.length; i++) {
        let b = new Date(entryArr[i].date)
        monthArr.push(b.getMonth())
    }
    // daySelect.parentNode.insertBefore(sel, daySelect.nextSibling)

    let y = 0
    for (let x = 0; x < monthArr.length; x++) {
        if (month == monthArr[x]) {
            let o = document.createElement('option')
            o.setAttribute('value', x)
            o.innerText = y + 1
            d.append(o)
            y++
        }
    } 
    daySelect.parentNode.insertBefore(d, daySelect.nextSibling)
    daySelect.remove()
}

function dateChange() {
    let day = document.querySelector('.day').value
    let preEntry = document.querySelector('.preEntry')
    let preFake = document.querySelector('.preFake')
    let mainEntry = document.querySelector('.entry')
    let postEntry = document.querySelector('.postEntry')
    let postFake = document.querySelector('.postFake')
    preEntry.classList.add('fade')
    preFake.classList.add('fade')
    mainEntry.classList.add('fade')
    postEntry.classList.add('fade')
    postFake.classList.add('fade')
    setTimeout(() => {
        changeEntry(day)
    }, "500")

    setTimeout(() => {
        preEntry.classList.remove('fade')
        preFake.classList.remove('fade')
        mainEntry.classList.remove('fade')
        postEntry.classList.remove('fade')
        postFake.classList.remove('fade')
    }, "1001")
}

// Game code
if (document.querySelector('.generatebtn') != null) {
    document.querySelector('.generatebtn').addEventListener('click', generateQuestion)
}

function generateQuestion() {
    let rand = 0
    let choices = document.querySelectorAll('.choice')
    let content = document.querySelector('.content')
    let generatebtn = document.querySelector('.generatebtn')
    let response = document.querySelector('.response')
    let choiceArray = [] //stores the random order of the answers, choiceArray[0] is always the correct answer
    let wrongArr = []

    if (response.classList.contains('correctFont')) {
        response.classList.remove('correctFont')
    }
    else {
        response.classList.remove('incorrectFont')
    }
    response.innerText = ''

    generatebtn.removeAttribute('onclick')
    generatebtn.setAttribute('disabled', 'true')

    choices.forEach(choice => {
        choice.classList.remove('correct')
        choice.classList.remove('incorrect')
        choice.classList.add('hideAnswer')
        choice.classList.add('c')
        choice.dataset.clicked = 'false'
    })
    
    for (let i = 0; i < 4; i++) {
        rand = Math.floor(Math.random() * 4)
            while (choiceArray.includes(rand)) {
                rand = Math.floor(Math.random() * 4)
            }
        choiceArray[i] = rand
    }
    let correctChoice = Math.floor(Math.random() * 364)
    // pool.splice(pool.indexOf(correctChoice), 1)
    // choices[choiceArray[0]] = data.entries[correctChoice].title
    choices[choiceArray[0]].innerText = data.entries[correctChoice].title
    choices[choiceArray[0]].dataset.ans = 'correct'
    // choices[choiceArray[0]].addEventListener('click', answer)
    choices[choiceArray[0]].classList.add('correct')
    content.innerText = data.entries[correctChoice].content

    for (let j = 1; j < 4; j++) {
        rand = Math.floor(Math.random() * 364)
        while (wrongArr.includes(rand) || rand == correctChoice) {
            rand = Math.floor(Math.random() * 364)
        }
        wrongArr.push(rand)
        // choices[choiceArray[j]] = data.entries[rand].title
        choices[choiceArray[j]].innerText = data.entries[rand].title
        choices[choiceArray[j]].dataset.ans = 'incorrect'
        choices[choiceArray[j]].setAttribute('onclick', 'answer(this)')
        choices[choiceArray[j]].classList.add('incorrect')
    }
}

document.querySelectorAll(".choice").forEach(choice =>
    choice.addEventListener("click", event => {
    
        if (choice.dataset.clicked == 'false') {
            let totalAnsweredlbl = document.querySelector('.totalAnswered')
            let totalCorrectlbl = document.querySelector('.totalCorrect')
            let generatebtn = document.querySelector('.generatebtn')
            let response = document.querySelector('.response')
            let totalAnswered = parseInt(totalAnsweredlbl.innerText)
            let totalCorrect = parseInt(totalCorrectlbl.innerText)
            let choices = document.querySelectorAll('.choice')
            choices.forEach(choice => {
                choice.classList.remove('hideAnswer')
                choice.classList.remove('c')
                choice.dataset.clicked = 'true'
            });
            if (event.target.getAttribute('data-ans') == 'correct') {
                totalCorrect++
                response.innerText = 'Correct'
                response.classList.add('correctFont')
            }
            else {
                response.innerText = 'Incorrect'
                response.classList.add('incorrectFont')
            }
            totalAnswered++
            totalAnsweredlbl.innerText = totalAnswered
            totalCorrectlbl.innerText = totalCorrect
            generatebtn.removeAttribute('disabled')
        }
}))



// View Page

let calMonth = document.querySelector('.calMonth')
let calendarBody = document.querySelector('.calendarBody')
let daySection = document.querySelector('.daySection')


document.querySelectorAll(".calMonthChange").forEach(arrow =>
    arrow.addEventListener("click", event => {
    
        
        let val = parseInt(event.target.getAttribute('data-val'))
        console.log(val)
        let monthIndex = parseInt(calMonth.dataset.index)
        let newMonth = val + monthIndex
        switch(newMonth) {
            case -1:
                newMonth = 11
                break
            case 12:
                newMonth = 0
                break
        }
        
        
                let monthLength = 0
                // find first day of month to find where to start row at
                for (let i = 0; i < fullDateArr.length; i++) {
                    if (fullDateArr[i].getMonth() == newMonth && fullDateArr[i].getDate() == 1) {
                        let monthStart = fullDateArr[i].getDay()
                        let index = i
                        while (fullDateArr[i].getMonth() == newMonth && i < fullDateArr.length - 1) {
                            monthLength++
                            i++
                        }
                        calendarBuilder(index, monthStart, monthLength, newMonth)
                        tableBuilder(index, newMonth)
                    }
                }
                calMonth.innerText = months[newMonth]
                calMonth.dataset.index = newMonth


    }))
  


    

function calendarBuilder(i, start, monthLength, newMonth) {
    calendarBody.remove()
    calendarBody = document.createElement('div')
    calendarBody.classList.add('calendarBody')
    daySection.append(calendarBody)
    calendarBody.classList.add('fadeFast')
    calMonth.classList.add('fadeFast')
    setTimeout(() => {
        calendarBody.classList.remove('fadeFast')
        calMonth.classList.remove('fadeFast')
    }, "750")
    let x = 0
    let startI = i

    while (x < monthLength + start) {
        let rowItem = document.createElement('h4')
        if (fullDateArr[i - start] != null) {
            rowItem.innerText = fullDateArr[i - start].getDate()
        }
        if (i < fullDateArr.length - 1 && fullDateArr[i - start] != null) {
            if (fullDateArr[i - start].getMonth() != fullDateArr[startI].getMonth()) {
                rowItem.classList.add('grayed')
            }
        }
        calendarBody.append(rowItem)
        i++
        x++
    }

    while (x >= monthLength + start && x % 7 != 0 && fullDateArr[i] != null) {
        let rowItem = document.createElement('h4')
        if (fullDateArr[i].getMonth() != newMonth && i - start <= 364) {
            rowItem.classList.add('grayed')
        }
        rowItem.innerText = fullDateArr[i - start].getDate()
        calendarBody.append(rowItem)
        i++
        x++
    }
}







function tableBuilder(index, newMonth) {
    console.log('hi')
    let calendarTable = document.querySelector('.calendarTable')
    let rows = document.querySelectorAll('.tableRow')

    for (let x = 0; x < rows.length; x++) {
        calendarTable.deleteRow(1)
    }

    calendarTable.classList.add('fadeFast')
    setTimeout(() => {
        calendarTable.classList.remove('fadeFast')
    }, "750")

    for (let i = index; i < fullDateArr.length; i++) {
        if (fullDateArr[i].getMonth() == newMonth) {
            let tr = document.createElement('tr')
            tr.classList.add('tableRow')
            let date = document.createElement('td')
            let title = document.createElement('td')
            let content = document.createElement('td')
            date.innerText = data.entries[i].date
            title.innerText = data.entries[i].title
            content.innerText = data.entries[i].content
            tr.append(date)
            tr.append(title)
            tr.append(content)
            calendarTable.append(tr)
        }
    }
}

// Temporary page load stuff

let choices = document.querySelector('.choices')

if (choices != null) {
    generateQuestion()
}

if (calMonth != null) {
    calendarBuilder(0, 6, 31, 0)
    tableBuilder(0, 0)
}

})
.catch(error => console.error(error));
