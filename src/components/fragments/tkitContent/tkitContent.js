import React from 'react'
import image1 from '../../../images/rectangle.png'
import image2 from '../../../images/rectangle.png'
import image3 from '../../../images/rectangle.png'


export default function tkitContent() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-9">

            {/* fragmen 1 */}
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-sm-12">
                <h1 className="textGreen"><b>TKIT Al Uswah</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  doloremagna
                  aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. uis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
              </div>
              <div className="col-lg-4 col-sm-12">
                <img className="h50 mx-auto" src={image1} alt="gambar1" />
              </div>
            </div>

            {/* <!-- fragment 2 --> */}
            <div className="row justify-content-between align-items-center my-5">
              <div className="col-lg-4 col-sm-12">
                <img className="h50 mx-auto" src={image2} alt="gambar2" />
              </div>
              <div className="col-lg-6 col-sm-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  doloremagna
                  aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. uis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                <h3 className="textGreen"><b>Rp 6.000.000</b></h3>
              </div>
            </div>

            {/* <!-- fragment 3 --> */}
            <div className="row justify-content-between align-items-center my-5">
              <div className="col-lg-6 col-sm-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  doloremagna
                  aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. uis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                <h3 className="textGreen"><b>Rp 6.000.000</b></h3>
              </div>
              <div className="col-lg-4 col-sm-12">
                <img className="h50 mx-auto" src={image3} alt="gambar3" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
