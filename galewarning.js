var events = [
  {'Date': new Date(2018, 5, 07), 'Title': 'Preparedness Measures and Effects of Southwest Monsoon Enhanced by Typhoon Domeng', 'Link': function(){$('#modalxDomeng').modal('show');}},
  {'Date': new Date(2018, 1, 09), 'Title': 'Preparedness and Measures of Tropical Storm "BASYANG" (I.N. SANBA) ', 'Link': function(){$('#modalBasyang').modal('show');}},
  {'Date': new Date(2018, 0, 15), 'Title': 'Mayon Volcano Phreatic Eruption ', 'Link': function(){$('#modalMayon').modal('show');}},
  {'Date': new Date(2018, 0, 13), 'Title': 'Effects of Tail-End of a Cold Front (TECF) and Trough of Low Pressure Area ', 'Link': 'http://ndrrmc.gov.ph/8-ndrrmc-update/3292-situational-report-re-effects-of-tail-end-of-a-cold-front-tecf-in-regions-v-and-vi'},
  {'Date': new Date(2018, 0, 10), 'Title': 'Black Nazarene Traslacion 2018 ', 'Link': 'http://ndrrmc.gov.ph/8-ndrrmc-update/3289-situational-report-re-black-nazarene-traslacion-2018'},
  {'Date': new Date(2018, 5, 08), 'Title': '', 'Link': ''},

];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
