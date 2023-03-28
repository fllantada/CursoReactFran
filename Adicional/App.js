import React from react 

const App = () => {
    return (
        <Title>            
        <h1>NODOS HIJOS</h1>
           </Title>
        
    )
    }
    const Title = ({chilldren}) => {
        return (
            <div>           
            {chilldren}
            </div>
        )
        }
export default App