import {useThree} from "@react-three/fiber";
import {PointerLockControls} from "@react-three/drei";

const View = () => {
    const {camera, gl} = useThree();

    return (
        <PointerLockControls args={[camera, gl.domElement]}/>
    )
}

export default View;