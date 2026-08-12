import logo from "@/assets/sanMartinLogo.svg.asset.json";
import photo01 from "@/assets/sanmartin-01.jpg.asset.json";
import photo02 from "@/assets/sanmartin-02.jpg.asset.json";
import photo03 from "@/assets/sanmartin-03.jpg.asset.json";

export const clubLogo = logo.url;

export const clubPhotos = {
  juveniles: photo01.url,
  infantiles: photo02.url,
  primera: photo03.url,
};

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Club", to: "/club" },
  { label: "Categorías", to: "/categorias" },
  { label: "Partidos", to: "/partidos" },
  { label: "Eventos", to: "/eventos" },
  { label: "Patrocinadores", to: "/patrocinadores" },
  { label: "Contacto", to: "/contacto" },
];

export const news = [
  {
    category: "INFERIORES",
    title: "La octava se quedó con el clásico del barrio",
    date: "9 de agosto de 2026",
    description:
      "Un partido peleado de principio a fin, con un plantel que sigue mostrando el trabajo de todo el año en el semillero.",
    image: clubPhotos.juveniles,
    alt: "Plantel de inferiores de Club San Martín posando en la cancha",
  },
  {
    category: "SEMILLERO",
    title: "Los más chicos abrieron la fecha con la cancha llena",
    date: "2 de agosto de 2026",
    description:
      "Familias, vecinos y compañeros acompañaron a las categorías infantiles en una jornada a puro fútbol.",
    image: clubPhotos.infantiles,
    alt: "Categoría infantil de Club San Martín antes de comenzar el partido",
  },
  {
    category: "PRIMERA",
    title: "Primera cerró la semana con una victoria de local",
    date: "26 de julio de 2026",
    description:
      "El equipo mayor sigue firme en el torneo y con varios jugadores formados en el club dentro del once inicial.",
    image: clubPhotos.primera,
    alt: "Plantel de primera división de Club San Martín formado en la cancha",
  },
];

export const categories = [
  { name: "Infantiles", range: "6 a 12 años" },
  { name: "Prejuveniles", range: "13 a 15 años" },
  { name: "Juveniles", range: "16 a 18 años" },
  { name: "Primera", range: "Plantel mayor" },
  { name: "Adultos", range: "Desde 19 años" },
  { name: "Senior", range: "Veteranos" },
];

export const upcoming = [
  {
    category: "PRIMERA",
    home: "Club San Martín",
    away: "Defensores del Norte",
    date: "Sáb 15/08",
    time: "15:30",
    place: "Cancha de San Martín",
  },
  {
    category: "JUVENILES",
    home: "Atlético Sarmiento",
    away: "Club San Martín",
    date: "Dom 16/08",
    time: "11:00",
    place: "Predio Sarmiento",
  },
  {
    category: "INFANTILES",
    home: "Club San Martín",
    away: "Unión Vecinal",
    date: "Sáb 22/08",
    time: "10:00",
    place: "Cancha de San Martín",
  },
];

export const results = [
  {
    category: "PRIMERA",
    home: "Club San Martín",
    away: "Deportivo Belgrano",
    score: "2 - 1",
    date: "Sáb 09/08",
  },
  {
    category: "JUVENILES",
    home: "Club San Martín",
    away: "Racing del Oeste",
    score: "3 - 0",
    date: "Dom 03/08",
  },
  {
    category: "INFANTILES",
    home: "Los Andes",
    away: "Club San Martín",
    score: "1 - 1",
    date: "Sáb 26/07",
  },
];

export const events = [
  {
    type: "RECAUDACIÓN",
    highlight: true,
    title: "Gran rifa anual del club",
    date: "Sorteo: 30 de agosto",
    description:
      "Cada número que se vende ayuda a comprar indumentaria, pelotas y a sostener los entrenamientos de todas las categorías.",
    cta: "Quiero mi número",
  },
  {
    type: "COMUNIDAD",
    highlight: false,
    title: "Cena a beneficio en el club",
    date: "12 de septiembre",
    description:
      "Una noche para juntarnos entre familias, jugadores y vecinos, con la recaudación destinada al mantenimiento de la cancha.",
    cta: "Reservar lugar",
  },
  {
    type: "TORNEO",
    highlight: false,
    title: "Torneo del barrio de categorías infantiles",
    date: "4 y 5 de octubre",
    description:
      "Dos jornadas de fútbol formativo con clubes de la zona, cantina a beneficio y actividades para toda la familia.",
    cta: "Ver detalles",
  },
];

export const sponsors = [
  "Juan Gas",
  "Mailar Camiones",
  "Estancia",
  "Kiosco La Gringa",
  "Agencia N° 34",
  "ST Indumentaria",
];
