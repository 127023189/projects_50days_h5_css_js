const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // + 把字符串转化为数字
        const c = +counter.innerText

        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }else{
            confirm.innerHTML = target
        }
    }

    updateCounter()

})