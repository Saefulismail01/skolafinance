import React, { useState } from 'react';
import { ExternalLink, Clock, BarChart3 } from 'lucide-react';
import { kelasData } from '../data/kelas';

const Kelas = () => {
  const [filter, setFilter] = useState('Semua');

  const levels = ['Semua', 'Pemula', 'Menengah', 'Lanjutan'];

  const filteredKelas = filter === 'Semua' 
    ? kelasData 
    : kelasData.filter(kelas => kelas.level === filter);

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Kelas Kami</h1>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Pilih kelas yang sesuai dengan level dan kebutuhan pembelajaran Anda di dunia Web3 dan cryptocurrency
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === level
                  ? 'bg-gradient-to-r from-accent-primary to-accent-strong text-white shadow-md'
                  : 'bg-bg-card border border-border-light text-text-secondary hover:border-accent-primary'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Kelas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredKelas.map((kelas) => (
            <div key={kelas.id} className="product-card group flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <img 
                  src={kelas.gambar} 
                  alt={kelas.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary">
                    {kelas.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="product-card-title mb-2">{kelas.judul}</h3>
                <p className="product-card-description mb-4 flex-1">
                  {kelas.deskripsi}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-text-secondary text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{kelas.durasi}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 size={16} />
                    <span>{kelas.level}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={kelas.linkMayar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Lihat Detail
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredKelas.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary body-large">
              Tidak ada kelas yang sesuai dengan filter ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kelas;