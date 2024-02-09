import { Button, Container } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import '../assets/css/Details.css'
import { REMOVE_FAVORITE } from "../actions/favoriteAtions";

const FavoritesLayout = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.list);


    return (
        <Container className="d-flex flex-column align-items-center">
            <ul >
                {favorites?.length > 0 ?
                    favorites?.map((favorite, index) => (
                        <div className="border d-flex align-items-center justify-content-between px-4 my-3" key={index}>
                            <li className="text-light px-5 py-2 display-5" style={{ listStyle: 'none' }}  >{favorite}</li>
                            <Button onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: favorite })}>Elimina preferito</Button>
                        </div>
                    )) :
                    <div className="d-flex align-items-center mt-5">
                        <p className="text-light display-3 me-3">Nessun preferito inserito</p>
                        <img src="../src/assets/imgs/data-code.gif" className="rounded-5" />

                    </div>
                }
            </ul>
        </Container>
    )
}
export default FavoritesLayout