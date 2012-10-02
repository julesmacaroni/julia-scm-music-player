var requirejs = ({
	shim: {
		'underscore': {exports: '_'},
		'jquery.ui': {deps: ['jquery'],exports: 'jQuery'}
	},
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
		'jquery.ui': 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min',
		'underscore': 'lib/underscore/underscore',
		'knockout':'lib/knockout/knockout-2.1.0',
		'text': 'lib/require/text',
		'domready': 'lib/require/domready'
	},
	config:{
		'scm':{
			playback:{
				'youtube':'(youtube.com|youtu.be)',
				'soundmanager':'.*'
			},
			playlist:{
				'youtube':'(youtube.com|youtu.be)',
				'rss':'.*'
			}
		},
		'playback/soundmanager':{
			script:'js/lib/soundmanager/soundmanager2-nodebug-jsmin.js',
			url:'swf/',
		}
	},
	baseUrl: 'js/'
});
