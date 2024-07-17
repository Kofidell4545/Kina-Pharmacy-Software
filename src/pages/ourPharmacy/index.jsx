import React, { useState } from 'react'

// styles import
import "./index.css"

// icond import
import filter from "../../assets/icons/filter.png"

const Categories = [
  {id: 0, category: "Antibiotics"},
  {id: 1, category: "Dewormers"},
  {id: 2, category: "Stomach Upsets"},
  {id: 3, category: "Multivitamins"},
  {id: 4, category: "Blood Tonics"},
  {id: 5, category: "Malaria Drugs"},
  {id: 6, category: "Cough And Cold Syrups"},
  {id: 7, category: "Herbal Drugs"},
]

// Drugs imports
import AntibioticsData from './Drugs/Antibiotics'
import BloodTonicsData from './Drugs/BTonics'
import CoughSyrupsData from './Drugs/CCSyrups'
import DewormersData from './Drugs/Dewormers'
import HerbalDrugsData from './Drugs/HDrugs'
import MalariaDrugsData from './Drugs/MDrugs'
import MultivitaminsData from './Drugs/Multivitamins'
import StomachUpsetsData from './Drugs/SUpsets'


const OurPharmacy = () => {

  const [selectedCategory, setSelectedCategory] = useState('Antibiotics');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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

  const drugsToDisplay = getDrugsByCategory(selectedCategory);

  return (
    <div className='main-div'>
      <div className="pharmacy-header">
        <h1>Our Pharmacy</h1>
        <p>Welcome to our pharmacy, where we prioritize your health and wellness. Discover a wide range of quality <br /> products and personalized services designed to meet your unique needs.</p>
      </div>

      <div className="category-drugs-main">
        <div className="search-filter">
          <div className='search'>
            <input type="text" placeholder='Search' />
          </div>
          <div className='filter'>
            <span>Filter <button><img src={filter} alt="" /></button></span>
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
                  <a href="#">
                    {item.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The drug under the category clicked should appear here */}
          <div className="drugs">
            <table>
              <tbody>
                {drugsToDisplay.map((item, index) => {
                  if (index % 5 === 0) {
                    return (
                      <tr key={index}>
                        {drugsToDisplay.slice(index, index + 5).map((drug) => (
                          <td key={drug.id}>
                            <div className='drug-div'>
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
                                <a href="#">View</a>
                              </div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <hr />

        {/* Recommended drugs and products */}
        <div className="recommended">
          <h1>Recommended Drugs</h1>
        </div>   
      </div>
    </div>
  )
}

export default OurPharmacy