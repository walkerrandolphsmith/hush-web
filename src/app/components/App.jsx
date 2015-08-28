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
			<div class="hero">
					<h1>Hush</h1>
			</div>

			<div class="container headers">
					<div class="col-lg-4">
							<h1>Text & Drive</h1>
							<p>Texting and driving is the leading cause in teen death as of 2010.</p>
					</div>

					<div class="col-lg-4">
							<h1>Alert</h1>
							<p>Become aware of when your children are in a moving vehicle.</p>
					</div>

					<div class="col-lg-4">
							<h1>Lock & Save</h1>
							<p>Have peace at mind that your child is not able to text while driving.</p>
					</div>
			</div>

			<div class="container center">
					<div>
							<div class="button-wrapper">
									<a href="/assets/yolo.apk" class="a-btn">
											<span class="a-btn-slide-text">$0</span>
											<img src="styles/img/google-play-store.png" alt="Google Play Store" />
											<span class="a-btn-text"><small>Limited Time</small>&#x3b2 test</span>
											<span class="a-btn-icon-right"><span></span></span>
									</a>
							</div>
					</div>
			</div>

			<div class="container">
					<div id="cbp-so-scroller" class="cbp-so-scroller" scroller>
							<section class="cbp-so-section cbp-so-init cbp-so-animate">
									<article class="cbp-so-side cbp-so-side-left">
											<h2>Monitor Remotely</h2>
											<p>Knowing your child is safe is at your fingertips.</p>
									</article>
									<figure class="cbp-so-side cbp-so-side-right">

									</figure>
							</section>



							<section class="cbp-so-section cbp-so-init cbp-so-animate">
									<article class="cbp-so-side cbp-so-side-left">
											<h2>Stay Notified</h2>
											<p>Know how you want, when you want.</p>
									</article>
									<figure id="cbp-so-slide-notify" class="cbp-so-side cbp-so-side-right" >

									</figure>
							</section>


							<section class="cbp-so-section cbp-so-init cbp-so-animate">
									<article class="cbp-so-side cbp-so-side-right">
											<h2>Facts</h2>
											<p>Stop the texts stop the wrecks.</p>
									</article>
									<figure id="car" class="cbp-so-side cbp-so-side-left">
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

			<footer class="hi-icon-wrap hi-icon-effect-8">
					<a href="https://www.facebook.com/yolosafely" class="hi-icon fa fa-facebook">Facebook</a>
					<a href="https://twitter.com/yolosafely" class="hi-icon fa fa-twitter">Twitter</a>
					<a href="https://plus.google.com/u/0/117102143565971037745/posts" class="hi-icon fa fa-google-plus">Google+</a>
					<a href="http://www.youtube.com/user/yolosafely" class="hi-icon fa fa-youtube">You Tube</a>
			</footer>

			<RouteHandler/>
		</div>;
	}
});

function componentDidMount() {

}
