'use strict';

var apk = require('./../styles/assets/hush.apk');
var playButton = require('./../styles/assets/google-play-button/google-play-store.png');
var myPlaces = require('./../styles/assets/devices/my-places.png');
var searchAddress = require('./../styles/assets/devices/search-address.png');
var searchType = require('./../styles/assets/devices/search-by-type.png');
var searchMany = require('./../styles/assets/devices/search-many.png');
var searchVoice = require('./../styles/assets/devices/search-voice.png');
var searchDraw = require('./../styles/assets/devices/draw.png');

import React from 'react';
import './App.less';

export default React.createClass({
	mixins: [],
	componentDidMount: componentDidMount,
	getInitialState: function(){
		return {
			apk: apk,
			playButton: playButton,
			myPlaces: myPlaces,
			searchAddress: searchAddress,
			searchType: searchType,
			searchMany: searchMany,
			searchVoice: searchVoice,
			searchDraw: searchDraw
		}
	},
	render: function () {
		return <div className="container">
			<div className="row hero">
					<h1>Hush</h1>
			</div>

			<div className="row headers">
					<div className="col-lg-4">
							<h1>Find Place</h1>
							<p>Search by address, voice, type, or just draw a circle around it on the map.</p>
					</div>

					<div className="col-lg-4">
							<h1>Save Place</h1>
							<p>Add the location to a list of your places.</p>
					</div>

					<div className="col-lg-4">
							<h1>Silence Device</h1>
							<p>Automagically silence your device when you arrive and unsilence when you leave.</p>
					</div>
			</div>

			<div className="row center">
					<div>
							<div className="button-wrapper">
									<a className="a-btn" href={this.state.apk}>
											<span className="a-btn-slide-text">$0</span>
											<img src={this.state.playButton} alt="store" />
											<span className="a-btn-text"><small>Limited Time</small>
											&beta; test</span>
											<span className="a-btn-icon-right"><span></span></span>
									</a>
							</div>
					</div>
			</div>

			<div className="row">
					<div id="cbp-so-scroller" className="cbp-so-scroller" scroller>
							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-left">
											<h2>Search By Address</h2>
											<p>Find places the way you already know how.</p>
									</article>
									<figure className="cbp-so-side cbp-so-side-right">
										<img className="device" src={this.state.searchAddress} />
									</figure>
							</section>


							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-left">
											<h2>Search By Voice</h2>
											<p>Find places by speaking.</p>
									</article>
									<figure className="cbp-so-side cbp-so-side-right" >
										<img className="device" src={this.state.searchVoice} />
									</figure>
							</section>


							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-right">
											<h2>Search By type</h2>
											<p>Quickly find Movie theaters, Places of worship, Government buildings and 100+ more types of locations.</p>
									</article>
									<figure className="cbp-so-side cbp-so-side-left">
												<img className="device" src={this.state.searchType} />
									</figure>
							</section>

							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-left">
											<h2>Save any location</h2>
											<p>Save any location by drawing a cicle around the area you want.</p>
									</article>
									<figure className="cbp-so-side cbp-so-side-right" >
										<img className="device" src={this.state.searchDraw} />
									</figure>
							</section>

							<section className="cbp-so-section cbp-so-init cbp-so-animate">
									<article className="cbp-so-side cbp-so-side-right">
											<h2>My places</h2>
											<p>Add and remove places from your list of favorites.</p>
									</article>
									<figure className="cbp-so-side cbp-so-side-left">
												<img className="device" src={this.state.myPlaces} />
									</figure>
							</section>

					</div>
			</div>
		</div>;
	}
});

function componentDidMount() {

	new scroller(React.findDOMNode(this));
}


function getViewportH() {
	var docElem = window.document.documentElement;
	var client = docElem['clientHeight'],
		 inner = window['innerHeight'];

	if( client < inner )
		 return inner;
	else
		 return client;
}

function scrollY(){
	var docElem = window.document.documentElement;
	return window.pageYOffset || docElem.scrollTop;
}

function getOffset( el ) {

	 var offsetTop = 0, offsetLeft = 0;
	 do {
			 if ( !isNaN( el.offsetTop ) ) {
					 offsetTop += el.offsetTop;
			 }
			 if ( !isNaN( el.offsetLeft ) ) {
					 offsetLeft += el.offsetLeft;
			 }
	 } while( el = el.offsetParent )
	 return {
			 top : offsetTop,
			 left : offsetLeft
	 }
}

function inViewport( el, h ) {
	 var elH = el.offsetHeight;
	 var scrolled = scrollY();
	 var viewed = scrolled + getViewportH();
	 var elTop = getOffset(el).top;
	 var elBottom = elTop + elH;
	 h = h || 0;

	 return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
}

function extend( a, b ) {
	 for( var key in b ) {
			 if( b.hasOwnProperty( key ) ) {
					 a[key] = b[key];
			 }
	 }
	 return a;
}

function scroller( el, options ) {
	 this.el = el;
	 this.options = extend( this.defaults, options );
	 this._init();
}

scroller.prototype = {
	 defaults : {
			 viewportFactor : 0.2
	 },
	 _init : function() {
			 this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '.cbp-so-section' ) );
			 this.didScroll = false;

			 var self = this;
			 this.sections.forEach( function( el, i ) {
					 if( !inViewport( el ) ) {
							 el.classList.add('cbp-so-init');
					 }
			 } );

			 var scrollHandler = function() {
							 if( !self.didScroll ) {
									 self.didScroll = true;
									 setTimeout( function() { self._scrollPage(); }, 60 );
							 }
					 },
					 resizeHandler = function() {
							 function delayed() {
									 self._scrollPage();
									 self.resizeTimeout = null;
							 }
							 if ( self.resizeTimeout ) {
									 clearTimeout( self.resizeTimeout );
							 }
							 self.resizeTimeout = setTimeout( delayed, 200 );
					 };

			 window.addEventListener( 'scroll', scrollHandler, false );
			 window.addEventListener( 'resize', resizeHandler, false );
	 },
	 _scrollPage : function() {
			 var self = this;

			 this.sections.forEach( function( el, i ) {
					 if( inViewport( el, self.options.viewportFactor ) ) {
						 	el.classList.add('cbp-so-animate');
					 }
					 else {
							 el.classList.add('cbp-so-init');
							 el.classList.remove('cbp-so-animate');
					 }
			 });
			 this.didScroll = false;
	 }
}
