import useStore from '../hooks/useStore'
import Cube from './cube';

const Cubes = () => {
    const cubes = useStore((state) => state.cubes);
    return cubes.map(c => <Cube {...c}/>)
}

export default Cubes