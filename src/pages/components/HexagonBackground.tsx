import { useState, useEffect } from 'react';


type hexagon = {
   id: string;
   x: number;
   y: number;
   isActive: boolean;
}

const HexagonBackground = () => {
  const [hexagons, setHexagons] = useState<hexagon[]>([]);

  useEffect(() => {
    const createHexagons = () => {
      const hexArray = [];
      // Usar tamanhos maiores para cobrir melhor a tela
      const rows = Math.ceil(document.body.scrollHeight / 60) + 10; // +10 para margem extra
      const cols = Math.ceil(window.innerWidth / 70) + 10;  // +10 para margem extra
      
      for (let row = -5; row < rows; row++) {
        for (let col = -5; col < cols; col++) {
          const x = col * 70 + (row % 2) * 35;
          const y = row * 60;
          hexArray.push({
            id: `${row}-${col}`,
            x,
            y,
            isActive: false
          });
        }
      }
      setHexagons(hexArray);
    };

    createHexagons();
    window.addEventListener('resize', createHexagons);
    return () => window.removeEventListener('resize', createHexagons);
  }, []);
   

  useEffect(() => {
  const handleMouseMoveGlobal = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY + window.scrollY;


    setHexagons(prev =>
      prev.map(hex => {
        const distance = Math.sqrt(
          Math.pow(mouseX - hex.x, 2) + Math.pow(mouseY - hex.y, 2)
        );
        return {
          ...hex,
          isActive: distance < 120
        };
      })
    );
  };

  window.addEventListener("mousemove", handleMouseMoveGlobal);
  return () => window.removeEventListener("mousemove", handleMouseMoveGlobal);
}, []);




  return (

    <div 
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden"
    >
      <svg className="w-full h-full min-w-full min-h-full">
        {hexagons.map(hex => (
          <polygon
            key={hex.id}
            points="25,5 45,15 45,35 25,45 5,35 5,15"
            transform={`translate(${hex.x}, ${hex.y})`}
            className={`transition-all duration-300 ${
              hex.isActive 
                ? 'fill-cyan-400/20 stroke-cyan-400/60 opacity-15' 
                : 'fill-transparent stroke-slate-700/20'
            }`}
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
};

export default HexagonBackground