var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NORTH_1 = new ol.format.GeoJSON();
var features_NORTH_1 = format_NORTH_1.readFeatures(json_NORTH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NORTH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NORTH_1.addFeatures(features_NORTH_1);
var lyr_NORTH_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NORTH_1, 
                style: style_NORTH_1,
                interactive: true,
                title: '<img src="styles/legend/NORTH_1.png" /> NORTH'
            });
var format_ISRAEL_2 = new ol.format.GeoJSON();
var features_ISRAEL_2 = format_ISRAEL_2.readFeatures(json_ISRAEL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISRAEL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISRAEL_2.addFeatures(features_ISRAEL_2);
var lyr_ISRAEL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISRAEL_2, 
                style: style_ISRAEL_2,
                interactive: true,
                title: '<img src="styles/legend/ISRAEL_2.png" /> ISRAEL'
            });
var format_REASHONLEZION_3 = new ol.format.GeoJSON();
var features_REASHONLEZION_3 = format_REASHONLEZION_3.readFeatures(json_REASHONLEZION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REASHONLEZION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REASHONLEZION_3.addFeatures(features_REASHONLEZION_3);
var lyr_REASHONLEZION_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REASHONLEZION_3, 
                style: style_REASHONLEZION_3,
                interactive: true,
                title: '<img src="styles/legend/REASHONLEZION_3.png" /> REASHON LEZION'
            });
var format_BEERSHEVA_4 = new ol.format.GeoJSON();
var features_BEERSHEVA_4 = format_BEERSHEVA_4.readFeatures(json_BEERSHEVA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEERSHEVA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEERSHEVA_4.addFeatures(features_BEERSHEVA_4);
var lyr_BEERSHEVA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BEERSHEVA_4, 
                style: style_BEERSHEVA_4,
                interactive: true,
                title: '<img src="styles/legend/BEERSHEVA_4.png" /> BEER SHEVA'
            });
var format_HAIFA_5 = new ol.format.GeoJSON();
var features_HAIFA_5 = format_HAIFA_5.readFeatures(json_HAIFA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAIFA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAIFA_5.addFeatures(features_HAIFA_5);
var lyr_HAIFA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAIFA_5, 
                style: style_HAIFA_5,
                interactive: true,
                title: '<img src="styles/legend/HAIFA_5.png" /> HAIFA'
            });
var format_JERUSALEAM_6 = new ol.format.GeoJSON();
var features_JERUSALEAM_6 = format_JERUSALEAM_6.readFeatures(json_JERUSALEAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JERUSALEAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JERUSALEAM_6.addFeatures(features_JERUSALEAM_6);
var lyr_JERUSALEAM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JERUSALEAM_6, 
                style: style_JERUSALEAM_6,
                interactive: true,
                title: '<img src="styles/legend/JERUSALEAM_6.png" /> JERUSALEAM'
            });
var format_TELAVIV_7 = new ol.format.GeoJSON();
var features_TELAVIV_7 = format_TELAVIV_7.readFeatures(json_TELAVIV_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TELAVIV_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TELAVIV_7.addFeatures(features_TELAVIV_7);
var lyr_TELAVIV_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TELAVIV_7, 
                style: style_TELAVIV_7,
                interactive: true,
                title: '<img src="styles/legend/TELAVIV_7.png" /> TELAVIV'
            });
var format_bulding_8 = new ol.format.GeoJSON();
var features_bulding_8 = format_bulding_8.readFeatures(json_bulding_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bulding_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bulding_8.addFeatures(features_bulding_8);
var lyr_bulding_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bulding_8, 
                style: style_bulding_8,
                interactive: true,
                title: '<img src="styles/legend/bulding_8.png" /> bulding'
            });
var format_force_9 = new ol.format.GeoJSON();
var features_force_9 = format_force_9.readFeatures(json_force_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_force_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_force_9.addFeatures(features_force_9);
var lyr_force_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_force_9, 
                style: style_force_9,
                interactive: true,
                title: '<img src="styles/legend/force_9.png" /> force'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NORTH_1.setVisible(true);lyr_ISRAEL_2.setVisible(true);lyr_REASHONLEZION_3.setVisible(true);lyr_BEERSHEVA_4.setVisible(true);lyr_HAIFA_5.setVisible(true);lyr_JERUSALEAM_6.setVisible(true);lyr_TELAVIV_7.setVisible(true);lyr_bulding_8.setVisible(true);lyr_force_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NORTH_1,lyr_ISRAEL_2,lyr_REASHONLEZION_3,lyr_BEERSHEVA_4,lyr_HAIFA_5,lyr_JERUSALEAM_6,lyr_TELAVIV_7,lyr_bulding_8,lyr_force_9];
lyr_NORTH_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_ISRAEL_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_REASHONLEZION_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_BEERSHEVA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_HAIFA_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_JERUSALEAM_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_TELAVIV_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_bulding_8.set('fieldAliases', {'id': 'id', 'b_name': 'b_name', 'remarks': 'remarks', 'b_num': 'b_num', 'evaluation': 'evaluation', });
lyr_force_9.set('fieldAliases', {'id': 'id', 'force': 'force', });
lyr_NORTH_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_ISRAEL_2.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_REASHONLEZION_3.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_BEERSHEVA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_HAIFA_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_JERUSALEAM_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_TELAVIV_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'company': 'TextEdit', 'site_num': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'local_auth': 'TextEdit', 'shiput': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'type_': 'TextEdit', 'hakama_dat': 'DateTime', 'hafala_dat': 'DateTime', 'last_bedik': 'DateTime', 'permit': 'TextEdit', 'max_intens': 'TextEdit', 'hakama_fil': 'TextEdit', 'hafala_fil': 'TextEdit', 'intensity': 'TextEdit', 'percent_': 'TextEdit', });
lyr_bulding_8.set('fieldImages', {'id': '', 'b_name': '', 'remarks': '', 'b_num': '', 'evaluation': '', });
lyr_force_9.set('fieldImages', {'id': '', 'force': '', });
lyr_NORTH_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_ISRAEL_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_REASHONLEZION_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_BEERSHEVA_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_HAIFA_5.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_JERUSALEAM_6.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_TELAVIV_7.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_bulding_8.set('fieldLabels', {'id': 'no label', 'b_name': 'no label', 'remarks': 'no label', 'b_num': 'no label', 'evaluation': 'no label', });
lyr_force_9.set('fieldLabels', {'id': 'no label', 'force': 'no label', });
lyr_force_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});