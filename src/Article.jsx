import React from 'react';

const Article = (props) => {
    let published = "";
    if(props.isPublished){
        published="公開";
    }else{
        published="未公開";
    }
    return (
        <div>
            <h2>Title : {props.title} </h2>
            <p>順番：{props.order}</p>
            <p>著者：{props.author}</p>
            <p>公開：{published}</p>
        </div>
    )
}

export default Article;