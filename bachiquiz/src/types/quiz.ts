export type Trait =
    | "bravery"
    | "emotional"
    | "loyalty"
    | "playfulness"
    | "calm"
    | "mischief"
    | "curiosity";

export type AnswerOption = {
    text: string;
    effects: Partial<Record<Trait, number>>;
};

export type Question = {
    id: number;
    text: string;
    image?: {
        src: string;
        alt: string;
    };
    options: AnswerOption[];
};

export type BachiProfile = {
    id: number;
    name: string;
    traits: Record<Trait, number>;
    description: string;
};