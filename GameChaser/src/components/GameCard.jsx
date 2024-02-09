
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../actions/favoriteAtions';
import { Link } from 'react-router-dom';

const GameCard = ({ play }) => {
  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();
  console.log(favorites);

  function funcFavorites() {
    if (!favorites.includes(play.name)) {
      dispatch(addFavorite(play.name))
    }
  }

  return (
    <Col md={4} className='my-3 d-flex flex-column align-items-center '>
      <Card className='game-card'>
        <Card.Img variant="top" src={play.background_image} height="270px" />
        <Card.Body>
          <Card.Title>{play.name}</Card.Title>
          <Card.Text>

          </Card.Text>
          <div className='d-flex justify-content-center'>
            {favorites.includes(play.name) ?
              <Button className='btn-success' disabled={true}>Aggiunto ai preferiti</Button> :
              <Button variant="primary" onClick={() => funcFavorites()} >Aggiungi ai preferiti</Button>
            }
            <Button className='ms-2'> <Link className='text-white text-decoration-none' to={`/details/${play.id}`}>Dettagli Gioco</Link></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GameCard