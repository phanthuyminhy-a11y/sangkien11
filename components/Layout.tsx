
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-50 glass-morphism border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
            S
          </div>
          <h1 className="text-xl font-bold text-slate-800">Trợ Lý Sáng Kiến AI</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Khám phá</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Lịch sử</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Tài liệu</a>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
            Tài khoản
          </button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        {children}
      </main>
    </div>
  );
};
