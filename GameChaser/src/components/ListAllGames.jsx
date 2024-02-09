import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/css/ListAllGames.css'


const ListAllGames = () => {
    const [allGames, setAllGames] = useState([])

    const fetchAllGames = async () => {
        try {
            const res = await fetch('https://api.rawg.io/api/games?key=e4f3ea7bb9ba4989932f9a1e097ae6cf');
            const data = await res.json();
            console.log(data);
            setAllGames(data.results);
            console.log(allGames);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchAllGames()
    }, ([]))

    return (
        <Container className="text-white container-allgames" >
            <h3  className="mb-4 title">Giochi più cercati:</h3>
            <Row className="d-flex justify-content-center align-items-center">
              
                    <ol className="d-flex flex-wrap">
                        {allGames.map((game, index) => (
                              <Col key={index} sm={3}>
                            <li><Link className='text-white text-decoration-none link' to={`/details/${game.id}`}>{game.name}</Link></li>
                            </Col>
                        ))}

                    </ol>
            </Row>
        </Container>
    )
}

export default ListAllGames