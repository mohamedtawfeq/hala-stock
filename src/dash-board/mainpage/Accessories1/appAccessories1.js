import contents from '../../components/data_test';
import Products from './Accessories1.js'
import './appAccessories1.css'
function AppAccessories1() {
    return(
        <div className='approduct'>
            {contents.map(contents => (
                <Products
                    key={contents.id}
                    image={contents.image}
                    name={contents.name}
                    price={contents.price}
                    number={contents.number}
                    condition={contents.condition}
                />
            ))}
        </div>
    )
}
export default AppAccessories1;