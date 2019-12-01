import React, { Component } from 'react'

export default class Posts extends Component {
    constructor() {
        super()
        this.state = {posts: []}
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.setState({posts: data})
    }
    
    render() {
        return (
            <div>
                <h3 className="display-2">Posts</h3>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id} className="container border m-2 mx-auto">
                            <h3 className="display-4 p-2 mb-0 border-bottom">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
                            <p className="lead text-muted p-2 mb-0"><em>Posted by user: {post.userId}</em></p>
                            <p className="lead p-2">{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
