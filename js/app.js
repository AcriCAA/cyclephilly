  visLayerSwitcher();

  $('.expand-one').click(function(){
  $('.content-one').slideToggle('slow'); return false;
	});

  var selectedLayer;
	$('#legendBox').appendTo('#map');
	$('#DBox').appendTo('#map');
	  
	$(document).ready(function() {
	 // $('#aboutModal').modal();
		 loadImageTOP();
  });	

 function loadImageTOP(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_top.png)');
  $('#legendBox').css('width', '260');
  $('#legendBox').css('height', '185');
  }
	  
  function loadImage(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_ttrips.png)');
  $('#legendBox').css('width', '230');
  $('#legendBox').css('height', '180');
  }
  function loadImage1(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_cotrips.png)');
  $('#legendBox').css('width', '230');
  $('#legendBox').css('height', '180');
  }
  function loadImage2(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_ertrips.png)');
  $('#legendBox').css('width', '180');
  $('#legendBox').css('height', '160');
  }
  function loadImage3(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_extrips.png)');
   $('#legendBox').css('width', '190');
  $('#legendBox').css('height', '160');
  }
  function loadImage4(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_sctrips.png)');
  $('#legendBox').css('width', '180');
  $('#legendBox').css('height', '160');
  }
  function loadImage5(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_shtrips.png)');
  $('#legendBox').css('width', '200');
  $('#legendBox').css('height', '160');
  }
  function loadImage6(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_sotrips.png)');
  $('#legendBox').css('width', '230');
  $('#legendBox').css('height', '180');
  }
  function loadImage7(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_wotrips.png)');
  $('#legendBox').css('width', '220');
  $('#legendBox').css('height', '160');
  }
  function loadImage8(){
  $('#legendBox').css('backgroundImage', 'url(img/lng_ottrips.png)');
  $('#legendBox').css('width', '180');
  $('#legendBox').css('height', '160');
  }
  
  function visLayerSwitcher() {
// custom infowindow
  var INFOWINDOW_TEMPLATE = [
 '<div class="cartodb-popup header v2 stye="background:#000000">',
  '<a href="#close" class="cartodb-popup-close-button close">x</a>',
  '<div class="cartodb-popup-header">',
    '<h4 style="color: #ffffff;">Segment Name</h4>',
    '<h1>{{linkname}}</h1>',
    '<span class="separator"></span>',
  '</div>',
  '<div class="cartodb-popup-content-wrapper">',
    '<div class="cartodb-popup-content">',
      '<h4 style="color: #808080;">Top trip purpose</h4>',
      '<p>{{purpose}}</p>',
        '<table id="cyclephillydata">',
             // '<thead>',
             //    '<tr>',
             //    '<td class="hiconeven"><b>', 
             //    'Trip Purpose Type' ,
            //     '</b></td>',
            //     '<th class="hiconodd"></th>' ,
            //     '</tr>',
            //  '</thead>',
              '<tbody>',
                 '<tr class="odd">',
                 '<th>Commute</th><td>',
                 '{{cotrips}}',
                 '</td>' ,
                 '<tr class="even">',
                 '<th>Social</th><td>',
                 '{{sotrips}}',
                 '</td>' ,
                 '<tr class="odd">',
                 '<th>Exercise</th><td>' ,
                 '{{extrips}}',
                 '</td>',
                 '<tr class="even">',
                 '<th>Errand</th><td>',
                 '{{ertrips}}',
                 '</td>' ,
                 '<tr class="odd">',
                 '<th>Other (not specified)</th><td>' ,
                 '{{ottrips}}',
                 '</td>',
                 '<tr class="even">',
                 '<th>Other Work Related</th><td>',
                 '{{wotrips}}',
                 '</td>' ,
                 '<tr class="odd">',
                 '<th>School</th><td>' ,
                 '{{sctrips}}',
                 '</td>',
                 '<tr class="even">',
                 '<th>Shopping</th><td>',
                 '{{shtrips}}',
                 '</td>' ,
              '</tbody>',           
                 '<table>',

    '</div>',
 '</div>',
  '<div class="cartodb-popup-tip-container">',
  '</div>',
'</div>'].join('');


  /* instance for testing table style */
  var indexURL = 'https://cpollard.cartodb.com/api/v2/viz/b94e6c8e-3a49-11e6-9d04-0e3ff518bd15/viz.json';

  var tableName = "cyclephilly_rd2";
  var subLayer;
  var subLayers = [];
    cartodb.createVis("map", indexURL, {
      shareable: false,
      searchControl: false,
      legends: false,
      tiles_loader: true,
      cartodb_logo: true,
      layer_selector: false,
      fullscreen: false,
      scrollwheel: true,
      center_lat: 39.97,
      center_lon: -75.16,
      zoom: 12
    })
  .done(function(vis, layers) {
    var subLayerOptions = {
  //  sql: "SELECT * FROM alltrips WHERE (alltrips >= 1 AND alltrips <= 2000)",
    cartocss: "#cyclephilly_rd2 {line-width: 2.5;line-opacity: 1;}#cyclephilly_rd2[purposemax='COTRIPS'] {line-color: #5CA2D1;line-width: 2}#cyclephilly_rd2[purposemax='ERTRIPS'] {line-color: #42d817;}#cyclephilly_rd2[purposemax='EXTRIPS'] {line-color: #e31a1c;}#cyclephilly_rd2[purposemax='OTTRIPS'] {line-color: #FFCC00;}#cyclephilly_rd2[purposemax='SCTRIPS'] {line-color: #229A00;}#cyclephilly_rd2[purposemax='SHTRIPS'] {line-color: #fb9a99;}#cyclephilly_rd2[purposemax='SOTRIPS'] {line-color: #FF6600;}#cyclephilly_rd2[purposemax='WOTRIPS'] {line-color: #A53ED5;}"
    }
    subLayer = layers[1].getSubLayer(0);
    subLayer.infowindow.set({
              template:   INFOWINDOW_TEMPLATE,
              sanitizeTemplate: false,
              width:      328,
              maxHeight:  400
            });
    subLayer.set(subLayerOptions);
    subLayers.push(subLayer);
    })

      .done(function(vis,layer) {
        $("#zoomToRegion").on('click', function(e) {
            vis.map.setView([39.97,-75.16,],10);
        });
    })

    .on('error', function(err) {
      /* console.log("some error occurred: " + err); */
    });

    var LayerActions = {
      purposemax: function(){
    subLayers[0].setCartoCSS("#cyclephilly_rd2 {line-width: 2.5;line-opacity: 1;}#cyclephilly_rd2[purposemax='COTRIPS'] {line-color: #5CA2D1;line-width: 2}#cyclephilly_rd2[purposemax='ERTRIPS'] {line-color: #42d817;}#cyclephilly_rd2[purposemax='EXTRIPS'] {line-color: #e31a1c;}#cyclephilly_rd2[purposemax='OTTRIPS'] {line-color: #FFCC00;}#cyclephilly_rd2[purposemax='SCTRIPS'] {line-color: #229A00;}#cyclephilly_rd2[purposemax='SHTRIPS'] {line-color: #fb9a99;}#cyclephilly_rd2[purposemax='SOTRIPS'] {line-color: #FF6600;}#cyclephilly_rd2[purposemax='WOTRIPS'] {line-color: #A53ED5;}");
    return true;
    },
    ttrips: function(){
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #FFFFCC;line-width: 3;line-opacity: 1;} #cyclephilly_rd2 [ ttrips <= 1612] {line-color: #0868ac;line-width: 8;} #cyclephilly_rd2 [ ttrips <= 500] {line-color: #43a2ca;line-width: 6;} #cyclephilly_rd2 [ ttrips <= 250] {line-color: #7bccc4;line-width: 4;} #cyclephilly_rd2 [ ttrips <= 150] {line-color: #BAE4BC;line-width: 3;} #cyclephilly_rd2 [ ttrips <= 50] {line-color: #f0f9e8;line-width: 1;} #cyclephilly_rd2 [ ttrips <=10] {line-color: #c8c8c8;line-width: .85;}");
    return true;
    },
    workcommute: function(){
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #ECF0F6;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ cotrips <= 1256] {line-color: #08519C;line-width: 8;}#cyclephilly_rd2 [ cotrips <= 298] {line-color: #3182BD;line-width: 6;}#cyclephilly_rd2 [ cotrips <= 194] {line-color: #6BAED6;line-width: 4;}#cyclephilly_rd2 [ cotrips <= 125] {line-color: #BDD7E7;line-width: 3;}#cyclephilly_rd2 [ cotrips <= 63] {line-color: #EFF3FF;line-width: 1;} #cyclephilly_rd2 [ cotrips <= 10] {line-color: #C8C8C8;line-width: .85;} #cyclephilly_rd2 [ cotrips <= .9] {line-color: #000000;line-width: .0;}");

    return true;
    },
    social: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #F1EEF6;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ sotrips <= 150] {line-color: #980043;line-width: 8;}#cyclephilly_rd2 [ sotrips <= 72] {line-color: #DD1C77;line-width: 6;}#cyclephilly_rd2 [ sotrips <= 52] {line-color: #DF65B0;line-width: 4;}#cyclephilly_rd2 [ sotrips <= 35] {line-color: #D7B5D8;line-width: 3;}#cyclephilly_rd2 [ sotrips <= 18] {line-color: #F1EEF6;line-width: 1;}#cyclephilly_rd2 [ sotrips <= 10] {line-color: #EFF3FF;line-width: 1;}#cyclephilly_rd2 [ sotrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    },
    exercise: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #FFFFB2;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ extrips <= 140] {line-color: #BD0026;line-width: 8;}#cyclephilly_rd2 [ extrips <= 45] {line-color: #F03B20;line-width: 6;}#cyclephilly_rd2 [ extrips <= 29] {line-color: #FD8D3C;line-width: 4;}#cyclephilly_rd2 [ extrips <= 20] {line-color: #FECC5C;line-width: 3;}#cyclephilly_rd2 [ extrips <= 10] {line-color: #FFFFB2;line-width: 1;}#cyclephilly_rd2 [ extrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    },
    errand: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #EDF8FB;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ ertrips <= 68] {line-color: #006D2C;line-width: 8;}#cyclephilly_rd2 [ ertrips <= 51] {line-color: #31A354;line-width: 6;}#cyclephilly_rd2 [ ertrips <= 38] {line-color: #74C476;line-width: 4;}#cyclephilly_rd2 [ ertrips <= 24] {line-color: #BAE4B3;line-width: 3;}#cyclephilly_rd2 [ ertrips <= 10] {line-color: #EDF8FB;line-width: 1;}#cyclephilly_rd2 [ ertrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    },
    other: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #EDF8FB;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ ottrips <= 47] {line-color: #006837;line-width: 8;}#cyclephilly_rd2 [ ottrips <= 38] {line-color: #31A354;line-width: 6;}#cyclephilly_rd2 [ ottrips <= 27] {line-color: #78C679;line-width: 4;}#cyclephilly_rd2 [ ottrips <= 18] {line-color: #C2E699;line-width: 3;}#cyclephilly_rd2 [ ottrips <= 9] {line-color: #FFFFCC;line-width: 1;}#cyclephilly_rd2 [ ottrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    },
    otherwork: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #F1E6F1;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ wotrips <= 63] {line-color: #54278F;line-width: 8;}#cyclephilly_rd2 [ wotrips <= 35] {line-color: #756BB1;line-width: 6;}#cyclephilly_rd2 [ wotrips <= 27] {line-color: #9E9AC8;line-width: 4;}#cyclephilly_rd2 [ wotrips <= 18] {line-color: #CBC9E2;line-width: 3;}#cyclephilly_rd2 [ wotrips <= 10] {line-color: #F2F0F7;line-width: 1;}#cyclephilly_rd2 [ wotrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    },
    school: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #EDF8FB;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ sctrips <= 59] {line-color: #810f7c;line-width: 8;}#cyclephilly_rd2 [ sctrips <= 38] {line-color: #8856a7;line-width: 6;}#cyclephilly_rd2 [ sctrips <= 26] {line-color: #8c96c6;line-width: 4;}#cyclephilly_rd2 [ sctrips <= 17] {line-color: #b3cde3;line-width: 3;}#cyclephilly_rd2 [ sctrips <= 8] {line-color: #edf8fb;line-width: 1;}#cyclephilly_rd2 [ sctrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    },
    shopping: function() {
    subLayers[0].setCartoCSS("#cyclephilly_rd2{polygon-opacity: 0;line-color: #F2D2D3;line-width: 3;line-opacity: 1;line-comp-op: darken;}#cyclephilly_rd2 [ shtrips <= 24] {line-color: #A50F15;line-width: 8;}#cyclephilly_rd2 [ shtrips <= 17] {line-color: #DE2D26;line-width: 6;}#cyclephilly_rd2 [ shtrips <= 12] {line-color: #FB6A4A;line-width: 4;}#cyclephilly_rd2 [ shtrips <= 9] {line-color: #FCAE91;line-width: 3;}#cyclephilly_rd2 [ shtrips <= 5] {line-color: #FEE5D9;line-width: 1;}#cyclephilly_rd2 [ shtrips <= .9] {line-color: #000000;line-width: .0;}");
    return true;
    } 
  }
  /* using built-in cartodb jquery */
      $('.button').click(function() {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
        LayerActions[$(this).attr('id')]();
      if ( $(this).attr('id') == "ttrips") {
            loadImage();
      } else {
       if ($(this).attr('id') == 'workcommute') {
            loadImage1();
      } else {
       if ($(this).attr('id') == 'social') {
            loadImage6();
      }else {
       if ($(this).attr('id') == 'exercise') {
            loadImage3();
      }else {
       if ($(this).attr('id') == 'errand') {
            loadImage2();
      }else {
       if ($(this).attr('id') == 'other') {
            loadImage8();
      }else {
       if ($(this).attr('id') == 'otherwork') {
            loadImage7();
      }else {
       if ($(this).attr('id') == 'school') {
            loadImage4();
      }else {
       if ($(this).attr('id') == 'shopping') {
            loadImage5();
      }
      else {
            loadImageTOP();
      }
    }
  }
}
}
}
  }
}
}
      });

} /* end function () */