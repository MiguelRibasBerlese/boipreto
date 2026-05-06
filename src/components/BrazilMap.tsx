import { useState } from 'react';
// @ts-expect-error — react-simple-maps has no bundled type declarations
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import type { StateInfo } from '../types';

const GEO_URL = '/brazil.json';

const ACTIVE_STATES = ['Pará', 'Maranhão', 'Tocantins', 'Piauí', 'Goiás', 'Minas Gerais'];

const COLOR_ACTIVE = '#C9A84C';
const COLOR_INACTIVE = '#2a2a2a';
const STROKE_INACTIVE = '#444';

interface BrazilMapProps {
  states: StateInfo[];
}

export default function BrazilMap({ states }: BrazilMapProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const stateInfo = selectedState
    ? states.find((s) => s.state === selectedState)
    : null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
      {/* Map */}
      <div className="w-full lg:w-[60%] border border-primary/30 rounded-sm p-4 bg-white/5">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 680, center: [-54, -15] }}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => {
                const name: string = geo.properties.name;
                const isActive = ACTIVE_STATES.includes(name);
                const isHovered = hoveredState === name;
                const isSelected = selectedState === name;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      if (isActive) setSelectedState(isSelected ? null : name);
                    }}
                    onMouseEnter={() => { if (isActive) setHoveredState(name); }}
                    onMouseLeave={() => setHoveredState(null)}
                    style={{
                      default: {
                        fill: isActive ? COLOR_ACTIVE : COLOR_INACTIVE,
                        stroke: isActive ? '#8a6a20' : STROKE_INACTIVE,
                        strokeWidth: isActive ? 0.8 : 0.5,
                        opacity: isActive ? (isSelected ? 1 : 0.8) : 1,
                        filter:
                          isSelected || isHovered
                            ? 'drop-shadow(0 0 8px rgba(201,168,76,0.7))'
                            : 'none',
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                        transition: 'all 0.3s ease',
                      },
                      hover: {
                        fill: isActive ? COLOR_ACTIVE : COLOR_INACTIVE,
                        stroke: isActive ? '#C9A84C' : STROKE_INACTIVE,
                        strokeWidth: isActive ? 1 : 0.5,
                        opacity: 1,
                        filter: isActive
                          ? 'drop-shadow(0 0 10px rgba(201,168,76,0.8))'
                          : 'none',
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                        transition: 'all 0.3s ease',
                      },
                      pressed: {
                        fill: COLOR_ACTIVE,
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Info Panel */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center min-h-[200px]">
        {stateInfo ? (
          <div
            key={stateInfo.state}
            className="animate-fade-in space-y-4 border-l-2 border-primary pl-6"
            style={{ animation: 'fadeIn 0.4s ease' }}
          >
            <span className="font-label text-primary uppercase tracking-[0.4em] text-[10px] block">
              Estado Selecionado
            </span>
            <h3 className="font-logo text-4xl font-bold text-primary tracking-tighter">
              {stateInfo.state}
            </h3>
            <p className="font-body text-on-surface-variant text-base leading-relaxed">
              {stateInfo.desc}
            </p>
            <button
              onClick={() => setSelectedState(null)}
              className="font-label text-[9px] uppercase tracking-widest text-on-surface/30 hover:text-primary transition-colors duration-200 mt-4"
            >
              ← Limpar seleção
            </button>
          </div>
        ) : (
          <div className="space-y-4 bg-zinc-900 border border-primary/40 rounded-sm p-6">
            <span className="font-label text-primary uppercase tracking-widest text-xs block">
              Presença Territorial
            </span>
            <p className="font-body text-zinc-300 text-base leading-relaxed italic">
              Selecione um estado destacado para ver detalhes.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {ACTIVE_STATES.map((s) => (
                <span
                  key={s}
                  className="font-label text-[9px] uppercase tracking-widest border border-primary/60 text-primary bg-primary/10 px-2 py-1 rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
