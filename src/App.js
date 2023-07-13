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
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={process.env.PUBLIC_URL + '/assets/project-1.png'}>

      </Project>

      <Project
        position={false}
        title={"ASAH"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={process.env.PUBLIC_URL + '/assets/project-2.png'}>

      </Project>

      <Project
        position={true}
        title={"URL Shortener"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={process.env.PUBLIC_URL + '/assets/project-3.png'}>

      </Project>

      <Quote />

      <Footer />
    </div>
  );
}

export default App;
