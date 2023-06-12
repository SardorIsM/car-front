import c from './index.module.css';

const Overlay = ({ callback }) => {
    return (
        <div onClick={() => { callback(false) }} className={c.overlay}></div>
    )
}

export { Overlay } 