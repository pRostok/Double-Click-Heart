const divs = document.querySelectorAll('div')

divs.forEach(div => {

    const clock = document.createElement('span')
    let count = 0

    div.addEventListener('dblclick', function createHeart(e) {
        
        const heart = document.createElement('i')
        heart.classList.add('fas')
        heart.classList.add('fa-heart')

        const x = e.clientX
        const y = e.clientY
        const leftOffset = e.target.offsetLeft
        const topOffset = e.target.offsetTop

        const xInside = x - leftOffset
        const yInside = y - topOffset

        heart.style.top = `${yInside}px`
        heart.style.left = `${xInside}px`

        div.appendChild(heart)
        setTimeout(() => heart.remove(), 500)   


        count++

        div.appendChild(clock)     
        clock.classList.add('times')
        clock.innerHTML = count
                                  
    }) 
       
})




// const divs = document.querySelectorAll('div')

// const arr = [divs]
// console.log('zero log', arr)              /* Zero log */

// for (let i = 0; i < divs.length; i++) {

//     console.log('first log', i)                         /* First log */
//     const clock = document.createElement('span')

//     let count = 0

//     divs[i].addEventListener('dblclick', (e) => {
//         ////////////////////////////////////////////////////////////////////////////////////////
//         const heart = document.createElement('i')
//         heart.classList.add('fas')
//         heart.classList.add('fa-heart')

//         const x = e.clientX
//         const y = e.clientY
//         const leftOffset = e.target.offsetLeft
//         const topOffset = e.target.offsetTop
//         /*function createHeart*/
//         const xInside = x - leftOffset
//         const yInside = y - topOffset

//         heart.style.top = `${yInside}px`
//         heart.style.left = `${xInside}px`

//         divs[i].appendChild(heart)
//         setTimeout(() => heart.remove(), 500)
//         ////////////////////////////////////////////////////////////////////////////////////////

//         count++;

//         divs[i].appendChild(clock)
//         clock.classList.add('times')
//         clock.innerHTML = count

//         console.log('second log', i)                     /* Second log */
//     })

// }

// function createHeart(e) {
//     const heart = document.createElement('i')
//     heart.classList.add('fas')
//     heart.classList.add('fa-heart')

//     const x = e.clientX
//     const y = e.clientY
//     const leftOffset = e.target.offsetLeft
//     const topOffset = e.target.offsetTop

//     const xInside = x - leftOffset
//     const yInside = y - topOffset

//     heart.style.top = `${yInside}px`
//     heart.style.left = `${xInside}px`

//     divs[i].appendChild(heart)
//     setTimeout(() => heart.remove(), 500)
// }
