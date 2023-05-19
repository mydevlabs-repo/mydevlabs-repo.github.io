import Card from "react-bootstrap/Card";
function ExCards(props) {
  return (
    <Card
      className="ex-cards"
      style={{
        marginTop: "1rem",

        marginRight: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        className="ex-card-body-cont"
        style={{
          borderTopLeftRadius: "8px",
          display: "flex",
          padding: "2vmax",
          borderLeft: "10px solid" + props.bColor,
        }}
      >
        <Card.Img
          style={{ margin: "1vmax auto", height: "10vmax", width: "10vmax" }}
          variant="top"
          src={props.imgSrc}
        />
        <Card.Body
          className="ex-card-body"
          style={{ borderTop: "none", paddingTop: "1vmax" }}
        >
          <Card.Title style={{ fontWeight: "600", fontSize: "larger" }}>
            <span>
              <span>{props.Designation}</span>
              <span
                className="tenure"
                style={{
                  fontFamily: "ptSerifItalic",
                  fontWeight: "100",
                  fontSize: "medium",
                  float: "right",
                }}
              >
                ({props.tenure})
              </span>
            </span>
            <span
              className="tenure-flag"
              style={{
                display: "none",
                fontFamily: "ptSerifItalic",
                fontWeight: "100",
                fontSize: "medium",
                float: "right",
              }}
            >
              <br />({props.tenure})
            </span>
            <br />
            <span
              style={{
                fontFamily: "ptSerifItalic",
                fontWeight: "100",
                fontSize: "medium",
              }}
            >
              {props.Responsibilities}
            </span>
          </Card.Title>
          <div>
            <Card.Text style={{ fontWeight: "300", fontSize: "medium" }}>
              {props.cardDesc}
            </Card.Text>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default ExCards;
