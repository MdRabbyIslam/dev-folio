import service1 from "./Images/service4.png";
import service2 from "./Images/service3.png";
import service3 from "./Images/service2.png";
import creativeAgency from "./Images/works/creativeAgency.PNG";
import travelGuru from "./Images/works/travelGuru.PNG";
import networkVolunteer from "./Images/works/networkVolunteer.PNG";
import friendBook from "./Images/works/friendBook.PNG";
import devFolio from "./Images/DevFolio.PNG";

export const services = [
  {
    title: "Frontend",
    discription:
      "Fully Responsive website using modern javascript framworks.Dahing looking,eye Charming websites",
    photo: service1,
  },
  {
    title: "Backend",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ea.",
    photo: service2,
  },
  {
    title: "Web App",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ea.",
    photo: service3,
  },
];

export const navLinks = [
  { title: `Home`, path: `/home` },
  { title: `Blog`, path: `/blog` },
  { title: `Work`, path: `/portfolio` },
  { title: `contact`, path: `/contact` },
  {
    title: `resume`,
    path: `https://drive.google.com/uc?export=download&id=16DO7zNSYrMq00Pqg6hAPa0Yvp9yFOIPf`,
  },
];

export const works = [
  {
    photo: creativeAgency,
    title: "Creative Agency",
    discription:
      "It is an agency website for developing buyer projects in different fields like web development, app development.",
    liveSite: "https://creative-agency-368ac.web.app//",
    github: "https://github.com/Rabby-sopno/creative-agency-client",
    technology:
      "React.js, Bootstrap, Express, MongoDB, Node.js, firebase, React-router",
  },
  {
    photo: networkVolunteer,
    title: "Network Volunteer",
    discription:
      " It is a volunteering site where people can play a volunteer role in developing society.",
    liveSite: "https://volunteer-network-12fba.web.app/",
    github: "https://github.com/Rabby-sopno/Network-Volunteer",
    technology:
      "React.js, Bootstrap, Express, MongoDB, Node.js, firebase, React-router",
  },
  {
    photo: devFolio,
    title: "Dev Folio",
    discription:
      " It is portfolio website which I have added my some experience",
    liveSite: "https://musing-wright-9161cc.netlify.app/",
    github: "https://github.com/Rabby-sopno/dev-folio",
    technology: "React.js, Material UI, Netlify,React-router",
  },
  {
    photo: travelGuru,
    title: "Travel Guru",
    discription:
      " It is a travel agency website where people can book hostel in your desire place",
    liveSite: "https://wonderful-meitner-8f3db3.netlify.app/",
    github: "https://github.com/Rabby-sopno/travel-guru",
    technology: "React.js, Bootstrap, firebase, React-router",
  },
  {
    photo: friendBook,
    title: "Friend Book",
    discription:
      "It is a social website like Facebook.Where has 10 users which collected from third-party API.",
    liveSite: "frosty-williams-50d30a.netlify.app/",
    github: "https://github.com/Rabby-sopno/assignment-8",
    technology: "React.js, Material UI, third-party API,",
  },
];
