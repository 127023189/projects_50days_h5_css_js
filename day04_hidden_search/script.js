const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener('click',() => {
    search.classList.toggle('active') // 有则删除，无则添加
    input.focus()
})