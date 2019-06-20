export class Comment {
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
    constructor(comment, onDelete, target = document.querySelector('body')) {
        this.target = target;
        this.comment = comment;
        this.onDelete = onDelete;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const hourse = date.getHours();
        const minutes = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${hourse}:${minutes} ${day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    render() {
        this.li =  document.createElement('li');
        const div = document.createElement('div');
        const span = document.createElement('span');
        const date = document.createElement('span');
        const btn = document.createElement('button');

        btn.textContent = 'Delete';
        btn.style.backgroundColor = 'red';

        btn.addEventListener('click', () => {
            this.onDelete(this.comment.id);
        });

        date.textContent = this.formatDate(this.comment.date);
        div.textContent = this.comment.text;
        span.textContent = this.comment.author;
        
        this.li.id = this.comment.id;

        this.li.appendChild(div);
        this.li.appendChild(span);
        this.li.appendChild(date);
        this.li.appendChild(btn);

        this.target.appendChild(this.li);
    }
}