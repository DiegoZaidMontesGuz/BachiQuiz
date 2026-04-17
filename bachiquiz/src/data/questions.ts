import { Question } from "@/types/quiz";
import { text } from "stream/consumers";

export const questions: Question[] = [
    {
        id: 1,
        text: "How do you aproach a challenge?",
        options: [
            {text: "Jump Right in", effects: {bravery: 2, mischief: 2}},
            {text: "Think it through", effects: { emotional: 2, calm: 1}},
            {text: "Ask a friend for help", effects: { loyalty: 2, playfulness: 1}},
            {text: "wait and observe", effects: { calm: 2, mischief: 1}},
        ],
        image:{
            src: "/images/chihiro.webp",
            alt: "papa"
        }
        
    },
    {
        id: 2,
        text: "I care what people think of me",
        options: [
            {text: "Strongly agree", effects: {calm: 2, loyalty: 1}},
            {text: "Agree", effects: { calm: 1, emotional: 1}},
            {text: "disagree", effects: { bravery: 1, playfulness: 1}},
            {text: "Strongly disagree", effects: { bravery: 2, mischief:1}},
        ],
        
    },
    {
        id: 3,
        text: "I would describe myself as a: ",
        options: [
            {text: "Introvert", effects: {calm: 2, emotional: 1}},
            {text: "Extrovert", effects: { playfulness: 2, bravery: 1}},
        ],
        
    },
    {
        id: 4,
        text: "Favorite type of music",
        options: [
            {text: "Rock/Metal", effects: {bravery: 1, mischief: 1}},
            {text: "HipHop", effects: { bravery: 2, playfulness: 1}},
            {text: "Pop", effects: {  playfulness: 2, emotional: 2}},
            {text: "Jazz", effects: { calm: 2, loyalty: 1}},
        ],
        
    },  
    {
        id: 5,
        text:"In my free time I like to ...",
        options: [
            {text: "PLay sports", effects: {playfulness: 2, bravery: 1}},
            {text: "Go to the movie theater", effects: { loyalty: 1, playfulness: 1}},
            {text: "Go to a concert", effects: {  playfulness: 2, mischief: 1}},
            {text: "Stay inside and watch movies", effects: { calm: 2, loyalty: 1}},
        ],
        
    },  
    {
        id: 6,
        text:"My favorite ninja turtle is",
        options: [
            {text: "Leonardo", effects: {calm: 2, bravery: 1}},
            {text: "Raphael", effects: { mischief: 1, playfulness: 1}},
            {text: "Michelangelo", effects: {  playfulness: 2}},
            {text: "Donatello", effects: { calm: 2, emotional: 1}},
        ],
        
    },  
    {
        id: 7,
        text:"My Ideal House is ...",
        options: [
            {text: "A confortable aparment in a big city", effects: {calm: 2, bravery: 1, mischief:1}},
            {text: "A big house in the suburbs", effects: { mischief: 1, playfulness: 1}},
            {text: "A house in a nice rural town", effects: {  playfulness: 2}},
            {text: "A big mansion with a big garden", effects: { calm: 2, emotional: 1}},
        ],
        
    },
    {
        id: 8,
        text:"I am a patient person",
        options: [
            {text: "Strongly agree", effects: {calm: 2, loyalty: 1}},
            {text: "Agree", effects: { calm: 1, emotional: 1}},
            {text: "disagree", effects: { bravery: 1, playfulness: 1}},
            {text: "Strongly disagree", effects: { bravery: 1, mischief: 2}},
        ],
        
    },
    {
        id: 9,
        text:"I belive in the horoscope",
        options: [
            {text: "Strongly agree", effects: {emotional: 2}},
            {text: "Agree", effects: { emotional: 1, playfulness: 2}},
            {text: "disagree", effects: { bravery: 1, playfulness: 1}},
            {text: "Strongly disagree", effects: { bravery: 2}},
        ],
        
    },
    {
        id: 10,
        text:"Tradition is very important to me",
        options: [
            {text: "Strongly agree", effects: {emotional: 2, loyalty: 2}},
            {text: "Agree", effects: { emotional: 1, loyalty: 1}},
            {text: "disagree", effects: { calm: 1, bravery: 1}},
            {text: "Strongly disagree", effects: { mischief: 1, bravery: 1}},
        ],
        
    },
];