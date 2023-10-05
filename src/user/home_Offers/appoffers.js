import './appoffers.css'
import contents from '../../dash-board/components/data_test';
import Offers from './offers'

function Appoffers() {
    return(
        <div className='approduct'>
            {contents.map(contents => (
                <Offers
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
export default Appoffers;