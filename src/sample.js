import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Post = props => {
  const post = props.data.contentfulPost
  const author = post.author
  return (
    <Layout>
      <h1>{post.title}</h1>
      {author.avatar && (
        <img width={40} src={author.avatar.fixed.src} alt={author.name} />
      )}
      <small>
        {author.name} | {post.publishedAt}
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.content.content }} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      slug
      title
      publishedAt(formatString:"YYYY/MM/DD")
      content {
        content
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        description {
          description
        }
        avatar {
          fixed {
            width
            height
            src
          }
        }
      }
    }
  }
`
