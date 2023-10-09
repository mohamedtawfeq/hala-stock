import './loading.css'
import imgsss from  '../image/logo-loading.png'

function Loading() {
    return (
      <div className="Loading">
        <div class="wrapper">
          <div class="loading">
            <img class="inner_circle" src={imgsss} alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Loading;