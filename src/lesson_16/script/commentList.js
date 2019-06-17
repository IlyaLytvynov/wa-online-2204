class Comment {
    /***
     * @param comment
     * { 
     *   author: string
     *   text: string
     *   id: string
     *   date: Date
     * }
     * 
     */
    constructor(target = document.querySelector('body'), comment) {
        this.target = target;
        this.comment = comment;
    }

    render() {
        this.li =  document.createElement('li');
        const div = document.createElement('div');
        const span = document.createElement('span');
        div.textContent = this.comment.text;
        span.textContent = this.comment.author;
        this.li.appendChild(div);
        this.li.appendChild(span);
        this.target.appendChild(this.li);
    }
}


export class CommentList {
    constructor(target = document.querySelector('body')) {
        this.target = target;
        this.comments = [];
        this.fetchComments();
    }

    render() {
        this.ul = document.createElement('ul');

        for (const comment of this.comments) {
            const el = new Comment(this.ul, comment);
            el.render();
        }

        this.target.appendChild(this.ul);
    }

    fetchComments() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://evening-dawn-11092.herokuapp.com/comments');
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                console.log(xhr);
                if (xhr.status === 200) {
                    console.log(typeof xhr.response);
                    this.comments = JSON.parse(xhr.response);
                    this.render();
                }
            }
        });
    }
}