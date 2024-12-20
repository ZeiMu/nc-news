import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList({articles}) {
    // console.log("ArticleList rendered")
    // console.log("Articles prop", articles)
    return (
        <div className='article list'>
            <h2>Articles</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
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