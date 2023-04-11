function Cartas({ carta, handleSelect }) {
  console.log(carta);
  return (
    <>
      {carta.estado === "visible" ? (
        <img src={carta.url} />
      ) : (
        <div
          onClick={() => handleSelect(carta.id)}
          style={{
            displey: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",

            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        >
          ?
        </div>
      )}
    </>
  );
}

export default Cartas;
