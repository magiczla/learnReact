import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const authorName = "Liean Zheng"
        return (
            <React.Fragment>
                <Article 
                title={"React comp."}
                order={3}
                isPublished={true}
                author={authorName}
                />
                <Article title={"React ABC."}/>
                <Article title={"リアクトル."}/>
            </React.Fragment>
        );
    }
}

export default Blog;