// ==UserScript==
// @name        TGE
// @namespace   TGE
// @description Tremor Games Enhanced
// @include     http://www.tremorgames.com/index.php?action=shop*
// @include     http://www.tremorgames.com/?action=forums*
// @include     http://www.tremorgames.com/?action=viewforum*
// @include     http://www.tremorgames.com/?action=viewtopic&topicid=*
// @include     http://www.tremorgames.com/?action=viewgiveaways*
// @include     http://www.tremorgames.com/?action=editprofile*
// @include     http://www.tremorgames.com/editprofiles*
// @include     http://www.tremorgames.com/profiles*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @version     1.1
// @grant       GM_setValue 
// @grant       GM_getValue 
// @author      brenomirandi & Royalgamer06
// @downloadURL https://github.com/Breno-M/TGE/raw/master/TGE.user.js
// @updateURL   https://github.com/Breno-M/TGE/raw/master/TGE.user.js
// ==/UserScript==


//***************************************************************************** Config

bGiveaways=GM_getValue("bGiveaways");
bUnsubscribe=GM_getValue("bUnsubscribe");
bLastpage=GM_getValue("bLastpage");
bLastpost=GM_getValue("bLastpost");
bSelectiveItems=GM_getValue("bSelectiveItems");
bWishlist=GM_getValue("bWishlist");

if(window.location.href.indexOf("editprofile") > -1) {

    $('div.reg_row:nth-child(18)').after('<div class="reg_row" id="tge_row0"><div class="reg_col1" style="color:#FFB300" width="80%"><b>TGE Features</b></div></div>');

    if(!bWishlist)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row4"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleW" id="toggleW">Wishlist: Off</button></div></div>');
    else if(bWishlist)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row4"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleW" id="toggleW">Wishlist: On</button></div></div>');

    if(!bGiveaways)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row3"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleG" id="toggleG">Giveaways: Off</button></div></div>');
    else if(bGiveaways)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row3"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleG" id="toggleG">Giveaways: On</button></div></div>');

    $('#tge_row3').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="reset" id="reset">Reset Subscriptions</button></div>');

    if(!bLastpage)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row2"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleL" id="toggleL">Last Page: Off</button></div></div>');
    else if(bLastpage)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row2"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleL" id="toggleL">Last Page: On</button></div></div>');

    if(!bUnsubscribe)
        $('#tge_row2').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleU" id="toggleU">Unsubscribe: Off</button></div>');
    else if(bUnsubscribe)
        $('#tge_row2').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleU" id="toggleU">Unsubscribe: On</button></div>');

    if(!bSelectiveItems)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row1"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS">Item Filter: Off</button></div></div>');
    else if(bSelectiveItems)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row1"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS">Item Filters: On</button></div></div>');

    if(!bLastpost)
        $('#tge_row1').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleP" id="toggleP">Last Post: Off</button></div>');
    else if(bLastpost)
        $('#tge_row1').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleP" id="toggleP">Last Post: On</button></div>');

}

$("#reset").click (reset);
$("#toggleG").click (toggleG);
$("#toggleU").click (toggleU);
$("#toggleL").click (toggleL);
$("#toggleP").click (toggleP);
$("#toggleS").click (toggleS);
$("#toggleW").click (toggleW);

function toggleG(){ 
    if(!bGiveaways){
        GM_setValue("bGiveaways", true);
        bGiveaways=true;
        document.getElementById("toggleG").innerHTML="Giveaways: On";
    }
    else if(bGiveaways){
        GM_setValue("bGiveaways", false);
        bGiveaways=false;
        document.getElementById("toggleG").innerHTML="Giveaways: Off";
    }
}
function toggleU(){ 
    if(!bUnsubscribe){
        GM_setValue("bUnsubscribe", true);
        bUnsubscribe=true;
        document.getElementById("toggleU").innerHTML="Unsubscribe: On";
    }
    else if(bUnsubscribe){
        GM_setValue("bUnsubscribe", false);
        bUnsubscribe=false;
        document.getElementById("toggleU").innerHTML="Unsubscribe: Off";
    }
}
function toggleL(){ 
    if(!bLastpage){
        GM_setValue("bLastpage", true);
        bLastpage=true;
        document.getElementById("toggleL").innerHTML="Last Page: On";
    }
    else if(bLastpage){
        GM_setValue("bLastpage", false);
        bLastpage=false;
        document.getElementById("toggleL").innerHTML="Last Page: Off";
    }
}
function toggleP(){ 
    if(!bLastpost){
        GM_setValue("bLastpost", true);
        bLastpost=true;
        document.getElementById("toggleP").innerHTML="Last Post: On";
    }
    else if(bLastpost){
        GM_setValue("bLastpost", false);
        bLastpost=false;
        document.getElementById("toggleP").innerHTML="Last Post: Off";
    }
}
function toggleS(){ 
    if(!bSelectiveItems){
        GM_setValue("bSelectiveItems", true);
        bSelectiveItems=true;
        document.getElementById("toggleS").innerHTML="Item Filter: On";
    }
    else if(bSelectiveItems){
        GM_setValue("bSelectiveItems", false);
        bSelectiveItems=false;
        document.getElementById("toggleS").innerHTML="Item Filter: Off";
    }
}
function toggleW(){ 
    if(!bWishlist){
        GM_setValue("bWishlist", true);
        bWishlist=true;
        document.getElementById("toggleW").innerHTML="Wishlist: On";
    }
    else if(bWishlist){
        GM_setValue("bWishlist", false);
        bWishlist=false;
        document.getElementById("toggleW").innerHTML="Wishlist: Off";
    }
}
function reset(){ 
    GM_setValue("blocklist", null);
    $('#reset').text('Done!');
}

//***************************************************************************** Cookies

function readCookie(name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
        if (!ca[i].indexOf(name))
            return ca[i].replace(name, '');
}

//***************************************************************************** Wishlist
if (window.location.href.indexOf("/profiles/") > -1 && bWishlist) {

    var btn = document.createElement("button"); 
    btn.setAttribute("id", "btnRemoveOwned");
    btn.setAttribute("class", "cssbutton");
    btn.setAttribute("style", "float: right; margin-top: 10px; margin-right: 10px;")
    btn.addEventListener("click", RemoveOwned, false);
    btn.innerHTML = "Remove owned items";

    setInterval(function() {
        if (document.getElementById("UserWishlistItems") !== null) {
            var attach = document.getElementById("uprofile_content");
            attach.insertBefore(btn, attach.firstChild);

            if (document.getElementsByClassName("tbl_last sortable")[0] === undefined) {
                var uid = readCookie("uid");
                var max = parseInt($("#UserWishlistItems > div > a:nth-child(8) > strong").text());

                for (var i = 1; i < max; i++) {
                    var start = 10 * i;
                    $.get( "http://www.tremorgames.com/achievements/ajax_show_wishlistitems.php?userid=" + uid + "&limitstart=" + start, function( data ) {
                        var $page = $(data)
                        var rows = $('<div/>').html(data).find(".tbl_last > tbody > tr"); 
                        $( "#UserWishlistItems > table.tbl_last > tbody").append(rows);
                    });
                }

                $("div.ach_paging_ajax").hide();
                $("table.head").hide();
                $("table.tbl_last > tbody").prepend("<tr><td class='wdth1' style='background-color: #3d94f6; text-align: center;'></td><td class='seb'></td><td class='wdth2' style='background-color: #3d94f6; text-align: center;'></td><td class='seb'></td><td class='wdth3' style='background-color: #3d94f6; text-align: center;'></td><td class='seb'></td><td class='use_item_col' style='background-color: #3d94f6; text-align: center;'></td></tr>");
                $("table.tbl_last").addClass("sortable");



                /*
  SortTable
  version 2
  7th April 2007
  Stuart Langridge, http://www.kryogenix.org/code/browser/sorttable/

  Instructions:
  Download this file
  Add <script src="sorttable.js"></script> to your HTML
  Add class="sortable" to any table you'd like to make sortable
  Click on the headers to sort

  Thanks to many, many people for contributions and suggestions.
  Licenced as X11: http://www.kryogenix.org/code/browser/licence.html
  This basically means: do what you want with it.
*/


                var stIsIE = /*@cc_on!@*/false;

                sorttable = {
                    init: function() {
                        // quit if this function has already been called
                        if (arguments.callee.done) return;
                        // flag this function so we don't do the same thing twice
                        arguments.callee.done = true;
                        // kill the timer
                        if (_timer) clearInterval(_timer);

                        if (!document.createElement || !document.getElementsByTagName) return;

                        sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;

                        forEach(document.getElementsByTagName('table'), function(table) {
                            if (table.className.search(/\bsortable\b/) != -1) {
                                sorttable.makeSortable(table);
                            }
                        });

                    },

                    makeSortable: function(table) {
                        if (table.getElementsByTagName('thead').length == 0) {
                            // table doesn't have a tHead. Since it should have, create one and
                            // put the first table row in it.
                            the = document.createElement('thead');
                            the.appendChild(table.rows[0]);
                            table.insertBefore(the,table.firstChild);
                        }
                        // Safari doesn't support table.tHead, sigh
                        if (table.tHead == null) table.tHead = table.getElementsByTagName('thead')[0];

                        if (table.tHead.rows.length != 1) return; // can't cope with two header rows

                        // Sorttable v1 put rows with a class of "sortbottom" at the bottom (as
                        // "total" rows, for example). This is B&R, since what you're supposed
                        // to do is put them in a tfoot. So, if there are sortbottom rows,
                        // for backwards compatibility, move them to tfoot (creating it if needed).
                        sortbottomrows = [];
                        for (var i=0; i<table.rows.length; i++) {
                            if (table.rows[i].className.search(/\bsortbottom\b/) != -1) {
                                sortbottomrows[sortbottomrows.length] = table.rows[i];
                            }
                        }
                        if (sortbottomrows) {
                            if (table.tFoot == null) {
                                // table doesn't have a tfoot. Create one.
                                tfo = document.createElement('tfoot');
                                table.appendChild(tfo);
                            }
                            for (var i=0; i<sortbottomrows.length; i++) {
                                tfo.appendChild(sortbottomrows[i]);
                            }
                            delete sortbottomrows;
                        }

                        // work through each column and calculate its type
                        headrow = table.tHead.rows[0].cells;
                        for (var i=0; i<headrow.length; i++) {
                            // manually override the type with a sorttable_type attribute
                            if (!headrow[i].className.match(/\bsorttable_nosort\b/)) { // skip this col
                                mtch = headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/);
                                if (mtch) { override = mtch[1]; }
                                if (mtch && typeof sorttable["sort_"+override] == 'function') {
                                    headrow[i].sorttable_sortfunction = sorttable["sort_"+override];
                                } else {
                                    headrow[i].sorttable_sortfunction = sorttable.guessType(table,i);
                                }
                                // make it clickable to sort
                                headrow[i].sorttable_columnindex = i;
                                headrow[i].sorttable_tbody = table.tBodies[0];
                                dean_addEvent(headrow[i],"click", sorttable.innerSortFunction = function(e) {

                                    if (this.className.search(/\bsorttable_sorted\b/) != -1) {
                                        // if we're already sorted by this column, just
                                        // reverse the table, which is quicker
                                        sorttable.reverse(this.sorttable_tbody);
                                        this.className = this.className.replace('sorttable_sorted',
                                                                                'sorttable_sorted_reverse');
                                        this.removeChild(document.getElementById('sorttable_sortfwdind'));
                                        sortrevind = document.createElement('span');
                                        sortrevind.id = "sorttable_sortrevind";
                                        sortrevind.innerHTML = stIsIE ? '&nbsp<font face="webdings">5</font>' : '&nbsp;&#x25B4;';
                                        this.appendChild(sortrevind);
                                        return;
                                    }
                                    if (this.className.search(/\bsorttable_sorted_reverse\b/) != -1) {
                                        // if we're already sorted by this column in reverse, just
                                        // re-reverse the table, which is quicker
                                        sorttable.reverse(this.sorttable_tbody);
                                        this.className = this.className.replace('sorttable_sorted_reverse',
                                                                                'sorttable_sorted');
                                        this.removeChild(document.getElementById('sorttable_sortrevind'));
                                        sortfwdind = document.createElement('span');
                                        sortfwdind.id = "sorttable_sortfwdind";
                                        sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
                                        this.appendChild(sortfwdind);
                                        return;
                                    }

                                    // remove sorttable_sorted classes
                                    theadrow = this.parentNode;
                                    forEach(theadrow.childNodes, function(cell) {
                                        if (cell.nodeType == 1) { // an element
                                            cell.className = cell.className.replace('sorttable_sorted_reverse','');
                                            cell.className = cell.className.replace('sorttable_sorted','');
                                        }
                                    });
                                    sortfwdind = document.getElementById('sorttable_sortfwdind');
                                    if (sortfwdind) { sortfwdind.parentNode.removeChild(sortfwdind); }
                                    sortrevind = document.getElementById('sorttable_sortrevind');
                                    if (sortrevind) { sortrevind.parentNode.removeChild(sortrevind); }

                                    this.className += ' sorttable_sorted';
                                    sortfwdind = document.createElement('span');
                                    sortfwdind.id = "sorttable_sortfwdind";
                                    sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
                                    this.appendChild(sortfwdind);

                                    // build an array to sort. This is a Schwartzian transform thing,
                                    // i.e., we "decorate" each row with the actual sort key,
                                    // sort based on the sort keys, and then put the rows back in order
                                    // which is a lot faster because you only do getInnerText once per row
                                    row_array = [];
                                    col = this.sorttable_columnindex;
                                    rows = this.sorttable_tbody.rows;
                                    for (var j=0; j<rows.length; j++) {
                                        row_array[row_array.length] = [sorttable.getInnerText(rows[j].cells[col]), rows[j]];
                                    }
                                    /* If you want a stable sort, uncomment the following line */
                                    //sorttable.shaker_sort(row_array, this.sorttable_sortfunction);
                                    /* and comment out this one */
                                    row_array.sort(this.sorttable_sortfunction);

                                    tb = this.sorttable_tbody;
                                    for (var j=0; j<row_array.length; j++) {
                                        tb.appendChild(row_array[j][1]);
                                    }

                                    delete row_array;
                                });
                            }
                        }
                    },

                    guessType: function(table, column) {
                        // guess the type of a column based on its first non-blank row
                        sortfn = sorttable.sort_alpha;
                        for (var i=0; i<table.tBodies[0].rows.length; i++) {
                            text = sorttable.getInnerText(table.tBodies[0].rows[i].cells[column]);
                            if (text != '') {
                                if (text.match(/^-?[£$¤]?[\d,.]+%?$/)) {
                                    return sorttable.sort_numeric;
                                }
                                // check for a date: dd/mm/yyyy or dd/mm/yy
                                // can have / or . or - as separator
                                // can be mm/dd as well
                                possdate = text.match(sorttable.DATE_RE)
                                if (possdate) {
                                    // looks like a date
                                    first = parseInt(possdate[1]);
                                    second = parseInt(possdate[2]);
                                    if (first > 12) {
                                        // definitely dd/mm
                                        return sorttable.sort_ddmm;
                                    } else if (second > 12) {
                                        return sorttable.sort_mmdd;
                                    } else {
                                        // looks like a date, but we can't tell which, so assume
                                        // that it's dd/mm (English imperialism!) and keep looking
                                        sortfn = sorttable.sort_ddmm;
                                    }
                                }
                            }
                        }
                        return sortfn;
                    },

                    getInnerText: function(node) {
                        // gets the text we want to use for sorting for a cell.
                        // strips leading and trailing whitespace.
                        // this is *not* a generic getInnerText function; it's special to sorttable.
                        // for example, you can override the cell text with a customkey attribute.
                        // it also gets .value for <input> fields.

                        if (!node) return "";

                        hasInputs = (typeof node.getElementsByTagName == 'function') &&
                            node.getElementsByTagName('input').length;

                        if (node.getAttribute("sorttable_customkey") != null) {
                            return node.getAttribute("sorttable_customkey");
                        }
                        else if (typeof node.textContent != 'undefined' && !hasInputs) {
                            return node.textContent.replace(/^\s+|\s+$/g, '');
                        }
                        else if (typeof node.innerText != 'undefined' && !hasInputs) {
                            return node.innerText.replace(/^\s+|\s+$/g, '');
                        }
                        else if (typeof node.text != 'undefined' && !hasInputs) {
                            return node.text.replace(/^\s+|\s+$/g, '');
                        }
                        else {
                            switch (node.nodeType) {
                                case 3:
                                    if (node.nodeName.toLowerCase() == 'input') {
                                        return node.value.replace(/^\s+|\s+$/g, '');
                                    }
                                case 4:
                                    return node.nodeValue.replace(/^\s+|\s+$/g, '');
                                    break;
                                case 1:
                                case 11:
                                    var innerText = '';
                                    for (var i = 0; i < node.childNodes.length; i++) {
                                        innerText += sorttable.getInnerText(node.childNodes[i]);
                                    }
                                    return innerText.replace(/^\s+|\s+$/g, '');
                                    break;
                                default:
                                    return '';
                            }
                        }
                    },

                    reverse: function(tbody) {
                        // reverse the rows in a tbody
                        newrows = [];
                        for (var i=0; i<tbody.rows.length; i++) {
                            newrows[newrows.length] = tbody.rows[i];
                        }
                        for (var i=newrows.length-1; i>=0; i--) {
                            tbody.appendChild(newrows[i]);
                        }
                        delete newrows;
                    },

                    /* sort functions
     each sort function takes two parameters, a and b
     you are comparing a[0] and b[0] */
                    sort_numeric: function(a,b) {
                        aa = parseFloat(a[0].replace(/[^0-9.-]/g,''));
                        if (isNaN(aa)) aa = 0;
                        bb = parseFloat(b[0].replace(/[^0-9.-]/g,''));
                        if (isNaN(bb)) bb = 0;
                        return aa-bb;
                    },
                    sort_alpha: function(a,b) {
                        if (a[0]==b[0]) return 0;
                        if (a[0]<b[0]) return -1;
                        return 1;
                    },
                    sort_ddmm: function(a,b) {
                        mtch = a[0].match(sorttable.DATE_RE);
                        y = mtch[3]; m = mtch[2]; d = mtch[1];
                        if (m.length == 1) m = '0'+m;
                        if (d.length == 1) d = '0'+d;
                        dt1 = y+m+d;
                        mtch = b[0].match(sorttable.DATE_RE);
                        y = mtch[3]; m = mtch[2]; d = mtch[1];
                        if (m.length == 1) m = '0'+m;
                        if (d.length == 1) d = '0'+d;
                        dt2 = y+m+d;
                        if (dt1==dt2) return 0;
                        if (dt1<dt2) return -1;
                        return 1;
                    },
                    sort_mmdd: function(a,b) {
                        mtch = a[0].match(sorttable.DATE_RE);
                        y = mtch[3]; d = mtch[2]; m = mtch[1];
                        if (m.length == 1) m = '0'+m;
                        if (d.length == 1) d = '0'+d;
                        dt1 = y+m+d;
                        mtch = b[0].match(sorttable.DATE_RE);
                        y = mtch[3]; d = mtch[2]; m = mtch[1];
                        if (m.length == 1) m = '0'+m;
                        if (d.length == 1) d = '0'+d;
                        dt2 = y+m+d;
                        if (dt1==dt2) return 0;
                        if (dt1<dt2) return -1;
                        return 1;
                    },

                    shaker_sort: function(list, comp_func) {
                        // A stable sort function to allow multi-level sorting of data
                        // see: http://en.wikipedia.org/wiki/Cocktail_sort
                        // thanks to Joseph Nahmias
                        var b = 0;
                        var t = list.length - 1;
                        var swap = true;

                        while(swap) {
                            swap = false;
                            for(var i = b; i < t; ++i) {
                                if ( comp_func(list[i], list[i+1]) > 0 ) {
                                    var q = list[i]; list[i] = list[i+1]; list[i+1] = q;
                                    swap = true;
                                }
                            } // for
                            t--;

                            if (!swap) break;

                            for(var i = t; i > b; --i) {
                                if ( comp_func(list[i], list[i-1]) < 0 ) {
                                    var q = list[i]; list[i] = list[i-1]; list[i-1] = q;
                                    swap = true;
                                }
                            } // for
                            b++;

                        } // while(swap)
                    }
                }

                /* ******************************************************************
   Supporting functions: bundled here to avoid depending on a library
   ****************************************************************** */

                // Dean Edwards/Matthias Miller/John Resig

                /* for Mozilla/Opera9 */
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", sorttable.init, false);
                }

                /* for Internet Explorer */
                /*@cc_on @*/
                /*@if (@_win32)
    document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
    var script = document.getElementById("__ie_onload");
    script.onreadystatechange = function() {
        if (this.readyState == "complete") {
            sorttable.init(); // call the onload handler
        }
    };
/*@end @*/

                /* for Safari */
                if (/WebKit/i.test(navigator.userAgent)) { // sniff
                    var _timer = setInterval(function() {
                        if (/loaded|complete/.test(document.readyState)) {
                            sorttable.init(); // call the onload handler
                        }
                    }, 10);
                }

                /* for other browsers */
                window.onload = sorttable.init;

                // written by Dean Edwards, 2005
                // with input from Tino Zijdel, Matthias Miller, Diego Perini

                // http://dean.edwards.name/weblog/2005/10/add-event/

                function dean_addEvent(element, type, handler) {
                    if (element.addEventListener) {
                        element.addEventListener(type, handler, false);
                    } else {
                        // assign each event handler a unique ID
                        if (!handler.$$guid) handler.$$guid = dean_addEvent.guid++;
                        // create a hash table of event types for the element
                        if (!element.events) element.events = {};
                        // create a hash table of event handlers for each element/event pair
                        var handlers = element.events[type];
                        if (!handlers) {
                            handlers = element.events[type] = {};
                            // store the existing event handler (if there is one)
                            if (element["on" + type]) {
                                handlers[0] = element["on" + type];
                            }
                        }
                        // store the event handler in the hash table
                        handlers[handler.$$guid] = handler;
                        // assign a global event handler to do all the work
                        element["on" + type] = handleEvent;
                    }
                };
                // a counter used to create unique IDs
                dean_addEvent.guid = 1;

                function removeEvent(element, type, handler) {
                    if (element.removeEventListener) {
                        element.removeEventListener(type, handler, false);
                    } else {
                        // delete the event handler from the hash table
                        if (element.events && element.events[type]) {
                            delete element.events[type][handler.$$guid];
                        }
                    }
                };

                function handleEvent(event) {
                    var returnValue = true;
                    // grab the event object (IE uses a global event object)
                    event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
                    // get a reference to the hash table of event handlers
                    var handlers = this.events[event.type];
                    // execute each event handler
                    for (var i in handlers) {
                        this.$$handleEvent = handlers[i];
                        if (this.$$handleEvent(event) === false) {
                            returnValue = false;
                        }
                    }
                    return returnValue;
                };

                function fixEvent(event) {
                    // add W3C standard event methods
                    event.preventDefault = fixEvent.preventDefault;
                    event.stopPropagation = fixEvent.stopPropagation;
                    return event;
                };
                fixEvent.preventDefault = function() {
                    this.returnValue = false;
                };
                fixEvent.stopPropagation = function() {
                    this.cancelBubble = true;
                }

                // Dean's forEach: http://dean.edwards.name/base/forEach.js
                /*
	forEach, version 1.0
	Copyright 2006, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

                // array-like enumeration
                if (!Array.forEach) { // mozilla already supports this
                    Array.forEach = function(array, block, context) {
                        for (var i = 0; i < array.length; i++) {
                            block.call(context, array[i], i, array);
                        }
                    };
                }

                // generic enumeration
                Function.prototype.forEach = function(object, block, context) {
                    for (var key in object) {
                        if (typeof this.prototype[key] == "undefined") {
                            block.call(context, object[key], key, object);
                        }
                    }
                };

                // character enumeration
                String.forEach = function(string, block, context) {
                    Array.forEach(string.split(""), function(chr, index) {
                        block.call(context, chr, index, string);
                    });
                };

                // globally resolve forEach enumeration
                var forEach = function(object, block, context) {
                    if (object) {
                        var resolve = Object; // default
                        if (object instanceof Function) {
                            // functions have a "length" property
                            resolve = Function;
                        } else if (object.forEach instanceof Function) {
                            // the object implements a custom forEach method so use that
                            object.forEach(block, context);
                            return;
                        } else if (typeof object == "string") {
                            // the object is a string
                            resolve = String;
                        } else if (typeof object.length == "number") {
                            // the object is array-like
                            resolve = Array;
                        }
                        resolve.forEach(object, block, context);
                    }
                };
            }
        }
    }, 100);
}

function RemoveOwned() {
    var status_items = $("#UserWishlistItems div+ div");

    if (status_items.length > 0) {
        for (var i = 0; i < status_items.length; i++) {
            if (status_items[i].innerHTML == "You already have this item") {
                try {
                    status_items[i].parentElement.parentElement.lastChild.lastChild.lastChild.click();
                } catch(err) {}
            }
        }
    }
}

//***************************************************************************** Giveaways

var isChrome = !!window.chrome;

if(window.location.href.indexOf("viewgiveaways") > -1 && bGiveaways) {

    var buttons = document.getElementsByClassName("cssbutton");
    if(buttons.length>0){
        $('form[name=myform]').after('<br><button class="giveaway" value="giveaway" id="giveaway">Enter All</button>');
        $("#giveaway").click (giveaway);
    }
}

function giveaway(){
    $('form[name=myform]').after('<div id="info">Gathering giveaways...</div>');
    setTimeout(giveawayready, (buttons.length)*500);
}

function giveawayready(){
    $('#info').remove();
    alert("Done!");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("target", "_blank");
        buttons[i].click();
        location.reload();
    }
}

//***************************************************************************** Unsubscribe

var listval = GM_getValue("blocklist");
var blocklist = [];
if(listval)
{
    blocklist = blocklist.concat(JSON.parse(listval));
}
unsafeWindow.blocklist = blocklist;


function StoreDels0(){
    blocklist = blocklist.concat(hereHref[0].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[0].text+"')").hide();
}
function StoreDels2(){
    blocklist = blocklist.concat(hereHref[2].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[2].text+"')").hide();
}
function StoreDels4(){
    blocklist = blocklist.concat(hereHref[4].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[4].text+"')").hide();
}
function StoreDels6(){
    blocklist = blocklist.concat(hereHref[6].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[6].text+"')").hide();
}
function StoreDels8(){
    blocklist = blocklist.concat(hereHref[8].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[8].text+"')").hide();
}
function StoreDels10(){
    blocklist = blocklist.concat(hereHref[10].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[10].text+"')").hide();
}
function StoreDels12(){
    blocklist = blocklist.concat(hereHref[12].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[12].text+"')").hide();
}
function StoreDels14(){
    blocklist = blocklist.concat(hereHref[14].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[14].text+"')").hide();
}
function StoreDels16(){
    blocklist = blocklist.concat(hereHref[16].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[16].text+"')").hide();
}
function StoreDels18(){
    blocklist = blocklist.concat(hereHref[18].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[18].text+"')").hide();
}
function StoreDels20(){
    blocklist = blocklist.concat(hereHref[20].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[20].text+"')").hide();
}

if(window.location.href=="http://www.tremorgames.com/?action=forums" && bUnsubscribe){
    var hereTd = document.getElementsByTagName("table");
    var hereHref = hereTd[5].getElementsByTagName('a');

    for (var J = hereHref.length - 1;  J >= 0;  --J) {
        if (blocklist.indexOf (hereHref[J].text) >= 0) {
            $("tr:contains('"+hereHref[J].text+"')").remove();
        }
    }

    for (var k=0; k < hereHref.length - 1; k++){
        if(k%2==0)
            $(hereHref[k]).before('<button class="myButton" value="X" id="tomate'+k+'">X</button>&nbsp &nbsp');
    }

    $("#tomate0").click (StoreDels0);
    $("#tomate2").click (StoreDels2);
    $("#tomate4").click (StoreDels4);
    $("#tomate6").click (StoreDels6);
    $("#tomate8").click (StoreDels8);
    $("#tomate10").click (StoreDels10);
    $("#tomate12").click (StoreDels12);
    $("#tomate14").click (StoreDels14);
    $("#tomate16").click (StoreDels16);
    $("#tomate18").click (StoreDels18);
    $("#tomate20").click (StoreDels20);

}


//***************************************************************************** Last page
if(((window.location.href.indexOf("action=forums") > -1)||(window.location.href.indexOf("action=viewforum") > -1)) && bLastpage) {
    var links = document.evaluate("//a[contains(@href, 'm/profiles/')]", document, null, 
                                  XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
    var pg = Math.pow(8, 4);
    var linksT = document.evaluate("//a[contains(@href, 'topicid')]", document, null, 
                                   XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    var alerts = document.getElementsByClassName('alert alert-info');
    var alertCount = 0;

    for (var j=0; j <= alerts.length; j++) 
        if (alerts.length > j)
            alertCount = 1;

    for (var i=2 ; i < links.snapshotLength; i++) 
    { 
        var thisLink = links.snapshotItem(i);    
        var thisLinkT = linksT.snapshotItem((i-2) + alertCount);   
        thisLink.href = thisLinkT.href+'&page='+pg; 
        thisLink.text += ' »';  
    } 
}

$(document).ready(function () {
    if(window.location.href.indexOf("page=4096") > -1 && bLastpost) {
        var ids = $('.forumpost');
        location.hash = ids[ids.length-1].id;
    }
});


//***************************************************************************** Selective items
if(bSelectiveItems){
    test=GM_getValue("test");

    if(!test)
        $("div.shop_catbg_middle_right").append('| &nbsp <button class="toggle" value="toggle" id="toggle">$ Off</button>');
    else if(test)
        $("div.shop_catbg_middle_right").append('| &nbsp <button class="toggle" value="toggle" id="toggle">$ On</button>');

    $("#toggle").click (toggle);

    var coins;

    var points = document.evaluate("//a[contains(@href, 'http://www.tremorgames.com/?action=points')]", document, null, 
                                   XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 

    for (var i=1; i < points.snapshotLength; i++) 
    { 
        var thisPoints = points.snapshotItem(i);    
        coins=thisPoints.text;
    } 

    if(isChrome){
        for (var h=1; h <= coins.length; h++){
            coins= coins.substring(0,h-1) + coins.substring(h, coins.length);
        }
    }

    var solidPrice=[];
    var allPrices = $( ".shop_item_box_type:contains('Coins')" );

    for (var k=0; k < allPrices.length; k++) 
    {
        solidPrice[k]=allPrices[k].innerHTML;
        solidPrice[k]= solidPrice[k].substr(0, solidPrice[k].length - 26);
    }
    var points=parseInt(coins);

    HideShow();

}

function HideShow(){
    for (var j=0; j < solidPrice.length; j++) 
    { 
        if(points<=solidPrice[j]){
            if(test)
                $("div.shop_item_box:contains('" + solidPrice[j] + " Tremor')").hide ();
            else if(!test)
                $("div.shop_item_box:contains('" + solidPrice[j] + " Tremor')").show ();
        }
    }
}

function toggle(){ 
    if(!test){
        GM_setValue("test", true);
        test=true;
        document.getElementById("toggle").innerHTML="$ On";
        HideShow();
    }
    else if(test){
        GM_setValue("test", false);
        test=false;
        document.getElementById("toggle").innerHTML="$ Off";
        HideShow();
    }
}
