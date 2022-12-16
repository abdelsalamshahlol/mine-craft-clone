import {usePlane} from "@react-three/cannon";
import {groundTexture} from '../assets/textures'
import {NearestFilter, RepeatWrapping} from "three";

const Ground = () => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0]}));
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.magFilter = NearestFilter;
    groundTexture.repeat.set(32, 32);


    return (
        <mesh ref={ref}>
            <planeGeometry attach='geometry' args={[100, 100]}/>
            <meshStandardMaterial attach='material' map={groundTexture}/>
        </mesh>
    )
}


export default Ground;