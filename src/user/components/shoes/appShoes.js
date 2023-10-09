import './appShoes.css'
import contents from '../../../dash-board/data/data_test';
import Shoes from './shoes'

function AppShoes() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>أحذية</h2></div>
            {contents.map(contents => (
                <Shoes
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
export default AppShoes;