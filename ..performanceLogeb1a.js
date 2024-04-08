
window.addEventListener('load', function() {
	try {
		if (( ! window.performance) || ( ! window.performance.getEntriesByType)) {
			return;
		}

		var e = window.performance.getEntriesByType('navigation')[0];
		if ( ! e) {
			return;
		}	
		
		var d = {};
		var a = function(n) {
			d[n] = Math.round(e[n] - e.startTime);
		};
		var b = function(n) {
			d[n] = e[n];
		};

		d.url = e.name;
		a('connectEnd');
		a('connectStart');
		a('domainLookupEnd');
		a('domainLookupStart');
		a('fetchStart');
		a('secureConnectionStart');
		a('requestStart');
		a('responseStart');
		a('responseEnd');
		a('domContentLoadedEventStart');
		a('loadEventStart');
		d.redirectCount = e.redirectCount;
		a('redirectEnd');
		a('redirectStart');
		d.entryType = e.entryType;
		d.initiatorType = e.initiatorType;
		b('transferSize');
		b('encodedBodySize');
		b('decodedBodySize');

		var data = JSON.stringify(d);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/..v2/performanceLog", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.send(data);
	}
	catch(e) {}
});