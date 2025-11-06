import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-bg-card p-8 rounded-2xl max-w-sm w-full mx-4 text-center">
        <div className="w-16 h-16 border-4 border-accent-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h3 className="text-xl font-bold mb-2">Mengarahkan ke Kelas</h3>
        <p className="text-text-secondary">Mohon tunggu sebentar, Anda sedang diarahkan ke halaman pembayaran...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
