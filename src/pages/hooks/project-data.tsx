import { useStaticQuery, graphql } from "gatsby";

export const useProjectData = () => {
    const { data } = useStaticQuery(graphql`
        query MyQuery {
            allDataJson {
                edges {
                    node {
                        byline
                        category
                        date
                        slug
                        title
                    }
                }
            }
        }
    `)

    return(data.edges);
}
