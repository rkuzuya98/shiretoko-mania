// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage


import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"

const HomePage = ({data}) =>{
    return(
        <div>
            <Layout>
            <h1>Gatsbyjsで作る最初のページ</h1>
            <h2>Gatsbyjsをマスターしよう！</h2>

            {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}

            </Layout>
        </div>
    )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        html
        timeToRead
        frontmatter {
          date
          title
        }
      }
    }
  }
`

export default HomePage
