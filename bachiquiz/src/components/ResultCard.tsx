import Image from "next/image";

type Props = {
  result: {
    character: {
        name: string;
        description: string;
        image: {
          src: string;
          alt: string;
    };
    };
    traits: Record<string, number>
  };
};

export default function ResultCard({ result }: Props) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800 mb-6">You got: {result.character.name} </h2>
      <p>{result.character.description}</p>

      {/* <h3 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800 mb-6">You traits</h3>

      
      <ul>
        {Object.entries(result.traits).map(([trait, value]) =>(
            <li key={trait}>
                {trait}: {value}
            </li>
            
            
        ))}
      </ul> */}
      <Image
        src = {result.character.image?.src}
        alt ={result.character.image?.alt}
        width ={500}
        height={500}
        className="mx-auto mb-4"
        />

      
    </div>
  );
}