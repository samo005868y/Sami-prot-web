import React, { useState } from 'react';
import {
  Camera,
  Maximize2,
  X,
  Filter,
  Info,
  ExternalLink,
  Layers,
  Sparkles,
  Compass
} from 'lucide-react';
import { galleryItems } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { useProfileImage } from '../context/ProfileImageContext';

export const Gallery: React.FC = () => {
  const { profileImage } = useProfileImage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Profile',
    'Construction Site',
    'Surveying',
    'Structural Work',
    'Engineering Drawings',
    'Project Documentation'
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Camera className="w-4 h-4" />
              <span>Section 07 // Visual Archive</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional / Engineering Gallery
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            TECHNICAL PLACEHOLDERS PRE-CONFIGURED FOR REAL PHOTOGRAPHY
          </p>
        </div>

        {/* Informative Guidance Banner for Sami */}
        <div className="mb-8 p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start space-x-3 text-xs text-slate-700 font-mono">
          <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-orange-900">Visual Archive Note:</span> Sami's professional profile portrait has been successfully updated. The project & field categories map centrally in <code className="text-orange-700 font-bold">src/data/portfolioData.ts</code> for future additions of on-site construction photos, Total Station setups, and structural drawings.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-orange-600" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-xs font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group cursor-pointer rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.id === 'gal-profile' ? profileImage : item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-white border border-slate-700 backdrop-blur font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-orange-600 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption & Technical Note */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="truncate">{item.technicalNote}</span>
                  <span className="text-orange-600 font-bold shrink-0 ml-2">Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-orange-600 font-bold uppercase tracking-wider block">
                  Category // {activeLightboxItem.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-slate-900 max-h-[60vh] flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.id === 'gal-profile' ? profileImage : activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="w-full h-auto max-h-[60vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-white space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeLightboxItem.caption}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200 text-xs font-mono text-slate-500">
                <span className="text-orange-600 font-bold">
                  Focus: {activeLightboxItem.technicalNote}
                </span>
                <span className="text-slate-400">
                  Placeholder ID: {activeLightboxItem.id}
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
