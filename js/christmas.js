var map;

$(document).ready( function init(){
		
		map = L.map('map').setView([47.01772, 28.87207], 10);

		var basemap = L.tileLayer('http://bts{s}.hartamd.com/demo/christmas/{z}/{x}/{y}.png', {
			minZoom: 0,
			maxZoom: 12,
			attribution: '&copy; <a href="http://hartamd.com/">HartaMD.com</a>',
			subdomains: [1, 2, 3, 4]
		}).addTo(map);

		//add controls
		var hash = new L.Hash(map);
		L.control.locate().addTo(map);
	})