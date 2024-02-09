import { Col, Container, Row } from "react-bootstrap";
import '../assets/css/Videos.css'


const Video = () => {
    return (
        <Container className="container-videos" >
            <h3 className="text-white mb-4">Giochi più popolari dell'ultimo mese:</h3>
            <Row>
                <Col sm={4}>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/ZPu9yAOEYkQ?si=11J2YMJDc_S_-eYE" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
                <Col sm={4} >
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/ItyO3chi9bo?si=8hQ8Nue2xaOjY9-K" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
                <Col sm={4}>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/RDzw1EKnaIA?si=BL7sYQRV31t8_CjP" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={4}>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/88JL-WM_kV0?si=lYCbTusaxl7dGqgY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
                <Col sm={4}>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/upysyDu2fNo?si=n6w32z3WYdGfHUQ2" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
                <Col sm={4}>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/QdBZY2fkU-0?si=dSc59Pg5BhtTL126" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>

        </Container>
    )
}

export default Video