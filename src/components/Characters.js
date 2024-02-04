import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

function Characters() {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading characters...</p>;
    if (error) return <p>Error fetching characters</p>;

    return (
        <div>
            <h2>Character List</h2>
            <ul className="characters-grid">
                {data.characters.results.map((character) => (
                    <li key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <div>
                            <strong>{character.name}</strong>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Characters;
