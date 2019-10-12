import { graphql, useStaticQuery } from "gatsby"

const useInstagram = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allInstaNode(limit: 12) {
  //       nodes {
  //         id
  //         caption
  //         username
  //         localFile {
  //           childImageSharp {
  //             fluid(maxWidth: 300, maxHeight: 300) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = {
    allInstaNode: {
      nodes: [
        {
          childImageSharp: null,
          id: 0,
          caption: "no internet",
          username: "noInternet",
        },
      ],
    },
  }

  return data.allInstaNode.nodes.map((node: any) => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }))
}

export default useInstagram
