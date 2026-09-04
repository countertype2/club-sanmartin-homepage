import logo from "@/assets/logoSanMartin.svg.asset.json";
import crest from "@/assets/escudo-sanma.svg.asset.json";
import crestRival from "@/assets/escudo-generico.svg.asset.json";
import heroBg from "@/assets/SanMartinBg.webp.asset.json";
import nightField from "@/assets/SanMartinIlustracion.webp.asset.json";
import photo01 from "@/assets/sanmartin-01.jpg.asset.json";
import photo02 from "@/assets/sanmartin-02.jpg.asset.json";
import photo03 from "@/assets/sanmartin-03.jpg.asset.json";

export const clubLogo = logo.url;
export const clubCrest = crest.url;
export const rivalCrest = crestRival.url;
export const heroImage = heroBg.url;
export const clubNightImage = nightField.url;

export const clubPhotos = {
  juveniles: photo01.url,
  infantiles: photo02.url,
  primera: photo03.url,
};

/** Header: four grouped destinations + the single membership CTA. */
export const navLinks = [
  { label: "Club", to: "/club" },
  { label: "Fútbol", to: "/futbol" },
  { label: "Comunidad", to: "/comunidad" },
  { label: "Contacto", to: "/contacto" },
];

/**
 * Match data. `date` is an ISO date so the UI can decide what is upcoming
 * and what is already played instead of hardcoding stale labels.
 */
export const nextMatch = {
  competition: "Primera división",
  home: { name: "San Martín", crest: clubCrest },
  away: { name: "Rival a confirmar", crest: rivalCrest },
  date: "2026-09-06",
  time: "16:30",
  place: "Cancha San Martín",
};

export const lastResult = {
  competition: "Primera división",
  home: { name: "San Martín", crest: clubCrest, score: 3 },
  away: { name: "Rival", crest: rivalCrest, score: 1 },
  date: "2026-08-30",
  place: "Cancha San Martín",
};

export const news = [
  {
    category: "Inferiores",
    title: "La octava se quedó con el clásico del barrio",
    date: "2026-08-09",
    description:
      "Un partido peleado de principio a fin, con un plantel que sigue mostrando el trabajo de todo el año en el semillero.",
    image: clubPhotos.juveniles,
    alt: "Plantel de inferiores de Club San Martín posando en la cancha",
    to: "/comunidad",
  },
  {
    category: "Semillero",
    title: "Los más chicos abrieron la fecha con la cancha llena",
    date: "2026-08-02",
    description:
      "Familias, vecinos y compañeros acompañaron a las categorías infantiles en una jornada a puro fútbol.",
    image: clubPhotos.infantiles,
    alt: "Categoría infantil de Club San Martín antes de comenzar el partido",
    to: "/comunidad",
  },
  {
    category: "Primera",
    title: "Primera cerró la semana con una victoria de local",
    date: "2026-07-26",
    description:
      "El equipo mayor sigue firme en el torneo y con varios jugadores formados en el club dentro del once inicial.",
    image: clubPhotos.primera,
    alt: "Plantel de primera división de Club San Martín formado en la cancha",
    to: "/comunidad",
  },
];

/** Ruta de formación: nombres y edades existentes del club, sin cambios. */
export const categories = [
  {
    name: "Infantiles",
    range: "6 a 12 años",
    focus: "Primer contacto con el club: juego, coordinación y compañerismo antes que resultados.",
    image: clubPhotos.infantiles,
  },
  {
    name: "Prejuveniles",
    range: "13 a 15 años",
    focus: "Se afianzan los fundamentos técnicos y la lectura del juego en cancha de once.",
    image: clubPhotos.infantiles,
  },
  {
    name: "Juveniles",
    range: "16 a 18 años",
    focus: "Competencia formal, exigencia física y la puerta de entrada al plantel mayor.",
    image: clubPhotos.juveniles,
  },
  {
    name: "Primera",
    range: "Plantel mayor",
    focus: "El equipo que representa al barrio, con jugadores formados en el propio semillero.",
    image: clubPhotos.primera,
  },
  {
    name: "Adultos",
    range: "Desde 19 años",
    focus: "Fútbol para seguir jugando y sostener el vínculo con el club toda la vida.",
    image: clubPhotos.primera,
  },
  {
    name: "Senior",
    range: "Veteranos",
    focus: "La memoria del club en cancha: encuentros, torneos y historia compartida.",
    image: clubPhotos.juveniles,
  },
];

export const events = [
  {
    type: "Recaudación",
    title: "Gran rifa anual del club",
    date: "2026-08-30",
    dateLabel: "Sorteo: 30 de agosto",
    description:
      "Cada número que se vende ayuda a comprar indumentaria, pelotas y a sostener los entrenamientos de todas las categorías.",
    to: "/comunidad",
  },
  {
    type: "Comunidad",
    title: "Cena a beneficio en el club",
    date: "2026-09-12",
    dateLabel: "12 de septiembre",
    description:
      "Una noche para juntarnos entre familias, jugadores y vecinos, con la recaudación destinada al mantenimiento de la cancha.",
    to: "/comunidad",
  },
  {
    type: "Torneo",
    title: "Torneo del barrio de categorías infantiles",
    date: "2026-10-04",
    dateLabel: "4 y 5 de octubre",
    description:
      "Dos jornadas de fútbol formativo con clubes de la zona, cantina a beneficio y actividades para toda la familia.",
    to: "/comunidad",
  },
];

/**
 * Perfiles sociales reales del club. Mientras estén vacíos, la UI no muestra
 * enlaces falsos: solo indica que el canal está por confirmarse.
 */
export const socialProfiles: { instagram?: string; facebook?: string; whatsapp?: string } = {};

export const clubGround = {
  name: "Cancha de Club San Martín",
  address: "Dirección a confirmar",
  city: "Barrio San Martín",
  mapUrl: "",
};

const monthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function parseISO(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y!, (m ?? 1) - 1, d ?? 1);
}

export function formatLongDate(iso: string) {
  const date = parseISO(iso);
  return `${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`;
}

export function formatMatchDate(iso: string) {
  const date = parseISO(iso);
  return `${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]!.slice(0, 3)}`;
}

export function isUpcoming(iso: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseISO(iso).getTime() >= today.getTime();
}
