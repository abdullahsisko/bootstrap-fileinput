/*!
 * bootstrap-fileinput v5.2.8
 * http://plugins.krajee.com/file-input
 *
 * Material Icons icon theme configuration for bootstrap-fileinput. Requires Material Icons assets to be loaded.
 *
 * Author: Kartik Visweswaran
 * Developed by : Abdullah Þiþko
 * Copyright: 2014 - 2022, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {
    "use strict";

    $.fn.fileinputThemes.fa = {
        fileActionSettings: {
            removeIcon: '<span class="material-icons">delete</span>',
            uploadIcon: '<span class="material-icons">file_upload</span>',
            uploadRetryIcon: '<span class="material-icons">repeat</span>',
            downloadIcon: '<span class="material-icons">file_download</span>',
            zoomIcon: '<span class="material-icons">zoom_in</span>',
            dragIcon: '<span class="material-icons">arrow_forward</span>',
            indicatorNew: '<span class="material-icons">add_circle</span>',
            indicatorSuccess: '<span class="material-icons" style="color:green;">check_circle</span>',
            indicatorError: '<span class="material-icons" style="color:red;">cancel</span>',
            indicatorLoading: '<span class="material-icons">hourglass_bottom</span>',
            indicatorPaused: '<span class="material-icons">pause</span>'
        },
        layoutTemplates: {
            fileIcon: '<span class="material-icons" style="margin-left: -8px;">description</span> '
        },
        previewZoomButtonIcons: {
            prev: '<span class="material-icons">chevron_left</span>',
            next: '<span class="material-icons">chevron_right</span>',
            toggleheader: '<span class="material-icons">expand_more</span>',
            fullscreen: '<span class="material-icons">fullscreen</span>',
            borderless: '<span class="material-icons">open_in_new</span>',
            close: '<span class="material-icons">highlight_off</span>'
        },
        previewFileIcon: '<span class="material-icons">description</span> ',
        browseIcon: '<span class="material-icons">folder_open</span>',
        removeIcon: '<span class="material-icons">delete</span>',
        cancelIcon: '<span class="material-icons">close</span>',
        pauseIcon: '<span class="material-icons">pause</span>',
        uploadIcon: '<span class="material-icons">file_upload</span>',
        msgValidationErrorIcon: '<span class="material-icons">error</span '
    };
}));
