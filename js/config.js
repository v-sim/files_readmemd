/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports) {

/**
 * @author Matthieu Le Corre <matthieu.lecorre@univ-nantes.fr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

 $(document).ready(function () {

    //Appearance

    $("#readmeMD-appearance-txt").click(function(Event){
        $.post(OC.generateUrl("apps/files_readmemd/config"),{key: "show_title", value: Event.target.checked})
            .success(function (json) {
                        //console.log(json) ;
                })
    }) ;

    $("#readmeMD-appearance-color").click(function(Event){
        $.post(OC.generateUrl("apps/files_readmemd/config"),{key: "yellow_back", value: Event.target.checked})
            .success(function (json) {
                        //console.log(json) ;
                })
    }) ;

    $("#readmeMD-appearance-refresh").click(function(Event){
        $.post(OC.generateUrl("apps/files_readmemd/config"),{key: "auto_refresh", value: Event.target.checked})
            .success(function (json) {
                        //console.log(json) ;
                })
    }) ;


    //Engines


    $("#readmeMD-engine-asciidoc").click(function(Event){
        $.post(OC.generateUrl("apps/files_readmemd/config"),{key: "show_asciidoc", value: Event.target.checked})
            .success(function (json) {
                        //console.log(json) ;
                })
    }) ;

    $("#readmeMD-engine-html").click(function(Event){
        $.post(OC.generateUrl("apps/files_readmemd/config"),{key: "show_html", value: Event.target.checked})
            .success(function (json) {
                        //console.log(json) ;
                })
    }) ;


    // Fileslists

    // DELETE
    $(".readmeMD-filelist_delete").on("click",function(Event){
        var self =this ;

       var fn = Event.target.dataset.filename ;
       var zone = Event.target.dataset.zone ;

       //console.log( "Deleting " + zone + " -> " + fn ) ;

       $.ajax({
           url:OC.generateUrl("apps/files_readmemd/config/filenames/" + zone + "/" + fn ),
           type: 'DELETE',
           success: function(data) {
               $(self).parent().remove() ;
           }
       })

    }) ;

    //ADD

    $("#readmeMD-filelist_submit-footer").on("click",function(Event){
        
        var fn = $("#readmeMD-filelist_name-footer")[0].value ;
        var zone = "footer" ;

        $.ajax({
            url:OC.generateUrl("apps/files_readmemd/config/filenames/" + zone + "/" + fn ),
            type: 'PUT',
            success: function(data) {             
                $("#readmeMD-filelist_footer").append(
                    '<li class="readmeMD-filelist" id="readmeMD-filelist-'+fn+'">'
                    +'<a data-zone="footer" data-filename="'+fn+'" class="readmeMD-filelist_delete icon-inline icon icon-delete"></a>'
                    +fn+'</li>')
            }
        })

    }) ;

    $("#readmeMD-filelist_submit-header").on("click",function(Event){
        
        var fn = $("#readmeMD-filelist_name-header")[0].value ;
        var zone = "header" ;

        $.ajax({
            url:OC.generateUrl("apps/files_readmemd/config/filenames/" + zone + "/" + fn ),
            type: 'PUT',
            success: function(data) {             
                $("#readmeMD-filelist_header").append(
                    '<li class="readmeMD-filelist" id="readmeMD-filelist-'+fn+'">'
                    +'<a data-zone="header" data-filename="'+fn+'" class="readmeMD-filelist_delete icon-inline icon icon-delete"></a>'
                    +fn+'</li>')
            }
        })

    }) ;

 }); 

/***/ })

/******/ });
//# sourceMappingURL=config.js.map