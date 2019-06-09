import React from "react";
import Header from "./header";
import Content from "./content";
import "./App.scss";

const Gallery = React.lazy(() => import("./gallery"));

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <React.Suspense fallback={<div>loading..</div>}>
        <Gallery />
      </React.Suspense>
    </div>
  );
}

export default App;
