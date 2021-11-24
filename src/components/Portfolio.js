import React,{useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import data from '../data'
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";


function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempdata, setTempdata] = useState([])

  const getData=(id,imageSrc, title, description)=>{
    let tempdata=[id,imageSrc, title, description]
    setTempdata({id:tempdata[0],imageSrc:tempdata[1],title:tempdata[2], description:tempdata[3]})
    console.log(tempdata.imageSrc)
    return setModalShow(true)
  }

  return (
    <div>
      <Container>
        <h1
          className="my-3 mt-5"
          style={{ fontSize: "3rem", textTransform: "uppercase" }}
        >
          Portfolio
        </h1>
        <FontAwesomeIcon
          className="my-4"
          style={{ fontSize: "2rem" }}
          icon={faStar}
        />
        <Row style={{ marginBottom: "3rem" }}>
          {data.cardData.map((image) => {
            return (
              <Col md={4}>
                <Image
                  src={image.imageSrc}
                  key={image.id}
                  className="py-3 rounded modalimage"
                  onClick={() => getData(image.id,image.imageSrc, image.title, image.description)}
                  fluid
                />
                {/* <ModalImage className="my-3 rounded" small={image} large={image} imageBackgroundColor="red" hideDownload={true} /> */}
              </Col>
            );
          })}
        </Row>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          img={tempdata.imageSrc}
          title={tempdata.title}
          description={tempdata.description}
        />
      </Container>
    </div>
  );
}

export default Portfolio;
