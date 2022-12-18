import {useEffect, useState} from "react";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import * as textureImages from '../assets/images';
// import {dirt as dirtSrc, glass as glassSrc, grass as grassSrc, log as logSrc, wood as woodSrc} from '../assets/images';

const TextureSelector = () => {
    const [isVisible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture]);
    const {
        dirt, glass, grass, log, wood
    } = useKeyboard();


    // Set the texture based on keyboard action
    useEffect(() => {
        const textures = {
            dirt, glass, grass, log, wood
        };

        const [texture] = Object.entries(textures).filter(([k, v]) => v);
        texture && setTexture(texture[0]);
    }, [dirt, glass, grass, log, wood, setTexture]);

    // toggle the selector
    useEffect(() => {
        const id = setTimeout(() => {
            setVisible(false);
        }, 1500);

        setVisible(true);
        return () => clearTimeout(id);
    }, [activeTexture]);

    return (<div
            className={`absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 z-50 shadow-2xl border transition-opacity ease-in-out ${isVisible ? '' : 'opacity-0'}`}>
            <ul className="bg-white p-2 flex gap-x-3">
                {Object.entries(textureImages).map(([k, v]) => (
                    <li key={k} className={`p-2 ${activeTexture === k ? 'border  border-gray-400' : ''}`}>
                        <img src={v} alt={k}
                             className="w-48"/>
                        <small className="text-center block mt-2 capitalize">{k}</small>
                    </li>))}
            </ul>
        </div>)

}

export default TextureSelector;