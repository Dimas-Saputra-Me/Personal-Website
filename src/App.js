import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Project from "./components/Projects";

/*
TODO: 
add tilt (Dimana?? :/)
add animation on scroll

FIX:
responsive projects component
steps sizing in education

MOD:
modify project content
modify footer content
modify education content
modify skill content
modify organization content
*/

const App = () => {
  return (
    <div class="snap-y snap-mandatory h-screen overflow-scroll">
      <Nav />

      <Hero />

      <Experience />

      <Project
        position={true}
        title={"Project Title"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={"https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg"}>

      </Project>

      <Project
        position={false}
        title={"Project Title"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={"https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg"}>

      </Project>

      <Footer />
    </div>
  );
}

export default App;
