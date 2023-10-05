import contents from '../../components/data_test';
import Products from './clothes1.js'
import './appclothes1.css'
function App_clothes() {
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
export default App_clothes;