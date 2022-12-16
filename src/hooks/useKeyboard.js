import {useCallback, useEffect, useState} from "react";
import {keyActionMap} from "../assets/const";

const actionByKey = key => keyActionMap[key];

const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        // textures
        t1: false,
        t2: false,
        t3: false,
        t4: false,
        t5: false,
    });

    const handleKey = useCallback((e) => {
        const action = actionByKey(e.code);
        // console.log(e.type, e.code, action)
        if (action) {
            setActions((prevState) => ({
                ...prevState,
                [action]: e.type === 'keydown',
            }))
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keyup', handleKey);
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey)
            document.removeEventListener('keyup', handleKey)
        }
    }, [handleKey]);

    return actions;
}
export default useKeyboard;