import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './update.css';
import base_url from '../../../baseUrl';

export default function UpdatePossession() {
  const [newLibelle, setNewLibelle] = useState('');
  const [newDateFin, setNewDateFin] = useState('');
  const navigate = useNavigate();
  const { libelle } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/possession/${libelle}`);
        const data = response.data;
        setNewLibelle(data.libelle || '');
        setNewDateFin(data.dateFin || '');
      } catch (error) {
        console.error('Erreur:', error);
        alert(error.response?.data?.message || 'Erreur lors de la récupération des données');
      }
    };

    fetchData();
  }, [libelle]);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`${base_url}/possession/${libelle}`, {
        newLibelle,
        newDateFin
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data;
      alert(result.message);
      navigate('/possession');
    } catch (error) {
      console.error('Erreur:', error);
      alert(error.response?.data?.message || 'Échec de la mise à jour des données');
    }
  };

  return (
    <div className='container1'>
      <h2 className='h2' style={{ margin: "5vh" }}>Modifier une Possession</h2>
      <form className='form'>
        <div className='div'>
          <div className="div-input">
            <label htmlFor="text">Valeur de Libelle : </label>
            <input
              id='text'
              type="text"
              value={newLibelle}
              onChange={(e) => setNewLibelle(e.target.value)}
              placeholder="libelle"
            />
          </div>
          <div className="div-input">
            <label htmlFor="date">Valeur du date fin : </label>
            <input
              id='date'
              type="date"
              value={newDateFin}
              onChange={(e) => setNewDateFin(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button onClick={handleUpdate} className='boutton'>Mettre à jour</button>
    </div>
  );
}
