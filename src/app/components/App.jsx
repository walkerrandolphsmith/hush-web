'use strict';

import React from 'react';
import {RouteHandler, Navigation} from 'react-router';

export default React.createClass({
	mixins: [Navigation],
	componentDidMount: componentDidMount,
	getInitialState: function(){
		return {};
	},
	render: function () {
		return <div>
				<h1> Hello World </h1>
			<RouteHandler/>
		</div>;
	}
});

function componentDidMount() {

}
