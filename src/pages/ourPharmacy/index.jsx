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
              <li><a href="">Antibiotics</a> </li>
              <li><a href="">Dewormers</a></li>
              <li><a href="">Stomach Upsets</a></li>
              <li><a href="">Multivitamins</a></li>
              <li><a href="">Blood Tonics</a></li>
              <li><a href="">Malaria Drugs</a></li>
              <li><a href="">Herbal Drugs</a></li>
              <li><a href="">Cough and Cold Syrups</a></li>
            </ul>
          </div>

          {/* The drug under the category clicked should appear here */}
          <div className="drugs">

          </div>
        </div>
        <hr />

        {/* Recommended drugs and products */}
        <div className="recommended">
          <h1>Recommend Drugs</h1>

        </div>
        
      </div>
    </div>
  )
}

export default OurPharmacy