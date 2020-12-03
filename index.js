const URL = 'http://localhost:3000/'

const header = (method, body = {}) => {
    return {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

const animationForm = () => {

}

const userForm = () => {
    form = document.getElementById('user-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        name = e.target.name.value
        fetch(`${URL}users`, header('POST', {
                name: name
            }))
            .then(r => r.json())
            .then(user => {
                u = new User({ id: user.id, name: user.name, animations: user.animations })
                u.renderUser()
                u.createAnimationForm()
            })
    })

}


const buildPage = () => {
    userForm()

}

document.addEventListener('DOMContentLoaded', buildPage)