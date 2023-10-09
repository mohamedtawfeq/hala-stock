import './appchiald.css'
import contents from '../../../dash-board/data/data_test';
import Chiald from './chiald'

function Appchiald() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>ملابس أطفال</h2></div>
            {contents.map(contents => (
                <Chiald
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
export default Appchiald;