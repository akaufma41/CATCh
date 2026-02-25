export interface TeamInfo {
  name: string;
  slug: string;
  image: string;
}

export const teams: Array<TeamInfo> = [
  {
    name: "Game Night",
    slug: "game-night",
    image: "/images/teams/game-night.jpg",
  },
  {
    name: "Hoover",
    slug: "hoover",
    image: "/images/teams/hoover.jpg",
  },
  {
    name: "A-Team",
    slug: "a-team",
    image: "/images/teams/a-team.jpg",
  },
  {
    name: "Improvised Screenwriters",
    slug: "improvised-screenwriters",
    image: "/images/teams/improvised-screenwriters.jpg",
  },
  {
    name: "Double the Pump Cheese",
    slug: "double-the-pump-cheese",
    image: "/images/teams/double-the-pump-cheese.jpg",
  },
  {
    name: "Dear Diary",
    slug: "dear-diary",
    image: "/images/teams/dear-diary.jpg",
  },
  {
    name: "Snobs Anonymous",
    slug: "snobs-anonymous",
    image: "/images/teams/snobs-anonymous.jpg",
  },
  {
    name: "Ol' Unreliable",
    slug: "ol-unreliable",
    image: "/images/teams/ol-unreliable.jpg",
  },
  {
    name: "CATCh Court",
    slug: "catch-court",
    image: "/images/teams/catch-court.jpg",
  },
];

export function getTeamBySlug(slug: string): TeamInfo | undefined {
  return teams.find((team) => team.slug === slug);
}
