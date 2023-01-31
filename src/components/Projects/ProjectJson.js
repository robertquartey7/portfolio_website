import movieImg from "../../assets/project/movieapp1.gif";
import colorGram from "../../assets/project/color-gram.gif";
import spotify from "../../assets/project/spotify.gif";
export const Project = [
  {
    projectTitle: "Movie App",
    projectDescription:
      "Displays real time Movies and TV shows coming out with the name and release date using flask. Uses a movie api to get the hot Movies and Tv shows coming for the day and week.",
    gitHubLink: "https://github.com/robertquartey7",
    imageLink: movieImg,
    demo: "",
    live: "",
    techStack: ["Python", "Flask", "VsCode", "Movie API"],
  },

  {
    projectTitle: "color-gram",
    projectDescription: "Takes a photo and extract the colors from the photo.",
    gitHubLink: "https://github.com/robertquartey7",
    imageLink: colorGram,
    demo: "",
    live: "",
    techStack: ["Python", "Flask", "VsCode", "color-gram"],
  },
  {
    projectTitle: "Music Player",
    projectDescription:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    gitHubLink: "https://github.com/robertquartey7/spotify",
    imageLink: spotify,
    demo: "",
    live: "",
    techStack: ["React", "Javascript", "VsCode", "Spotify API"],
  },
];
