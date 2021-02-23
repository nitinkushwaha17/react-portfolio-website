import React from 'react';
import '../../App.css';
import img1 from '../../img/proj/portfolio.png'
import img2 from '../../img/proj/clock.png'
import img3 from '../../img/proj/rock-paper-scissor.png'
import img4 from '../../img/proj/tic-tac-toe.png'
import img5 from '../../img/proj/to-do list.png'
import img6 from '../../img/proj/color game.png'
import img7 from '../../img/proj/gradient generator.png'
import img8 from '../../img/proj/button playground.png'

function Projects() {
  return (
    <section id="projects">
            <div className="head"><h1>PROJECTS</h1></div>
            <div className="ctr flex">
                <div className="row flex">
                    <div className="bd-example">
						<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
								<li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<a href=""><img src={img1} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Portfolio Website</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/WD7neieOhlwI/" target="_blank"><img src={img2} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Analog and Digital Clock</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/WM1ffqQZb5oi/#" target="_blank"><img src={img3} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Rock-Paper-Scissor Game</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/WoNU6RP82IpZ/#" target="_blank"><img src={img4} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Tic-Tac-Toe Game</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/Wa17A1A5a14A/#" target="_blank"><img src={img5} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>To-Do List</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/Wk0hxpoiDlfS/#" target="_blank"><img src={img6} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Color Game</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/WpnrhRmN7FMX/#" target="_blank"><img src={img7} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Gradient Generator</h5>
									</div>
								</div>
								<div className="carousel-item">
									<a href="https://code.sololearn.com/W0LnSVP07AE7/#" target="_blank"><img src={img8} className="d-block w-100" alt="..." /></a>
									<div className="carousel-caption d-none d-md-block">
										<h5>Button Playground</h5>
									</div>
								</div>
							</div>
							<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
							</a>
						</div>
                    </div>
				</div>
			</div>
			<p>Click on the image to see the project!</p>
        </section>
  );
}

export default Projects;