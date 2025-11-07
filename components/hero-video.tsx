'use client'

import { useState } from "react";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div id="about" className="relative w-full h-[90vh] overflow-hidden">
      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51%2F68ada018ead0f5ba73f012e2_DESKI%20HEARTFOCUS%20PROMO%20-%20Temporary%20-%20Preview%202-poster-00001.jpg"
          >
            <source src="https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51%2F68ada018ead0f5ba73f012e2_DESKI%20HEARTFOCUS%20PROMO%20-%20Temporary%20-%20Preview%202-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51%2F68ada018ead0f5ba73f012e2_DESKI%20HEARTFOCUS%20PROMO%20-%20Temporary%20-%20Preview%202-transcode.webm" type="video/webm" />
          </video>
        </div>
      ) : (
        // <div className="absolute inset-0 w-full h-full">
        //   <iframe
        //     className="w-full h-full"
        //     src="https://www.youtube-nocookie.com/embed/8lCZWnk_9qU?autoplay=1&rel=0&controls=0&modestbranding=1&mute=0&playlist=8lCZWnk_9qU&loop=1"
        //     title="YouTube video player"
        //     frameBorder="0"
        //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //     allowFullScreen
        //   />
        // </div>
        <div className="absolute inset-0 video-html w-embed w-iframe w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/8lCZWnk_9qU?rel=0&amp;autoplay=1&amp;controls=0&amp;modestbranding=1&amp;enablejsapi=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="widget2"
            data-gtm-yt-inspected-8="true"
            spellCheck={false}
            aria-label="To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings"
          />
        </div>
      )}
    </div>
  );
}
