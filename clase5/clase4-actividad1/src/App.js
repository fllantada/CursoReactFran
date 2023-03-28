import React from "react";

const App = () => {
  return (
    <div>
      <Title>
        {
          //aca van los nodos hijos}
        }
        <NodoHijo />
      </Title>
    </div>
  );
};
const Title = (props) => {
  //aca se pueden encapsular los nodos hijos
  return <>{props.children}</>;
};

const NodoHijo = () => {
  return <h1>NODO HIJO</h1>;
};

export default App;
