// Drugs photos
import Apetamin0 from "../../../assets/drugs/Apetamin0.jpg";
import Apetamin1 from "../../../assets/drugs/Apetamin1.webp";
import Tres0 from "../../../assets/drugs/Tres-orix0.png";
import Tres1 from "../../../assets/drugs/Tres-orix1.webp";
import Tres2 from "../../../assets/drugs/Tres-orix2.webp";
import Gudapet0 from "../../../assets/drugs/Gudapet0.jpg";
import Gudapet1 from "../../../assets/drugs/Gudapet1.jpg";
import Gudapet2 from "../../../assets/drugs/Gudapet2.jpg";
import Cororange0 from "../../../assets/drugs/Cororange0.jpg";
import Zincovit0 from "../../../assets/drugs/Zincovit0.jpg";
import Zincovit1 from "../../../assets/drugs/Zincovit1.webp";
import Zincovit2 from "../../../assets/drugs/Zincovit2.webp";



const MultivitaminsData = [
    {
        id: 0,
        drugName: "Apetamin",
        description: "Apetamin is a supplement that combines vitamins, amino acids, and the antihistamine cyproheptadine. It is primarily used to stimulate appetite and promote weight gain in individuals who have difficulty gaining weight or suffer from conditions that lead to weight loss. Cyproheptadine increases hunger by blocking certain chemical messengers in the body, while the vitamins and amino acids support overall health and nutrition.",
        image0: Apetamin0,
        image1: Apetamin1,
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Stimulating appetite in individuals with poor appetite or anorexia.",
            "Promoting weight gain in underweight individuals or those recovering from illness.",
            "Supporting overall health and nutrition with a blend of vitamins and amino acids.",
            "Managing weight loss associated with chronic diseases or medical treatments.",
        ],
        keyComponents: [
            "Cyproheptadine (appetite stimulant).",
            "Vitamin A (supports vision and immune function).",
            "B vitamins (support energy metabolism and nervous system health).",
            "Amino acids such as lysine (support growth and tissue repair).",
        ],
    },
    {
        id: 1,
        drugName: "Tress Orix",
        description: "Tres Orix is a nutritional supplement designed to stimulate appetite and promote weight gain. It contains a combination of vitamins, amino acids, and the appetite stimulant cyproheptadine. This formulation helps individuals with poor appetite or those needing to gain weight due to various conditions. The vitamins and amino acids support overall health, while cyproheptadine helps increase hunger by influencing certain chemical pathways in the body.",
        image0: Tres0,
        image1: Tres1,
        image2: Tres2,
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Stimulating appetite in individuals with anorexia or poor appetite.",
            "Promoting weight gain in underweight individuals or those recovering from illness.",
            "Supporting overall health and nutrition with essential vitamins and amino acids.",
            "Managing weight loss associated with chronic diseases or medical treatments.",
        ],
        keyComponents: [
            "Cyproheptadine (appetite stimulant).",
            "Vitamin A (supports vision and immune function).",
            "B vitamins (support energy metabolism and nervous system health).",
            "Essential amino acids like lysine (support growth and tissue repair).",
        ],
    },
    {
        id: 2,
        drugName: "Gudapet",
        description: "Gudapet is a nutritional supplement designed to stimulate appetite and support weight gain. It typically contains a blend of vitamins, amino acids, and the antihistamine cyproheptadine, which is known for its appetite-stimulating properties. Gudapet is intended for individuals who struggle with poor appetite or need to gain weight due to various health conditions. The vitamins and amino acids in the supplement also help improve overall health and nutritional status.",
        image0: Gudapet0,
        image1: Gudapet1,
        image2: Gudapet2,
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Stimulating appetite in individuals with poor appetite or anorexia.",
            "Promoting weight gain in underweight individuals or those recovering from illness.",
            "Supporting overall health and nutrition with a blend of essential vitamins and amino acids.",
            "Managing weight loss associated with chronic diseases or medical treatments.",
        ],
        keyComponents: [
            "Cyproheptadine (appetite stimulant).",
            "Vitamin A (supports vision and immune function).",
            "B vitamins (support energy metabolism and nervous system health).",
            "Essential amino acids like lysine (support growth and tissue repair).",
        ],
    },
    {
        id: 3,
        drugName: "Cororange",
        description: "Cororange is a nutritional supplement that combines a variety of vitamins, minerals, and other essential nutrients designed to support overall health and well-being. It is formulated to provide comprehensive nutritional support, particularly in cases of dietary deficiencies, during recovery from illness, or for general health maintenance. The specific formulation can vary, but it typically includes a range of vitamins, minerals, and sometimes herbal extracts or amino acids.",
        image0: Cororange0,
        image1: "",
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Providing essential vitamins and minerals to support overall health.",
            "Addressing dietary deficiencies and improving nutritional status.",
            "Supporting recovery from illness by enhancing nutritional intake.",
            "Promoting general well-being and vitality.",
        ],
        keyComponents: [
            "Vitamin A (supports vision and immune function).",
            "B vitamins (support energy metabolism and nervous system health).",
            "Vitamin C (antioxidant that supports immune function and skin health).",
            "Minerals such as iron, zinc, and calcium (support various bodily functions and bone health).",
        ],
    },
    {
        id: 4,
        drugName: "Zincovit",
        description: "Zincovit is a comprehensive multivitamin and multimineral supplement designed to support overall health and well-being. It contains a balanced blend of vitamins, minerals, and trace elements, including zinc, which plays a crucial role in immune function and wound healing. Zincovit is often used to address nutritional deficiencies, boost immunity, and improve overall health, particularly in individuals with increased nutritional needs or those recovering from illness.",
        image0: Zincovit0,
        image1: Zincovit1,
        image2: Zincovit2,
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Providing essential vitamins and minerals to support overall health.",
            "Boosting immune function and reducing the risk of infections.",
            "Addressing nutritional deficiencies and improving general well-being.",
            "Supporting recovery from illness or surgery by enhancing nutritional intake.",
        ],
        keyComponents: [
            "Zinc (supports immune function and wound healing).",
            "Vitamin A (supports vision and immune function).",
            "B vitamins (support energy metabolism and nervous system health).",
            "Vitamin C (antioxidant that supports immune function and skin health).",
            "Minerals such as iron, selenium, and magnesium (support various bodily functions).",
        ],
    },
];

export default MultivitaminsData;