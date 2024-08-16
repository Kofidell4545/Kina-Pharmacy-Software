import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Styles import
import "./styles.css";

const DrugDetails = () => {
  const { id, category } = useParams(); // Get id and category from URL
  const [selectedImage, setSelectedImage] = useState(null);
  const [allDrugs, setAllDrugs] = useState([]);

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

  // Find the specific drug based on the ID and category from the URL
  const drug = allDrugs.find(d => d.id === parseInt(id) && d.category === category);
  const defaultImage = drug ? drug.images[0] : null;

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
                <tbody>
                  <tr>
                    {drug.images.map((image, index) => (
                      <td key={index}>
                        <img
                          src={image}
                          alt={`${drug.drugName} Thumbnail ${index + 1}`}
                          onClick={() => setSelectedImage(image)}
                          className={selectedImage === image ? 'selected-thumbnail' : ''}
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
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