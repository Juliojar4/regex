// g - global (Encontra todas as ocorrencias)
// i - insensitive (Não procura por letras maiusculas ou minusculas)
// () - grupos
// | - ou
import { texto } from './bas.mjs'

const regExp1 = /(maria|joão|luiz)( ,hoje sua esposa)/is;
const found = regExp1.exec(texto)

console.log(found)