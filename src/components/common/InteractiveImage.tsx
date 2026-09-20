import React, { useState } from 'react';
import { 
  RotateCcw, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  RefreshCw, 
  Maximize2, 
  X 
} from 'lucide-react';

interface InteractiveImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({ src, alt = 'Prompt diagram', className = '' }) => {
  const [rotation, setRotation] = useState<number>(0); // 0, 90, 180, 270 degrees
  const [zoomLevel, setZoomLevel] = useState<number>(1); // 0.75, 1, 1.25, 1.5, 2
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleRotateLeft = () => {
    setRotation(prev => (prev - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setRotation(0);
    setZoomLevel(1);
  };

  return (
    <div className={`relative bg-slate-50 rounded-xl border border-slate-300 p-3 space-y-2 shadow-sm ${className}`}>
      
      {/* Top Toolbar Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-200/80 p-1.5 rounded-lg border border-slate-300 text-xs font-mono">
        <div className="flex items-center space-x-1">
          <span className="font-extrabold text-slate-700 px-2 py-0.5 text-[11px] uppercase">Diagram Controls:</span>
        </div>

        <div className="flex items-center space-x-1">
          {/* Rotate Left */}
          <button
            onClick={handleRotateLeft}
            className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all flex items-center space-x-1"
            title="Rotate Left 90°"
          >
            <RotateCcw className="w-3.5 h-3.5 text-red-600" />
            <span className="font-bold text-[11px] hidden sm:inline">-90°</span>
          </button>

          {/* Rotate Right */}
          <button
            onClick={handleRotateRight}
            className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all flex items-center space-x-1"
            title="Rotate Right 90°"
          >
            <RotateCw className="w-3.5 h-3.5 text-red-600" />
            <span className="font-bold text-[11px] hidden sm:inline">+90°</span>
          </button>

          <div className="h-4 w-px bg-slate-300 mx-1" />

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all"
            title="Zoom Out / Make Smaller"
          >
            <ZoomOut className="w-3.5 h-3.5 text-blue-600" />
          </button>

          {/* Zoom Level Indicator */}
          <span className="font-bold text-[11px] text-slate-800 px-1 font-mono">{Math.round(zoomLevel * 100)}%</span>

          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all"
            title="Zoom In / Make Larger"
          >
            <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
          </button>

          <div className="h-4 w-px bg-slate-300 mx-1" />

          {/* Reset */}
          <button
            onClick={handleReset}
            className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all"
            title="Reset Rotation & Zoom"
          >
            <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
          </button>

          {/* Lightbox Pop-up */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="p-1.5 rounded bg-[#E31837] hover:bg-[#B9122C] text-white shadow-sm transition-all ml-1"
            title="Open Fullscreen Lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Image Display Area with CSS Transform */}
      <div className="overflow-hidden p-4 flex items-center justify-center min-h-[220px] max-h-[480px] bg-white rounded-lg border border-slate-200">
        <img
          src={src}
          alt={alt}
          style={{
            transform: `rotate(${rotation}deg) scale(${zoomLevel})`,
            transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            maxHeight: '380px',
          }}
          className="object-contain max-w-full rounded shadow-sm cursor-pointer select-none"
          onClick={() => setIsLightboxOpen(true)}
        />
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl p-6 space-y-4">
            
            {/* Lightbox Controls */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
              <span className="font-extrabold text-amber-400">Diagram Preview Lightbox</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleRotateLeft}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center space-x-1"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-red-400" />
                  <span>-90°</span>
                </button>
                <button
                  onClick={handleRotateRight}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center space-x-1"
                >
                  <RotateCw className="w-3.5 h-3.5 text-red-400" />
                  <span>+90°</span>
                </button>
                <button
                  onClick={handleZoomIn}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                >
                  <ZoomOut className="w-3.5 h-3.5 text-blue-400" />
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1 rounded bg-red-600 text-white ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
              <img
                src={src}
                alt={alt}
                style={{
                  transform: `rotate(${rotation}deg) scale(${zoomLevel})`,
                  transition: 'transform 0.25s ease-out',
                  maxHeight: '70vh',
                }}
                className="object-contain rounded"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
