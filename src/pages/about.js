// import React from 'react'
// import Layout from "../components/layout"
// import { graphql } from 'gatsby'

// const AboutPage = ({data}) => {
//     return(
//         <div>
//           <Layout>
//             <h2>{data.site.siteMetadata.title}</h2>
//             <p>Flamingod Newsはアメリカの最新ウェブ開発技術を日本語でエンジニア向けにお届けします。</p>
//           </Layout>
//         </div>
//     )
// }

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// export default AboutPage




import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const About = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <h1>About page</h1>
        <table>
          <thead>
            <tr>
              <th>パス</th>
              <th>サイズ</th>
              <th>作成時間</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.nodes.map(node => (
              <tr>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.ctime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        relativePath
        size
        name
        extension
        ctime
      }
    }
  }
`
export default About