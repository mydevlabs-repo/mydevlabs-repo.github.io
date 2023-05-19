import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner animation="border" role="status" style={{ margin: "auto" }}>
      <span className="visually-hidden text-dark">Loading...</span>
    </Spinner>
  );
}

export default Loading;
