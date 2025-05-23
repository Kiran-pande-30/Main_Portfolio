"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Custom marker icon
const createCustomIcon = (location: string) => {
  const blackMarkers = ["Nanded", "Indore", "Nagpur"];
  const color = blackMarkers.includes(location) ? "#000000" : "#FF0000";
  
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          background-color: white;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

const center: [number, number] = [20.5937, 78.9629];

export default function TravelPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Check for mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial checks
    checkDarkMode();
    checkMobile();

    // Create observers
    const darkModeObserver = new MutationObserver(checkDarkMode);
    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      darkModeObserver.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-y-auto">
      <div className={`w-full min-h-screen ${isMobile ? 'flex-col' : 'flex'} p-4 gap-4`}>
        {/* Map Section */}
        <div className={`relative rounded-lg overflow-hidden border ${
          isMobile ? 'h-[calc(100dvh-2rem)] w-full' : 'h-[calc(100vh-2rem)] w-[40vw] my-4 ml-4'
        }`} style={{ zIndex: 0 }}>
          <MapContainer
            center={center}
            zoom={isMobile ? 4 : 5}
            minZoom={4}
            maxZoom={6}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
            zoomControl={true}
            scrollWheelZoom={true}
            touchZoom={true}
            doubleClickZoom={true}
            dragging={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={isDarkMode 
                ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              }
            />

            {DATA.travel
              .filter(({ location }) => location !== "Jamshedpur")
              .map(({ coordinates, location, date, description, highlights }) => (
                <Marker
                  key={location}
                  position={[coordinates[0], coordinates[1]]}
                  icon={createCustomIcon(location)}
                >
                  <Popup className={`max-w-[${isMobile ? '240px' : '280px'}] sm:max-w-[320px]`}>
                    <div className="space-y-2">
                      <h3 className="font-bold text-base sm:text-lg">{location}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{date}</p>
                      <p className="text-xs sm:text-sm line-clamp-3">{description}</p>
                      <div className="flex flex-wrap gap-1">
                        {highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-[10px] sm:text-xs bg-muted rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Popup>
                  <Tooltip sticky>{location}</Tooltip>
                </Marker>
              ))}
          </MapContainer>
        </div>

        {/* Memories Section */}
        <div className={`${isMobile ? 'w-full px-4' : 'w-[60vw] px-8'} py-4 flex flex-col bg-background`}>
          <BlurFade delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                Travel Memories
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Each marker on the map represents a unique chapter in my journey across India. 
                From the spiritual aura of Nanded to the bustling streets of Mumbai, 
                every city has left its mark on my story. The black markers highlight 
                my hometown and key cities that shaped my early years, while the red 
                markers trace my adventures across the country. Each visit brought new 
                experiences, friendships, and lessons that continue to inspire my journey.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Cultural Exploration</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Local Cuisine</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Historical Sites</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Natural Beauty</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
} 