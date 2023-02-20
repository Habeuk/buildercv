console.log('dfr');
(function ($, Drupal) {
async  function chartInit(context, settings) {
	if(context && context.getElementById && context.getElementById('acquisitions') && settings.buildercv && settings.buildercv.chart_config ){
			const config = settings.buildercv.chart_config;
		    console.log(' Chart config : ', config);
		   new Chart(document.getElementById('acquisitions'), config);		
	}
};
  Drupal.behaviors.buildercv = {
    attach: function (context, settings) {
      chartInit(context, settings);
    },
  };
})(jQuery, Drupal);