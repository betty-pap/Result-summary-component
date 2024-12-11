import ResultCard from "./components/ResultCard";
import data from '../data.json';

const cardColors = {
  Reaction: {backgroundColor: "hsla(0, 100%, 67%, 0.1)", fontColor: "hsl(0, 100%, 67%)"},
  Memory: {backgroundColor: "hsla(39, 100%, 56%, 0.1)", fontColor: "hsl(39, 100%, 56%)"},
  Verbal: {backgroundColor: "hsla(166, 100%, 37%, 0.1)", fontColor: "hsl(166, 100%, 37%)"},
  Visual: {backgroundColor: "hsla(234, 85%, 45%, 0.1)", fontColor: "hsl(234, 85%, 45%)"}
}

function App() {
  return (
    <div className="result-card">
      <div className="your-result">
        <h2>Your Result</h2>
        <div className="circle">
          <span className="score-nr">76</span>
          of 100
        </div>
        <span>Great</span>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      
      <div className="summary">
        <h2>Summary</h2>
        {data.map((item, index) => {
          const colors = cardColors[item.category] || { backgroundColor: "#fff", fontColor: "#000" };
          return (
            <ResultCard key={index} category={item.category} score={item.score} icon={item. icon} backgroundColor={colors.backgroundColor} fontColor={colors.fontColor}/>
          )
        })}
        
       
        <button>Continue</button>
      </div>
  
    </div>
  );
}

export default App;
