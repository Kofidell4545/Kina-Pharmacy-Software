// Drugs photos
import Lufart0 from "../../../assets/drugs/Lufart0.jpg";
import Lonart0 from "../../../assets/drugs/Lonart0.jpg";
import Lonart1 from "../../../assets/drugs/Lonart1.webp";
import Lonart2 from "../../../assets/drugs/Lonart2.webp";
import Malar2_0 from "../../../assets/drugs/Malar2_0.webp";
import Malar2_1 from "../../../assets/drugs/Malar2_1.jpeg";



const MalariaDrugsData = [
    {
        id: 0,
        drugName: "Lufart",
        description: "Lufart is an anti-malarial medication that combines two active ingredients: artemether and lumefantrine. Artemether is a fast-acting antimalarial that works by rapidly reducing the number of malaria parasites in the bloodstream, while lumefantrine has a longer-lasting effect that helps clear any remaining parasites. This combination makes Lufart effective in treating uncomplicated Plasmodium falciparum malaria. It is available in tablet form and is typically taken over a three-day course.",
        image0: Lufart0,
        image1: "",
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Treating uncomplicated Plasmodium falciparum malaria.",
            "Providing a combination therapy to reduce the risk of malaria recurrence.",
            "Managing malaria in regions with known resistance to other antimalarial medications.",
            "Treating mixed malaria infections involving multiple Plasmodium species.",
        ],
        keyComponents: [
            "Artemether (fast-acting antimalarial).",
            "Lumefantrine (long-acting antimalarial).",
            "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
        ],
    },
    {
        id: 1,
        drugName: "Lonart",
        description: "Lonart is an anti-malarial medication that combines two active ingredients: artemether and lumefantrine. Artemether is a fast-acting antimalarial agent that rapidly reduces the number of malaria parasites in the bloodstream, while lumefantrine has a longer-lasting effect, helping to clear any remaining parasites. This combination is effective in treating uncomplicated Plasmodium falciparum malaria and is widely used due to its efficacy and relatively short treatment course. Lonart is available in tablet form, often administered over a three-day period.",
        image0: Lonart0,
        image1: Lonart1,
        image2: Lonart2,
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Managing malaria in areas with resistance to other antimalarial medications.",
            "Treating mixed malaria infections involving multiple Plasmodium species.",
            "Treating uncomplicated Plasmodium falciparum malaria.",
            "Providing combination therapy to lower the risk of malaria recurrence.",
        ],
        keyComponents: [
            "Artemether (fast-acting antimalarial).",
            "Lumefantrine (long-acting antimalarial).",
            "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
        ],
    },
    {
        id: 2,
        drugName: "Malar 2",
        description: "Malar-2 is an anti-malarial medication that combines two active ingredients: artemether and lumefantrine. Artemether acts quickly to reduce the number of malaria parasites in the bloodstream, while lumefantrine works over a longer period to clear any remaining parasites. This combination therapy is effective against uncomplicated Plasmodium falciparum malaria and helps prevent the recurrence of infection. Malar-2 is available in tablet form and is typically taken over a three-day treatment course.",
        image0: Malar2_0,
        image1: Malar2_1,
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Treating uncomplicated Plasmodium falciparum malaria.",
            "Providing combination therapy to reduce the risk of malaria recurrence.",
            "Managing malaria in areas with known resistance to other antimalarial drugs.",
            "Treating mixed malaria infections involving multiple Plasmodium species.",
        ],
        keyComponents: [
            "Artemether (fast-acting antimalarial).",
            "Lumefantrine (long-acting antimalarial).",
            "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
        ],
    },
];

export default MalariaDrugsData;