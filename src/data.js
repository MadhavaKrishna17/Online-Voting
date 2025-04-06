import Thumbnail from './assets/Delhi1.png'
import Thumbnail2 from './assets/Maharstra.jpg'
import Thumbnail3 from './assets/UP.jpg'
import Candidate1 from './assets/aka1.png'
import Candidate2 from './assets/rekha.jpg'
import Candidate3 from './assets/deva2.jpg'
import Candidate4 from './assets/uddav.jpeg'
import Candidate5 from './assets/yogi.png'
import Candidate6 from './assets/Mayawati.jpg'

export const elections =[
    {
    id: "e1",
    title: "Delhi Assembly Elections 2025",
    description: `The Delhi Assembly elections were held to elect the government for the National Capital Territory. The main contenders were AAP, BJP, and Congress, with key issues including development, education, healthcare, pollution, and law & order. The election saw intense campaigning, with parties focusing on governance, infrastructure, and welfare schemes. The results determined the political leadership of Delhi for the next term.`,
    thumbnail: Thumbnail,
    candidates:["c1", "c2"],
    voters:[]
    },
    {
    id: "e2",
    title: "Maharashtra Assembly Elections 2024",
    description: `The Maharashtra Assembly elections were crucial for determining the next government in the state. The main political battle was between the Maha Yuti alliance (BJP, Shiv Sena - Eknath Shinde faction, and NCP - Ajit Pawar faction) and the Maha Vikas Aghadi (MVA) alliance (Congress, Shiv Sena - Uddhav Thackeray faction, and NCP - Sharad Pawar faction).`,
    thumbnail: Thumbnail2,
    candidates:["c3", "c4"],
    voters:[]
    },
    {
    id: "e3",
    title: "Uttar Pradesh Assembly Elections 2024",
    description: `The Uttar Pradesh Legislative Assembly elections of 2022 were pivotal in shaping the state's political landscape. The primary contenders were the Bharatiya Janata Party (BJP), the Samajwadi Party (SP), the Bahujan Samaj Party (BSP), and the Indian National Congress (INC).`,
    thumbnail: Thumbnail3,
    candidates:["c5", "c6"],
    voters:[]
    },
]

export const candidates = [
  
    {
        id:"c1",
        fullName:"Rekha Gupta",
        party:"BJP",
        image:Candidate2,
        motto:`Sabko Dekha, aa gayi Rekha`,
        voteCount:28,
        election:"e1"
    },
    {
        id:"c2",
        fullName:"Arvind Kejriwal",
        party:"AAP",
        image:Candidate1,
        motto:`Paani, Bijli, Shiksha, Swasthya`,
        voteCount:16,
        election:"e1"
    },
    {
        id:"c3",
        fullName:"Devendra Fadnavis",
        party:"BJP",
        image: Candidate3,
        motto:`Ek hain toh safe hain`,
        voteCount:32,
        election:"e2"
    },
    {
        id:"c4",
        fullName:"Uddav Thackrey",
        party:"Shiv Sena UBT",
        image:Candidate4,
        motto:`Ekla Chalo`,
        voteCount:8,
        election:"e2"
    },
    {
        id:"c5",
        fullName:"Yogi Adityanath",
        party:"BJP",
        image:Candidate5,
        motto:`Batenge Toh Katenge`,
        voteCount:42,
        election:"e3"
    },
    {
        id:"c6",
        fullName:"Mayawathi",
        party:"BSP",
        image:Candidate6,
        motto:`Brahmin Shankh Bajayega, Haathi Dilli Jayega`,
        voteCount:18,
        election:"e3"
    },
    

]

export const voters = [


    {
        id:"v1",
        fullName: "Madhavkrish",
        email: "madhavkrish@gmail.com",
        password:"P$krish123",
        isAdmin:true,
        votedElections:["e2"]
    
    },

    {
        id:"v2",
        fullName: "Mkrish",
        email: "mkrish@gmail.com",
        password:"P$krish123",
        isAdmin:false,
        votedElections:["e1","e2"]
    
    },

    {
        id:"v3",
        fullName: "krish",
        email: "krish@gmail.com",
        password:"P$krish123",
        isAdmin:false,
        votedElections:["e1","e2"]
    
    },

    {
        id:"v4",
        fullName: "krishna",
        email: "krishna@gmail.com",
        password:"P$krishna123",
        isAdmin:true,
        votedElections:["e3"]
    
    },







]










