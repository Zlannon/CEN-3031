
import TypeWriterEffect from 'react-typewriter-effect';
import "./home.css"


const image = require("../images/Food.png")

function Home() {
  
  return(
    <main> 
      <img src={image} alt="img"/>
      <h1 className='homeType'>
        <TypeWriterEffect startDelay={100} text="Welcome to Give Good" typeSpeed={50}/>
      </h1>
      <h1 className='descp'>
        Give<br/><br/>
        Receive<br/><br/>
        Save Food
      </h1>
    </main>
  );
    
}

export default Home;