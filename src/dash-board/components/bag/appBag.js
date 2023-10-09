import './appBag.css'
import contents from '../../../dash-board/data/data_test';
import Bag from './bag'

function AppBag() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>حقائب</h2></div>
            {contents.map(contents => (
                <Bag
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
export default AppBag;