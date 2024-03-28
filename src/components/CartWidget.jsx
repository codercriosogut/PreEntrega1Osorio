import { Button } from "antd";
import { useState } from "react";
import { ShoppingBag  } from 'lucide-react';

function CartWidget(props) {
    const elResultado = useState(1)
    const miEstado = elResultado[0]
    const setMiEstado = elResultado[1]
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        const nuevoValor = counter + 1
        setCounter(nuevoValor)
    }

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105">
            <img className="w-full rounded-md" src="https://picsum.photos/400" alt="card image" />
            <h2 className="my-2 font-bold">{props.name}</h2>
            <Button>ver mas</Button>
            <button onClick={handleClick}>
                Agregar 
                <span>{counter}</span>
                <ShoppingBag  size={48} />
            </button>
        </div>
    )
}


export default CartWidget;