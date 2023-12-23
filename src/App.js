import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Project from "./components/Projects";
import Quote from "./components/Quote";
import Skill from "./components/Skill";

/*
TODO: 
add 3d button contact me in hero

FIX:
scroll effect glitch
steps sizing in education

DEVELOP:
Enhance responsive
Animation

MOD:
modify project content [description section]
modify skill content [others section]
modify quote content [make it dynamic call to api]
*/

const App = () => {
  return (
    <div class="snap-y snap-mandatory h-screen overflow-scroll">
      <Nav />

      <Hero />

      <Experience />

      <Skill />

      <Project
        position={true}
        title={"Movie Website"}
        url={"https://github.com/Dimas-Saputra-Me/GDSC-ITB-Backend-and-Database"}
        desc={"This project was created to fulfill the final assignment of the GDSC-ITB community. The website contains various movie lists where users can view ratings, descriptions, cast information, and more. Additionally, users have the ability to save films to their wishlist based on their individual preferences. The project was developed by a team of three individuals, and details about the team and their contributions can be found in the source code repository."}
        img={process.env.PUBLIC_URL + '/assets/project-1.png'}>

      </Project>

      <Project
        position={false}
        title={"TaniLink"}
        url={"https://github.com/Topi-Batu"}
        desc={"The ongoing TaniLink project, involving a team of seven individuals, addresses critical challenges in Indonesia's agricultural sector. With the goal of completing the Minimum Viable Product (MVP) by December 22, 2023, the project aims to leverage technology to bridge income gaps, empower farmers, and contribute to the sustainable growth of the nation's agricultural sector. By providing essential pricing information and facilitating direct connections between farmers and buyers, TaniLink reflects a collaborative commitment to positive transformation in the agrarian landscape."}
        img={process.env.PUBLIC_URL + '/assets/project-4.png'}>  
      </Project>

      <Project
        position={true}
        title={"Farm Commodities Price Scrapping"}
        url={"https://colab.research.google.com/drive/15bcngR4-3o78byvo7V_n6UToaNwt5Evh?usp=sharing"}
        desc={"This project scrapes datasets from the National Strategic Food Price Information Center, focusing on farm commodities. It visualizes commodity prices and includes a predictive model for forecasting future prices, providing a comprehensive tool for agricultural market analysis."}
        img={process.env.PUBLIC_URL + '/assets/project-3.webp'}>
      </Project>

      <Project
        position={false}
        title={"ASAH"}
        url={"https://github.com/Dimas-Saputra-Me/ASAH"}
        desc={"ASAH (Amazing-SuperApp-Healthy) is a mobile application that provides various features to monitor physical health by recording general information about the user's body. The recorded information is classified and processed by the system to display simple health analyses for the user. The application was developed by a team of 6 individuals, and details about the team and their contributions can be found in the source code repository."}
        img={process.env.PUBLIC_URL + '/assets/project-2.png'}>
      </Project>

      <Project
        position={true}
        title={"URL Shortener"}
        url={"https://github.com/Dimas-Saputra-Me/url-shortener-ci"}
        desc={"ShortenURL is a website designed to shorten URLs for ease of use. Additionally, it generates QR codes for the shortened URLs. The platform offers a convenient solution for simplifying links and facilitates quick access by generating corresponding QR codes for the shortened URLs."}
        img={process.env.PUBLIC_URL + '/assets/project-5.png'}>
      </Project>

      <Quote />

      <Footer />
    </div>
  );
}

export default App;
