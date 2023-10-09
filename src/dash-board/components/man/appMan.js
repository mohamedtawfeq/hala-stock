import './appMan.css'
import contents from '../../../dash-board/data/data_test';
import Man from './man'

function AppMan() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>ملابس أطفال</h2></div>
            {contents.map(contents => (
                <Man
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
export default AppMan;