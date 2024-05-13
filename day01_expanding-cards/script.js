const panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
    //清除样式
    panel.addEventListener('click',() =>{
    removeActiveClasses()
    //点击激活
    panel.classList.add('active')  
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}