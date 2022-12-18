import {useBox} from "@react-three/cannon";
import * as textures from "../assets/textures";
import useStore from "../hooks/useStore";

const Cube = ({texture, position}) => {
    const [ref] = useBox(() => ({
        type: 'static',
        position,
    }));
    const cubeTexture = textures[`${texture}Texture`];
    const [removeCube, addCube] = useStore((state) => [state.removeCube, state.addCube]);

    const c = (e) => {
        e.stopPropagation();
        const face = Math.floor(e.faceIndex / 2);
        const {x, y, z} = ref.current.position;
        if (e.ctrlKey) {
            return removeCube(x, y, z)
        }

        switch (face) {
            case 1:
                addCube(x + 1, y, z);
                break;
            case 5:
                addCube(x, y, z + 1);
                break;
            case 4:
                addCube(x, y, z - 1);
                break;
            case 0:
                addCube(x - 1, y, z);
                break;
            case 2:
                addCube(x, y + 1, z);
                break;
            case 3:
                addCube(x, y - 1, z);
                break;
        }
    }
    return (
        <mesh ref={ref} onClick={c}>
            <boxGeometry attach="geometry"/>
            <meshStandardMaterial attach="material" map={cubeTexture}/>
        </mesh>
    )


}

export default Cube;