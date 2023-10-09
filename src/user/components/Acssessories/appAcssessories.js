import './appAcssessories.css'
import contents from '../../../dash-board/data/data_test';
import Acssessories from './acssessories'

function AppAccessories() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>أكسسوارات</h2></div>
            {contents.map(contents => (
                <Acssessories
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
export default AppAccessories;