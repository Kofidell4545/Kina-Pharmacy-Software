import React from 'react';
import { useParams } from 'react-router-dom';

// Styles import
import "./styles.css"

// Import your data
import AntibioticsData from '../ourPharmacy/Drugs/Antibiotics';
import BloodTonicsData from '../ourPharmacy/Drugs/BTonics';
import CoughSyrupsData from '../ourPharmacy/Drugs/CCSyrups';
import DewormersData from '../ourPharmacy/Drugs/Dewormers';
import HerbalDrugsData from '../ourPharmacy/Drugs/HDrugs';
import MalariaDrugsData from '../ourPharmacy/Drugs/MDrugs';
import MultivitaminsData from '../ourPharmacy/Drugs/Multivitamins';
import StomachUpsetsData from '../ourPharmacy/Drugs/SUpsets';

const DrugDetails = () => {
  const { id, category } = useParams();
  
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

  const drugs = getDrugsByCategory(category);
  const drug = drugs.find(d => d.id === parseInt(id));

  if (!drug) {
    return <div>Drug not found</div>;
  }

  return (
    <div className="drug-details">
      <h1>{drug.drugName}</h1>
      <div className="drug-details-content">
        <div className="drug-description">
          <p>{drug.description}</p>
        </div>
        <div className="drug-images">
          {drug.image0 && <img src={drug.image0} alt={`${drug.drugName} Image 1`} />}
          {drug.image1 && <img src={drug.image1} alt={`${drug.drugName} Image 2`} />}
          {drug.image2 && <img src={drug.image2} alt={`${drug.drugName} Image 3`} />}
        </div>
        <div className="drug-info">
          <h3>What it does</h3>
          <ul>
            {drug.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
          <h3>Key components</h3>
          <ul>
            {drug.keyComponents.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
          <div className="price-stock">
            <span>{drug.price}</span>
            {drug.inStock ? <span className="in-stock">In Stock</span> : <span className="out-of-stock">Out of Stock</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugDetails;