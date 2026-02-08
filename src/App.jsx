import Header from "./componerts/header";
import Leam from "./componerts/leam";



function App() {
  const handleClick=()=>{
    alert("button clicked");
  };
  

  return (
    <>
      
      
      <div>
        <div> i am muski</div>
        { <Leam/> }
        
        

      </div>
      
      <p>
        Click on the Vite and React logos to learn more
      </p>
      { <Header Name="muski" Age={22} isMarried={false}  handleClick={ handleClick}/> }
      <div>
      
      </div>
    </>
  );
}

export default App;
