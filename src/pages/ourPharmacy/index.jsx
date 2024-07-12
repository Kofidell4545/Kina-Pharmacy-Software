import React from 'react'

// styles import
import "./index.css"

const OurPharmacy = () => {
  return (
    <div className='main-div'>
      <div className="pharmacy-header">
        Our Pharmacy
      </div>

      <div className="category-drugs-main">
        <div className="search-filter">
          <div className='search'>
            <input type="text" placeholder='Search' />
          </div>
          <div className='filter'>
            <span>Filter</span>
          </div>
        </div>

        {/* List of categories */}
        <div className='category-drug'>
          <div className='category'>
            <h2>Categories</h2>
            <ul>
              <li>Antibiotics </li>
              <li>Dewormers</li>
              <li>Stomach Upsets</li>
              <li>Multivitamins</li>
              <li>Blood Tonics</li>
              <li>Malaria Drugs</li>
              <li>Herbal Drugs</li>
              <li>Cough and Cold Syrups</li>
            </ul>
          </div>

          {/* The drug under the category clicked should appear here */}
          <div className="drugs">

          </div>
        </div>

        {/* Recommended drugs and products */}
        <div className="recommended">
          <h1>Recommend Drugs</h1>

        </div>
        
      </div>
    </div>
  )
}

export default OurPharmacy