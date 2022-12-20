import {useBox} from "@react-three/cannon";
import * as textures from "../assets/textures";
import useStore from "../hooks/useStore";
import {useState} from "react";

const Cube = ({texture, position}) => {
    const [ref] = useBox(() => ({
        type: 'static', position,
    }));
    const cubeTexture = textures[`${texture}Texture`];
    const [removeCube, addCube] = useStore((state) => [state.removeCube, state.addCube]);
    const [hovered, setHovered] = useState(false);

    const clickHandler = (e) => {
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

    const hoverHandler = (pointerIn) => setHovered(pointerIn);

    return (
        <mesh ref={ref} onClick={clickHandler}
              onPointerMove={() => hoverHandler(true)}
              onPointerOut={() => hoverHandler(false)}
        >
            <boxGeometry attach="geometry"/>
            <meshStandardMaterial
                attach="material"
                map={cubeTexture}
                color={hovered ? 'gray' : 'white'}
                opacity={texture === 'glass' ? 0.5 : 1}
                transparent={true}/>
        </mesh>
    )
}

export default Cube;