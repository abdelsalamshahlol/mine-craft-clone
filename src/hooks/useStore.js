import create from "zustand";
import {nanoid} from "nanoid";

const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [{
        key: nanoid(),
        texture: 'dirt',
        position: [3, 0.5, 0]
    },
        {
            key: nanoid(),
            texture: 'log',
            position: [2, 0.5, 0]
        }],
    addCube: (x, y, z) => {
        set((prev) => ({
            ...prev,
            cubes: [...prev.cubes, {
                key: nanoid(),
                texture: prev.texture,
                position: [x, y, z]
            }]
        }))
    },
    removeCube: () => {
    },
    setTexture: () => {
    },
    saveWorld: () => {
    },
    resetWorld: () => {
    },
}))

export default useStore;