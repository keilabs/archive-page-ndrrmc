var events = [
  {'Date': new Date(2018, 5, 07), 'Title': 'Preparedness Measures and Effects of Southwest Monsoon Enhanced by Typhoon Domeng', 'Link': 'http://ndrrmc.gov.ph/21-disaster-events/3389-situational-report-re-preparedness-and-measures-of-tropical-depression-domeng'},
  {'Date': new Date(2018, 1, 12), 'Title': 'Preparedness and Measures of Tropical Storm "BASYANG" (I.N. SANBA) ', 'Link': 'http://ndrrmc.gov.ph/21-disaster-events/3317-situational-report-re-preparedness-and-measures-of-tropical-storm-basyang-i-n-sanba'},
  {'Date': new Date(2018, 0, 15), 'Title': 'Mayon Volcano Phreatic Eruption ', 'Link': 'http://ndrrmc.gov.ph/8-ndrrmc-update/3293-situational-report-mayon-volcano-phreatic-eruption'},
  {'Date': new Date(2018, 0, 13), 'Title': 'Effects of Tail-End of a Cold Front (TECF) and Trough of Low Pressure Area ', 'Link': 'http://ndrrmc.gov.ph/8-ndrrmc-update/3292-situational-report-re-effects-of-tail-end-of-a-cold-front-tecf-in-regions-v-and-vi'},
  {'Date': new Date(2018, 0, 10), 'Title': 'Black Nazarene Traslacion 2018 ', 'Link': 'http://ndrrmc.gov.ph/8-ndrrmc-update/3289-situational-report-re-black-nazarene-traslacion-2018'},
  {'Date': new Date(2018, 5, 09), 'Title': 'HelloModal', 'Link': function(){$('#modalDomeng').modal('show');}},

];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
