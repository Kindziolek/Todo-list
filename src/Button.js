class Button {
    constructor(laber, onClick) {
        this.label = this.label
        this.onClick = onClick
    }

    render() {
        const button = document.createElement('button')

        button.inneText = this.label
        
        button.addEventListener('click', () => this.onClick())

        return button
    }

}

