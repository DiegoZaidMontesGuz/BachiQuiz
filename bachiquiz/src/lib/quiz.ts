import { characterProfile } from "@/data/character";
import { Trait } from "@/types/quiz";

export function createEmptyScores(): Record<Trait, number> {
    return{
        bravery: 0,
        emotional: 0,
        loyalty: 0,
        playfulness: 0,
        calm: 0,
        mischief: 0,
    };
}

export function calculatedResult(
    answers: Partial<Record<Trait, number>>
){
    return characterProfile
        .map((character) => {
            const distance = Object.keys(character.traits).reduce((sum, trait) => {
                const key = trait as Trait;
                return sum + Math.abs((answers[key] ?? 0) - character.traits[key]);
            }, 0);

            return { ...character, distance};
        })
        .sort((a,b) => a.distance - b.distance)[0];
}