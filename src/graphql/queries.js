import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
            results {
                id
                name
                status
                species
                image
            }
        }
    }
`;
