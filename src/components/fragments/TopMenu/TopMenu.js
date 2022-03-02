import React from 'react';
import image1 from '../../../images/top1.png';
import image2 from '../../../images/top2.png';
import image3 from '../../../images/top3.png';

export default function TopMenu() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-9">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7 col-sm-12">
                <h1 className="textGreenb">Yayasan Al-uswah Islamiyah</h1>
                <p>Seluruh komponen Lembaga Pendidikan islam Terpadu Al-Uswah Jatirogo 
                  menggunakan kurikulum standar nasional berbasis kopetensi yaitu kurikulum JSIT & 
                  Kurikulum 2013 yang merupakan penyempurnaan kurikulum yang bersifat inovatif dan 
                  itergratif dengan paduan kurikulum khas Lembaga Pendidikan Islam Terpadu Al-Uswah 
                  Jatirogo</p>
              </div>
              <div className="col-lg-5 col-sm-12">
                <div className="rowContent">
                  <img className="image1" src={image1} alt="image1" />
                  <img className="image2 topImageLeft" src={image2} alt="image2" />
                </div>
                <div>
                  <img className="image3 topImageTop" src={image3} alt="image3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
