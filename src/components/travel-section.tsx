"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { DATA } from "@/data/resume";
import Image from "next/image";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

type TravelLocation = typeof DATA.travel[number];

export function TravelSection() {
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);

  return (
    <section id="travel" className="space-y-12 w-full py-12">
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Travel & Experiences
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Places I've Explored
            </h2>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: [78, 22],
              scale: 1000
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEA"
                    stroke="#D6D6DA"
                  />
                ))
              }
            </Geographies>
            {DATA.travel.map(({ coordinates, location }) => (
              <Marker key={location} coordinates={coordinates}>
                <circle
                  r={8}
                  fill="#F53"
                  stroke="#FFF"
                  strokeWidth={2}
                  onClick={() => setSelectedLocation(DATA.travel.find(loc => loc.location === location) || null)}
                  className="cursor-pointer hover:fill-[#F00] transition-colors"
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="space-y-4">
          {selectedLocation ? (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{selectedLocation.location}</h3>
              <p className="text-muted-foreground">{selectedLocation.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {selectedLocation.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${selectedLocation.location} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedLocation.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-muted rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Click on a location to see details</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 