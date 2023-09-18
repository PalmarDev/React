import React from 'react'

const Game = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-[90%] ml-[5%] mr-[5%]">
                <h1 className="text-3xl font-black leading-10">El Juego</h1>
                <p className="text-base text-justify leading-7">
                    Yu-Gi-Oh! es un juego de cartas de monstruos en el que cada jugador roba cartas de sus respectivas barajas (Decks) y toman turnos en los que se juegan las cartas en la mesa (conocida como Campo). Cada jugador comienza con un número determinado de LP (Life Points) traducido como Puntos de Vida (8000, según las reglas oficiales), y un mazo de cartas llamado Deck que debe contener un mínimo de 40 cartas y un máximo de 60, así como la posibilidad de tener un Side Deck de apoyo entre 0 a 15 cartas y un Deck Extra entre 0 a 15 cartas. La partida termina si se cumple una de las siguientes condiciones:
                </p>
                <ul className="text-base text-justify list-disc leading-7">
                    <li>Los LP de un jugador se reducen a 0.</li>
                    <li>Que uno o ambos jugadores no tengan cartas en el Deck y deban robar una carta.</li>
                    <li>Un jugador se rinde, para esto, se debe colocar la mano encima del Deck por diez segundos.</li>
                    <li>Un jugador gana por el efecto de una carta. (Ejemplo, "Exodia, el prohibido" , "Tablero del Destino" o "Cuenta Atrás Final")</li>
                </ul>
                <p className="text-base text-justify leading-7">
                    Se produce un Duelo por turnos en el que los jugadores usan cartas que representan monstruos, Cartas Mágicas y Cartas de Trampa para combatir a sus adversarios. Los jugadores pueden Invocar a los monstruos ya sea en Posición de Ataque boca arriba (vertical) o en Posición de Defensa boca abajo (horizontal), y cada monstruo en Posición de Ataque puede atacar una vez por turno a menos que haya un efecto que designe otra cosa. Tras atacar y destruir con éxito un monstruo del adversario, el jugador del turno puede infligir daño a los LP del adversario si el ataque (ATK) de su monstruo es superior al ataque (ATK) del monstruo adversario en Posición de Ataque. Si el monstruo atacado está en Posición de Defensa, se compara el ATK del monstruo en ataque y la DEF del monstruo en defensa. Si el ATK es superior a la DEF lo destruye pero sin infligir daño al adversario, a menos que el efecto de alguna carta permita infligir la diferencia entre la DEF del monstruo destruido y el ATK del monstruo que lo destruyó.
                </p>
            </div>
            <div className="w-[90%] ml-[5%] mr-[5%]">
                <h1 className="text-3xl font-black leading-10">Fases de un turno</h1>
                <ul className="text-base text-justify list-disc leading-7">
                    <li>Draw Phase: durante esta fase se debe tomar una carta de la parte superior de tu Deck y ponerla en la mano (excepto en el primer turno desde el 14 de julio de 2014 en el TCG). Esto se llama robar, y si no puedes hacerlo por no haber más cartas en tu mazo pierdes el Duelo.</li>
                    <li>Standby Phase: algunos efectos de cartas se activan específicamente en esta fase. Además, los costes de mantenimiento (aquellos que permiten conservar una carta en el Campo) y otros similares se pagan en esta fase.</li>
                    <li>Main Phase 1: durante esta fase es donde se puede Invocar monstruos, cambiar las posiciones de batalla de los monstruos y activar o Colocar Cartas Mágicas/de Trampa.</li>
                    <li>Battle Phase: durante esta fase se puede atacar con los monstruos al adversario.</li>
                    <li>Main Phase 2: durante esta fase se puede hacer todo lo mismo que en la Main Phase 1.</li>
                    <li>End Phase: es el final del turno, y en ella puede que se tenga que realizar acciones tales como pagar un coste. En esta fase generalmente terminan efectos con duración finita, y también se debe descartar hasta el límite del tamaño de la mano (normalmente, un jugador solo puede quedarse con no más de seis cartas en la mano al finalizar su turno).</li>
                </ul>
            </div>
            <div className="w-[90%] ml-[5%] mr-[5%]">
                <h1 className="text-3xl font-black leading-10">Tipos de cartas</h1>
                <h2 className="text-2xl font-black leading-10">Monstruos</h2>
                <p className="text-base text-justify leading-7">Las Cartas de Monstruos son el tipo de carta con el cual el jugador ataca y trata con ello reducir los LP (Puntos de Vida) de su adversario. odo monstruo tiene puntos de ATK y DEF, y posee un Atributo de los siete existentes; AGUA, FUEGO, LUZ, OSCURIDAD, TIERRA, VIENTO y DIVINIDAD — estos se muestran en la carta, —, un tipo  y un Nivel, representado en cantidad de estrellas.</p>
                <p className="text-base text-justify leading-7">Además, los monstruos tienen diferentes clases que se representan con un color diferente en cada carta. Estas son:</p>
                <ul className="text-base text-justify list-disc leading-7">
                    <li>Monstruos Normales: estos no tienen efectos. Estos tienen un marco de color amarillo.</li>
                    <li>Monstruos de Efecto: tienen efectos a diferencia de los Monstruos Normales. A su vez, sus efectos se clasifican en Efectos de Encendido, Efectos Disparados, Efectos Rápidos y Efectos Continuos. Se les representa de un color naranja.</li>
                    <li>Monstruos de Fusión: tienen un marco de color violeta. Son monstruos incluidos en el Deck Extra del jugador. A diferencia de los Monstruos de Sincronía, los Monstruos de Fusión piden monstruos específicos (Materiales de Fusión) y una carta especial que los Fusione.</li>
                    <li>Monstruos de Ritual: el Nivel de los monstruos necesarios para Invocar el Monstruo Ritual debe sumar una cantidad igual o mayor al del Monstruo Ritual a Invocar (pueden usarse Materiales de Ritual en el Campo o la mano). Además, se necesita una Carta Mágica de Ritual especificada en el Monstruo de Ritual. Existen con y sin efecto y están en el Main Deck, no en el Deck Extra. Tienen un marco de color de azul.</li>
                    <li>Monstruos Ficha: monstruos Invocados por el efecto de una carta. Estos se utilizan normalmente para fines de defensa o Sacrificio. Las Fichas pueden ser utilizadas para una Invocación Ritual o una Invocación de Sincronía, pero no en una Invocación Xyz.</li>
                    <li>Monstruos de Sincronía: fueron introducidos en la serie Yu-Gi-Oh! 5D's. Estos monstruos están en el Deck Extra del jugador, y para Invocarlos debe usarse un cantante con otros monstruos que no sean Cantantes y cuya suma de Niveles sean iguales al del Monstruo de Sincronía que se quiere Invocar. Tienen un marco de color blanco.</li>
                    <li>Monstruos Xyz ("Xyz" pronunciado internacionalmente como "écziis" y escrito como "Exceed"). Fueron introducidos en la serie Yu-Gi-Oh! Zexal. Estos también se encuentran en el Deck Extra, y para Invocarlos se requiere una cantidad de monstruos con el mismo Nivel. Similar a las estrellas amarillas que denotan Nivel, este tipo de monstruo posee un determinado Rango. Los monstruos usados se ponen debajo del Monstruo Xyz y se retiran del Campo para activar los efectos de este último de una manera bastante limitada, siendo básicamente dos o tres usos, según la cantidad de Materiales Xyz que necesite. Si un Monstruo Xyz es destruido o desterrado del Campo, sus Materiales Xyz son mandados al Cementerio. Los Monstruos Xyz tienen un marco de color negro con un detalle de estrellas fugaces alrededor.</li>
                    <li>Monstruos de Péndulo: fueron introducidos en Yu-Gi-Oh! ARC-V. Son mitad Cartas de Monstruo, mitad Cartas Mágicas; ya que una mitad es del color amarillo o naranja (dependiendo si tiene Efecto de Monstruo), y la otra mitad es de color verde (como una Carta Mágica). Pueden ser Invocados como monstruos o activados como Cartas Mágicas en las Zonas de Péndulo, en las que ganan el efecto del Monstruo de Péndulo (que está en la parte del medio, justo encima del Efecto de Monstruo). Asimismo, poseen Escalas de Péndulo (representadas por rombos), que sirven para Invocar por Péndulo cuando haya dos Monstruos de Péndulo en las dos Zonas de Péndulo. La Invocación por Péndulo permite Invocar cualquier cantidad de monstruos desde la mano o Deck Extra boca arriba con Niveles entre las Escalas de Péndulo de las dos Cartas de Péndulo en las Zonas de Péndulo. Si un Monstruo de Péndulo fuera a ser mandado desde el Campo al Cementerio, es puesto boca arriba en la Zona del Deck Extra en su lugar.</li>
                    <li>Monstruos de Enlace: fueron introducidos en la serie Yu-Gi-Oh! VRAINS. Constituyen a su vez una nueva mecánica de juego que incluye cambios en el tablero de juego. Al igual que los Monstruos de Sincronía y los Monstruos Xyz, se encuentran en el Deck Extra. Estos monstruos tienen en el marco de la imagen del monstruo unas flechas llamadas Flechas de Enlace que interactúan con los monstruos que se posicionen en las zonas que apunten las flechas, generando así nuevas estrategias. No tienen DEF, por lo que nunca pueden estar en Posición de Defensa. En la parte inferior de sus cartas se encuentra su Rating de Enlace (Ejemplo: LINK-2) que ayuda a Invocar más Monstruos de Enlace. Los Monstruos de Enlace y los demás tipos de monstruos del Deck Extra (Fusión, Sincronía, Xyz y Péndulo) que intenten ser Invocados tendrán que ser Invocados a la nueva zona de juego llamada Zona de Monstruos Extra. Dicha zona solo podrá ser ocupada por un monstruo del Deck Extra, pero los Monstruos de Enlace con las Flechas de Enlace a su vez habilitarán Zonas de Monstruos donde regularmente eran Invocados para que puedan ocupar esas Zonas.</li>
                </ul>
                <p className="text-base text-justify leading-7">A la vez, estos son clasificados en distintos tipos, generalmente por su apariencia física. Los tipos son:

                    Guerrero, Demonio, Lanzador de Conjuros, Máquina, Bestia, Bestia Alada, Guerrero-Bestia, Pez, Serpiente Marina, Aqua, Reptil, Dinosaurio, Dragón, Hada (Ángel en la versión japonesa), Zombi, Roca, Psíquico, Piro, Trueno, Planta, Insecto, Wyrm, Bestia Divina (exclusivo de los Dioses Egipcios) y Ciberso.

                    Además de los Monstruos de Efectos estándar, hay sub-tipos que le dan a los monstruos una cierta generalización. Estos son: Toon, Unión, Spirit, Géminis y Cantante. En el caso de Fusiones, o Monstruos de Sincronía o Xyz, pueden ser Invocados de Modo Especial por ciertos medios si son mandados al Cementerio, siempre que se lo Invocó con éxito de antemano. Sin embargo, si son devueltos al Deck Extra, el jugador debe cumplir con los requisitos de Invocación de nuevo para volver a Invocarlos.

                    Por último, existen los arquetipos. Estos se reconocen por normalmente llevar una palabra especial (o parte de una palabra) en el nombre del monstruo y tener apoyo para cartas del mismo nombre. De no ser así, serían referidos como una familia. Hay una gran variedad de arquetipos, y la mayoría tiene un estilo de juego distinto. Algunos ejemplos son "Bestia de Cristal", "HÉROE Elemental", "Bestia Gladiador", "Seis Samuráis", "Luminoso/a", "Alanegra", "Alienígena", "Ojos Azules", "Ojos Rojos"; "Arpía" o "Toon". Existen por el contrario arquetipos que no precisamente contienen un nombre similar todos los monstruos pero que son considerados como tales al recibir apoyo explícito.</p>
                <div className="w-[100%]">
                    <h2 className="text-2xl font-black leading-10">Cartas Mágicas</h2>
                    <p className="text-base text-justify leading-7">Estas son las cartas que se pueden jugar ya sea desde la mano, o Colocándolas en el Campo para su uso posterior. Pueden o bien elevar el ataque/defensa de tus monstruos, destruir otras cartas, aumentar los Life Points, etc. Las Cartas Mágicas vienen en seis formas:</p>
                    <ul className="text-base text-justify list-disc leading-7">
                        <li>Normal: son mandadas al Cementerio después de que el efecto se activa.</li>
                        <li>de Juego rápido (identificado con un símbolo de rayo): se pueden activar durante el turno del adversario, o durante su turno fuera de las fases principales. Sin embargo, no se puede activar una Carta Mágica de Juego Rápido en el mismo turno que fue colocada en el Campo.</li>
                        <li>Continua (identificado con un símbolo de infinito): permanecen en el Campo una vez que han sido activadas, y su efecto continúa permanezcan boca arriba en el Campo.</li>
                        <li>de Equipo (identificado con un +): se equipan a un monstruo de la elección del jugador alterando sus estadísticas, o proporcionando un efecto. Si el monstruo equipado deja el Campo, pierde su Equipo y la Carta de Equipo es destruida.</li>
                        <li>de Campo (aparece como una brújula): activada en una Zona de Campo, proporciona un efecto que se produce durante el Duelo completo mientras esté activa. Durante mucho tiempo, el reglamento establecía que sólo una carta de Campo podía estar activa en el Duelo a la vez: si un jugador activaba una Carta Mágica de Campo, mientras que una estaba ya en juego, la primera carta de Campo es destruido. Esta regla fue derogada en 2014, y desde entonces cada jugador puede tener 1 Carta Mágica de Campo en su lado del Campo. Para usar otra Carta Mágica de Campo, manda al Cementerio a la que tenías previamente. Estas cartas pueden ser puestas boca abajo en la Zona del Campo, pero no se activan hasta que son volteadas boca arriba.</li>
                        <li>de Ritual (aparece como una llama): se utilizan para Invocar Monstruos de Ritual.</li>
                    </ul>
                </div>
                <div className="w-[100%]">
                    <h2 className="text-2xl font-black leading-10">Cartas de Trampa</h2>
                    <p className="text-base text-justify leading-7">Las Cartas de Trampa son cartas de color púrpura que tienen efectos diferentes y tienen como objetivo dificultar al adversario o facilitar al jugador que la posee. Todas las cartas de Trampa deben primero colocarse en el Campo para su activación y tienen Velocidad de Hechizo 2 (a excepción de las Trampas de Contraefecto) y hay tres tipos:</p>
                    <ul className="text-base text-justify list-disc leading-7">
                        <li>Normales (Normal Trap). Al igual que las Mágicas Normales, estas cartas son de un solo uso y se destruyen tras su activación.</li>
                        <li>Continuas (Continuous Trap). Representadas con el símbolo de infinito, estas cartas permanecen en el Campo tras su activación, a menos que sean destruidas.</li>
                        <li>de Contraefecto (Counter Trap) son las únicas que tienen Velocidad de Hechizo 3 y comúnmente tienen la función de negar efectos e Invocaciones de Monstruos. Suelen tener un costo para su activación y tienen una flecha encurvada como símbolo.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Game;