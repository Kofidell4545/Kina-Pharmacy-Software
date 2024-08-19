const antibioticsData = [
  {
    id: 0,
    drugName: "Amoxicillin",
    description:
      "Amoxicillin is a widely used antibiotic that belongs to the penicillin group of drugs. It is effective against a range of bacterial infections by inhibiting the synthesis of bacterial cell walls. This medication is commonly prescribed for ear infections, strep throat, pneumonia, and urinary tract infections. Amoxicillin is typically available in the form of tablets, capsules, or liquid suspensions.",
    images: ["http://localhost:8000/assets/DrugImages/Amoxicillin0.jpg"],
    inStock: true,
    price: "GHS 4.00",
    uses: [
      "Treating respiratory tract infections such as bronchitis and pneumonia.",
      "Managing skin infections including cellulitis and impetigo.",
      "Treating urinary tract infections (UTIs).",
      "Eradicating Helicobacter pylori when used in combination with other medications.",
    ],
    keyComponents: [
      "Amoxicillin trihydrate (active ingredient)",
      "Excipients like magnesium stearate, titanium dioxide, and gelatin (in capsules).",
      "Flavoring agents (in liquid suspension).",
      "Dyes or colorants (in tablets and capsules).",
    ],
    category: "Antibiotics",
  },
  {
    id: 1,
    drugName: "Tetracycline",
    description:
      "Tetracycline is a broad-spectrum antibiotic that is effective against a wide variety of bacterial infections. It works by inhibiting protein synthesis in bacteria, thereby preventing their growth and reproduction. Tetracycline is commonly used to treat acne, respiratory tract infections, urinary tract infections, and certain sexually transmitted infections. It is available in the form of capsules, tablets, and topical preparations.",
    images: ["http://localhost:8000/assets/DrugImages/Tetracycline0.jpg"],
    inStock: true,
    price: "GHS 4.00",
    uses: [
      "Treating acne and skin infections.",
      "Managing respiratory tract infections such as pneumonia and bronchitis.",
      "Treating urinary tract infections (UTIs).",
      "Treating sexually transmitted infections like chlamydia and gonorrhea.",
    ],
    keyComponents: [
      "Tetracycline hydrochloride (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate.",
      "Gelatin (in capsules).",
    ],
    category: "Antibiotics",
  },
  {
    id: 2,
    drugName: "Flucloxacillin",
    description:
      "Flucloxacillin is a penicillin-type antibiotic used to treat bacterial infections. It is particularly effective against infections caused by Staphylococcus aureus, including strains that produce beta-lactamase. Flucloxacillin is commonly prescribed for skin and soft tissue infections, bone infections, and respiratory tract infections. It is available in oral forms such as capsules and liquid suspensions, as well as in injectable forms.",
    images: ["http://localhost:8000/assets/DrugImages/Flucloxacillin0.webp"],
    inStock: true,
    price: "GHS 6.00",
    uses: [
      "Treating skin and soft tissue infections like cellulitis and impetigo.",
      "Managing bone and joint infections, including osteomyelitis.",
      "Treating respiratory tract infections, such as pneumonia.",
      "Managing wound infections and abscesses.",
    ],
    keyComponents: [
      "Flucloxacillin sodium (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate.",
      "Sodium starch glycolate (in tablets and capsules).",
    ],
    category: "Antibiotics",
  },
  {
    id: 3,
    drugName: "Ampicillin",
    description:
      "Ampicillin is a broad-spectrum penicillin-type antibiotic used to treat a wide range of bacterial infections. It works by inhibiting the synthesis of bacterial cell walls, leading to the death of the bacteria. Ampicillin is effective against both gram-positive and gram-negative bacteria and is often used for respiratory, urinary tract, gastrointestinal, and meningitis infections. It is available in oral forms such as capsules and liquid suspensions, as well as in injectable forms.",
    images: [
      "http://localhost:8000/assets/DrugImages/Ampicillin0.webp",
      "http://localhost:8000/assets/DrugImages/Ampicillin1.webp",
    ],
    inStock: true,
    price: "GHS 4.00",
    uses: [
      "Treating respiratory tract infections like bronchitis and pneumonia.",
      "Managing urinary tract infections (UTIs).",
      "Treating gastrointestinal infections such as Salmonella and Shigella.",
      "Treating bacterial meningitis.",
    ],
    keyComponents: [
      "Ampicillin trihydrate (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate.",
      "Gelatin (in capsules).",
    ],
    category: "Antibiotics",
  },
  {
    id: 4,
    drugName: "Chloramphenicol",
    description:
      "Chloramphenicol is a broad-spectrum antibiotic that is effective against a variety of bacterial infections. It works by inhibiting bacterial protein synthesis, which prevents the bacteria from growing and reproducing. Chloramphenicol is often reserved for serious infections when other antibiotics are ineffective due to its potential for severe side effects. It is used to treat conditions such as typhoid fever, meningitis, and eye infections. Chloramphenicol is available in oral, intravenous, and topical forms.",
    images: [
      "http://localhost:8000/assets/DrugImages/Chloramphenicol0.webp",
    ],
    inStock: true,
    price: "GHS 7.00",
    uses: [
      "Treating serious infections like typhoid fever and paratyphoid fever.",
      "Managing bacterial meningitis.",
      "Treating eye infections such as conjunctivitis.",
      "Treating anaerobic bacterial infections and rickettsial infections.",
    ],
    keyComponents: [
      "Chloramphenicol base or chloramphenicol sodium succinate (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate (in tablets and capsules).",
      "Preservatives and stabilizers (in liquid and injectable forms).",
    ],
    category: "Antibiotics",
  },
  {
    id: 5,
    drugName: "Penicillin",
    description:
      "Penicillin is one of the oldest and most widely used antibiotics. It works by inhibiting the synthesis of bacterial cell walls, causing the bacteria to die. Penicillin is highly effective against gram-positive bacteria and is used to treat a variety of infections such as strep throat, syphilis, and certain types of pneumonia. It is available in several forms, including oral tablets, capsules, liquid suspensions, and injectable solutions.",
    images: [
      "http://localhost:8000/assets/DrugImages/Penicillin0.jpg",
    ],
    inStock: true,
    price: "GHS 3.00",
    uses: [
      "Treating streptococcal infections such as strep throat and scarlet fever.",
      "Managing syphilis and other sexually transmitted infections.",
      "Treating respiratory tract infections, including pneumonia.",
      "Managing skin and soft tissue infections.",
    ],
    keyComponents: [
      "Penicillin G or Penicillin V (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate (in tablets and capsules).",
      "Stabilizers and preservatives (in liquid and injectable forms).",
    ],
    category: "Antibiotics",
  },
  {
    id: 6,
    drugName: "Amciclox",
    description:
      "Amciclox is a combination antibiotic that contains amoxicillin and cloxacillin. Amoxicillin is a broad-spectrum penicillin antibiotic, while cloxacillin is a beta-lactamase resistant penicillin, making the combination effective against a wider range of bacteria, including those producing beta-lactamase. This combination is used to treat various infections including skin infections, respiratory infections, and bone and joint infections. It is available in oral forms such as capsules and liquid suspensions.",
    images: [
      "http://localhost:8000/assets/DrugImages/Ampiclox.jpg",
    ],
    inStock: true,
    price: "GHS 9.00",
    uses: [
      "Treating skin and soft tissue infections like cellulitis and impetigo.",
      "Managing respiratory tract infections such as bronchitis and pneumonia.",
      "Treating bone and joint infections, including osteomyelitis.",
      "Managing wound infections and abscesses.",
    ],
    keyComponents: [
      "Amoxicillin trihydrate (active ingredient).",
      "Cloxacillin sodium (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate.",
    ],
    category: "Antibiotics",
  },
  {
    id: 7,
    drugName: "Ciprolex",
    description:
      "Ciprolex is a brand name for ciprofloxacin, a broad-spectrum fluoroquinolone antibiotic. Ciprofloxacin works by inhibiting bacterial DNA gyrase and topoisomerase IV, which are essential for bacterial DNA replication and transcription. This action effectively stops bacterial growth and reproduction. Ciprolex is used to treat a variety of bacterial infections, including urinary tract infections, respiratory infections, and skin infections. It is available in oral forms like tablets and liquid suspensions, as well as in intravenous forms.",
    images: [
      "http://localhost:8000/assets/DrugImages/Ciprolex0.jpg",
    ],
    inStock: true,
    price: "GHS 30.00",
    uses: [
      "Treating urinary tract infections (UTIs).",
      "Managing respiratory tract infections such as bronchitis and pneumonia.",
      "Treating skin and soft tissue infections.",
      "Managing certain gastrointestinal infections, including those caused by Salmonella and E. coli.",
    ],
    keyComponents: [
      "Ciprofloxacin hydrochloride (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
      "Gelatin and coloring agents (in capsules).",
    ],
    category: "Antibiotics",
  },
  {
    id: 8,
    drugName: "Cefuroxime",
    description:
      "Cefuroxime is a broad-spectrum cephalosporin antibiotic that is effective against a wide range of bacteria. It works by inhibiting bacterial cell wall synthesis, leading to bacterial cell death. Cefuroxime is used to treat infections caused by both gram-positive and gram-negative bacteria, including respiratory tract infections, skin infections, and urinary tract infections. It is available in oral forms such as tablets and liquid suspensions, as well as in injectable forms.",
    images: [
      "http://localhost:8000/assets/DrugImages/Cefuroxime0.jpg",
    ],
    inStock: true,
    price: "GHS 50.00",
    uses: [
      "Treating respiratory tract infections, including bronchitis and pneumonia.",
      "Managing skin and soft tissue infections such as cellulitis and impetigo.",
      "Treating urinary tract infections (UTIs).",
      "Managing ear infections like otitis media.",
    ],
    keyComponents: [
      "Cefuroxime axetil (active ingredient in oral forms) or cefuroxime sodium (active ingredient in injectable forms).",
      "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
      "Gelatin and coloring agents (in capsules).",
    ],
    category: "Antibiotics",
  },
  {
    id: 9,
    drugName: "Amoxiclav",
    description:
      "Amoxiclav is a combination antibiotic that includes amoxicillin and clavulanic acid. Amoxicillin is a broad-spectrum penicillin antibiotic, while clavulanic acid is a beta-lactamase inhibitor that helps prevent the breakdown of amoxicillin by bacterial enzymes. This combination enhances the effectiveness of amoxicillin against a wider range of bacteria, including those producing beta-lactamase. Amoxiclav is used to treat various infections such as respiratory tract infections, urinary tract infections, and skin infections. It is available in oral forms like tablets, chewable tablets, and liquid suspensions.",
    images: [
      "http://localhost:8000/assets/DrugImages/Amoxiclav0.jpg",
    ],
    inStock: true,
    price: "GHS 82.00",
    uses: [
      "Treating respiratory tract infections such as bronchitis and pneumonia.",
      "Managing skin and soft tissue infections like cellulitis and impetigo.",
      "Treating urinary tract infections (UTIs).",
      "Managing sinusitis and ear infections.",
    ],
    keyComponents: [
      "Amoxicillin trihydrate (active ingredient).",
      "Clavulanic acid (active ingredient).",
      "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
    ],
    category: "Antibiotics",
  },
  {
    id: 10,
    drugName: "Fluconazole",
    description:
      "Fluconazole is an antifungal medication used to treat a range of fungal infections. It works by inhibiting the synthesis of ergosterol, a crucial component of fungal cell membranes, leading to cell death. Fluconazole is effective against many types of fungi, including Candida species and Cryptococcus neoformans. It is commonly used to treat infections such as yeast infections, cryptococcal meningitis, and fungal infections of the mouth, throat, and esophagus. Fluconazole is available in oral forms like tablets and liquid suspensions, as well as in injectable forms.",
    images: [
      "http://localhost:8000/assets/DrugImages/Fluconazole0.jpg",
    ],
    inStock: true,
    price: "GHS 12.00",
    uses: [
      "Treating candidiasis (yeast infections) of the mouth, throat, and esophagus.",
      "Managing cryptococcal meningitis, particularly in immunocompromised individuals.",
      "Treating fungal infections of the skin, such as ringworm and athlete's foot.",
      "Preventing fungal infections in immunocompromised patients, such as those undergoing chemotherapy.",
    ],
    keyComponents: [
      "Fluconazole (active ingredient).",
      "Excipients like lactose, microcrystalline cellulose, and magnesium stearate (in tablets).",
      "Flavoring agents and preservatives (in liquid suspensions).",
    ],
    category: "Antibiotics",
  },
];

module.exports = antibioticsData;
