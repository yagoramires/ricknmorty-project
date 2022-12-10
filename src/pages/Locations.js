import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LocationCard from '../components/LocationCard';
import { useApiContext } from '../context/ApiProvider';
import styles from './PageStyles.module.css';

const Locations = () => {
  const { locations, searchLocations, loadMore } = useApiContext();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click');
    searchLocations(name, type, dimension);
  };

  const typeSelect = [
    'Planet',
    'Cluster',
    'Space station',
    'Microverse',
    'TV',
    'Resort',
    'Fantasy town',
    'Dream',
    'Dimension',
    'unknown',
    'Menagerie',
    'Game',
    'Customs',
    'Daycare',
    'Dwarf planet (Celestial Dwarf)',
    'Miniverse',
    'Teenyverse',
    'Box',
    'Spacecraft',
    'Artificially generated world',
    'Machine',
    'Arcade',
    'Spa',
    'Quadrant',
    'Quasar',
    'Mount',
    'Liquid',
    'Convention',
    'Woods',
    'Diegesis',
    'Non-Diegetic Alternative Reality',
    'Nightmare',
    'Asteroid',
    'Acid Plant',
    'Reality',
    'Death Star',
    'Base',
    'Elemental Rings',
    'Human',
    'Space',
    'Hell',
    'Police Department',
    'Country',
    'Consciousness',
    'Memory',
  ];

  const dimensionsSelect = [
    'Dimension C-137',
    'unknown',
    'Post-Apocalyptic Dimension',
    'Replacement Dimension',
    'Cronenberg Dimension',
    'Fantasy Dimension',
    'Dimension 5-126',
    'Testicle Monster Dimension',
    'Cromulon Dimension',
    'Dimension C-500A',
    'Dimension K-83',
    'Dimension J19ζ7',
    'Eric Stoltz Mask Dimension',
    "Evil Rick's Target Dimension",
    'Giant Telepathic Spiders Dimension',
    'Unknown dimension',
    'Dimension K-22',
    'Dimension D-99',
    'Dimension D716',
    'Dimension D716-B',
    'Dimension D716-C',
    'Dimension J-22',
    'Dimension C-35',
    'Pizza Dimension',
    'Phone Dimension',
    'Chair Dimension',
    'Fascist Dimension',
    'Fascist Shrimp Dimension',
    'Fascist Teddy Bear Dimension',
    'Wasp Dimension',
    'Tusk Dimension',
    'Magic Dimension',
    'Merged Dimension',
  ];

  return (
    <div className={styles.charactersPage}>
      <img src='' alt='' />
      <form onSubmit={handleSubmit}>
        <button type='submit'>
          <BiSearch size={25} />
        </button>
        <input
          type='text'
          placeholder='Filter by name'
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
          className={styles.first}
        />
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
          defaultValue={''}
        >
          <option value=''>Type</option>
          {typeSelect.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setDimension(e.target.value);
          }}
          defaultValue={''}
        >
          <option value=''>Dimension</option>
          {dimensionsSelect.map((dimension, index) => (
            <option key={index} value={dimension}>
              {dimension}
            </option>
          ))}
        </select>
      </form>

      <div className={styles.cardContainer}>
        {locations &&
          locations.map((location) => (
            <Link key={location.id} to={`/locations/details/${location.id}`}>
              <LocationCard name={location.name} type={location.type} />
            </Link>
          ))}
      </div>

      <span className={styles.loadMore} onClick={() => loadMore('locations')}>
        LOAD MORE
      </span>
    </div>
  );
};

export default Locations;
