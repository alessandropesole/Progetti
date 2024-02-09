import { Col, Container, Form, Row } from "react-bootstrap";
import '../assets/css/Search.css' 
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { useDispatch, useSelector } from "react-redux";
import { gameFetch } from "../actions/fetchActions";
import { setSearchAction } from "../actions/searchAction";


const Search = () => {
    const Url= 'https://api.rawg.io/api/games?';
    const MyKey = 'key=e4f3ea7bb9ba4989932f9a1e097ae6cf&search=';
    const search = useSelector((state) => state.searchReducerSet.search);
    console.log(search);
    const games = useSelector((state) => state.fetchItems.game );
    const dispatch = useDispatch()

    const fetchGame = async() => {
        try {
            const resp = await fetch(Url + MyKey + search);
            const data = await resp.json();
            console.log(data);
            dispatch(gameFetch(data.results))
            
           
        }
        catch(err){
            console.log(err);
        }
    }
   
    useEffect(() => {
        
        fetchGame()
    }, [search])


    return(
        <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
            
            <Row className="mb-5" >
                <Col>
                <Form>
                    <input className='search-input' name="search" type="text" placeholder= "Digita un gioco" value={search} onChange= {(e) => dispatch(setSearchAction(e.target.value))} />
                </Form>
                </Col>
            </Row>
            <Row>
              {search.length  > 0 ?
                games.map((game) =>(
                <GameCard play = {game} key={game.id} />)) :
                 <img src="../src/assets/imgs/giphy.gif" heigth="500vh" className="rounded-5 mb-5"/> 
            } 
            
            </Row>
        </Container>
    )
}

export default Search