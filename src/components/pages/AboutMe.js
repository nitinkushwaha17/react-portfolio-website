import React from 'react';
import '../../App.css';
import img from '../../img/download1.png';

function AboutMe() {
  return (
    <section id="about">
            <div className="head"><h1>ABOUT ME</h1></div>
            <div className="ctr flex">
                <div className="row">
                    <div className="col-md-5 img flex">
                        <img src={img} alt="profile photo" />
                    </div>
                    <div className="col-md-7 a_text flex">
                        <div className="a_card">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan velit nec lorem lacinia sodales. Praesent tempor dolor nec nisi bibendum hendrerit. 
                                Curabitur efficitur, metus non accumsan tincidunt, nisl dui sodales mi, vel ultricies orci metus sit amet lorem. Quisque mattis velit sit amet pharetra tempus. 
                                Cras magna orci, egestas nec sollicitudin ut, dignissim eget nisi. Pellentesque in urna lectus. Nullam id vehicula quam.
                            </p>
                            <br />
                            <p>
                                Maecenas in nunc non orci aliquam mollis vitae tempus tortor. Pellentesque dignissim vulputate tortor eu fringilla. Nullam feugiat dolor ligula, ac tristique erat eleifend non. Aliquam at porttitor leo, sed convallis leo. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default AboutMe;