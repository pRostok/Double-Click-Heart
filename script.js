
const total = document.getElementById('total')
 
const duplicateDivs = (a) => {
    
    let DivTag = '';
   
    for (let i = 1; i <= a; i++){
        DivTag += `<div class="cat" id='cat${i}' style="background: url(folder/c${i}.webp) no-repeat center center/cover;"></div>`;
        
    }
    document.getElementById('cats').innerHTML = DivTag;       
};

duplicateDivs(16)

const divs = document.querySelectorAll('div')

divs.forEach(div => {
    
    const indClick = document.createElement('span')   

    let count = 0
    div.appendChild(indClick)
    indClick.classList.add('times')
    indClick.innerHTML = count   
    
    const icon = document.createElement('i')
    icon.classList.add('fa-brands')
    icon.classList.add('fa-gratipay')
    div.appendChild(icon)


    div.addEventListener('dblclick', function createHeart(e) {
        
        const heart = document.createElement('i')
        heart.classList.add('fas')
        heart.classList.add('fa-heart')

        const x = e.clientX
        const y = e.clientY

        const leftOffset = e.target.offsetLeft
        const topOffset = e.offsetTop

        const xInside = x - leftOffset
        const yInside = y - topOffset

        heart.style.top = `${yInside}px`
        heart.style.left = `${xInside}px`

        div.appendChild(heart)
        setTimeout(() => heart.remove(), 500)  

        count++
        indClick.innerHTML = count      
        
        total.innerHTML = ++total.innerHTML
           
    })     
})







