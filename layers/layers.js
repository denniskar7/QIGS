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
var format_bulding_1 = new ol.format.GeoJSON();
var features_bulding_1 = format_bulding_1.readFeatures(json_bulding_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bulding_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bulding_1.addFeatures(features_bulding_1);
var lyr_bulding_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bulding_1, 
                style: style_bulding_1,
                interactive: true,
                title: '<img src="styles/legend/bulding_1.png" /> bulding'
            });
var format_force_2 = new ol.format.GeoJSON();
var features_force_2 = format_force_2.readFeatures(json_force_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_force_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_force_2.addFeatures(features_force_2);
var lyr_force_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_force_2, 
                style: style_force_2,
                interactive: true,
                title: '<img src="styles/legend/force_2.png" /> force'
            });
var format_cell_active_3 = new ol.format.GeoJSON();
var features_cell_active_3 = format_cell_active_3.readFeatures(json_cell_active_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cell_active_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cell_active_3.addFeatures(features_cell_active_3);
var lyr_cell_active_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cell_active_3, 
                style: style_cell_active_3,
                interactive: true,
                title: '<img src="styles/legend/cell_active_3.png" /> cell_active'
            });

lyr_OSMStandard_0.setVisible(true);lyr_bulding_1.setVisible(true);lyr_force_2.setVisible(true);lyr_cell_active_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_bulding_1,lyr_force_2,lyr_cell_active_3];
lyr_bulding_1.set('fieldAliases', {'id': 'id', 'b_name': 'b_name', 'remarks': 'remarks', 'b_num': 'b_num', 'evaluation': 'evaluation', });
lyr_force_2.set('fieldAliases', {'id': 'id', 'force': 'force', });
lyr_cell_active_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'company': 'company', 'site_num': 'site_num', 'city': 'city', 'address': 'address', 'local_auth': 'local_auth', 'shiput': 'shiput', 'X': 'X', 'Y': 'Y', 'type_': 'type_', 'hakama_dat': 'hakama_dat', 'hafala_dat': 'hafala_dat', 'last_bedik': 'last_bedik', 'permit': 'permit', 'max_intens': 'max_intens', 'hakama_fil': 'hakama_fil', 'hafala_fil': 'hafala_fil', 'intensity': 'intensity', 'percent_': 'percent_', });
lyr_bulding_1.set('fieldImages', {'id': 'TextEdit', 'b_name': 'TextEdit', 'remarks': 'TextEdit', 'b_num': 'Range', 'evaluation': 'TextEdit', });
lyr_force_2.set('fieldImages', {'id': 'TextEdit', 'force': 'TextEdit', });
lyr_cell_active_3.set('fieldImages', {'OBJECTID': '', 'ID': '', 'company': '', 'site_num': '', 'city': '', 'address': '', 'local_auth': '', 'shiput': '', 'X': '', 'Y': '', 'type_': '', 'hakama_dat': '', 'hafala_dat': '', 'last_bedik': '', 'permit': '', 'max_intens': '', 'hakama_fil': '', 'hafala_fil': '', 'intensity': '', 'percent_': '', });
lyr_bulding_1.set('fieldLabels', {'id': 'no label', 'b_name': 'no label', 'remarks': 'no label', 'b_num': 'no label', 'evaluation': 'no label', });
lyr_force_2.set('fieldLabels', {'id': 'no label', 'force': 'no label', });
lyr_cell_active_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'company': 'no label', 'site_num': 'no label', 'city': 'no label', 'address': 'no label', 'local_auth': 'no label', 'shiput': 'no label', 'X': 'no label', 'Y': 'no label', 'type_': 'no label', 'hakama_dat': 'no label', 'hafala_dat': 'no label', 'last_bedik': 'no label', 'permit': 'no label', 'max_intens': 'no label', 'hakama_fil': 'no label', 'hafala_fil': 'no label', 'intensity': 'no label', 'percent_': 'no label', });
lyr_cell_active_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});