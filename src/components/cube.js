import {useBox} from "@react-three/cannon";
import * as textures from "../assets/textures";

const Cube = ({texture, position}) => {
    const [ref] = useBox(() => ({
        type: 'static',
        position,
    }));
    const cubeTexture = textures[`${texture}Texture`]


    return (
        <mesh ref={ref}>
            <boxGeometry attach="geometry"/>
            <meshStandardMaterial attach="material" map={cubeTexture}/>
        </mesh>
    )


}

export default Cube;