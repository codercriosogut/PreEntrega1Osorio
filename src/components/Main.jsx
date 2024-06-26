import ItemListContainer from '../components/ItemListContainer'
import CartWidget from '../components/CartWidget'

function Main() {
    return (
        <ItemListContainer title="Productos">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 users">
                <CartWidget name="Pan/Artesanal" />
                <CartWidget name="Pan/Corriente" />
                <CartWidget name="Pan/Masamadre" />
            </section>
        </ItemListContainer>
    )
}

export default Main