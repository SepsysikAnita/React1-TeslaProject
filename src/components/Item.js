import '../styles/Item.css'

const Item = ({heading,img}) => {
  return (
    <div className='item' style={{backgroundImage: `url(${img})`}}>
        <div className="item-container">
            <div className="item-text">
                <h1>{heading}</h1>
            </div>
        </div>
        <div className="item-buttons"></div>
    </div>
  )
}

export default Item