(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"definitions": [{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"class":"IconButton","minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"borderSize":0},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_camera","media":"this.panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_camera","media":"this.panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_camera","media":"this.panorama_53D341CE_5A37_8931_41B8_0E61E31B167F","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"Panorama","hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"class":"TiledImageResourceLevel","rowCount":6,"url":"media/panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_0/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":72},{"width":18432,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_0/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":36},{"width":12288,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_0/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":24},{"width":24576,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_0/vr2gen/{column}.jpg","tags":"mobilevr2gen","height":2048,"colCount":12}]}}],"thumbnailUrl":"media/panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_t.jpg","partial":false,"id":"panorama_53D341CE_5A37_8931_41B8_0E61E31B167F","vfov":180,"overlays":["this.overlay_579EDF41_5A3F_9930_41D6_4C83E3D3A6C1"],"label":trans('panorama_53D341CE_5A37_8931_41B8_0E61E31B167F.label'),"hfovMax":130,"data":{"label":"Transition"},"pitch":0,"adjacentPanoramas":[{"distance":1.75,"class":"AdjacentPanorama","select":"this.overlay_579EDF41_5A3F_9930_41D6_4C83E3D3A6C1.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7","yaw":-104.31,"data":{"overlayID":"overlay_579EDF41_5A3F_9930_41D6_4C83E3D3A6C1"}}],"hfov":360},{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"shadow":false,"borderRadius":0,"gap":10,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingBottom":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingRight":0,"paddingLeft":0,"top":"17.26%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":430,"creationPolicy":"inAdvance","layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":430,"maxWidth":85,"class":"Container","minHeight":430,"right":"1.22%","minWidth":85,"borderSize":0,"data":{"name":"--SETTINGS"}},{"shadow":false,"borderRadius":0,"textDecoration":"none","width":280,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"verticalAlign":"middle","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"maxHeight":50,"fontSize":30,"maxWidth":280,"fontStyle":"normal","class":"Label","minHeight":50,"right":"1.45%","minWidth":280,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"borderRadius":0,"gap":10,"width":110,"overflow":"visible","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"paddingBottom":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","bottom":"4.6%","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":110,"creationPolicy":"inAdvance","layout":"horizontal","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","class":"Container","minHeight":1,"right":"0%","minWidth":1,"shadow":false,"borderSize":0,"data":{"name":"button menu sup"}},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"class":"IconButton","minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","paddingRight":0,"paddingLeft":0,"top":"6.78%","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"class":"IconButton","minHeight":60,"right":"0.6%","minWidth":60,"borderSize":0,"data":{"name":"image button menu"}},{"minWidth":20,"gap":10,"itemMode":"normal","borderRadius":5,"itemThumbnailShadowBlurRadius":8,"class":"ThumbnailList","rollOverItemLabelFontWeight":"normal","itemLabelFontFamily":"Arial","itemLabelHorizontalAlign":"center","itemThumbnailShadowHorizontalLength":3,"paddingTop":10,"propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"horizontalAlign":"left","itemPaddingRight":3,"itemThumbnailBorderRadius":50,"paddingLeft":20,"itemPaddingLeft":3,"itemOpacity":1,"itemLabelFontWeight":"normal","paddingRight":20,"verticalAlign":"top","bottom":"0.02%","itemHorizontalAlign":"center","itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"itemThumbnailWidth":75,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemLabelFontSize":14,"toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","itemThumbnailShadow":true,"itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"layout":"horizontal","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowSpread":1,"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemLabelPosition":"bottom","left":"0.01%","itemLabelGap":9,"itemLabelFontStyle":"normal","itemThumbnailShadowOpacity":0.54,"itemThumbnailShadowVerticalLength":3,"minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"itemPaddingBottom":3,"borderSize":0,"right":"0.12%","itemLabelTextDecoration":"none"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A"},{"class":"PanoramaPlayListItem","camera":"this.panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7"},{"class":"PanoramaPlayListItem","camera":"this.panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_53D341CE_5A37_8931_41B8_0E61E31B167F"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"shadow":false,"borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"left":26.3,"maxWidth":80,"class":"Image","minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_5037D5F4_5A37_88D1_41B3_7DE8F6198A2C","id":"panorama_53D341CE_5A37_8931_41B8_0E61E31B167F_camera"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"mode":"push","transparencyActive":true,"maxWidth":60,"class":"IconButton","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","borderSize":0},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_503735F4_5A37_88D1_419B_4D7B01DF6F6E","id":"panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_camera"},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadHeight":30,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"subtitlesTextShadowVerticalLength":1,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":1500,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"playbackBarHeadShadowHorizontalLength":0,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"left":0,"class":"ViewerArea","vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","maxHeight":60,"mode":"push","transparencyActive":true,"maxWidth":60,"class":"IconButton","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60,"rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","borderSize":0},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_503755F3_5A37_88D7_41D5_456C5BB8868F","id":"panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_camera"},{"thumbnailUrl":"media/panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_t.jpg","label":trans('panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7.label'),"hfovMin":"120%","hfovMax":130,"partial":false,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"class":"TiledImageResourceLevel","rowCount":6,"url":"media/panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_0/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":72},{"width":18432,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_0/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":36},{"width":12288,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_0/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":24},{"width":24576,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7_0/vr2gen/{column}.jpg","tags":"mobilevr2gen","height":2048,"colCount":12}]}}],"class":"Panorama","vfov":180,"hfov":360,"pitch":0,"data":{"label":"Salon"},"id":"panorama_53D31CA9_5A37_9F70_4196_2535FAC614B7"},{"thumbnailUrl":"media/panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_t.jpg","label":trans('panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A.label'),"hfovMin":"120%","hfovMax":130,"partial":false,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"class":"TiledImageResourceLevel","rowCount":6,"url":"media/panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_0/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":72},{"width":18432,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_0/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":36},{"width":12288,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_0/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":24},{"width":24576,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A_0/vr2gen/{column}.jpg","tags":"mobilevr2gen","height":2048,"colCount":12}]}}],"class":"Panorama","vfov":180,"hfov":360,"pitch":0,"data":{"label":"Cuisine"},"id":"panorama_53D94D80_5A30_9931_41A8_F1CC425DF78A"},{"shadow":false,"borderRadius":0,"gap":3,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"top":"14%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"maxWidth":85,"class":"Container","minHeight":320,"right":"0%","minWidth":85,"borderSize":0,"data":{"name":"-button set"}},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"class":"IconButton","minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60,"borderSize":0},{"areas":["this.HotspotPanoramaOverlayArea_57C61FAF_5A3F_994F_418F_1AC562074FA8"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Circle Arrow 02a","hasPanoramaAction":true},"useHandCursor":true,"items":[{"distance":100,"yaw":-104.31,"hfov":6,"vfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 02a"},"verticalAlign":"middle","image":"this.AnimatedImageResource_51558564_5A77_A329_41A5_7B63DF1BD1E0","horizontalAlign":"center","pitch":-44.14,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_579EDF41_5A3F_9930_41D6_4C83E3D3A6C1"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_5037D5F4_5A37_88D1_41B3_7DE8F6198A2C"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_503735F4_5A37_88D1_419B_4D7B01DF6F6E"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_503755F3_5A37_88D7_41D5_456C5BB8868F"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_57C61FAF_5A3F_994F_418F_1AC562074FA8"},{"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"levels":[{"height":642,"width":772,"class":"ImageResourceLevel","url":"media/res_555344C8_5A33_8F31_41D5_1DBE16DB4240_0.png"}],"id":"AnimatedImageResource_51558564_5A77_A329_41A5_7B63DF1BD1E0"}],"borderRadius":0,"gap":10,"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"defaultVRPointer":"gaze","paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"registerKey":TDV.Tour.Script.registerKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getKey":TDV.Tour.Script.getKey,"quizStart":TDV.Tour.Script.quizStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"openLink":TDV.Tour.Script.openLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"clone":TDV.Tour.Script.clone,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showWindow":TDV.Tour.Script.showWindow,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizFinish":TDV.Tour.Script.quizFinish,"cloneCamera":TDV.Tour.Script.cloneCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"init":TDV.Tour.Script.init,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initQuiz":TDV.Tour.Script.initQuiz,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playAudioList":TDV.Tour.Script.playAudioList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"mixObject":TDV.Tour.Script.mixObject,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"historyGoBack":TDV.Tour.Script.historyGoBack,"existsKey":TDV.Tour.Script.existsKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"historyGoForward":TDV.Tour.Script.historyGoForward,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight},"paddingRight":0,"paddingLeft":0,"scrollBarMargin":2,"vrPolyfillScale":1,"verticalAlign":"top","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","horizontalAlign":"left","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"creationPolicy":"inAdvance","left":602.7,"backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","class":"Player","minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 27 2024