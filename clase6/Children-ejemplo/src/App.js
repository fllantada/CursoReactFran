import React from "react";

const App = () => {
  return (
    <div>
      <CustomContainer>

        
        {
          //aca van los nodos hijos}
        }
        <NodoHijo />


      </CustomContainer>
    </div>
  );
};
const CustomContainer = (props) => {
  //aca se pueden encapsular los nodos hijos
  return (
    <div>
      <h1>Todo tiene este titulo en mi web</h1>

      {props.children}
    </div>
  );
};

const NodoHijo = () => {
  return <h1>NODO HIJO</h1>;
};

export default App;
