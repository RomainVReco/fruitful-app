import rasp from '../assets/modale_logo/logo-rasp.svg'
import plane from '../assets/modale_logo/airplane-engines.svg'
import bike from '../assets/modale_logo/bicycle.svg'
import bino from '../assets/modale_logo/binoculars.svg'
import book from '../assets/modale_logo/book.svg'
import boombox from '../assets/modale_logo/boombox.svg'
import chat from '../assets/modale_logo/chat-dots.svg'
import ev from '../assets/modale_logo/ev-station.svg'
import banane from '../assets/renseignement/banane.png'


export const dataImage = [rasp,
    plane,
    bike,
    bino,
    book,
    boombox,
    chat,
    ev,
    banane]

export const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
}

export const couleurTypeEvenement = {
    0:"#4c9cda", // bleu clair Tâche
    1:"#2ea44f", // turquoise Habitude
    2:"#dfaf2c" // ocre Addiction
}

export const CAP_EVENTS = 4