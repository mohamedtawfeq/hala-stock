import './appTool_home.css'
import contents from '../../../dash-board/data/data_test';
import Tool_home from './tool_home'

function AppTool_home() {
    return(
        <div className='approduct'>
            <div className='header'><h2 className='h2'>أدوات منزلية</h2></div>
            {contents.map(contents => (
                <Tool_home
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
export default AppTool_home;