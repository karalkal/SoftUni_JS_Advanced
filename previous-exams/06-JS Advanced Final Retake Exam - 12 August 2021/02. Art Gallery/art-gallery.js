class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!Object.keys(this.possibleArticles).includes(articleModel)) {
            throw Error("This article model is not included in this gallery!")
        }

        let foundArticle = this.listOfArticles.find(art => art.articleModel == articleModel)
        // if we have this article and the name matches => increment quantity
        if (foundArticle && foundArticle.articleName == articleName) {
            foundArticle.quantity += quantity
        }
        // otherwise (if not found article or name does not match) => push newly created object
        else {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(g => g.guestName === guestName)) {       // if already in guest list
            throw new Error(`${guestName} has already been invited.`)
        }

        let points = 50
        if (personality === 'Vip') {
            points = 500
        }
        else if (personality === 'Middle') {
            points = 250
        }

        let person = { guestName, points, purchaseArticle: 0 }
        this.guests.push(person)
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let foundArtifact = this.listOfArticles.find(art => art.articleName === articleName)
        if (!foundArtifact || foundArtifact.articleModel !== articleModel) {
            throw new Error("This article is not found.")
        }
        if (foundArtifact.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        // check if in guest list
        let buyer = this.guests.find(g => g.guestName === guestName)
        if (!buyer) {       // if not
            return "This guest is not invited."
        }

        let pointsRequired = this.possibleArticles[articleModel]
        if (pointsRequired > buyer.points) {     // if not enough points
            return "You need to more points to purchase the article."
        }
        // if all is fine
        buyer.points -= pointsRequired
        buyer.purchaseArticle += 1
        foundArtifact.quantity -= 1
        return `${guestName} successfully purchased the article worth ${pointsRequired} points.`
    }

    showGalleryInfo(criteria) {
        let result = ''
        if (criteria === "article") {
            result = "Articles information:"
            for (let art of this.listOfArticles) {
                result += `\n${art.articleModel} - ${art.articleName} - ${art.quantity}`
            }
        }
        else if (criteria === "guest") {
            result = "Guests information:"
            for (let guest of this.guests) {
                result += `\n${guest.guestName} - ${guest.purchaseArticle}`
            }
        }
        return result
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// // console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'Bay Huy'));  //not a guest
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'John'));  // second vase
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'John'));  // no more vases
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'Peter'));  // not enough dosh

// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));