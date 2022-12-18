import {usePlane} from "@react-three/cannon";
import {groundTexture} from '../assets/textures'
import useStore from "../hooks/useStore";

const Ground = () => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]}));
    const addCube = useStore(store => store.addCube);
 
    return (
        <mesh ref={ref} onClick={({point}) => addCube(...Object.values(point).map(v => Math.ceil(v)))}>
            <planeGeometry attach='geometry' args={[100, 100]}/>
            <meshStandardMaterial attach='material' map={groundTexture}/>
        </mesh>
    )
}


export default Ground;