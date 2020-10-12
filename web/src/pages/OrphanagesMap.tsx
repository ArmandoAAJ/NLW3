import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import Mapa from '../images/mapa.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/OrphanagesMap.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>

          <h2>Escolha um orfanato do mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São José do Cedro</strong>
          <span>Santa Catarina</span>
        </footer>

      </aside>

      <Map
        center={[-26.4514819, -53.5089578]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage" >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;