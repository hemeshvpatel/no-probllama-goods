import importImg from "./noprobllama.jpg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px",
      }}
    >
      <h1>No Probllama Goods</h1>
      <h2>Coming Soon to a store near you...</h2>
      <div>
        <img src={importImg} alt="import"></img>
      </div>
    </div>
  );
}

export default App;
