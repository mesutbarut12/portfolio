interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  startDate: string;
  endDate: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fullstack Developer",
    description: "Angular in Frontend and Dotnet in Backend",
    image: "/studex.png",
    technologies: ["Angular", "Dotnet"],
    startDate: "November 2023",
    endDate: "Present",
  },
  {
    id: 2,
    title: "Angular Developer",
    description: "A Frontend Angular Developer",
    image: "/angular.jpg",
    technologies: ["Angular", "HTML", "CSS", "SASS", "NGRX", "RXJS"],
    link: "https://lohnunioncenter.de",
    startDate: "November 2022",
    endDate: "July 2023",
  },
];
