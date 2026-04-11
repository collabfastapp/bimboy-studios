"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "31adab135f48d93f64c3ae2861d67fe6";

export default function VideoPage() {
  const videoRef = useRef<HTMLIFrameElement | null>(null);
  const [locked, setLocked] = useState(false);
  const [time, setTime] = useState(0);

  // 2 minute lock timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev >= 120) {
          setLocked(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      
      {/* VIDEO PLAYER */}
      <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10">
        
        <iframe
          ref={videoRef}
          src={`https://iframe.videodelivery.net/${VIDEO_ID}?autoplay=true&muted=false`}
          className="w-full h-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />

        {/* LOCK OVERLAY */}
        {locked && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-2xl font-bold mb-2">
              Unlock Full Video
            </h2>
            <p className="text-white/70 mb-6">
              Preview ended at 2:00
            </p>

            <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Unlock for $12.99
            </button>
          </div>
        )}

        {/* SWIPE / CLICK CTA */}
        {!locked && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition">
              Unlock full video anytime ↑
            </button>
          </div>
        )}
      </div>

      {/* VIDEO INFO */}
      <div className="max-w-4xl w-full mt-6">
        <h1 className="text-3xl font-bold mb-2">
          My felt good this morning
        </h1>

        <p className="text-white/60 mb-2">
          Cast: Spikeydee
        </p>

        <p className="text-white/80 mb-4">
          Stroking and enjoying myself
        </p>

        <div className="text-pink-400 font-semibold text-lg">
          $12.99
        </div>
      </div>
    </div>
  );
}