type Props = {
  result: {
    pokemon: {
        name: string;
        description: string;
    };
    traits: Record<string, number>
  };
};

export default function ResultCard({ result }: Props) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>You got: {result.pokemon.name} 🎉</h2>
      <p>{result.pokemon.description}</p>

      <h3>You traits</h3>
      <ul>
        {Object.entries(result.traits).map(([trait, value]) =>(
            <li key={trait}>
                {trait}: {value}
            </li>
        ))}
      </ul>
    </div>
  );
}