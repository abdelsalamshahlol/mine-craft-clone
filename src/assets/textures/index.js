import {dirt, glass, grass, log, wood} from '../images'
import {NearestFilter, RepeatWrapping, TextureLoader} from "three";

const dirtTexture = new TextureLoader().load(dirt);
const glassTexture = new TextureLoader().load(glass);
const grassTexture = new TextureLoader().load(grass);
const logTexture = new TextureLoader().load(log);
const woodTexture = new TextureLoader().load(wood);
const groundTexture = new TextureLoader().load(grass);

// removing the three smoothinings
dirtTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.repeat.set(32, 32);
export {
    groundTexture,
    woodTexture,
    logTexture,
    grassTexture,
    glassTexture,
    dirtTexture
}