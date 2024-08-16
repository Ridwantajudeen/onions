import Bottom from "./Bottom";
import Header from "./Header";
import Middle from "./Middle";
import Welcome from "./Welcome";

function Landing(){
    return(
        <div>
            <Header/>
  <div style={{
      display: 'grid',
      placeItems: 'center',
     
    }}>
    <Welcome/>
     <Middle/>
     <Bottom/>
      </div>
        </div>
    )
}
export default Landing;