import create from "zustand";
import {nanoid} from "nanoid";

const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [],
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
    removeCube: (_x, _y, _z) => {
        set((prev) => ({
            ...prev,
            cubes: prev.cubes.filter(cube => {
                    const [x, y, z] = cube['position'];
                    return x !== _x || y !== _y || z !== _z
                }
            ),
        }))
    },
    setTexture: (v) => {
        set(prev => ({
            ...prev,
            texture: v
        }))
    },
    saveWorld: () => {
    },
    resetWorld: () => {
    },
}))

export default useStore;