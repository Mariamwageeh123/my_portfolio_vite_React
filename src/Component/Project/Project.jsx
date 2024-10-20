import React from 'react'
import avatarImg from '../../images/resturan.jpg';
import shop from '../../images/sh.webp'
import coffe from '../../images/moca.webp'
import car from '../../images/car.jpg'
import crud from '../../images/1691046464-crud-operations-1-crud-operations.avif'
import ecommerce from '../../images/ecommerce.jpg'
import eye from '../../images/63983100-b4a6-11e9-846c-99b9465f7b3b.png'
import './Project.css'
import Work from './../Work/Work';
export default function Project() {
  return (
    <>
     <Work/>
       <div className="row container About ">
      
          {/* First Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%" ,height:"300px" }}>
              <img className="card-img-top" src={avatarImg} alt="Card image" style={{ width: '100%' ,height:"300px" }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Rasturant</h4>
                <p className="card-text">
                Website for making orders or viewing the menu using HTML and CSS
                </p>
                <a href="https://mariamwageeh.github.io/frist_proj_html_css/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={shop} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Clothes</h4>
                <p className="card-text">
                Website
for
clothes
and
online
sales
using
HTML5
and
CSS3
                </p>
                <a href="https://mariamwageeh.github.io/sec_project_html5_css3/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>




              {/* First Card */}
              <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%" ,height:"300px" }}>
              <img className="card-img-top" src={coffe} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Coffe Shop</h4>
                <p className="card-text">
                Website
for
a
coffee
shop
using
Bootstrap
                </p>
                <a href="https://mariamwageeh.github.io/bootstrap_pro/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={car} alt="Card image" style={{ width: '100%' ,height:"300px" }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Cars</h4>
                <p className="card-text">
                JavaScript
task
for
car-related 
functionality and subset of website buy cars and give you total salary
                </p>
                <a href="https://mariamwageeh.github.io/frist_task_js/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>



              {/* First Card */}
              <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={crud} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Product Shop</h4>
                <p className="card-text">
                CRUD
operations
using
JavaScript
                </p>
                <a href="https://mariamwageeh.github.io/crud_operation_js/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={ecommerce} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">E-commerce</h4>
                <p className="card-text">
                e-commerce
by
js
user
can
add
and
remove
from
crad
and
make
favourite
product
and
shopping
                </p>
                <a href="https://github.com/Mariamwageeh123/e-commerce-js/tree/main/js_pro" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* You can add more cards here with similar structure */}
          {/* First Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={eye} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Aptos Bluidness Detection</h4>
                <p className="card-text">
                Frontend development using React where users can enter their eye examination results, consult with a doctor, and receive prescribed medication.
                </p>
                <a href="https://github.com/mariamwageeh/Aptos_bliudness_React" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={ecommerce} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  Some example text some example text. Some example text some example text.
                  Some example text some example text. Some example text some example text.
                </p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* You can add more cards here with similar structure */}
        </div>
    </>
  )
}

