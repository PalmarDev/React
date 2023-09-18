import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [Search, setSearch] = useState("");
    const [cartasPorPagina] = useState(5);
    const [todasLasCartas, setTodasLasCartas] = useState([]);

    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

    async function obtenerDatos() {
        try {
            const resp = await axios.get(url);
            const todasLasCartasResp = resp.data.data;
            setTodasLasCartas(todasLasCartasResp);
        } catch (error) {
            console.log(error);
        }
    }

    const searcher = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        obtenerDatos();
    }, []);

    useEffect(() => {
        // Aplicar paginación y búsqueda
        const inicio = (paginaActual - 1) * cartasPorPagina;
        const fin = inicio + cartasPorPagina;
        const cartasEnPagina = todasLasCartas
            .filter((card) => card.name.toLowerCase().includes(Search.toLowerCase()))
            .slice(inicio, fin);
        setCards(cartasEnPagina);
        // eslint-disable-next-line
    }, [paginaActual, Search, todasLasCartas]);

    return (
        <div className="flex flex-col py-2 items-center">
            <input className="w-60 h-9 border-2 border-black rounded-2xl text-center my-4" type="text" placeholder='Buscar' value={Search} onChange={searcher} />
            {cards.map((card) => (
                <div className="flex border-2 w-full h-full" key={card.id}>
                    <div className="flex flex-col items-center justify-around py-4 px-4">
                        <h1>{card.name}</h1>
                        <div className="w-[160px] h-[240px]">
                            {card.card_images.map((image) =>
                                <img className="w-full h-full" key={image.id} src={image.image_url} alt="" />
                            )}
                        </div>
                    </div>
                    <div className="border-l-2">
                        <ul>
                            <p>Descripcion de la carta</p>
                            <li>Tipo: {card.type}</li>
                            <li>Tipo de marco: {card.frameType}</li>
                            <li>Efecto: {card.desc}</li>
                            <li>Ataque: {card.atk}</li>
                            <li>Defensa: {card.def}</li>
                            <li>Nivel:{card.level}</li>
                            <li>Carrera: {card.race}</li>
                            <li>Atributo: {card.attribute}</li>
                            {Array.isArray(card.card_sets) ? (
                                card.card_sets.map((sets) => (
                                    <ul key={sets._id}>
                                        <p>Especificaciones de la carta</p>
                                        <li>Expansion: {sets.set_name}</li>
                                        <li>Codigo: {sets.set_code}</li>
                                        <li>Rareza: {sets.set_rarity}</li>
                                        <li>Codigo rareza: {sets.set_rarity_code}</li>
                                        <li>Precio estimado: {sets.set_price}</li>
                                    </ul>
                                ))
                            ) : (
                                // Manejo de caso en que card_sets no es un array
                                <div>
                                    <li>No hay información de conjuntos disponible.</li>
                                </div>
                            )}
                            {card.card_prices.map((prices) =>
                                <ul key={prices.__id}>
                                    <p>Precios de la carta</p>
                                    <li>Cardmarket: {prices.cardmarket_price}</li>
                                    <li>Tcgplayer: {prices.tcgplayer_price}</li>
                                    <li>Ebay: {prices.ebay_price}</li>
                                    <li>Amazon: {prices.amazon_price}</li>
                                    <li>Coolstuffinc: {prices.coolstuffinc_price}</li>
                                </ul>
                            )}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="pagination">
                {paginaActual > 1 && (
                    <button onClick={() => setPaginaActual(paginaActual - 1)}>Anterior</button>
                )}
                {cards.length === cartasPorPagina && (
                    <button onClick={() => setPaginaActual(paginaActual + 1)}>Siguiente</button>
                )}
            </div>
        </div>
    );
}
export default Cards;