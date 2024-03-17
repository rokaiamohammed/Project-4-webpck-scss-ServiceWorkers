function guessAge(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('nameG').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`https://api.agify.io?name=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('age').innerHTML = res.age
    })
}

export { guessAge }
