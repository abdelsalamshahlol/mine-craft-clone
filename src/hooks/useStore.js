import create from "zustand";
import {nanoid} from "nanoid";

const localValue = localStorage.getItem('--minecraft-clone');
const useStore = create((set) => ({
    texture: 'dirt',
    cubes: localValue ? JSON.parse(localValue) : [],
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
        set((state) => {
            localStorage.setItem('--minecraft-clone', JSON.stringify(state.cubes));
            return state;
        })
    },
    resetWorld: () => {
        set((state) => {
            localStorage.setItem('--minecraft-clone', JSON.stringify([]));
            return ({
                ...state,
                cubes: []
            });
        })
    },
}))

export default useStore;