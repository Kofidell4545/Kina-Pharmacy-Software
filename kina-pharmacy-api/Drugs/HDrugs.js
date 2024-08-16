const herbalDrugsData = [
    {
        id: 0,
        drugName: "Rooter Mixture",
        description: "Rooter Herbal Mixture is a natural supplement formulated to support overall health and address various health issues using a blend of herbal ingredients. It typically combines different herbs known for their beneficial effects, such as promoting digestive health, boosting the immune system, and providing general wellness support. The specific formulation and herbs used can vary by product.",
        images: [
            "../assets/DrugImages/Rooter0.png",
            "../assets/DrugsImages/Rooter1.png"
        ],
        inStock: true,
        price: "GHS 40.00",
        uses: [
            "Assisting in detoxification and improving metabolic function.",
            "Providing general wellness support and addressing minor health concerns.",
            "Supporting digestive health and relieving digestive discomfort.",
            "Enhancing the immune system and overall vitality.",
        ],
        keyComponents: [
            "Herbal extracts such as ginger, garlic, or turmeric (common ingredients for digestive health and immune support).",
            "Natural flavoring agents and solvents (for better taste and solubility).",
            "Stabilizers or preservatives (to maintain product integrity and shelf life).",
        ],
    },
    {
        id: 1,
        drugName: "Time Herbal Mixture",
        description: "Time Herbal Mixture is a natural supplement that combines various herbal ingredients aimed at supporting overall health and addressing specific conditions. This mixture may include herbs known for their beneficial effects on digestion, immunity, and general well-being. The exact composition can vary, but it typically leverages the synergistic effects of multiple herbs.",
        images: [
            "../assets/DrugImages/Time0.png",
            "../assets/DrugImages/Time1.png",
        ],
        inStock: true,
        price: "GHS 27.00",
        uses: [
            "Supporting digestive health and alleviating gastrointestinal discomfort.",
            "Enhancing immune system function and overall vitality.",
            "Assisting in stress relief and improving mental well-being.",
            "Providing general health support and promoting overall wellness.",
        ],
        keyComponents: [
            "Herbal extracts such as chamomile, peppermint, or fennel (common for digestive support).",
            "Adaptogens like ashwagandha or ginseng (for stress management and vitality).",
            "Immune-boosting herbs such as echinacea or elderberry.",
        ],
    },
    {
        id: 2,
        drugName: "Tabea Herbal Mixture",
        description: "Tabea Herbal Mixture is a natural supplement designed to provide overall health support through a blend of herbal ingredients. It typically combines herbs known for their beneficial effects on various bodily systems, including digestive health, immune support, and general well-being. The specific formulation can vary, but it usually aims to leverage the therapeutic properties of multiple herbs for holistic health benefits.",
        images: [
            "../assets/DrugImages/Tabea0.jpg",
            "../assets/DrugImages/Tabea1.webp",
            "../assets/DrugImages/Tabea2.webp",
        ],
        inStock: true,
        price: "GHS 32.00",
        uses: [
            "Supporting digestive health and alleviating gastrointestinal issues.",
            "Enhancing immune system function and overall resilience.",
            "Promoting general wellness and vitality.",
            "Assisting in stress management and improving mental clarity.",
        ],
        keyComponents: [
            "Digestive herbs such as ginger, peppermint, or dandelion (for digestive support).",
            "Immune-boosting herbs like echinacea or astragalus.",
            "Adaptogens such as ashwagandha or ginseng (for stress relief and vitality).",
        ],
    },
    {
        id: 3,
        drugName: "Omama Misture",
        description: "Omama Mixture is a herbal supplement formulated to support overall health and wellness through a blend of natural ingredients. It is designed to provide benefits such as improved vitality, better digestion, and enhanced immune function. The exact composition can vary, but it generally includes herbs known for their health-promoting properties.",
        images: [],
        inStock: true,
        price: "GHS 30.00",
        uses: [
            "Enhancing general vitality and overall well-being.",
            "Supporting digestive health and alleviating gastrointestinal discomfort.",
            "Boosting immune system function and resilience.",
            "Assisting in stress management and improving mental clarity.",
        ],
        keyComponents: [
            "Adaptogens such as ginseng or ashwagandha (for stress relief and energy support).",
            "Digestive herbs like ginger or fennel (for digestive health).",
            "Immune-supporting herbs such as echinacea or elderberry.",
        ],
    },
    {
        id: 4,
        drugName: "Imboost",
        description: "Imboost is a dietary supplement designed to support and enhance the immune system. It often contains a blend of vitamins, minerals, and herbal ingredients known for their immune-boosting properties. The formulation is aimed at improving overall immune function, increasing resistance to infections, and maintaining general health.",
        images: [
            "../assets/DrugImages/Imboost0.jpg",
            "../assets/DrugImages/Imboost1.jpg",
        ],
        inStock: true,
        price: "GHS 23.00",
        uses: [
            "Enhancing immune system function and boosting the body's defense against infections.",
            "Supporting overall health and reducing the risk of illness.",
            "Providing additional nutritional support during periods of increased immune system demand.",
            "Assisting in recovery from illness by strengthening the immune response.",
        ],
        keyComponents: [
            "Vitamin C (supports immune function and acts as an antioxidant).",
            "Zinc (essential for immune cell function and wound healing).",
            "Echinacea (known for its immune-boosting properties).",
        ],
    },
    {
        id: 5,
        drugName: "Mighty Power",
        description: "Mighty Power is a dietary supplement formulated to support overall health and enhance physical performance. It typically contains a blend of vitamins, minerals, and herbal ingredients designed to boost energy, stamina, and vitality. The supplement is aimed at improving general well-being, increasing endurance, and supporting overall health.",
        images: [
            "../assets/DrugImages/Mighty0.png",
            "../assets/DrugImages/Might1.jpg",
        ],
        inStock: true,
        price: "GHS 40.00",
        uses: [
            "Enhancing physical energy and stamina.",
            "Supporting overall vitality and general well-being.",
            "Boosting endurance and physical performance.",
            "Providing nutritional support for active lifestyles and recovery.",
        ],
        keyComponents: [
            "Ginseng (known for its energy-boosting and adaptogenic properties).",
            "B vitamins (support energy metabolism and reduce fatigue).",
            "Herbal extracts such as ginkgo biloba or rhodiola (for increased endurance and cognitive support).",
        ],
    },
    {
        id: 6,
        drugName: "Masada Mixture",
        description: "Masada Mixture is a herbal supplement designed to promote overall health and well-being through a combination of natural ingredients. It typically includes a variety of herbs known for their beneficial effects on physical and mental health. The formulation aims to support various bodily systems, enhance vitality, and improve general wellness.",
        images: [
            "../assets/DrugImages/Masada0.png",
            "../assets/DrugImages/Masada1.png",
        ],
        inStock: true,
        price: "GHS 25.00",
        uses: [
            "Supporting overall health and enhancing vitality.",
            "Improving physical and mental well-being.",
            "Assisting in stress management and reducing fatigue.",
            "Promoting digestive health and general metabolic support.",
        ],
        keyComponents: [
            "Adaptogens such as ashwagandha or ginseng (for stress management and energy support).",
            "Digestive herbs like peppermint or ginger (for digestive health).",
            "Immune-boosting herbs such as echinacea or astragalus.",
        ],
    },
];

module.exports = herbalDrugsData;