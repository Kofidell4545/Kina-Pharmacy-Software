// Drugs photos
import Menthodex0 from "../../../assets/drugs/Menthodex0.jpg";
import Menthodex1 from "../../../assets/drugs/Menthodex1.jpg";
import Stopkof0 from "../../../assets/drugs/Stopkof0.jpg";
import Stopkof1 from "../../../assets/drugs/Stopkof1.jpg";
import Stopkof2 from "../../../assets/drugs/Stopkof2.png";
import Samalin0 from "../../../assets/drugs/Samalin0.jpg";
import Samalin1 from "../../../assets/drugs/Samalin1.jpg";
import Viscof0 from "../../../assets/drugs/Viscof0.png";
import Viscof1 from "../../../assets/drugs/Viscof1.webp";
import Viscof2 from "../../../assets/drugs/Viscof0.png";
import Koffex0 from "../../../assets/drugs/Koffex0.png";
import Koffex1 from "../../../assets/drugs/Koffex1.png";
import Kofof0 from "../../../assets/drugs/Kofof0.webp";



const CoughSyrupsData = [
    {
        id: 0,
        drugName: "Menthodex",
        description: "Menthodex Cough Mixture is a medication used to relieve cough and related symptoms. It typically combines various active ingredients, including cough suppressants, expectorants, and soothing agents. The formulation is designed to address both productive and non-productive coughs, easing symptoms and helping to clear mucus from the respiratory tract. It may also contain menthol or other soothing agents to relieve throat irritation.",
        image0: Menthodex0,
        image1: Menthodex1,
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Relieving symptoms of cough, whether dry or productive.",
            "Easing throat irritation and discomfort associated with coughing.",
            "Assisting in the expulsion of mucus and phlegm from the respiratory tract.",
            "Providing symptomatic relief from cough due to colds or respiratory infections.",
        ],
        keyComponents: [
            "Dextromethorphan or codeine (cough suppressant).",
            "Guaifenesin or bromhexine (expectorant).",
            "Menthol or eucalyptus oil (soothing agent).",
        ],
    },
    {
        id: 1,
        drugName: "Stopkof",
        description: "Stopkof Cough Syrup is used to treat cough and related respiratory symptoms. It generally contains a combination of active ingredients that work to suppress cough and reduce throat irritation. The syrup may include both cough suppressants and expectorants to manage different types of coughs, whether dry or productive, and can also contain soothing agents to alleviate throat discomfort.",
        image0: Stopkof0,
        image1: Stopkof1,
        image2: Stopkof2,
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Relieving cough symptoms, including both dry and productive coughs.",
            "Suppressing persistent cough to provide comfort and improve sleep.",
            "Easing throat irritation and reducing discomfort associated with coughing.",
            "Assisting in the clearing of mucus from the respiratory tract when combined with expectorants.",
        ],
        keyComponents: [
            "Dextromethorphan or codeine (cough suppressant).",
            "Guaifenesin or ambroxol (expectorant).",
            "Menthol or eucalyptus oil (soothing agent).",
        ],
    },
    {
        id: 2,
        drugName: "Samalin",
        description: "Samalin Cough Syrup is formulated to provide relief from cough and related symptoms. It generally combines active ingredients that target both the suppression of cough and the alleviation of throat irritation. The syrup may include cough suppressants, expectorants, and soothing agents to address various types of coughs, whether dry or productive, and to provide comfort to the throat.",
        image0: Samalin0,
        image1: Samalin1,
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Relieving symptoms of both dry and productive coughs.",
            "Suppressing persistent cough to reduce discomfort and improve sleep.",
            "Easing throat irritation and inflammation caused by coughing.",
            "Helping to clear mucus from the respiratory tract when combined with expectorants.",
        ],
        keyComponents: [
            "Dextromethorphan or codeine (cough suppressant).",
            "Guaifenesin or ambroxol (expectorant).",
            "Menthol or eucalyptus oil (soothing agent).",
        ],
    },
    {
        id: 3,
        drugName: "Viscof",
        description: "Viscof Cough Syrup is an expectorant agent to relieve cough and related respiratory symptoms. It typically combines various active ingredients to address both dry and productive coughs. The formulation may include cough suppressants to reduce the urge to cough, expectorants to help clear mucus from the airways, and soothing agents to ease throat irritation.",
        image0: Viscof0,
        image1: Viscof1,
        image2: Viscof2,
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Relieving symptoms of both dry and productive coughs.",
            "Suppressing frequent or severe coughing to improve comfort and sleep.",
            "Easing throat irritation and inflammation associated with coughing.",
            "Assisting in the expulsion of mucus and phlegm from the respiratory tract.",
        ],
        keyComponents: [
            "Dextromethorphan or codeine (cough suppressant).",
            "Guaifenesin or ambroxol (expectorant).",
            "Menthol or eucalyptus oil (soothing agent).",
        ],
    },
    {
        id: 4,
        drugName: "Koffex",
        description: "Koffex Cough Syrup is formulated to alleviate cough and related respiratory discomforts. It generally includes a combination of active ingredients that work to suppress cough reflex, reduce throat irritation, and assist in mucus clearance. The syrup may contain both cough suppressants and expectorants, making it effective for treating various types of coughs.",
        image0: Koffex0,
        image1: Koffex1,
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Relieving symptoms of both dry and productive coughs.",
            "Suppressing frequent or troublesome coughing to enhance comfort and rest.",
            "Easing throat irritation and inflammation caused by coughing.",
            "Helping to clear mucus and phlegm from the respiratory tract when used with expectorants.",
        ],
        keyComponents: [
            "Dextromethorphan or codeine (cough suppressant).",
            "Guaifenesin or ambroxol (expectorant).",
            "Menthol or eucalyptus oil (soothing agent).",
        ],
    },
    {
        id: 5,
        drugName: "Kofof",
        description: "Kofof Cough Syrup is designed to relieve symptoms associated with coughs and respiratory discomfort. It typically contains a combination of active ingredients that address both dry and productive coughs. The syrup may include cough suppressants to reduce the urge to cough, expectorants to help clear mucus, and soothing agents to ease throat irritation.",
        image0: Kofof0,
        image1: "",
        image2: "",
        inStock: true,
        price: "GHS 100.00",
        uses: [
            "Relieving both dry and productive coughs.",
            "Suppressing frequent or severe coughing to improve comfort and sleep.",
            "Easing throat irritation and discomfort caused by coughing.",
            "Assisting in the expulsion of mucus from the respiratory tract.",
        ],
        keyComponents: [
            "Dextromethorphan or codeine (cough suppressant).",
            "Guaifenesin or ambroxol (expectorant).",
            "Menthol or eucalyptus oil (soothing agent).",
        ],
    },
];

export default CoughSyrupsData;