import { useState } from "react";

import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

function App() {
  const [document, setDocument] = useState("document.pdf");

  const handleOpen = () => setDocument("another-example.pdf");

  return (
    <div className="App">
      <h1> AMB PDF Editor</h1>
      {/* <button className="App-button" onClick={handleOpen}>
        Open another document
      </button> */}
      <h2> 
      Made with <span style={{ color: 'red' }}>&#10084;</span> by Kartik Rana

</h2>
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
     
    </div>
  );
}

export default App;
