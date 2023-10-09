import './appGame.css'
import contents from '../../../dash-board/data/data_test';
import Game from './game'

function AppGame() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>ألعاب</h2></div>
            {contents.map(contents => (
                <Game
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
export default AppGame;