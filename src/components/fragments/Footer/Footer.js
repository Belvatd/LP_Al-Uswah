import React from 'react'
import brand from '../../../images/Brand.png'

export default function Footer() {
  return (
    <>
      <div className="container-fluid  bgLightGreen ">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="row h30">
              <div className="col-lg-6 navbar">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#"><img src={brand} alt="Al-Uswah"/></a>
                </div>
              </div>
              <div className="col-lg-3 navbar">
                <div className="container-fluid">
                  <div className="row">
                    <h5><b>Jenjang</b></h5>
                    <h6><a href="#">Playgroup (PGIT)</a></h6>
                    <h6><a href="#">Taman Kanak-kanak (TKIT)</a></h6>
                    <h6><a href="#">Sekolah Dasar (SDIT)</a></h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 navbar">
                <div className="container-fluid">
                  <div className="row">
                    <h5><b>Kontak</b></h5>
                    <h6><a href="#"><i className="bi bi-facebook"></i> Sdit Al Uswah Jatirogo</a></h6>
                    <h6><a href="#"><i className="bi bi-instagram"></i> sdit_aluswah_jatirogo</a></h6>
                    <h6><a href="#"><i className="bi bi-at"></i> Al-Uswah Jatirogo.sch.id</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  bgGreen text-white">
        <div className="row justify-content-center align-content-center">
          <div className="col-11">
            <div className="row h10 align-items-center justify-content-between">
              <div className="col-lg-6">
                <p className="ms-3">@2022 Al-Uswah</p>
              </div>
              <div className="col-lg-2 col-sm-12">
                <p><i className="bi bi-telephone ms-3"></i> +62 882-3020-3740</p>
              </div>
              <div className="col-lg-4 col-sm-12">
                <p><i className="bi bi-geo-alt ms-3"></i> Sadang, Kec. Jatirogo, Tuban.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
