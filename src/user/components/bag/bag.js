import './bag.css'

function Acssessories(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'/>
                <div className='title2'>
                    <div className='title'>
                        <div className='productcondition2'>
                        <h2 className='productcondition'>{props.condition}</h2>
                        </div>
                        <h2 className='productname'>{props.name}</h2>
                    </div>
                    <div className='title'>
                        <h3 className='numberproduct'>رقم المنتج :{props.number}</h3>
                        <h3 className='price'>{props.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acssessories;