const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1000px",
        margin: "0 auto",
        border: "1px solid black",
        minHeight: "30vh",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
