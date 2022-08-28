//parent element of the dropdown list
const dropdowns = document.querySelectorAll('.dropdown')

//looping through the dropdown list elements
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')

    //click event for the button, arrow "caret" and to open the menu
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })

    //looping through the list options and adding click event to them
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
            //To remove the styling from previous selected option and add the styling to the new selected option
            options.forEach(option => {
                option.classList.remove('active');
            })
            option.classList.add('active')
        })
    })
})
