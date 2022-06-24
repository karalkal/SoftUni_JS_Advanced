class Story {

    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }
        if (username === this.creator) {
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
        this._likes.splice(this._likes.indexOf(username), 1)
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let foundComment = this._comments.find(cmnt => cmnt.id === id)

        // if no such comment exists (or if id arg is undefined as array will only contain comments with ids)
        // create it
        if (!foundComment) {
            let newID = this._comments.length + 1
            let newComment = {
                id: newID,
                username,
                content,
                replies: []
            }

            this._comments.push(newComment)
            return `${username} commented on ${this.title}`
        }
        // if exists, add reply to it
        let replyID = foundComment.id + '.' + (foundComment.replies.length + 1)
        let reply = { replyID, username, content }
        foundComment.replies.push(reply)
        return "You replied successfully"
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`

        if (sortingType === 'asc') {
            for (let cmnt of this._comments) {
                result += `\n-- ${cmnt.id}. ${cmnt.username}: ${cmnt.content}`

                for (let rpl of cmnt.replies) {
                    result += `\n--- ${rpl.replyID}. ${rpl.username}: ${rpl.content}`
                }
            }
        }

        else if (sortingType === 'desc') {
            // sort comments
            let sortedComments = this._comments
                .sort((cmnt1, cmnt2) => cmnt2.id - cmnt1.id)

            for (let cmnt of sortedComments) {
                // add them one by one
                result += `\n-- ${cmnt.id}. ${cmnt.username}: ${cmnt.content}`

                // sort replies
                if (cmnt.replies) {
                    let sortedReplies = cmnt.replies
                        .sort((rpl1, rpl2) => rpl2.replyID - rpl1.replyID)

                    // add them one by one
                    for (let rpl of sortedReplies) {
                        result += `\n--- ${rpl.replyID}. ${rpl.username}: ${rpl.content}`
                    }
                }
            }
        }

        else if (sortingType === 'username') {
            // sort comments
            let sortedComments = this._comments
                .sort((cmnt1, cmnt2) => cmnt1.username.localeCompare(cmnt2.username))

            for (let cmnt of sortedComments) {
                // add them one by one
                result += `\n-- ${cmnt.id}. ${cmnt.username}: ${cmnt.content}`

                // sort replies
                if (cmnt.replies) {
                    let sortedReplies = cmnt.replies
                        .sort((rpl1, rpl2) => rpl1.username.localeCompare(rpl2.username))

                    // add them one by one
                    for (let rpl of sortedReplies) {
                        result += `\n--- ${rpl.replyID}. ${rpl.username}: ${rpl.content}`
                    }
                }
            }
        }

        return result
    }
}



// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// console.log()
// console.log(art.comment("Sammy", "Some Content"))
// console.log(art.comment("Ammy", "New Content"));
// console.log(art.comment("Zane", "Reply", 1));
// console.log()
// console.log(art.comment("Jessy", "Nice :)"));
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log(art.like("Zane"))
// console.log()
// console.log(art.toString('asc'));
// console.log()
// console.log(art.dislike("Zane"))
// console.log()
// console.log(art.toString('asc'));
// console.log(art.toString('desc'));


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
console.log(art.like("Ivan"));
// console.log(art.like("Ivan"));
// console.log(art.like("Anny"));
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
// console.log(art.dislike("John"));
console.log(art.dislike("Ivan"));
console.log(art.likes);

console.log('#######################')

art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));