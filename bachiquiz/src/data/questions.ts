import { Question } from "@/types/quiz";
import { text } from "stream/consumers";

export const questions: Question[] = [
    {
        id: 1,
        text: "How do you aproach a challenge?",
        options: [
            {text: "Jump Right in", effects: {bravery: 2, mischief: 2}},
            {text: "Think it through", effects: { emotional: 2, calm: 1, curiosity: 2}},
            {text: "Ask a friend for help", effects: { loyalty: 2, playfulness: 1, curiosity: 2}},
            {text: "wait and observe", effects: { calm: 2, mischief: 1, curiosity: 2}},
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
            {text: "Strongly agree", effects: {calm: 2, loyalty: 1, curiosity: 1}},
            {text: "Agree", effects: { calm: 1, emotional: 1}},
            {text: "disagree", effects: { bravery: 1, playfulness: 1}},
            {text: "Strongly disagree", effects: { bravery: 2, mischief:1}},
        ],
        image:{
            src: "/images/hakuri.webp",
            alt :"Hakuri"
        }
        
    },
    {
        id: 3,
        text: "I would describe myself as a: ",
        options: [
            {text: "Introvert", effects: {calm: 2, emotional: 1}},
            {text: "Extrovert", effects: { playfulness: 2, bravery: 1}},
        ],
        image:{
            src: "/images/ikuto.webp",
            alt :"Ikuto"
        }
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
        image:{
            src: "/images/char.webp",
            alt :"Char"
        }
    },  
    {
        id: 5,
        text:"In my free time I like to ...",
        options: [
            {text: "Play sports", effects: {playfulness: 2, bravery: 1}},
            {text: "Go to the movie theater", effects: { loyalty: 1, playfulness: 1, curiosity: 1}},
            {text: "Go to a concert", effects: {  playfulness: 2, mischief: 1}},
            {text: "Stay inside and watch movies", effects: { calm: 2, loyalty: 1, curiosity: 1}},
        ],
        image:{
            src: "/images/itsuo.webp",
            alt :"Itsuo"
        }
        
    },  
    {
        id: 6,
        text:"My favorite ninja turtle is",
        options: [
            {text: "Leonardo", effects: {calm: 2, bravery: 1}},
            {text: "Raphael", effects: { mischief: 1, playfulness: 1}},
            {text: "Michelangelo", effects: {  playfulness: 2}},
            {text: "Donatello", effects: { calm: 2, emotional: 1, curiosity: 1}},
        ],
        image:{
            src: "/images/inazuma.png",
            alt :"Mr. Inazuma"
        }
        
    },  
    {
        id: 7,
        text:"My Ideal House is ...",
        options: [
            {text: "A confortable aparment in a big city", effects: {calm: 2, bravery: 1, mischief:1, curiosity: 1}},
            {text: "A big house in the suburbs", effects: { mischief: 1, playfulness: 1}},
            {text: "A house in a nice rural town", effects: {  playfulness: 2}},
            {text: "A big mansion with a big garden", effects: { calm: 2, emotional: 1}},
        ],
        image:{
            src: "/images/kyora.png",
            alt :"Hakuri"
        }
        
    },
    {
        id: 8,
        text:"I am a patient person",
        options: [
            {text: "Strongly agree", effects: {calm: 2, loyalty: 1, curiosity: 1}},
            {text: "Agree", effects: { calm: 1, emotional: 1}},
            {text: "disagree", effects: { bravery: 1, playfulness: 1}},
            {text: "Strongly disagree", effects: { bravery: 1, mischief: 2}},
        ],
        image:{
            src: "/images/kunishige.webp",
            alt :"Kunishige"
        }
        
    },
    {
        id: 9,
        text:"I belive in the horoscope",
        options: [
            {text: "Strongly agree", effects: {emotional: 2}},
            {text: "Agree", effects: { emotional: 1, playfulness: 2, curiosity: 1}},
            {text: "disagree", effects: { bravery: 1, playfulness: 1}},
            {text: "Strongly disagree", effects: { bravery: 2}},
        ],
        image:{
            src: "/images/tenri.webp",
            alt :"Tenri"
        }
        
    },
    {
        id: 10,
        text:"Tradition is very important to me",
        options: [
            {text: "Strongly agree", effects: {emotional: 2, loyalty: 2}},
            {text: "Agree", effects: { emotional: 1, loyalty: 1}},
            {text: "disagree", effects: { calm: 1, bravery: 1, curiosity: 1}},
            {text: "Strongly disagree", effects: { mischief: 1, bravery: 1, curiosity: 2}},
        ],
        image:{
            src: "/images/soya.webp",
            alt :"Soya"
        }
    },

    {
        id: 11,
        text: "What type of books do you prefer to read?",
        options:[
            {text: "History books", effects: {calm: 1, curiosity: 2}},
            {text: "Self-help books", effects: {calm: 2, emotional:1}},
            {text: "Fiction", effects: {playfulness: 1, emotional: 1} },
            {text: "I do not read books", effects:{mischief: 2}}
        ],
        image:{
            src :"/images/ro.webp",
            alt: "Ro"
        }
    },
    {
        id: 12,
        text: "My ideal pet is: ",
        options:[
            {text: "A cat/dog", effects: {playfulness: 2, loyalty: 2, bravery: 1}},
            {text: "A fish", effects: {calm: 2}},
            {text: "A bird", effects: {emotional: 1, playfulness: 1} },
            {text: "A rodent", effects:{emotional: 1, curiosity: 1}}
        ],
        image:{
            src :"/images/azami.webp",
            alt: "Azami"
        }
    },
    {
        id: 13,
        text: "My favorite season is: ",
        options:[
            {text: "Summer", effects: {playfulness: 1, bravery: 1}},
            {text: "Winter", effects: {calm: 2,}},
            {text: "Spring", effects: {emotional: 1, playfulness: 1} },
            {text: "Fall", effects:{emotional: 1, calm: 1}}
        ],
        image:{
            src :"/images/iori.webp",
            alt: "Ro"
        }
    },
    {
        id: 14,
        text: "I truly love Kunishige Rokuhira",
        options:[
            {text: "Agree", effects: {loyalty: 2, bravery: 1}},
            {text: "Disagree", effects: {mischief: 2,}},
            
        ],
        image:{
            src :"/images/sojo.webp",
            alt: "Sojo"
        }
    },
    {
        id: 15,
        text: "You get 1,000,000 dollars but 10 random people around the world die",
        options:[
            {text: "I wont get the money I have morals >:(", effects: {loyalty: 2, emotional: 2}},
            {text: "Give me the money >:)", effects: {mischief: 2}},
        ],
        image:{
            src :"/images/hokuto.webp",
            alt: "Hokuto"
        }
    },
    {
        id: 16,
        text: "Is Shiba a fraud?",
        specialMode: "rejectWrongAnswer",
        options:[
            {text: "No", effects: {loyalty: 2, emotional: 2}},
            {text: "Yes", effects: {mischief: 2}},
        ],
        
        image:{
            src :"/images/shiba.webp",
            alt: "Shiba"
        }
    },

];