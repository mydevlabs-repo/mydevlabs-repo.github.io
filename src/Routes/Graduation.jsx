import "../Components/style.css";

function Graduation() {
  return (
    <>
      <div className="graduation-container">
        <div className="marks">
          <div className="">
            Bachelor's of Technology in Computer Science & Engineering
            <br />
            Manav Rachna International Institute of Research and Studies
            <br />
            Batch 2016 to 2020 || Overall CGPA 8.09
            <br />
            Achievements
            <br />
            <ul>
              <li>
                Achieved 1st rank in IEEE Inter-department technical quiz
                competition(2017) organized by MRIIRS
              </li>
              <li>
                Achieved 2nd rank in Inter-department Environmental quiz
                competition (2016)
              </li>
              <li>Achieved 3rd position in IBM-Gurukool 2018</li>
              <li>
                Participation in All India North Zone Football Tournament (2016)
              </li>
            </ul>
            <br />
          </div>
          {/* <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Manav Rachna International Institute of Research & Studies
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusantium beatae quam officiis, vitae eos voluptates, commodi
                impedit magnam quos ipsum, deserunt eveniet molestiae iure? Rem
                itaque magni quo quos.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
        </div>
      </div>
    </>
  );
}

export default Graduation;
