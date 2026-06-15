export interface ProjectLink {
  text: string;
  url: string;
}

export interface ProjectTag {
  name: string;
  icon?: string;
  color?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Módulo Dirección de Investigación e Innovación UCP",
    description:
      "Módulo de gestión para la dirección de investigación de la Universidad Católica de Pereira dentro del sistema interno UNIVERSE.",
    image: "/Universer.png",
    tags: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "React", icon: "react" },
    ],
    links: [],
  },
  {
    title: "Proyecto de monitoreo climático",
    description:
      "Proyecto de monitoreo climático que permite a los usuarios visualizar datos meteorológicos en tiempo real y hacer predicciones.",
    image: "/ESP32.svg",
    tags: [
      { name: "ESP32", icon: "arduino" },
      { name: "ThingSpeak", icon: "thingspeak" },
      { name: "Firebase", icon: "firebase" },
    ],
    links: [],
  },
  {
    title: "Mapa narco Colombia",
    description:
      "Mapa que muestra la distribución de los principales narcotráficos en Colombia.",
    image: "/mapaColombia.png",
    tags: [
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
    links: [
      {
        text: "Demo",
        url: "https://myhurtado17-cmd.github.io/mapa-narco-colombia",
      },
      {
        text: "Código",
        url: "https://github.com/myhurtado17-cmd/mapa-narco-colombia",
      },
    ],
  },
  {
    title: "Demo videojuego 2D de plataformas",
    description:
      "Videojuego 2D de plataformas muy divertido y sobre todo muy desafiante para pasar una buena tarde con amigos y demostrar quién es el mejor.",
    image: "/Juego2D.png",
    tags: [
      { name: "C#", icon: "csharp" },
      { name: "Unity", icon: "unity" },
    ],
    links: [{ text: "Demo", url: "https://marcogg-24.itch.io/happy-jump" }],
  },
  {
    title: "PokeApi",
    description:
      "Proyecto desarrollado utilizando la API pública de PokéAPI para consultar información de Pokémon en tiempo real. Implementa consumo de endpoints REST, manejo de estados, renderizado dinámico y gestión de datos como tipos, habilidades y estadísticas.",
    image: "/pokewiki.png",
    tags: [
      { name: "Astro", icon: "astro" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
    ],
    links: [
      { text: "Demo", url: "https://myhurtado17-cmd.github.io/pokewiki" },
      { text: "Código", url: "https://github.com/myhurtado17-cmd/pokewiki" },
    ],
  },
];
