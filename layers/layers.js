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
                interactive: false,
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
var format_Gemengdriool_4 = new ol.format.GeoJSON();
var features_Gemengdriool_4 = format_Gemengdriool_4.readFeatures(json_Gemengdriool_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemengdriool_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemengdriool_4.addFeatures(features_Gemengdriool_4);
var lyr_Gemengdriool_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemengdriool_4, 
                style: style_Gemengdriool_4,
                popuplayertitle: 'Gemengd riool',
                interactive: true,
                title: '<img src="styles/legend/Gemengdriool_4.png" /> Gemengd riool'
            });
var format_Hemelwaterriool_5 = new ol.format.GeoJSON();
var features_Hemelwaterriool_5 = format_Hemelwaterriool_5.readFeatures(json_Hemelwaterriool_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hemelwaterriool_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hemelwaterriool_5.addFeatures(features_Hemelwaterriool_5);
var lyr_Hemelwaterriool_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hemelwaterriool_5, 
                style: style_Hemelwaterriool_5,
                popuplayertitle: 'Hemelwaterriool',
                interactive: true,
                title: '<img src="styles/legend/Hemelwaterriool_5.png" /> Hemelwaterriool'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProtectedSitesPSProtectedSiteDefault_1.setVisible(true);lyr_WaterschapAenB_2.setVisible(true);lyr_externeOVS15042026_3.setVisible(true);lyr_Gemengdriool_4.setVisible(true);lyr_Hemelwaterriool_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProtectedSitesPSProtectedSiteDefault_1,lyr_WaterschapAenB_2,lyr_externeOVS15042026_3,lyr_Gemengdriool_4,lyr_Hemelwaterriool_5];
lyr_WaterschapAenB_2.set('fieldAliases', {'gml_id': 'gml_id', 'creationDa': 'creationDa', 'LV-publica': 'LV-publica', 'relatieveH': 'relatieveH', 'inOnderzoe': 'inOnderzoe', 'tijdstipRe': 'tijdstipRe', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'bronhouder': 'bronhouder', 'bgt-status': 'bgt-status', 'plus-statu': 'plus-statu', 'class': 'class', 'plus-type': 'plus-type', 'terminatio': 'terminatio', 'eindRegist': 'eindRegist', });
lyr_externeOVS15042026_3.set('fieldAliases', {'ID': 'ID', 'GEOVISIA_I': 'GEOVISIA_I', 'BEHEERLAAG': 'BEHEERLAAG', 'IMKLTHEMA': 'IMKLTHEMA', 'LENGTE': 'LENGTE', 'MAAIVELDHO': 'MAAIVELDHO', 'BOVENGROND': 'BOVENGROND', 'OBJECTTYPE': 'OBJECTTYPE', 'JAARRENOVA': 'JAARRENOVA', 'TYPE_DETAI': 'TYPE_DETAI', 'JAARVANAAN': 'JAARVANAAN', 'FREQUENTIE': 'FREQUENTIE', 'DIAMETER': 'DIAMETER', 'TYPE_EXTRA': 'TYPE_EXTRA', 'TYPE': 'TYPE', 'TYPEAANSLU': 'TYPEAANSLU', 'BREEDTE': 'BREEDTE', 'BLINDEPUT': 'BLINDEPUT', 'HOOGTE': 'HOOGTE', 'VORM': 'VORM', 'MATERIAAL': 'MATERIAAL', 'FICTIEVEPU': 'FICTIEVEPU', 'TYPESTELSE': 'TYPESTELSE', 'OBJECTNUMM': 'OBJECTNUMM', 'BIJZONDERE': 'BIJZONDERE', 'KL_NAP_PUT': 'KL_NAP_PUT', 'TYPEONDERD': 'TYPEONDERD', 'TOEGANKELI': 'TOEGANKELI', 'MUTATIEDAT': 'MUTATIEDAT', 'WATERSCHAP': 'WATERSCHAP', 'LIGGING': 'LIGGING', 'EIGENAAR_D': 'EIGENAAR_D', 'WOONPLAATS': 'WOONPLAATS', 'AANMAAKDAT': 'AANMAAKDAT', 'BEHEERGEBI': 'BEHEERGEBI', 'ONDERHOUDS': 'ONDERHOUDS', 'MEMO': 'MEMO', 'BEHEERDER_': 'BEHEERDER_', 'OPENBARERU': 'OPENBARERU', 'BEHEERAFSP': 'BEHEERAFSP', 'VERWIJDERD': 'VERWIJDERD', 'BRONHOUDER': 'BRONHOUDER', 'EIGENAAR': 'EIGENAAR', 'BUURT': 'BUURT', 'GEBIEDSTYP': 'GEBIEDSTYP', 'WIJK': 'WIJK', 'GEWIJZIGDD': 'GEWIJZIGDD', 'INTEGRAALP': 'INTEGRAALP', 'STATUS': 'STATUS', 'DOCUMENTLO': 'DOCUMENTLO', 'LOCATIEAAN': 'LOCATIEAAN', 'AANGEMAAKT': 'AANGEMAAKT', 'GV_X': 'GV_X', 'GV_Y': 'GV_Y', });
lyr_Gemengdriool_4.set('fieldAliases', {'ID': 'ID', 'GEOVISIA_I': 'GEOVISIA_I', 'OBJECTNUMM': 'OBJECTNUMM', 'TYPE': 'TYPE', 'OBJECTTYPE': 'OBJECTTYPE', 'TYPEONDERD': 'TYPEONDERD', 'KL_BUISLEN': 'KL_BUISLEN', 'BEGINPUTNU': 'BEGINPUTNU', 'BREEDTE': 'BREEDTE', 'MATERIAAL': 'MATERIAAL', 'HOOGTE': 'HOOGTE', 'TYPE_DETAI': 'TYPE_DETAI', 'VOEGMATERI': 'VOEGMATERI', 'EINDPUTNUM': 'EINDPUTNUM', 'VERBINDING': 'VERBINDING', 'JAARLAATST': 'JAARLAATST', 'LININGMATE': 'LININGMATE', 'JAARVANAAN': 'JAARVANAAN', 'BOBBEGIN': 'BOBBEGIN', 'BEHEERLAAG': 'BEHEERLAAG', 'RIOLERINGS': 'RIOLERINGS', 'AFWATERING': 'AFWATERING', 'VOLGENDEIN': 'VOLGENDEIN', 'BOBEIND': 'BOBEIND', 'VERHOOGDRI': 'VERHOOGDRI', 'SOORT_LINI': 'SOORT_LINI', 'LENGTE': 'LENGTE', 'VORM': 'VORM', 'TYPESTELSE': 'TYPESTELSE', 'KL_FUNCTIE': 'KL_FUNCTIE', 'TOEGANKELI': 'TOEGANKELI', 'IMKLTHEMA': 'IMKLTHEMA', 'WIJK': 'WIJK', 'BEHEERDER_': 'BEHEERDER_', 'WATERSCHAP': 'WATERSCHAP', 'WOONPLAATS': 'WOONPLAATS', 'BRONHOUDER': 'BRONHOUDER', 'INTEGRAALP': 'INTEGRAALP', 'DOCUMENTLO': 'DOCUMENTLO', 'ONDERHOUDS': 'ONDERHOUDS', 'REVISIETEK': 'REVISIETEK', 'BEHEERAFSP': 'BEHEERAFSP', 'GRONDSOORT': 'GRONDSOORT', 'EIGENAAR_D': 'EIGENAAR_D', 'STATUS': 'STATUS', 'MEMO': 'MEMO', 'AANMAAKDAT': 'AANMAAKDAT', 'EIGENAAR': 'EIGENAAR', 'BEHEERGEBI': 'BEHEERGEBI', 'LIGGING': 'LIGGING', 'AANGEMAAKT': 'AANGEMAAKT', 'MUTATIEDAT': 'MUTATIEDAT', 'BUURT': 'BUURT', 'VERWIJDERD': 'VERWIJDERD', 'OPENBARERU': 'OPENBARERU', 'BESTEK': 'BESTEK', 'GEBIEDSTYP': 'GEBIEDSTYP', 'GEWIJZIGDD': 'GEWIJZIGDD', 'GV_OMTREK': 'GV_OMTREK', });
lyr_Hemelwaterriool_5.set('fieldAliases', {'ID': 'ID', 'GEOVISIA_I': 'GEOVISIA_I', 'OBJECTNUMM': 'OBJECTNUMM', 'TYPE': 'TYPE', 'OBJECTTYPE': 'OBJECTTYPE', 'TYPEONDERD': 'TYPEONDERD', 'KL_BUISLEN': 'KL_BUISLEN', 'BEGINPUTNU': 'BEGINPUTNU', 'BREEDTE': 'BREEDTE', 'MATERIAAL': 'MATERIAAL', 'HOOGTE': 'HOOGTE', 'TYPE_DETAI': 'TYPE_DETAI', 'VOEGMATERI': 'VOEGMATERI', 'EINDPUTNUM': 'EINDPUTNUM', 'VERBINDING': 'VERBINDING', 'JAARLAATST': 'JAARLAATST', 'LININGMATE': 'LININGMATE', 'JAARVANAAN': 'JAARVANAAN', 'BOBBEGIN': 'BOBBEGIN', 'BEHEERLAAG': 'BEHEERLAAG', 'RIOLERINGS': 'RIOLERINGS', 'AFWATERING': 'AFWATERING', 'VOLGENDEIN': 'VOLGENDEIN', 'BOBEIND': 'BOBEIND', 'VERHOOGDRI': 'VERHOOGDRI', 'SOORT_LINI': 'SOORT_LINI', 'LENGTE': 'LENGTE', 'VORM': 'VORM', 'TYPESTELSE': 'TYPESTELSE', 'KL_FUNCTIE': 'KL_FUNCTIE', 'TOEGANKELI': 'TOEGANKELI', 'IMKLTHEMA': 'IMKLTHEMA', 'WIJK': 'WIJK', 'BEHEERDER_': 'BEHEERDER_', 'WATERSCHAP': 'WATERSCHAP', 'WOONPLAATS': 'WOONPLAATS', 'BRONHOUDER': 'BRONHOUDER', 'INTEGRAALP': 'INTEGRAALP', 'DOCUMENTLO': 'DOCUMENTLO', 'ONDERHOUDS': 'ONDERHOUDS', 'REVISIETEK': 'REVISIETEK', 'BEHEERAFSP': 'BEHEERAFSP', 'GRONDSOORT': 'GRONDSOORT', 'EIGENAAR_D': 'EIGENAAR_D', 'STATUS': 'STATUS', 'MEMO': 'MEMO', 'AANMAAKDAT': 'AANMAAKDAT', 'EIGENAAR': 'EIGENAAR', 'BEHEERGEBI': 'BEHEERGEBI', 'LIGGING': 'LIGGING', 'AANGEMAAKT': 'AANGEMAAKT', 'MUTATIEDAT': 'MUTATIEDAT', 'BUURT': 'BUURT', 'VERWIJDERD': 'VERWIJDERD', 'OPENBARERU': 'OPENBARERU', 'BESTEK': 'BESTEK', 'GEBIEDSTYP': 'GEBIEDSTYP', 'GEWIJZIGDD': 'GEWIJZIGDD', 'GV_OMTREK': 'GV_OMTREK', });
lyr_WaterschapAenB_2.set('fieldImages', {'gml_id': 'TextEdit', 'creationDa': 'TextEdit', 'LV-publica': 'TextEdit', 'relatieveH': 'TextEdit', 'inOnderzoe': 'CheckBox', 'tijdstipRe': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'bronhouder': 'TextEdit', 'bgt-status': 'TextEdit', 'plus-statu': 'TextEdit', 'class': 'TextEdit', 'plus-type': 'TextEdit', 'terminatio': 'TextEdit', 'eindRegist': 'TextEdit', });
lyr_externeOVS15042026_3.set('fieldImages', {'ID': '', 'GEOVISIA_I': '', 'BEHEERLAAG': '', 'IMKLTHEMA': '', 'LENGTE': '', 'MAAIVELDHO': '', 'BOVENGROND': '', 'OBJECTTYPE': '', 'JAARRENOVA': '', 'TYPE_DETAI': '', 'JAARVANAAN': '', 'FREQUENTIE': '', 'DIAMETER': '', 'TYPE_EXTRA': '', 'TYPE': '', 'TYPEAANSLU': '', 'BREEDTE': '', 'BLINDEPUT': '', 'HOOGTE': '', 'VORM': '', 'MATERIAAL': '', 'FICTIEVEPU': '', 'TYPESTELSE': '', 'OBJECTNUMM': '', 'BIJZONDERE': '', 'KL_NAP_PUT': '', 'TYPEONDERD': '', 'TOEGANKELI': '', 'MUTATIEDAT': '', 'WATERSCHAP': '', 'LIGGING': '', 'EIGENAAR_D': '', 'WOONPLAATS': '', 'AANMAAKDAT': '', 'BEHEERGEBI': '', 'ONDERHOUDS': '', 'MEMO': '', 'BEHEERDER_': '', 'OPENBARERU': '', 'BEHEERAFSP': '', 'VERWIJDERD': '', 'BRONHOUDER': '', 'EIGENAAR': '', 'BUURT': '', 'GEBIEDSTYP': '', 'WIJK': '', 'GEWIJZIGDD': '', 'INTEGRAALP': '', 'STATUS': '', 'DOCUMENTLO': '', 'LOCATIEAAN': '', 'AANGEMAAKT': '', 'GV_X': '', 'GV_Y': '', });
lyr_Gemengdriool_4.set('fieldImages', {'ID': 'TextEdit', 'GEOVISIA_I': 'TextEdit', 'OBJECTNUMM': 'TextEdit', 'TYPE': 'TextEdit', 'OBJECTTYPE': 'TextEdit', 'TYPEONDERD': 'TextEdit', 'KL_BUISLEN': 'TextEdit', 'BEGINPUTNU': 'TextEdit', 'BREEDTE': 'TextEdit', 'MATERIAAL': 'TextEdit', 'HOOGTE': 'TextEdit', 'TYPE_DETAI': 'TextEdit', 'VOEGMATERI': 'TextEdit', 'EINDPUTNUM': 'TextEdit', 'VERBINDING': 'TextEdit', 'JAARLAATST': 'Range', 'LININGMATE': 'TextEdit', 'JAARVANAAN': 'Range', 'BOBBEGIN': 'TextEdit', 'BEHEERLAAG': 'TextEdit', 'RIOLERINGS': 'TextEdit', 'AFWATERING': 'TextEdit', 'VOLGENDEIN': 'TextEdit', 'BOBEIND': 'TextEdit', 'VERHOOGDRI': 'TextEdit', 'SOORT_LINI': 'TextEdit', 'LENGTE': 'TextEdit', 'VORM': 'TextEdit', 'TYPESTELSE': 'TextEdit', 'KL_FUNCTIE': 'TextEdit', 'TOEGANKELI': 'TextEdit', 'IMKLTHEMA': 'TextEdit', 'WIJK': 'TextEdit', 'BEHEERDER_': 'TextEdit', 'WATERSCHAP': 'TextEdit', 'WOONPLAATS': 'TextEdit', 'BRONHOUDER': 'TextEdit', 'INTEGRAALP': 'TextEdit', 'DOCUMENTLO': 'TextEdit', 'ONDERHOUDS': 'TextEdit', 'REVISIETEK': 'TextEdit', 'BEHEERAFSP': 'TextEdit', 'GRONDSOORT': 'TextEdit', 'EIGENAAR_D': 'TextEdit', 'STATUS': 'TextEdit', 'MEMO': 'TextEdit', 'AANMAAKDAT': 'DateTime', 'EIGENAAR': 'TextEdit', 'BEHEERGEBI': 'TextEdit', 'LIGGING': 'TextEdit', 'AANGEMAAKT': 'TextEdit', 'MUTATIEDAT': 'DateTime', 'BUURT': 'TextEdit', 'VERWIJDERD': 'DateTime', 'OPENBARERU': 'TextEdit', 'BESTEK': 'TextEdit', 'GEBIEDSTYP': 'TextEdit', 'GEWIJZIGDD': 'TextEdit', 'GV_OMTREK': 'TextEdit', });
lyr_Hemelwaterriool_5.set('fieldImages', {'ID': 'TextEdit', 'GEOVISIA_I': 'TextEdit', 'OBJECTNUMM': 'TextEdit', 'TYPE': 'TextEdit', 'OBJECTTYPE': 'TextEdit', 'TYPEONDERD': 'TextEdit', 'KL_BUISLEN': 'TextEdit', 'BEGINPUTNU': 'TextEdit', 'BREEDTE': 'TextEdit', 'MATERIAAL': 'TextEdit', 'HOOGTE': 'TextEdit', 'TYPE_DETAI': 'TextEdit', 'VOEGMATERI': 'TextEdit', 'EINDPUTNUM': 'TextEdit', 'VERBINDING': 'TextEdit', 'JAARLAATST': 'Range', 'LININGMATE': 'TextEdit', 'JAARVANAAN': 'Range', 'BOBBEGIN': 'TextEdit', 'BEHEERLAAG': 'TextEdit', 'RIOLERINGS': 'TextEdit', 'AFWATERING': 'TextEdit', 'VOLGENDEIN': 'TextEdit', 'BOBEIND': 'TextEdit', 'VERHOOGDRI': 'TextEdit', 'SOORT_LINI': 'TextEdit', 'LENGTE': 'TextEdit', 'VORM': 'TextEdit', 'TYPESTELSE': 'TextEdit', 'KL_FUNCTIE': 'TextEdit', 'TOEGANKELI': 'TextEdit', 'IMKLTHEMA': 'TextEdit', 'WIJK': 'TextEdit', 'BEHEERDER_': 'TextEdit', 'WATERSCHAP': 'TextEdit', 'WOONPLAATS': 'TextEdit', 'BRONHOUDER': 'TextEdit', 'INTEGRAALP': 'TextEdit', 'DOCUMENTLO': 'TextEdit', 'ONDERHOUDS': 'TextEdit', 'REVISIETEK': 'TextEdit', 'BEHEERAFSP': 'TextEdit', 'GRONDSOORT': 'TextEdit', 'EIGENAAR_D': 'TextEdit', 'STATUS': 'TextEdit', 'MEMO': 'TextEdit', 'AANMAAKDAT': 'DateTime', 'EIGENAAR': 'TextEdit', 'BEHEERGEBI': 'TextEdit', 'LIGGING': 'TextEdit', 'AANGEMAAKT': 'TextEdit', 'MUTATIEDAT': 'DateTime', 'BUURT': 'TextEdit', 'VERWIJDERD': 'DateTime', 'OPENBARERU': 'TextEdit', 'BESTEK': 'TextEdit', 'GEBIEDSTYP': 'TextEdit', 'GEWIJZIGDD': 'TextEdit', 'GV_OMTREK': 'TextEdit', });
lyr_WaterschapAenB_2.set('fieldLabels', {'gml_id': 'no label', 'creationDa': 'no label', 'LV-publica': 'no label', 'relatieveH': 'no label', 'inOnderzoe': 'no label', 'tijdstipRe': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'bronhouder': 'no label', 'bgt-status': 'no label', 'plus-statu': 'no label', 'class': 'no label', 'plus-type': 'no label', 'terminatio': 'no label', 'eindRegist': 'no label', });
lyr_externeOVS15042026_3.set('fieldLabels', {'ID': 'no label', 'GEOVISIA_I': 'no label', 'BEHEERLAAG': 'no label', 'IMKLTHEMA': 'no label', 'LENGTE': 'no label', 'MAAIVELDHO': 'no label', 'BOVENGROND': 'no label', 'OBJECTTYPE': 'no label', 'JAARRENOVA': 'no label', 'TYPE_DETAI': 'no label', 'JAARVANAAN': 'no label', 'FREQUENTIE': 'no label', 'DIAMETER': 'no label', 'TYPE_EXTRA': 'no label', 'TYPE': 'no label', 'TYPEAANSLU': 'no label', 'BREEDTE': 'no label', 'BLINDEPUT': 'no label', 'HOOGTE': 'no label', 'VORM': 'no label', 'MATERIAAL': 'no label', 'FICTIEVEPU': 'no label', 'TYPESTELSE': 'no label', 'OBJECTNUMM': 'no label', 'BIJZONDERE': 'no label', 'KL_NAP_PUT': 'no label', 'TYPEONDERD': 'no label', 'TOEGANKELI': 'no label', 'MUTATIEDAT': 'no label', 'WATERSCHAP': 'no label', 'LIGGING': 'no label', 'EIGENAAR_D': 'no label', 'WOONPLAATS': 'no label', 'AANMAAKDAT': 'no label', 'BEHEERGEBI': 'no label', 'ONDERHOUDS': 'no label', 'MEMO': 'no label', 'BEHEERDER_': 'no label', 'OPENBARERU': 'no label', 'BEHEERAFSP': 'no label', 'VERWIJDERD': 'no label', 'BRONHOUDER': 'no label', 'EIGENAAR': 'no label', 'BUURT': 'no label', 'GEBIEDSTYP': 'no label', 'WIJK': 'no label', 'GEWIJZIGDD': 'no label', 'INTEGRAALP': 'no label', 'STATUS': 'no label', 'DOCUMENTLO': 'no label', 'LOCATIEAAN': 'no label', 'AANGEMAAKT': 'no label', 'GV_X': 'no label', 'GV_Y': 'no label', });
lyr_Gemengdriool_4.set('fieldLabels', {'ID': 'no label', 'GEOVISIA_I': 'no label', 'OBJECTNUMM': 'no label', 'TYPE': 'no label', 'OBJECTTYPE': 'no label', 'TYPEONDERD': 'no label', 'KL_BUISLEN': 'no label', 'BEGINPUTNU': 'no label', 'BREEDTE': 'no label', 'MATERIAAL': 'no label', 'HOOGTE': 'no label', 'TYPE_DETAI': 'no label', 'VOEGMATERI': 'no label', 'EINDPUTNUM': 'no label', 'VERBINDING': 'no label', 'JAARLAATST': 'no label', 'LININGMATE': 'no label', 'JAARVANAAN': 'no label', 'BOBBEGIN': 'no label', 'BEHEERLAAG': 'no label', 'RIOLERINGS': 'no label', 'AFWATERING': 'no label', 'VOLGENDEIN': 'no label', 'BOBEIND': 'no label', 'VERHOOGDRI': 'no label', 'SOORT_LINI': 'no label', 'LENGTE': 'no label', 'VORM': 'no label', 'TYPESTELSE': 'no label', 'KL_FUNCTIE': 'no label', 'TOEGANKELI': 'no label', 'IMKLTHEMA': 'no label', 'WIJK': 'no label', 'BEHEERDER_': 'no label', 'WATERSCHAP': 'no label', 'WOONPLAATS': 'no label', 'BRONHOUDER': 'no label', 'INTEGRAALP': 'no label', 'DOCUMENTLO': 'no label', 'ONDERHOUDS': 'no label', 'REVISIETEK': 'no label', 'BEHEERAFSP': 'no label', 'GRONDSOORT': 'no label', 'EIGENAAR_D': 'no label', 'STATUS': 'no label', 'MEMO': 'no label', 'AANMAAKDAT': 'no label', 'EIGENAAR': 'no label', 'BEHEERGEBI': 'no label', 'LIGGING': 'no label', 'AANGEMAAKT': 'no label', 'MUTATIEDAT': 'no label', 'BUURT': 'no label', 'VERWIJDERD': 'no label', 'OPENBARERU': 'no label', 'BESTEK': 'no label', 'GEBIEDSTYP': 'no label', 'GEWIJZIGDD': 'no label', 'GV_OMTREK': 'no label', });
lyr_Hemelwaterriool_5.set('fieldLabels', {'ID': 'no label', 'GEOVISIA_I': 'no label', 'OBJECTNUMM': 'no label', 'TYPE': 'no label', 'OBJECTTYPE': 'no label', 'TYPEONDERD': 'no label', 'KL_BUISLEN': 'no label', 'BEGINPUTNU': 'no label', 'BREEDTE': 'no label', 'MATERIAAL': 'no label', 'HOOGTE': 'no label', 'TYPE_DETAI': 'no label', 'VOEGMATERI': 'no label', 'EINDPUTNUM': 'no label', 'VERBINDING': 'no label', 'JAARLAATST': 'no label', 'LININGMATE': 'no label', 'JAARVANAAN': 'no label', 'BOBBEGIN': 'no label', 'BEHEERLAAG': 'no label', 'RIOLERINGS': 'no label', 'AFWATERING': 'no label', 'VOLGENDEIN': 'no label', 'BOBEIND': 'no label', 'VERHOOGDRI': 'no label', 'SOORT_LINI': 'no label', 'LENGTE': 'no label', 'VORM': 'no label', 'TYPESTELSE': 'no label', 'KL_FUNCTIE': 'no label', 'TOEGANKELI': 'no label', 'IMKLTHEMA': 'no label', 'WIJK': 'no label', 'BEHEERDER_': 'no label', 'WATERSCHAP': 'no label', 'WOONPLAATS': 'no label', 'BRONHOUDER': 'no label', 'INTEGRAALP': 'no label', 'DOCUMENTLO': 'no label', 'ONDERHOUDS': 'no label', 'REVISIETEK': 'no label', 'BEHEERAFSP': 'no label', 'GRONDSOORT': 'no label', 'EIGENAAR_D': 'no label', 'STATUS': 'no label', 'MEMO': 'no label', 'AANMAAKDAT': 'no label', 'EIGENAAR': 'no label', 'BEHEERGEBI': 'no label', 'LIGGING': 'no label', 'AANGEMAAKT': 'no label', 'MUTATIEDAT': 'no label', 'BUURT': 'no label', 'VERWIJDERD': 'no label', 'OPENBARERU': 'no label', 'BESTEK': 'no label', 'GEBIEDSTYP': 'no label', 'GEWIJZIGDD': 'no label', 'GV_OMTREK': 'no label', });
lyr_Hemelwaterriool_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});