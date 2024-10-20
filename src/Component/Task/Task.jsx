import React from 'react'
import Work from './../Work/Work';
import task from '../../images/task.png';

export default function Task() {
  return (
    <>
    <Work/>
       <div className="row container About ">
          {/* First Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%" ,height:"300px" }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%' ,height:"300px" }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 1</h4>
                <p className="card-text">
                 using HTML and CSS
                </p>
                <a href="https://mariamwageeh.github.io/task-1_html_css/frist_task/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 2</h4>
                <p className="card-text">
                using HTML and CSS
                </p>
                <a href="https://mariamwageeh.github.io/task-2_html_css/task_2/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>




              {/* First Card */}
              <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%" ,height:"300px" }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 3</h4>
                <p className="card-text">
                using HTML and CSS
                </p>
                <a href="https://mariamwageeh.github.io/task-3_html_css/task_3/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%' ,height:"300px" }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 4</h4>
                <p className="card-text">using HTML and CSS
                </p>
                <a href="https://mariamwageeh.github.io/task-4_html_css/task-4/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>



              {/* First Card */}
              <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 5</h4>
                <p className="card-text">
                using HTML , CSS and js
                </p>
                <a href="https://mariamwageeh.github.io/frist_task_js/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 6</h4>
                <p className="card-text">
                using HTML5 and CSS3 Task_for_animation_css3
                </p>
                <a href="https://mariamwageeh.github.io/task_for_animation_css3/task-5/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* You can add more cards here with similar structure */}
          {/* First Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 7</h4>
                <p className="card-text">
                JQuery Task 1
                </p>
                <a href="https://mariamwageeh.github.io/Jquery_task/jquery_task1/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-5">
            <div className="card1 card img-fluid mt-3" style={{ width: "100%",height:"300px"  }}>
              <img className="card-img-top" src={task} alt="Card image" style={{ width: '100%',height:"300px"  }} />
              <div className="card-img-overlay front">
                <h4 className="card-title">Task 8</h4>
                <p className="card-text">
                JQuery Task 2
                </p>
                <a href="https://mariamwageeh.github.io/Jquery_task2/jquery_task2/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* You can add more cards here with similar structure */}
        </div>
    
    
    </>
  )
}
