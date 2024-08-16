import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// styles import
import "./styles.css";

// icons import
import searchIcon from "../../assets/icons/search.png";

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
  const [allDrugs, setAllDrugs] = useState([]); // Store all drugs

  // Fetch drugs from the API
  useEffect(() => {
    fetch('http://localhost:8000/api/drugs/')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); // Check this in the browser console
        setAllDrugs(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setSearchedDrug(null);
    setSearchPerformed(false);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      setSearchPerformed(true);
      return;
    }
  
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
    if (!allDrugs || !Array.isArray(allDrugs)) {
      return [];
    }
    return allDrugs.filter(drug => drug.category === category);
  };


  const drugsToDisplay = searchedDrug ? [searchedDrug] : (allDrugs ? getDrugsByCategory(selectedCategory) : []);

  return (
    <div className='main-div'>
      <Helmet>
        <title>Our Pharmacy</title>
      </Helmet>
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
                          <img src={drug.images[0]} alt={drug.drugName} />
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
          
            {/* Recommended drugs content */}
            <div className='recommended-drugs' >
            {drugsToDisplay.slice(0, 2).map((drug) => (
                <div className="box1" key={drug.id}>
                  <div className="img-name-avail-box">
                    <div className="recommended-img-div">
                      <img src={drug.images} alt={drug.drugName} />
                    </div>
                    <div className="drug-name">
                      <span>{drug.drugName}</span> <br />
                      {drug.inStock ? (
                          <span className='in-stock'>In Stock</span>
                        ) : (
                          <span className='out-of-stock'>Out of Stock</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="comp-view">
                    <div className="components">
                      <h4>Uses</h4>
                      <ul>
                        {drug.uses.map((uses, index) => (
                          <li key={index}>{uses}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="view-drug">
                      <Link className='link' to={`/our-pharmacy/${selectedCategory}/${drug.id}`}>View</Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default OurPharmacy;