const smallCups = document.querySelectorAll('.cup-small')
console.log(smallCups.length);

const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,index) => {
    cup.addEventListener('click', () => HighlightCups(index))
})

function HighlightCups(idx){
    if(idx === 7 && smallCups[idx].classList.contains('full')){
        idx --;
    }//

    smallCups.forEach((cup,index) => {
            if(index <= idx){
                cup.classList.add('full')
            }else{
                cup.classList.remove('full')
            }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups  = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    console.log(fullCups, totalCups);
    

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}