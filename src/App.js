import importImg from "./noprobllama.jpg";

function App() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px",
      }}
    >
      <div>No Probllama Goods Coming Soon!</div>
      <div>
        <img src={importImg} alt="import"></img>
      </div>
    </div>
  );
}

export default App;
