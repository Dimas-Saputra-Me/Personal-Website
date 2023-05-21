import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Project from "./components/Projects";

/*
TODO: 
add typewriting effect on name
modify snap scroll type
add tilt
add skill page

MOD:
modify footer content
*/

const App = () => {
  return (
    <>
      <Nav></Nav>

      <Hero></Hero>

      <Project 
        position={true}
        title={"Project Title"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={"https://wallpaper.dog/large/20561279.jpg"}>

        </Project>

      <Project 
        position={false}
        title={"Project Title"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, tellus eget ultrices congue, dolor dui mollis ligula, vel viverra mauris libero sed leo. Morbi ultricies, velit non condimentum dictum, erat ante venenatis ex, in mollis sapien ex at purus. Duis ut finibus dui. Sed dictum arcu vitae massa finibus, quis mattis odio interdum. Morbi imperdiet convallis metus at tempus. Ut vitae lobortis libero. Etiam sit amet elit eu mauris sollicitudin consequat. Donec sit amet arcu ut lectus sodales congue. Duis ornare dolor pellentesque rutrum dapibus. Pellentesque imperdiet nunc ut elit tincidunt molestie. Phasellus at urna pellentesque, pellentesque felis eu, tincidunt lorem. Curabitur ut accumsan enim. In hendrerit turpis ac vulputate bibendum."}
        img={"https://wallpaper.dog/large/20561279.jpg"}>

        </Project>

        <Footer></Footer>
    </>
  );
}

export default App;
