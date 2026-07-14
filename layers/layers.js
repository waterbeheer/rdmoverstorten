var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ProtectedSitesPSProtectedSiteDefault_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/provincies/natuurnetwerk-nederland/wms/v1_0?request=GetCapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Protected Sites [PS.ProtectedSite.Default]',
                            popuplayertitle: 'Protected Sites [PS.ProtectedSite.Default]',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ProtectedSitesPSProtectedSiteDefault_1, 0]);
var format_WaterschapAenB_2 = new ol.format.GeoJSON();
var features_WaterschapAenB_2 = format_WaterschapAenB_2.readFeatures(json_WaterschapAenB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterschapAenB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterschapAenB_2.addFeatures(features_WaterschapAenB_2);
var lyr_WaterschapAenB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterschapAenB_2, 
                style: style_WaterschapAenB_2,
                popuplayertitle: 'Waterschap A en B',
                interactive: true,
                title: '<img src="styles/legend/WaterschapAenB_2.png" /> Waterschap A en B'
            });
var format_externeOVS15042026_3 = new ol.format.GeoJSON();
var features_externeOVS15042026_3 = format_externeOVS15042026_3.readFeatures(json_externeOVS15042026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_externeOVS15042026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_externeOVS15042026_3.addFeatures(features_externeOVS15042026_3);
var lyr_externeOVS15042026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_externeOVS15042026_3, 
                style: style_externeOVS15042026_3,
                popuplayertitle: 'externeOVS15042026',
                interactive: true,
                title: '<img src="styles/legend/externeOVS15042026_3.png" /> externeOVS15042026'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProtectedSitesPSProtectedSiteDefault_1.setVisible(true);lyr_WaterschapAenB_2.setVisible(true);lyr_externeOVS15042026_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProtectedSitesPSProtectedSiteDefault_1,lyr_WaterschapAenB_2,lyr_externeOVS15042026_3];
lyr_WaterschapAenB_2.set('fieldAliases', {'gml_id': 'gml_id', 'creationDa': 'creationDa', 'LV-publica': 'LV-publica', 'relatieveH': 'relatieveH', 'inOnderzoe': 'inOnderzoe', 'tijdstipRe': 'tijdstipRe', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'bronhouder': 'bronhouder', 'bgt-status': 'bgt-status', 'plus-statu': 'plus-statu', 'class': 'class', 'plus-type': 'plus-type', 'terminatio': 'terminatio', 'eindRegist': 'eindRegist', });
lyr_externeOVS15042026_3.set('fieldAliases', {'ID': 'ID', 'GEOVISIA_I': 'GEOVISIA_I', 'BEHEERLAAG': 'BEHEERLAAG', 'IMKLTHEMA': 'IMKLTHEMA', 'LENGTE': 'LENGTE', 'MAAIVELDHO': 'MAAIVELDHO', 'BOVENGROND': 'BOVENGROND', 'OBJECTTYPE': 'OBJECTTYPE', 'JAARRENOVA': 'JAARRENOVA', 'TYPE_DETAI': 'TYPE_DETAI', 'JAARVANAAN': 'JAARVANAAN', 'FREQUENTIE': 'FREQUENTIE', 'DIAMETER': 'DIAMETER', 'TYPE_EXTRA': 'TYPE_EXTRA', 'TYPE': 'TYPE', 'TYPEAANSLU': 'TYPEAANSLU', 'BREEDTE': 'BREEDTE', 'BLINDEPUT': 'BLINDEPUT', 'HOOGTE': 'HOOGTE', 'VORM': 'VORM', 'MATERIAAL': 'MATERIAAL', 'FICTIEVEPU': 'FICTIEVEPU', 'TYPESTELSE': 'TYPESTELSE', 'OBJECTNUMM': 'OBJECTNUMM', 'BIJZONDERE': 'BIJZONDERE', 'KL_NAP_PUT': 'KL_NAP_PUT', 'TYPEONDERD': 'TYPEONDERD', 'TOEGANKELI': 'TOEGANKELI', 'MUTATIEDAT': 'MUTATIEDAT', 'WATERSCHAP': 'WATERSCHAP', 'LIGGING': 'LIGGING', 'EIGENAAR_D': 'EIGENAAR_D', 'WOONPLAATS': 'WOONPLAATS', 'AANMAAKDAT': 'AANMAAKDAT', 'BEHEERGEBI': 'BEHEERGEBI', 'ONDERHOUDS': 'ONDERHOUDS', 'MEMO': 'MEMO', 'BEHEERDER_': 'BEHEERDER_', 'OPENBARERU': 'OPENBARERU', 'BEHEERAFSP': 'BEHEERAFSP', 'VERWIJDERD': 'VERWIJDERD', 'BRONHOUDER': 'BRONHOUDER', 'EIGENAAR': 'EIGENAAR', 'BUURT': 'BUURT', 'GEBIEDSTYP': 'GEBIEDSTYP', 'WIJK': 'WIJK', 'GEWIJZIGDD': 'GEWIJZIGDD', 'INTEGRAALP': 'INTEGRAALP', 'STATUS': 'STATUS', 'DOCUMENTLO': 'DOCUMENTLO', 'LOCATIEAAN': 'LOCATIEAAN', 'AANGEMAAKT': 'AANGEMAAKT', 'GV_X': 'GV_X', 'GV_Y': 'GV_Y', });
lyr_WaterschapAenB_2.set('fieldImages', {'gml_id': 'TextEdit', 'creationDa': 'TextEdit', 'LV-publica': 'TextEdit', 'relatieveH': 'TextEdit', 'inOnderzoe': 'CheckBox', 'tijdstipRe': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'bronhouder': 'TextEdit', 'bgt-status': 'TextEdit', 'plus-statu': 'TextEdit', 'class': 'TextEdit', 'plus-type': 'TextEdit', 'terminatio': 'TextEdit', 'eindRegist': 'TextEdit', });
lyr_externeOVS15042026_3.set('fieldImages', {'ID': '', 'GEOVISIA_I': '', 'BEHEERLAAG': '', 'IMKLTHEMA': '', 'LENGTE': '', 'MAAIVELDHO': '', 'BOVENGROND': '', 'OBJECTTYPE': '', 'JAARRENOVA': '', 'TYPE_DETAI': '', 'JAARVANAAN': '', 'FREQUENTIE': '', 'DIAMETER': '', 'TYPE_EXTRA': '', 'TYPE': '', 'TYPEAANSLU': '', 'BREEDTE': '', 'BLINDEPUT': '', 'HOOGTE': '', 'VORM': '', 'MATERIAAL': '', 'FICTIEVEPU': '', 'TYPESTELSE': '', 'OBJECTNUMM': '', 'BIJZONDERE': '', 'KL_NAP_PUT': '', 'TYPEONDERD': '', 'TOEGANKELI': '', 'MUTATIEDAT': '', 'WATERSCHAP': '', 'LIGGING': '', 'EIGENAAR_D': '', 'WOONPLAATS': '', 'AANMAAKDAT': '', 'BEHEERGEBI': '', 'ONDERHOUDS': '', 'MEMO': '', 'BEHEERDER_': '', 'OPENBARERU': '', 'BEHEERAFSP': '', 'VERWIJDERD': '', 'BRONHOUDER': '', 'EIGENAAR': '', 'BUURT': '', 'GEBIEDSTYP': '', 'WIJK': '', 'GEWIJZIGDD': '', 'INTEGRAALP': '', 'STATUS': '', 'DOCUMENTLO': '', 'LOCATIEAAN': '', 'AANGEMAAKT': '', 'GV_X': '', 'GV_Y': '', });
lyr_WaterschapAenB_2.set('fieldLabels', {'gml_id': 'no label', 'creationDa': 'no label', 'LV-publica': 'no label', 'relatieveH': 'no label', 'inOnderzoe': 'no label', 'tijdstipRe': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'bronhouder': 'no label', 'bgt-status': 'no label', 'plus-statu': 'no label', 'class': 'no label', 'plus-type': 'no label', 'terminatio': 'no label', 'eindRegist': 'no label', });
lyr_externeOVS15042026_3.set('fieldLabels', {'ID': 'no label', 'GEOVISIA_I': 'no label', 'BEHEERLAAG': 'no label', 'IMKLTHEMA': 'no label', 'LENGTE': 'no label', 'MAAIVELDHO': 'no label', 'BOVENGROND': 'no label', 'OBJECTTYPE': 'no label', 'JAARRENOVA': 'no label', 'TYPE_DETAI': 'no label', 'JAARVANAAN': 'no label', 'FREQUENTIE': 'no label', 'DIAMETER': 'no label', 'TYPE_EXTRA': 'no label', 'TYPE': 'no label', 'TYPEAANSLU': 'no label', 'BREEDTE': 'no label', 'BLINDEPUT': 'no label', 'HOOGTE': 'no label', 'VORM': 'no label', 'MATERIAAL': 'no label', 'FICTIEVEPU': 'no label', 'TYPESTELSE': 'no label', 'OBJECTNUMM': 'no label', 'BIJZONDERE': 'no label', 'KL_NAP_PUT': 'no label', 'TYPEONDERD': 'no label', 'TOEGANKELI': 'no label', 'MUTATIEDAT': 'no label', 'WATERSCHAP': 'no label', 'LIGGING': 'no label', 'EIGENAAR_D': 'no label', 'WOONPLAATS': 'no label', 'AANMAAKDAT': 'no label', 'BEHEERGEBI': 'no label', 'ONDERHOUDS': 'no label', 'MEMO': 'no label', 'BEHEERDER_': 'no label', 'OPENBARERU': 'no label', 'BEHEERAFSP': 'no label', 'VERWIJDERD': 'no label', 'BRONHOUDER': 'no label', 'EIGENAAR': 'no label', 'BUURT': 'no label', 'GEBIEDSTYP': 'no label', 'WIJK': 'no label', 'GEWIJZIGDD': 'no label', 'INTEGRAALP': 'no label', 'STATUS': 'no label', 'DOCUMENTLO': 'no label', 'LOCATIEAAN': 'no label', 'AANGEMAAKT': 'no label', 'GV_X': 'no label', 'GV_Y': 'no label', });
lyr_externeOVS15042026_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});