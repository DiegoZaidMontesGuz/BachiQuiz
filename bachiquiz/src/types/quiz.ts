import { text } from "stream/consumers";

export type Trait =
    | "bravery"
    | "emotional"
    | "loyalty"
    | "playfulness"
    | "calm"
    | "mischief"
    | "curiosity";

export type specialMode = "rejectWrongAnswer";

export type AnswerOption = {
    text: string;
    effects: Partial<Record<Trait, number>>;
};

export type Question = {
    id: number;
    text: string;
    specialMode?: specialMode;
    rejectOptionIndex?: number;
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

// export const defaultSettings: Question = {
//     id: 1,
//     text: '',
//     specialMode: "nomalMode",
//     image:{
//         src: '',
//         alt: ''
//     },
//     options: [{text: "", effects: {}},   ],

// }