import React from 'react';
import '../../App.css';
import img1 from '../../img/c.png';
import img2 from '../../img/c++.png';
import img3 from '../../img/python.png';
import img4 from '../../img/html.png';
import img5 from '../../img/css.png';
import img6 from '../../img/javascript.png';

function Skills() {
  return (
    <section id="skills">
        <div className="head"><h1>SKILLS</h1></div>
        <div className="ctr flex">
            <div className="row flex">
                <div className="img">
                    <div className="s_card flex"><img src={img1} alt="" /></div>
                </div>
                <div className="img">
                    <div className="s_card flex"><img src={img2} alt="" /></div>
                </div>
                <div className="img">
                    <div className="s_card flex"><img src={img3} alt="" /></div>
                </div>
                <div className="img">
                    <div className="s_card flex"><img src={img4} alt="" /></div>
                </div>
                <div className="img">
                    <div className="s_card flex"><img src={img5} alt="" /></div>
                </div>
                <div className="img">
                    <div className="s_card flex"><img src={img6} alt="" /></div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;