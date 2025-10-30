import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Trophy, TrendingUp, Star } from 'lucide-react';
import { testimoniData } from '../data/kelas';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="inline-block px-4 py-2 mb-6 bg-accent-wash rounded-full">
            <span className="text-accent-text font-medium text-sm">🚀 Platform Edukasi Web3 Terpercaya</span>
          </div>
          <h1 className="hero-title">
            Kuasai Finansial Digital di Era Web3
          </h1>
          <p className="hero-subtitle">
            Skolative membantu anak muda memahami cryptocurrency, DeFi, dan investasi digital dengan cara yang modern, mudah, dan praktis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/kelas" className="btn-primary">
              Lihat Kelas
            </Link>
            <a href="#keunggulan" className="btn-secondary">
              Pelajari Lebih Lanjut
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary">500+</div>
              <div className="text-text-secondary text-sm mt-1">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary">6</div>
              <div className="text-text-secondary text-sm mt-1">Kelas Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary">4.9</div>
              <div className="text-text-secondary text-sm mt-1">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Kenapa Pilih Skolative?</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Kami menyediakan pembelajaran yang komprehensif dengan pendekatan praktis untuk sukses di dunia Web3
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Keunggulan 1 */}
            <div className="product-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-wash flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-accent-text" size={24} />
              </div>
              <h3 className="product-card-title">Mentor Berpengalaman</h3>
              <p className="product-card-description">
                Belajar dari praktisi Web3 yang sudah berpengalaman di industri crypto dan blockchain.
              </p>
            </div>

            {/* Keunggulan 2 */}
            <div className="product-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-wash flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-accent-text" size={24} />
              </div>
              <h3 className="product-card-title">Kelas Interaktif</h3>
              <p className="product-card-description">
                Pembelajaran hands-on dengan study case real dan diskusi aktif bersama mentor.
              </p>
            </div>

            {/* Keunggulan 3 */}
            <div className="product-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-wash flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-accent-text" size={24} />
              </div>
              <h3 className="product-card-title">Materi Ter-update</h3>
              <p className="product-card-description">
                Konten pembelajaran selalu diperbarui mengikuti perkembangan terbaru di industri Web3.
              </p>
            </div>

            {/* Keunggulan 4 */}
            <div className="product-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-wash flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="text-accent-text" size={24} />
              </div>
              <h3 className="product-card-title">Sertifikat Resmi</h3>
              <p className="product-card-description">
                Dapatkan sertifikat completion yang dapat memperkuat portfolio profesional Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-24 px-6 bg-bg-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Apa Kata Mereka?</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Dengar langsung pengalaman dari siswa yang sudah bergabung dengan Skolative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimoniData.map((testimoni) => (
              <div key={testimoni.id} className="product-card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimoni.foto} 
                    alt={testimoni.nama}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">{testimoni.nama}</h4>
                    <p className="text-text-secondary text-sm">{testimoni.pekerjaan}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimoni.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-primary fill-accent-primary" />
                  ))}
                </div>
                <p className="text-text-secondary body-small italic">
                  "{testimoni.testimoni}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Siap Mulai Perjalanan Web3 Anda?</h2>
          <p className="body-large text-text-secondary mb-8">
            Bergabunglah dengan ratusan siswa yang sudah merasakan transformasi finansial mereka
          </p>
          <Link to="/kelas" className="btn-primary">
            Jelajahi Kelas Kami
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;