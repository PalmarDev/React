import React from 'react';

const Torneos = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-[90%] ml-[5%] mr-[5%]">
                <h1 className="text-3xl font-black leading-10">Torneos</h1>
                <p className="text-base text-justify leading-7">Los Torneos suelen ser organizados por los mismos jugadores o por tiendas de cartas. Además, Upper Deck (quien tenía los derechos de TCG), Konami y Shonen Jump han organizado numerosos torneos a nivel mundial y con diferentes sistemas y reglas dependiendo del área. Estos torneos atraen a centenares de jugadores que compiten por el premio, el cual es una carta promocional exclusiva.

                    Hay tres tipos de sistemas que se usan en los Torneos y se les conoce como Formatos. Cada Formato tiene sus propias reglas y restricciones de que cartas deben usarse durante estos eventos.</p>
                <ul className="text-base text-justify list-disc leading-7">
                    <li>El Formato Avanzado (Advanced Format) es el más usado en los Torneos de Yu-Gi-Oh! TCG. Este formato sigue todas las reglas normales del juego, pero además impone la prohibición total de ciertas cartas que se consideran demasiado ventajosas para los torneos. Estas cartas están en la denominada "lista de cartas prohibidas". También hay ciertas cartas que son limitadas o semi-limitadas permitiéndose usar 1 o 2 de estas cartas en un Deck, respectivamente. Esta lista se actualiza cada seis meses (1 de septiembre, 1 de marzo) y es seguida en todos los torneos que utilizan este formato.</li>
                    <li>El Formato Tradicional (Traditional Format) se usa rara vez en Torneos Oficiales y refleja el estado del juego antes de que la lista de Cartas Prohibidas fuera creada. Las cartas que están prohibidas en Formato Avanzado se limitan a una copia por Deck en este formato.</li>
                    <li>El Formato OCG difiere en varias reglas respecto al Formato Avanzado, pero las cartas limitadas y prohibidas suelen ser las mismas. Este formato rige en territorio asiático.</li>
                </ul>
                <div>
                    <h1 className="text-3xl font-black leading-10">Mundial de Yu-Gi-Oh TCG</h1>
                    <p className="text-base text-justify leading-7">Se han organizado y realizado torneos mundiales desde el año 2003. Antes de llegar a un mundial hay que pasar varias etapas clasificatorias. Estas son OTS, regionales, nacionales y continentales.</p>
                    <h2>OTS Championship</h2>
                    <p className="text-base text-justify leading-7">Se juega a nivel tienda oficial local, sus siglas significan Official Tournament Store. Los primeros 4 lugares obtienen invitación para el continental.</p>
                    <h2 className="text-2xl font-black leading-10">Regional</h2>
                    <p className="text-base text-justify leading-7">Se juegan a nivel de región, estado o provincia según como esté distribuido el país. Dependiendo de la cantidad de jugadores que jueguen se reparte cupos para poder jugar el torneo continental.

                        Cupos según cantidad de jugadores:</p>
                    <ul className="text-base text-justify list-disc leading-7">
                        <li>4 a 32 jugadores: 4 cupos.</li>
                        <li>33 a 64 jugadores: 8 cupos.</li>
                        <li>65 a 128 jugadores: 16 cupos.</li>
                        <li>129 o más jugadores: 32 cupos.</li>
                    </ul>
                    <h2 className="text-2xl font-black leading-10">Nacional</h2>
                    <p className="text-base text-justify leading-7">Puede entrar cualquier jugador, sin haber participado necesariamente previamente en un torneo regional. Tiene la misma estructura que el torneo regional. Según la cantidad de jugadores se reparte cupos para el torneo continental.

                        Cupos según cantidad de jugadores:</p>
                    <ul className="text-base text-justify list-disc leading-7">
                        <li>4 a 32 jugadores: 6 cupos.</li>
                        <li>33 a 64 jugadores: 12 cupos.</li>
                        <li>65 a 128 jugadores: 24 cupos.</li>
                        <li>129 a 256 jugadores: 48 cupos.</li>
                        <li>257 a 512 jugadores: 64 cupos.</li>
                        <li>513 jugadores o más: 128 cupos</li>
                    </ul>
                    <h2 className="text-2xl font-black leading-10">Continental</h2>
                    <p className="text-base text-justify leading-7">Solo pueden entrar los clasificados previamente en un torneo OTS, regional o nacional. El ganador de este torneo representa a su región en el World Championship, pues se gana su participación y viaje todo pagado al lugar donde se realizará el evento.</p>
                </div>
            </div>
        </div>
    )
}

export default Torneos;