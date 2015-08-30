'use strict';

import React from 'react';
import {RouteHandler, Navigation} from 'react-router';
import './App.less';

export default React.createClass({
	mixins: [Navigation],
	componentDidMount: componentDidMount,
	getInitialState: function(){
		return {};
	},
	render: function () {
		return <div>
			<div className="hero">
					<h1>Hush</h1>
			</div>

			<div className="container headers">
					<div className="col-lg-4">
							<h1>Text & Drive</h1>
							<p>Texting and driving is the leading cause in teen death as of 2010.</p>
					</div>

					<div className="col-lg-4">
							<h1>Alert</h1>
							<p>Become aware of when your children are in a moving vehicle.</p>
					</div>

					<div className="col-lg-4">
							<h1>Lock & Save</h1>
							<p>Have peace at mind that your child is not able to text while driving.</p>
					</div>
			</div>

			<div className="container center">
					<div>
							<div className="button-wrapper">
									<a className="a-btn">
											<span className="a-btn-slide-text">$0</span>
											<img src="26bcb1ad9bda995c684981a31a9b8736.png" alt="store" />
											<span className="a-btn-text"><small>Limited Time</small>&#x3b2 test</span>
											<span className="a-btn-icon-right"><span></span></span>
									</a>
							</div>
					</div>
			</div>

			<div className="container">
					<div id="cbp-so-scroller" className="cbp-so-scroller" scroller>
							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-left">
											<h2>Monitor Remotely</h2>
											<p>Knowing your child is safe is at your fingertips.</p>
									</article>
									<figure className="cbp-so-side cbp-so-side-right">

									</figure>
							</section>



							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-left">
											<h2>Stay Notified</h2>
											<p>Know how you want, when you want.</p>
									</article>
									<figure id="cbp-so-slide-notify" className="cbp-so-side cbp-so-side-right" >

									</figure>
							</section>


							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-right">
											<h2>Facts</h2>
											<p>Stop the texts stop the wrecks.</p>
									</article>
									<figure id="car" className="cbp-so-side cbp-so-side-left">
											<ol id="facts">
													<li>
															<p>5 seconds is the average time a text distracts a drivers eyes off the road.</p>
													</li>
													<li>
															<p>Phone distractions increase the chance of wrecking 3 times.</p>
													</li>
													<li>
															<p><strong>11%</strong> of fatal crashes involving drivers under 20 were reported as distracted.</p>
													</li>
											</ol>
									</figure>
							</section>
					</div>
			</div>

			<footer className="hi-icon-wrap hi-icon-effect-8">
					<a href="https://www.facebook.com/yolosafely" className="hi-icon fa fa-facebook">Facebook</a>
					<a href="https://twitter.com/yolosafely" className="hi-icon fa fa-twitter">Twitter</a>
					<a href="https://plus.google.com/u/0/117102143565971037745/posts" className="hi-icon fa fa-google-plus">Google+</a>
					<a href="http://www.youtube.com/user/yolosafely" className="hi-icon fa fa-youtube">You Tube</a>
			</footer>

			<RouteHandler/>
		</div>;
	}
});

function componentDidMount() {

}
