import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsFetch } from "../actions/fetchActions";


const DetailsLayout = () => {
  const [requirementsVisible, setRequirementsVisible] = useState(true);
  const gameDetails = useSelector((state) => state.fetchItems.gameDetails);
  const findRequirements = gameDetails?.platforms.find((platform) => platform.platform.name === 'PC')
  const minimum = findRequirements?.requirements.minimum;
  const recommended = findRequirements?.requirements.recommended;

  const dispatch = useDispatch();
  const params = useParams();
  const URL = 'https://api.rawg.io/api/games/';
  const myKey = '?key=e4f3ea7bb9ba4989932f9a1e097ae6cf';


  const fetchGameDetails = async () => {
    try {
      const res = await fetch(URL + params.gameid + myKey);
      const data = await res.json();
      console.log(data);
      dispatch(detailsFetch(data))

    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchGameDetails()
  }, [])
  const toggleRequirements = () => {
    setRequirementsVisible(!requirementsVisible);
  };


  return (
    <Container className="my-5 text-white">
      <div className="relative">
        <img className="cover w-100" src={gameDetails?.background_image} />
        <div className="absolute">
          <div className="div-details text-white" >
            <h1 className="display-5 p-2 ">{gameDetails?.name}</h1>
          </div>
        </div>

        <h3 className="mt-5 mb-3">Overview:</h3>
        <div className="d-flex justify-content-center">
          <h4 className="me-2">Developer: </h4>
          <div className="d-flex">
            {gameDetails?.developers.map((developer) =>
              <h4 className="me-2" key={developer.id}>{developer.name}</h4>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h4 className="me-2">Genres: </h4>
          <div className="d-flex">
            {gameDetails?.genres.map((genre) =>
              <h4 className="me-2" key={genre.id}>{genre.name}</h4>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h4> Metacritic rating:</h4>
          <div className="d-flex  ">
            <h4 className="ms-2">{gameDetails?.metacritic} / 100</h4>
          </div>
        </div>

        <div>
          <h3 className="mt-3">Descrizione:</h3>
          <p className="my-3">{gameDetails?.description_raw}</p>
        </div>
        <h3 className="mb-3">Piattaforme:</h3>
        {gameDetails?.platforms.map((platform) =>
          <h4 className="text-center" key={platform.platform.id}>{platform.platform.name}</h4>)}
        <span className="d-flex justify-content-center mb-3">
          <Button onClick={toggleRequirements}>PC - Requisiti minimi</Button>
        </span>
        <div id="requirements" style={{ display: requirementsVisible ? 'block' : 'none' }}>
          {minimum !== undefined ?
            <div>
              <p>{minimum}</p>
              <p>{recommended}</p>
            </div> : <p className="text-center"> Non possediamo tali dati per questo gioco</p>
          }
        </div>

      </div>
    </Container>
  )
}
export default DetailsLayout