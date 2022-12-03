import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCar } from '../../redux/cars/cars';

function CarCreate() {
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carImage, setCarImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      car_name: carName,
      brand: carBrand,
      color: carColor,
      year: carYear,
      price: carPrice,
      image: carImage,
    };
    dispatch(postCar(carData));
    navigate('/cars');
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Brand"
          name="carBrand"
          className="form-input"
          value={carBrand}
          onChange={(e) => setCarBrand(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Model"
          name="carName"
          className="form-input"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image link"
          name="carImage"
          className="form-input"
          value={carImage}
          onChange={(e) => setCarImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Color"
          name="carColor"
          className="form-input"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          name="carYear"
          className="form-input"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="carPrice"
          className="form-input"
          value={carPrice}
          onChange={(e) => setCarPrice(e.target.value)}
          required
        />
        <button type="submit" className="form-button button">
          Create Car
        </button>
      </form>
    </div>
  );
}

export default CarCreate;
