import logo from './logo.svg';
import './App.css';
import DateTime from './DateTime';
function App() {
  
  const deneme = new Date()
return (
      <div
      
      style={{
        backgroundColor:"turquoise",
        overflowX: "hidden"
        
      }}>
        <header>&#8203;</header>
        <div
        style={{
          textAlign:"center",
          fontSize:"48px",
          marginTop:"25px",
          marginBottom:""
        }}>
          Date Time
        </div>
      <div className="App"
      style={{
        position:"relative"
      }}>
        {console.log(deneme)}
       <DateTime
       hour={deneme.getHours()}
       minutes={deneme.getMinutes()}
       second={deneme.getSeconds()}
       year={deneme.getFullYear()}
       month={deneme.getMonth()}
       day={deneme.getDate()}
       dayName={deneme.getDay()}
       ></DateTime> 
      </div>
      <footer
          style={{
            backgroundColor:"turquoise",
            position:"fixed",
            bottom:"0px",
            right:"45%",
            textAlign:"center",
            marginTop:"45px"
          }}>Created by ozdemir</footer>
      </div>
    );
  }
export default App;
