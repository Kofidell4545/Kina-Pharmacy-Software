import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// styles import
import "./styles.css";

// icons import
import searchIcon from "../../assets/icons/search.png"

// Drugs imports
import AntibioticsData from './Drugs/Antibiotics';
import BloodTonicsData from './Drugs/BTonics';
import CoughSyrupsData from './Drugs/CCSyrups';
import DewormersData from './Drugs/Dewormers';
import HerbalDrugsData from './Drugs/HDrugs';
import MalariaDrugsData from './Drugs/MDrugs';
import MultivitaminsData from './Drugs/Multivitamins';
import StomachUpsetsData from './Drugs/SUpsets';

const Categories = [
  { id: 0, category: "Antibiotics" },
  { id: 1, category: "Dewormers" },
  { id: 2, category: "Stomach Upsets" },
  { id: 3, category: "Multivitamins" },
  { id: 4, category: "Blood Tonics" },
  { id: 5, category: "Malaria Drugs" },
  { id: 6, category: "Cough And Cold Syrups" },
  { id: 7, category: "Herbal Drugs" },
];

const OurPharmacy = () => {
  const [selectedCategory, setSelectedCategory] = useState('Antibiotics');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedDrug, setSearchedDrug] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setSearchedDrug(null);
    setSearchPerformed(false);
  };

  const handleSearch = () => {
    let foundDrug = null;
    let foundCategory = '';

    Categories.forEach(category => {
      const drugs = getDrugsByCategory(category.category);
      drugs.forEach(drug => {
        if (drug.drugName.toLowerCase().includes(searchQuery.toLowerCase())) {
          foundDrug = drug;
          foundCategory = category.category;
        }
      });
    });

    if (foundDrug) {
      setSearchedDrug(foundDrug);
      setSelectedCategory(foundCategory);
    } else {
      setSearchedDrug(null);
    }

    setSearchPerformed(true);
  };

  const getDrugsByCategory = (category) => {
    switch (category) {
      case 'Antibiotics':
        return AntibioticsData;
      case 'Blood Tonics':
        return BloodTonicsData;
      case 'Cough And Cold Syrups':
        return CoughSyrupsData;
      case 'Dewormers':
        return DewormersData;
      case 'Herbal Drugs':
        return HerbalDrugsData;
      case 'Malaria Drugs':
        return MalariaDrugsData;
      case 'Multivitamins':
        return MultivitaminsData;
      case 'Stomach Upsets':
        return StomachUpsetsData;
      default:
        return [];
    }
  };

  const drugsToDisplay = searchedDrug ? [searchedDrug] : getDrugsByCategory(selectedCategory);

  return (
    <div className='main-div'>
      <div className="pharmacy-header">
        <h1>Our Pharmacy</h1>
        <p>Welcome to our pharmacy, where we prioritize your health and wellness. Discover a wide range of quality <br /> products and personalized services designed to meet your unique needs.</p>
      </div>

      <div className="category-drugs-main">
        <div className="search-filter">
          <div className='search'>
            <input
              type="text"
              placeholder='Search for drugs'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
              <img src={searchIcon} alt="search icon" className="search-icon" />
            </button>
          </div>
        </div>

        {/* List of categories */}
        <div className='category-drug'>
          <div className='category'>
            <h2><u>Categories</u></h2>
            <ul>
              {Categories.map(item => (
                <li
                  key={item.id}
                  className={selectedCategory === item.category ? 'selected-category' : ''}
                  onClick={() => handleCategoryClick(item.category)}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>

          {/* The drug under the category clicked should appear here */}
          <div className="drugs">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {searchPerformed && !searchedDrug ? (
                <div>Drug not found or check drug spelling</div>
              ) : (
                <div className="drugs-grid">
                  {drugsToDisplay.map((drug) => (
                    <div className='drug-div' key={drug.id}>
                      <div className='img-div'>
                        <img src={drug.image0} alt={drug.drugName} />
                      </div>
                      <div className="drug-name">
                        <span>{drug.drugName}</span>
                      </div>
                      <div className='price-avail-div'>
                        <span>{drug.price}</span>
                        {drug.inStock ? (
                          <span className='in-stock'>In Stock</span>
                        ) : (
                          <span className='out-of-stock'>Out of Stock</span>
                        )}
                      </div>
                      <div className='view-btn'>
                        <Link className='link' to={`/our-pharmacy/${selectedCategory}/${drug.id}`}>View</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <hr />

        {/* Recommended drugs and products */}
        <div className="recommended">
          <h1>Recommended Drugs</h1>
        </div>
        <div className='recommended-drugs'>
          {/* Recommended drugs content */}

        </div>
      </div>
    </div>
  );
};

export default OurPharmacy;