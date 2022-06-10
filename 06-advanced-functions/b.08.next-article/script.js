function getArticleGenerator(articles) {
    return shiftNextArticle

    function shiftNextArticle() {
        let nextArticle = articles.shift()
        if (nextArticle) {
            let articleElement = document.createElement('article')
            articleElement.textContent = nextArticle
            document.getElementById("content").appendChild(articleElement)
        }
    }
}