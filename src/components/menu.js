import useStore from "../hooks/useStore";

const Menu = () => {
    const [save, reset] = useStore(state => [state.saveWorld, state.resetWorld])
    const menuAction = (e, type) => {
        e.stopPropagation();
        type === 'save' ? save() : reset();
        console.log(type);
    }


    return (
        <div className="absolute top-2 left-4 flex flex-col gap-y-3">
            <button className='bg-blue-400 text-white rounded px-3 py-0.5' onClick={(e) => menuAction(e, 'save')}>Save
            </button>
            <button className='bg-red-400 text-white rounded px-3 py-0.5' onClick={(e) => menuAction(e, 'reset')}>Reset
            </button>
        </div>
    )
}

export default Menu;