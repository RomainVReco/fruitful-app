import rasp from '../assets/logo-rasp.svg'
import plane from '../assets/airplane-engines.svg'
import bike from '../assets/bicycle.svg'
import bino from '../assets/binoculars.svg'
import book from '../assets/book.svg'
import boombox from '../assets/boombox.svg'
import chat from '../assets/chat-dots.svg'
import ev from '../assets/ev-station.svg'
import banane from '../assets/banane.png'


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