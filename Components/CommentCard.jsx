import React from "react";

function CommentCard({comment}) {
    return (
        <div className="comment">
            <p>{comment.body}</p>
        </div>
    )
}
export default CommentCard