let button= document.getElementById('button')
let Contacts= document.getElementById('Contacts')
let x= document.getElementById('x')

display=false 

button.addEventListener('click', function name(params) {
    if (!display) {
        Contacts.style.display='block'
        return display=true
    }
})

x.addEventListener('click', function name(params) {
    if (display) {
        Contacts.style.display='none'
        return display=false
    }
})