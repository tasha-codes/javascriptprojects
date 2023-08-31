let scoreElHome = document.getElementById("score-home")
let scoreElGuest = document.getElementById("score-guest")


let score = 0
let score_guest = 0

function addOne(){
    total = score += 1
    scoreElHome.textContent = total

}

function addTwo(){
    total = score += 2
    scoreElHome.textContent = total
}

function addThree(){
    total = score += 3
    scoreElHome.textContent = total
}

function addOne_guest(){
    totalg = score_guest += 1
    scoreElGuest.textContent = totalg
}

function addTwo_guest(){
    total = score_guest += 2
    scoreElGuest.textContent = total
}

function addThree_guest(){
    total = score_guest += 3
    scoreElGuest.textContent = total
}

function reset(){
    score = 0
    score_guest = 0
    
    scoreElHome.textContent = "0"
    scoreElGuest.textContent = "0"
}