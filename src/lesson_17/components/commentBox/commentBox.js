import { Comment } from '../comment/comment';
import { NewCommentForm } from '../newCommentForm/newCommentForm';
import { ApiRequest } from '../../utils/apiRequest';

import './commentBox.scss';

export class CommentBox {
    constructor(target = document.querySelector('body')) {
        this.target = target;
        this.comments = [];
        this.apiRequest = new ApiRequest('https://evening-dawn-11092.herokuapp.com');
        this.addComment = this.addComment.bind(this);
        this.fetchComments();
    }

    deleteComment(id) {
        console.log('I\'m in COMMENT LIST!! My id is ', id);
        this.apiRequest.delete(`/comments/${id}`, () => {
            console.log(this);
            this.comments = this.comments.filter((comment) =>  comment.id !== id);
            this.renderList();
        }, () => {
            alert(e);
        });
    }
    /**
     * @param {Object} requestData
     * @param {string} requestData.author
     * @param {string} requestData.text
     */
    addComment(requestData) {
        this.apiRequest.post(`/comments`, requestData, (response) => {
            const comment = JSON.parse(response);
            this.comments.push(comment);
            this.renderList();
        }, () => {
            alert(e);
        });
    }

    render() {
        this.form = new NewCommentForm(this.addComment, this.target);;
        this.ul = document.createElement('ul');
        this.renderList();

        this.target.appendChild(this.ul);
    }

    renderList() {
        this.ul.innerHTML = '';
        for (const comment of this.comments) {
            const el = new Comment(comment, (id) => {
                this.deleteComment(id)
            }, this.ul);

            el.render();
        }
    }

    fetchComments() {
        const successCallback = (response) => {
            this.comments = JSON.parse(response);
            this.render();
        };

        const errorCallback = (error) => {
            alert('Oops!, Something went wrong, we are working on fix!')
        };

        this.apiRequest.get('/comments', successCallback, errorCallback);
    }
}