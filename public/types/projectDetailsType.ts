export interface Project {
    id: number;
    name: string;
    related: string;
    image: string;
    about: string[];
    technology: string[];
    liveLink: string;
    github: string;
    screenShortImage: string[];
    cardClass : string,
    server? : string
  }