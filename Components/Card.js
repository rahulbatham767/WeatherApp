
import { React} from 'react';

import './styles.css';



const Card = (props) => {
    let { city, date, temp, condition, humidity, velocity, icon, uv} = props;


    const hoverstyle = () => {
        const a = document.getElementById('weather_card')
        a.classList.add("shadow-lg");
    }

    const hoverout = () => {
        const a = document.getElementById('weather_card')
        a.classList.remove("shadow-lg")

    }


const design = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionx: "center",
    backgroundPositiony: "center",
    backgroundAttachment: "fixed",
    textShadow:"0 0 black",
    color:"black",
    // background:``
    // background:"transparent"
}



return (

    <>
    
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Current Forecasting</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
 {/* <Detail weather={b} /> */}
 {/* <h1></h1> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>


        <div className="card p-3 mb-5 weather_card" id='weather_card' onMouseEnter={hoverstyle}
            onMouseLeave={hoverout}
            style={design}
        >
            <div className="card-body">
                <div className="body_part">
                    <h3 className="card-City" id="City">{city}</h3>
                </div>
                <div className="body_part">
                    <p className="card-text date" id="date">{date}</p>
                </div>
                <div className="body_part">
                    <h1 id="temperature" style={{ fontSize: '3rem' }}>{temp}<sup><small>o</small></sup>C</h1>
                </div>
                <div className="body_part d-flex">
                    <div id="weather">{condition}
                    <img src={icon} alt="" />
                    </div>
                    
                </div>
                <div className="text-center mb-1">
                </div>

                <div className="text-center">

                    <div className="row" id='main_card'>
                        <div className="col">

                            <div className='col'>
                                {humidity}
                            </div>
                            <div className='col'>
                                humidity
                            </div>

                        </div>
                        <div className="col">
                            <div className='col'>
                                {velocity}
                            </div>
                            <div className='col'>
                                velocity
                            </div>

                        </div>
                        <div className="col">
                            <div className='col'>
                                {uv}
                            </div>
                            <div className='col'>
                                uv
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="btn btn-sm btn-primary mx-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Detail</div> */}
        </div>




    </>
)
    }

export default Card;