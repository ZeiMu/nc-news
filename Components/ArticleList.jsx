import React from 'react'

function ArticleList({articles}) {
    // console.log("ArticleList rendered")
    // console.log("Articles prop", articles)
    return (
        <div>
            <h2>Articles List</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>Author: {article.author}</p>
                        <p>{article.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleList