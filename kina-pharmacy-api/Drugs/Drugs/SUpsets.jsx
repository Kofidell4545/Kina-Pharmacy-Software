// Drugs photos
import Nugel0 from "../../../assets/drugs/Nugel0.jpg";
import Nugel1 from "../../../assets/drugs/Nugel1.jpeg";
import Magacid0 from "../../../assets/drugs/Magacid0.avif";
import Magacid1 from "../../../assets/drugs/Magacid1.webp";
import Magacid2 from "../../../assets/drugs/Magacid2.jpg";
// import Magacid3 from "../../../assets/drugs/Magacid3.jpg";
import Gastrogen0 from "../../../assets/drugs/Gastrogen0.jpg";
import Gastrogen1 from "../../../assets/drugs/Gastrogen1.jpg";
import MoM0 from "../../../assets/drugs/MoM0.avif";
import MoM1 from "../../../assets/drugs/MoM1.jpg";
import MoM2 from "../../../assets/drugs/MoM2.jpg";
import Omeprazol0 from "../../../assets/drugs/Omeprazol0.jpg";
import Omeprazol1 from "../../../assets/drugs/Omeprazol1.png";



const StomachUpsetsData = [
    {
        id: 0,
        drugName: "Nugel",
        description: "Nugel is an antacid gel designed to relieve symptoms of stomach upset, such as heartburn, acid indigestion, and gastric discomfort. It typically contains ingredients like aluminum hydroxide, magnesium hydroxide, or simethicone, which neutralize stomach acid and reduce gas. Nugel provides quick relief by coating the stomach lining and buffering the acid, helping to alleviate pain and discomfort.",
        image0: Nugel0,
        image1: Nugel1,
        image2: "",
        inStock: true,
        price: "GHS 70.00",
        uses: [
            "Relieving heartburn and acid indigestion.",
            "Alleviating symptoms of gastritis and peptic ulcers.",
            "Reducing gastric discomfort and bloating caused by excess stomach acid.",
            "Providing symptomatic relief from gastroesophageal reflux disease (GERD).",
        ],
        keyComponents: [
            "Aluminum hydroxide (neutralizes stomach acid).",
            "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
            "Simethicone (reduces gas and bloating).",
            "Flavoring agents (to improve taste and palatability).",
        ],
    },
    {
        id: 1,
        drugName: "Magacid",
        description: "Magacid is an antacid medication formulated to relieve symptoms associated with stomach upset, such as heartburn, acid indigestion, and gastric discomfort. It typically contains a combination of magnesium hydroxide and aluminum hydroxide, which work together to neutralize stomach acid. This dual-action helps to quickly reduce acidity in the stomach, providing relief from pain and discomfort.",
        image0: Magacid0,
        image1: Magacid1,
        image2: Magacid2,
        inStock: true,
        price: "GHS 23.00",
        uses: [
            "Relieving heartburn and acid indigestion.",
            "Alleviating symptoms of gastritis and peptic ulcers.",
            "Reducing gastric discomfort and bloating caused by excess stomach acid.",
            "Providing symptomatic relief from gastroesophageal reflux disease (GERD).",
        ],
        keyComponents: [
            "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
            "Aluminum hydroxide (neutralizes stomach acid).",
            "Simethicone (optional, for reducing gas and bloating).",
            "Flavoring agents (to improve taste and palatability).",
        ],
    },
    {
        id: 2,
        drugName: "Gastrogen",
        description: "Gastrogen is a medication used to alleviate symptoms of stomach upset, including heartburn, acid indigestion, and discomfort related to excess stomach acid. It usually contains a combination of antacids and acid reducers, such as magnesium hydroxide, aluminum hydroxide, or calcium carbonate. This formulation helps neutralize stomach acid and provide symptomatic relief from conditions like gastritis or acid reflux.",
        image0: Gastrogen0,
        image1: Gastrogen1,
        image2: "",
        inStock: true,
        price: "GHS 25.00",
        uses: [
            "Relieving heartburn and acid indigestion.",
            "Alleviating symptoms of gastritis and peptic ulcers.",
            "Reducing gastric discomfort caused by excess stomach acid.",
            "Providing relief from gastroesophageal reflux disease (GERD) and related conditions.",
        ],
        keyComponents: [
            "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
            "Aluminum hydroxide (neutralizes stomach acid).",
            "Calcium carbonate (neutralizes stomach acid and provides calcium).",
        ],
    },
    {
        id: 3,
        drugName: "Milk of Magnesium",
        description: "Milk of Magnesia is a liquid antacid and laxative that contains magnesium hydroxide as its active ingredient. It is used to relieve symptoms of acid indigestion, heartburn, and upset stomach by neutralizing stomach acid. Additionally, it acts as a mild laxative, helping to relieve constipation by drawing water into the intestines and stimulating bowel movements.",
        image0: MoM0,
        image1: MoM1,
        image2: MoM2,
        inStock: true,
        price: "GHS 29.00",
        uses: [
            "Acting as a mild laxative to relieve constipation.",
            "Relieving symptoms of acid indigestion and heartburn.",
            "Providing symptomatic relief from gastritis and peptic ulcers.",
            "Alleviating upset stomach and gastric discomfort.",
        ],
        keyComponents: [
            "Magnesium hydroxide (neutralizes stomach acid and acts as a laxative).",
            "Water (solvent for the magnesium hydroxide).",
        ],
    },
    {
        id: 4,
        drugName: "Omeprazol",
        description: "Omeprazole is a proton pump inhibitor (PPI) used to treat various conditions related to excess stomach acid. It works by inhibiting the proton pumps in the stomach lining, which reduces the production of stomach acid. This helps alleviate symptoms associated with acid-related disorders, including heartburn, gastroesophageal reflux disease (GERD), and peptic ulcers.",
        image0: Omeprazol0,
        image1: Omeprazol1,
        image2: "",
        inStock: true,
        price: "GHS 6.00",
        uses: [
            "Treating gastroesophageal reflux disease (GERD) by reducing stomach acid.",
            "Managing peptic ulcers and promoting healing of the stomach lining.",
            "Alleviating symptoms of acid indigestion and heartburn.",
            "Treating Zollinger-Ellison syndrome, a condition characterized by excessive stomach acid production.",
        ],
        keyComponents: [
            "Omeprazole (active ingredient).",
            "Excipients such as microcrystalline cellulose and magnesium stearate (in tablets or capsules).",
            "Enteric coating agents (to protect the drug from stomach acid and ensure proper release in the intestines).",
        ],
    },
];

export default StomachUpsetsData;