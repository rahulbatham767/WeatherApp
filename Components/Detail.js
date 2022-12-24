import {React,useState} from 'react'
import './styles.css'
const Detail = (props) => { 
const {send}=props;
const [get, setGet] = useState([]);
setGet(send);
console.log(get);
  return (
    <>
      <div className="container w-50 border details">
        <div className="city text-center">
          <p> Gwalior</p>
        </div>
        <div className="row d-flex">
          <div className="col-md-5">
            <div className="row">
            <div className="col-md-3">
          <img src="(./images/bg.jpg)" alt="" />
            </div>
            <div className="col-md-3">
            Mist
            </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="cond">maxwind_mph</div>
            <div className="con d">precip</div>
            <div className="cond">pressure</div>
            <div className="cond">ferehenite</div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="box">
              <div className="day">day</div>
              <div className="icon">icon</div>
              <div className="temphours">tempf</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="box">
              <div className="day">Sunday</div>
              <div className="icon">icon</div>
              <div className="temphours">tempf</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="box">
              <div className="day">Sunday</div>
              <div className="icon">icon</div>
              <div className="temphours">tempf</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="box">
              <div className="day">Sunday</div>
              <div className="icon">icon</div>
              <div className="temphours">tempf</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="box">
              <div className="day">Sunday</div>
              <div className="icon">icon</div>
              <div className="temphours">tempf</div>
            </div>
          </div>
          <br/>
          <div className="col-md-2">
            <div className="box">
              <div className="day">Sunday</div>
              <div className="icon">icon</div>
              <div className="temphours">tempf</div>
            </div>
          </div>
          
         
        </div>
      </div>
    </>
  )

  }

export default Detail;