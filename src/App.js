import './App.css';
import {Canvas} from '@react-three/fiber'
import {Sky} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import Ground from './components/ground';
import Player from './components/player';
import View from './components/view';
import Cubes from './components/cubes';

function App() {
    return (
        <div className="h-full">
            <Canvas>
                <Sky sunPosition={[100, 100, 20]}/>
                <ambientLight intensity={0.5}/>
                <Physics>
                    <Player/>
                    <Ground/>
                    <Cubes/>
                </Physics>
                <View/>
            </Canvas>
            <div
                className="absolute left-1/2 top-1/2 text-white text-4xl font-bold -translate-x-2/4 -translate-y-2/4">+
            </div>

        </div>
    );
}

export default App;
