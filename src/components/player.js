import {useSphere} from "@react-three/cannon";
import {useFrame, useThree} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import {Vector3} from "three";
import useKeyboard from '../hooks/useKeyboard'
import {JUMP_VELOCITY, SPEED} from '../assets/const'

const Player = () => {
    const [ref, api] = useSphere(() => ({
        position: [0, 1, 0], type: 'Dynamic', mass: 1
    }));
    const {camera} = useThree();
    const actions = useKeyboard();

    // Player position | listening and updating the postition
    const position = useRef([0, 0, 0]);
    useEffect(() => api.position.subscribe((p) => position.current = p), [api.position]);

    // Player velocity | listening and updating the velocity
    const velocity = useRef([0, 0, 0]);
    useEffect(() => api.velocity.subscribe((v) => velocity.current = v), [api.velocity])

    useFrame(() => {
        camera.position.copy(new Vector3(position.current[0], position.current[1], position.current[2]));

        // Check the pressed key and also check if the chatacter isn't jumping before inititating a jump
        if (actions.jump && Math.abs(velocity.current[1]) < 0.05) {
            api.velocity.set(velocity.current[0], JUMP_VELOCITY, velocity.current[2]);
        }

        // Movement logic
        const directions = new Vector3();
        const xVector = new Vector3((actions.moveRight ? 1 : 0) - (actions.moveLeft ? 1 : 0), 0, 0);
        const zVector = new Vector3(0, 0, (actions.moveForward ? 1 : 0) - (actions.moveBackward ? 1 : 0));

        directions.subVectors(xVector, zVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);

        api.velocity.set(directions.x, velocity.current[1], directions.z);
    });

    return (<mesh ref={ref}></mesh>)
}

export default Player