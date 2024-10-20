import React from 'react';
import './Work.css';
import avatarImg from '../../images/resturan.jpg';
import shop from '../../images/sh.webp'
import coffe from '../../images/moca.webp'
import car from '../../images/car.jpg'
import crud from '../../images/1691046464-crud-operations-1-crud-operations.avif'
import ecommerce from '../../images/ecommerce.jpg'
import eye from '../../images/63983100-b4a6-11e9-846c-99b9465f7b3b.png'
import { Link } from 'react-router-dom';
import Project from '../Project/Project';

export default function Work() {
  return (
    <>
      <div className="container About">
        <h2>My Work</h2>
        <ul className=" options">
  <li className="nav-item">
    <Link className="nav-link" to='/Project'>Apps</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/task">Tasks</Link>
  </li>

</ul>

        
      </div>
    </>
  );
}




// import React from 'react';
// import './Work.css';
// import Project from './../Project/Project'; // Import your Project component
// import Task from './../Task/Task'; // Import your Task component (make sure it exists)

// export default function Work() {
//   const showComponent = (component) => {
//     const projectElement = document.getElementById('project');
//     const taskElement = document.getElementById('task');

//     if (component === 'project') {
//       projectElement.style.display = 'block';
//       taskElement.style.display = 'none';
//     } else {
//       projectElement.style.display = 'none';
//       taskElement.style.display = 'block';
//     }
//   };

//   return (
//     <>
//       <div className="container About">
//         <h2>My Work</h2>
//         <ul className="nav">
//           <li className="nav-item">
//             <button className="nav-link" onClick={() => showComponent('project')}>
//               Apps
//             </button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link" onClick={() => showComponent('task')}>
//               Tasks
//             </button>
//           </li>
//         </ul>

//         <div id="project" style={{ display: 'none' }}>
//           <Project />
//         </div>
//         <div id="task" style={{ display: 'none' }}>
//           <Task />
//         </div>
//       </div>
//     </>
//   );
// }

