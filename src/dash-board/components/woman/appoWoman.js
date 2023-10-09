import './appoWoman.css'
import contents from '../../data/data_test';
import Woman from './woman'

function AppWoman() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>ملابس نسائية</h2></div>
            {contents.map(contents => (
                <Woman
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
export default AppWoman;