import {dirt, glass, grass, log, wood} from '../images'
import {TextureLoader} from "three";

const dirtTexture = new TextureLoader().load(dirt);
const glassTexture = new TextureLoader().load(glass);
const grassTexture = new TextureLoader().load(grass);
const logTexture = new TextureLoader().load(log);
const woodTexture = new TextureLoader().load(wood);
const groundTexture = new TextureLoader().load(grass);

export {
    groundTexture,
    woodTexture,
    logTexture,
    grassTexture,
    glassTexture,
    dirtTexture
}