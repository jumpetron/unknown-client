import hm from "./assets/brand-logo/H&M-logo.png";
import levis from "./assets/brand-logo/Levi's-logo.png";
import adidas from "./assets/brand-logo/adidas-logo.png";
import gucci from "./assets/brand-logo/gucci-logo.png";
import nike from "./assets/brand-logo/nike-logo.png";
import zara from "./assets/brand-logo/zara-logo.png";

import kid from './assets/category/kid.png';
import men from './assets/category/men.png';
import women from './assets/category/women.png';

export const brandName = [
    {   
        id: '1',
        name: 'Nike',
        image: nike
    },
    {   
        id: '2',
        name: 'Adidas',
        image: adidas
    },
    {
        id: '3',
        name: 'Gucci',
        image: gucci
    },
    {   
        id: '4',
        name: 'Zara',
        image: zara
    },
    {   
        id: '5',
        name: 'H&M',
        image: hm
    },
    {   
        id: '6',
        name: "Levi's",
        image: levis
    }
];

export const categoryName = [
    {   
        id: '1',
        name: 'men',
        image: men
    },
    {   
        id: '2',
        name: 'women',
        image: women
    },
    {   
        id: '3',
        name: 'kid',
        image: kid
    }
]

export default brandName;

