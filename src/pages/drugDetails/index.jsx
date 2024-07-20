import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);

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
  const defaultImage = drug ? drug.image0 || drug.image1 || drug.image2 : null;

  if (!drug) {
    return <div>Drug not found</div>;
  }

  return (
    <div className="drug-details">
      <div className="drug-details-content">

        <div className="drug-info-section">
          <div className="drug-main-info">
            <h1>{drug.drugName}</h1>
            <p>{drug.description}</p>
          </div>

          <div className="drug-images-section">
            <div className="main-image">
              <img src={selectedImage || defaultImage} alt={drug.drugName} />
            </div>
            
            <div className="thumbnail-images">
              <table>
                <tr>
                  <td>
                    {drug.image0 && (
                      <img
                        src={drug.image0}
                        alt={`${drug.drugName} Thumbnail 1`}
                        onClick={() => setSelectedImage(drug.image0)}
                        className={selectedImage === drug.image0 ? 'selected-thumbnail' : ''}
                      />
                    )}
                  </td>
                  <td>
                    {drug.image1 && (
                      <img
                        src={drug.image1}
                        alt={`${drug.drugName} Thumbnail 2`}
                        onClick={() => setSelectedImage(drug.image1)}
                        className={selectedImage === drug.image1 ? 'selected-thumbnail' : ''}
                      />
                    )}
                  </td>
                  <td>
                    {drug.image2 && (
                      <img
                        src={drug.image2}
                        alt={`${drug.drugName} Thumbnail 3`}
                        onClick={() => setSelectedImage(drug.image2)}
                        className={selectedImage === drug.image2 ? 'selected-thumbnail' : ''}
                      />
                    )}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="drug-details-info">
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
              {drug.inStock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugDetails;