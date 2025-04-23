import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HexBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Inicializa la configuración completa de particles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",  // Asegura que ocupe el 100% del ancho del contenedor
        height: "100%", // Asegura que ocupe el 100% de la altura del contenedor
        zIndex: 0,     // Asegura que el fondo esté detrás del contenido
      }}
      options={{
        background: {
          color: "#323642", // Color de fondo
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 12,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00bcd4",
          },
          shape: {
            type: "polygon",
            polygon: {
              nb_sides: 6, // Forma de hexágono
            },
          },
          opacity: {
            value: 0.25,
          },
          size: {
            value: 60,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outMode: "bounce",
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default HexBackground;
