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
      <h2>You got: {result.character.name} 🎉</h2>
      <p>{result.character.description}</p>

      <h3>You traits</h3>

      
      <ul>
        {Object.entries(result.traits).map(([trait, value]) =>(
            <li key={trait}>
                {trait}: {value}
            </li>
            // <Image 
            //                     src = {question.image.src}
            //                     alt = {question.text}
            //                     width={500}
            //                     height={500}
                                
            //                     onLoad={()=>(setImageLoaded(true))}
            //                     style={{borderRadius: "12px", objectFit: "cover"}}
            //                     className="object-cover"
            //                 />
            
        ))}
      </ul>
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