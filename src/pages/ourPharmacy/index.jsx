import React from 'react'

// styles import
import "./index.css"

// icond import
import filter from "../../assets/icons/filter.png"

// Categories names
import Data from './Categories'

// Antibiotic drugs imports
import AntibioticsData from './Drugs/Antibiotics'

const OurPharmacy = () => {
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
            <h2>Categories</h2>
            <ul>
              {Data.map(item => (
                <li key={item.id}>
                  <a href="">
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
                {AntibioticsData.map((item, index) => {
                  if (index % 5 === 0) {
                    return (
                      <tr key={index}>
                        {AntibioticsData.slice(index, index + 5).map((drug) => (
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
                                <a href="">View</a>
                              </div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    )
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