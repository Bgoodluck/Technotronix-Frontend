import benz from '../assets/Benz.jpg'
import lexus from '../assets/lexus-banner.jpg';
import jeep from '../assets/Lexus.jpg';
import hondafeat from '../assets/Honda-1.jpg'
import toyotafeat from '../assets/Toyota-4.jpg'
import benzfeat from '../assets/benz-1.jpeg'
import lexusfeat from '../assets/lexus-3.jpg'
import favicon from '../assets/favicon.png'
import bentley from '../assets/Bentley.jpeg'
import bmw from '../assets/bmw.jpeg'
import benzo from '../assets/mercedes.jpeg'
import porche from '../assets/porche.jpeg'
import lexis from '../assets/lexus-1.jpg'
import Bmw3 from '../assets/2023-BMW-i7.jpg'
import Royce from '../assets/2023-Rolls-Royce-Phantom.webp'
import Bmw4 from '../assets/2024-BMW-430i-GRANDCOUPE.jpg'
import Mercedes3 from '../assets/mercedes-benz-gle-350.jpg'
import Mercedes4 from '../assets/mercedesbenz_S Class.webp'
import Pagani from '../assets/pagani-huayra-bc.webp'
import Bentley2 from '../assets/bentley-continental-gtc-v8.jpg'
import Ferari from '../assets/Ferari.jpg'
import Mercedes5 from '../assets/mercedes--e-class.jpg'
import Toyota5 from '../assets/2024-toyota-highlander.jpg'
import Toyota1 from '../assets/2018-Toyota-Camry.jpg'
import Toyota2 from '../assets/2022-Toyota-Corolla.jpg'
import Honda1 from '../assets/Honda Accord 2022.jpg'
import Mercedes1 from '../assets/Mercedes_Benz_C_Class.webp'
import Toyota3 from '../assets/Toyota-Landcruiser.webp'
import Toyota4 from '../assets/toyota-1.jpg'
import Honda2 from '../assets/Honda Accord-HRV.jpeg'
import Mercedes2 from '../assets/mercedes.jpeg'
import Bmw1 from '../assets/2023_bmw_5_series.jpg'
import Bmw2 from '../assets/2020-BMW-X4.jpg'

export const carousel = [
    {
        id: 1,
        img: benz
    },
    {
        id: 2,
        img: lexus
    },
    {
        id: 3,
        img: jeep
    },
    

]
export const products = [
    {
        id: 1,
        name: "Benz E55 AMG",
        img: benzfeat,
        price: "₦550",
        featured: true,
        topSelling: false
    },
    {
        id: 2,
        name: "Honda Accord Exl",
        img: hondafeat,
        price: "₦350",
        featured: true,
        topSelling: false
    },
    {
        id: 3,
        name: "Toyota Camry Xl",
        img: toyotafeat,
        price: "₦360",
        featured: true,
        topSelling: false,
        
    },
    {
        id: 4,
        name: "Lexus 570",
        img: lexusfeat,
        price: "₦550",
        featured: true,
        topSelling: false
    },
    {
        id: 5,
        name: "Lexus Es350",
        img: lexis,
        price: "₦650",
        featured: false,
        topSelling: true
    },
    {
        id: 6,
        name: "Mercedes Benz Cls",
        img: benzo,
        price: "₦460",
        featured: false,
        topSelling: true
    },
    {
        id: 7,
        name: "BMW X5 Limited",
        img: bmw,
        price: "₦520",
        featured: false,
        topSelling: true
    },
    {
        id: 8,
        name: "Bentley Espirit",
        img: bentley,
        price: "₦990",
        featured: false,
        topSelling: true
    },
    {
        id: 9,
        name: "Favicon srx",
        img: favicon,
        price: "₦1550",
        featured: false,
        topSelling: true
    },
    {
        id: 1,
        name: "Porche",
        img: porche,
        price: "₦1250",
        featured: false,
        topSelling: true
    },
    
]

export const inventory = [
    {
        id: 1,
        name: "BMW i7",
        img: Bmw3,
        price: "₦17,500,000",
        year: "2023",
        inventory: true
    },
    {
        id: 2,
        name: "Rolls Royce Phantom",
        img: Royce,
        price: "₦97,500,000",
        year: "2020",
        inventory: true
    },
    {
        id: 3,
        name: "BMW 430i Grandcoupe",
        img: Bmw4,
        price: "₦26,500,000",
        year: '2024',
        inventory: true
    },
    {
        id: 4,
        name: "Bentley Continental Gtc",
        img: Bentley2,
        price: "₦87,500,000",
        year: "2020",
        inventory: true
    },
    {
        id: 5,
        name: "Mercedes Benz GLE 350",
        img: Mercedes3,
        price: "₦37,500,000",
        year: "2020",
        inventory: true
    },
    {
        id: 6,
        name: "Mercedes Benz S Class",
        img: Mercedes4,
        price: "₦67,500,000",
        year: "2020",
        inventory: true
    },
    {
        id: 7,
        name: "Pagani Huayra Bc",
        img: Pagani,
        price: "₦110,500,000",
        year: "2019",
        inventory: true
    },
    {
        id: 8,
        name: "Ferari",
        img: Ferari,
        price: "₦107,500,000",
        year: "2019",
        inventory: true
    },
    {
        id: 9,
        name: "Mercedes Benz E Class",
        img: Mercedes5,
        price: "₦37,500,000",
        year: "2022",
        inventory: true
    },
    {
        id: 10,
        name: "Toyota Highlander",
        img: Toyota5,
        price: "₦24,500,000",
        year: "2022",
        inventory: true
    },
    
    {
        id: 11,
        name: "2018 Totyotaa Camry",
        img: Toyota1,
        price: "₦5,500,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 12,
        name: "2022 Toyota Corolla",
        img: Toyota2,
        price: "₦4,500,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 13,
        name: "2022 Honda Accord",
        img: Honda1,
        price: "₦5,600,000",
        featured: false,
        topSelling: false,
        inventory: true
        
    },
    {
        id: 14,
        name: "2022 Mercedes Benz C Class",
        img: Mercedes1,
        price: "₦9,500,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 15,
        name: "2022 Toyota 4Runner",
        img: Toyota3,
        price: "₦11,500,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 16,
        name: "2022 Toyota Land-Cruiser",
        img: Toyota4,
        price: "₦14,600,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 17,
        name: "2022 Honda HRV",
        img: Honda2,
        price: "₦11,200,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 18,
        name: "2022 Mercede Benz CLS",
        img: Mercedes2,
        price: "₦14,900,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 19,
        name: "2023 BMW 5 Series",
        img: Bmw1,
        price: "₦19,500,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    {
        id: 20,
        name: "2020 BMW X4",
        img: Bmw2,
        price: "₦17,500,000",
        featured: false,
        topSelling: false,
        inventory: true
    },
    
    
    ]