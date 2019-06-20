export class NewCommentForm {
    constructor(onSubmit, target = document.querySelector('body')) {
        this.target = target;
        this.onSubmit = onSubmit;
        this.render()
    }

    render() {
        this.form = document.createElement('form');
        this.inputAuthor = document.createElement('input');
        this.inputText = document.createElement('input');
        this.btn = document.createElement('button');

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const requestData = {
                "author": this.inputAuthor.value,
                "text": this.inputText.value
            };
            
            this.onSubmit(requestData)
        })
        this.form.appendChild(this.inputAuthor);
        this.form.appendChild(this.inputText);
        this.form.appendChild(this.btn);
        this.target.appendChild(this.form);
    }
}