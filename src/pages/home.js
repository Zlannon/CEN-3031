
import TypeWriterEffect from 'react-typewriter-effect';
import "./home.css"


const image = require("../images/Food.png")

function Home() {
  
    return(
      <div className="home"> 
          <img src={image} className="image" alt="img"></img>
        <div className="homeBox">
              <div class="circle"></div>
              <div className='homeBottomBox'>
                  <h1 className='homeType'>

                    <TypeWriterEffect

                      textStyle={{ 
                      fontFamily: 'Red Hat Display',
                      color: 'whitesmoke',
                      fontWeight: 200,
                      fontSize: '1.5em',
                    }}
                      startDelay={100}
                      
                      text="Welcome to Give Good"
                      typeSpeed={50}
                      
                      
                      
                    />
                  </h1>
                  <h1 className='descp'>Give <br></br> <br></br>Receive <br></br><br></br>Save Food</h1>
             </div>
           
        </div>
      </div>
  );
    
}

export default Home;