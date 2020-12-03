class User {
    constructor(id, name, animations) {
        this.id = id;
        this.name = name;
        this.animations = animations
    }

    renderUser() {
        const animationlist = document.getElementById('animation-list')
        const h3 = document.createElement('h3')
        const button = document.createElement('button')
        button.textContent = "Create New Countdown"
        button.addEventListener('click', (e) => {
            console.log(e)
        })
        h3.textContent = this.id.name + "'s animations"
        h3.appendChild(button)
        animationlist.appendChild(h3)
    }
    createAnimationForm() {
        const userid = this.id.id
        form = document.getElementById('animation-form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const user_id = userid
            const nickname = e.target.nickname.value
            const length = e.target.length.value
            const song = e.target.song.value
            const background = e.target.background.value
            console.log(user_id, nickname, length, song, background)
        })
    }

}