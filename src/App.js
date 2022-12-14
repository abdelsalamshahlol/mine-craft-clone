import './App.css';
import {Canvas} from '@react-three/fiber'
import {Sky} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import Ground from './components/ground';

function App() {
    return (
        <div className="h-full">
            <Canvas>
                <Sky sunPosition={[100, 100, 20]}/>
                <ambientLight intensity={0.5}/>
                <Physics>
                    <Ground/>
                </Physics>
            </Canvas>
        </div>
    );
}

export default App;
