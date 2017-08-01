define([],function(){function e(e){var t=["jquery","common/regexhelper/regexhelper","common/api/api.guid","libs/jquery/plugins/jquery.xDomainRequest","wsbcore/tipper","wsbcore/datepicker","libs/jquery/plugins/jquery.watermark/jquery.watermark"];e.isPreview||(t.push("js!//code.jquery.com/ui/1.9.2/jquery-ui.js"),t.push("css!libs/jquery/jqui.css")),require(t,function(t,n,o){function r(){if(g(),C()){var n=[],r="",i="",l=!0,s={},p=('[data-groupId="'+e.groupId+'"]',a?a.find('[data-groupId="'+e.groupId+'"]'):t('[data-groupId="'+e.groupId+'"]'));p.sort(function(e,a){var n=function(e){return t(e).attr("tabindex")||0};return n(e)-n(a)}).each(function(){var a=t(this),o=a.attr("data-formtype");if("date"!=o){var d=a.attr("type");if("button"!=d&&"submit"!=d&&("radio"!=d&&"checkbox"!=d||a.is(":checked"))){var u=a.attr("data-label");if(!u){var p=(s[o]||0)+1;s[o]=p,u=(e.fieldFormatByType[o]||"{num}").replace("{num}",p.toLocaleString())}var f=a.val();if(a.attr("data-namefield"))r=f;else if(a.attr("data-gemsubmit")&&"true"===a.attr("data-gemsubmit").toLowerCase()){i=f;var c=a.parent().find(".opt-in-checkbox");c&&c.is(":checked")&&(l=!1)}n.push({label:u,value:f,type:o})}}});var m={domainName:e.domainName,resellerId:e.resellerId,elementId:o.toLegacyIdString(e.elementId),subject:e.subject,emailHashList:e.emailHashList,formFields:n,hostPageUrl:encodeURIComponent(window.location.href)},h='input[type="hidden"][data-groupId="'+e.groupId+'"][data-formType="file"]',v=a?a.find(h):t(h);v.length&&v.val()&&(m.uploadedFileUrl=encodeURIComponent(v.val()));var I=function(){if(u){var n='div[data-label-container-groupId="'+e.groupId+'"]',o=a?a.find(n):t(n),r=1/0;t.each(o,function(e,a){var n=parseInt(t(a).parent().parent().css("top"))||0;r=Math.min(n,r)});var i=o.parent().parent(),l=d.parent().parent();"mobile"===e.renderMode&&(l=l.parent()),i.remove();var s='[data-aid="submit-'+e.elementId+"-"+e.renderMode+'"]',p=a?a.find(s):t(s);p.remove(),d.show(),l.css({top:r+"px",height:"auto"})}else if(e.postRedirectUrl.search("window.wsb.gotoAddress")>=0){var f=e.postRedirectUrl.match(/preview\/(?:desktop|mobile)\/(?:(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(?:\d+))/)[0];window.wsb.gotoAddress(f)}else window.location=e.postRedirectUrl},b=function(a){f(!0);var n=e.sendErrorMessage,o=e.errorTitle,r="error";429===a.status&&e.tooManyRequestsErrorMessage&&(n=e.tooManyRequestsErrorMessage,e.tooManyRequestsErrorTitle&&(o=e.tooManyRequestsErrorTitle),r="warning"),c()?alert(n):t("<div></div>").sfGrowl({title:o||"",content:n,icon:r,fadetime:3e3})},w=e.mailerUrl;t.browser.msie&&t.browser.version<10&&window.location.href.indexOf("http://")>=0&&(w=w.replace("https://","http://"));var y={type:"POST",url:w,crossDomain:!0,data:JSON.stringify(m)};if(e.gemSubmit&&1==e.resellerId&&""!=i){var x=(r||"").split(" "),M=x[0],j=x.slice(1).join(" "),q={email:i,suppressed:l};M&&(q.firstName=M),j&&(q.lastName=j);var k=[e.gemSubmitUrl,e.orionId,e.domainName].join("/"),T={type:"POST",url:k,crossDomain:!0,data:q,dataType:"json"};t.when(t.ajax(y),t.ajax(T)).then(I).fail(b)}else t.when(t.ajax(y)).then(I).fail(b);f(!1)}}var i,d,l="form-button-disabled",s="form-value-invalid",u=e.showMessage,p=e.isPreview,f=function(e){e?(i.removeClass(l),i.removeAttr("disabled")):(i.addClass(l),i.attr("disabled","disabled"))},c=function(){{var e="#mobile-site-view";a?a.find(e):t(e)}return t(e).length>0},g=function(){var n='[data-field-container-groupId="'+e.groupId+'"]',o="[data-date-elementId]",r=a?a.find(n).find(o):t(n).find(o);if(r&&r.length){var i=t.map(r,function(e){return{elementId:t(e).attr("data-date-elementId"),subIndex:t(e).attr("data-subIndex")||0,val:"span"===(t(e).prop("tagName")||"").toLowerCase()?t(e).text():t(e).val()}}),d={};t.each(i,function(e,t){var a=t.elementId;a in d?d[a].push(t):d[a]=[t]});for(elementId in d){var l=t.map(d[elementId].sort(function(e,t){return e.subIndex-t.subIndex}),function(e){return e.val}).join(" "),s='[data-aid="datetime-value-'+elementId+'"]';a?a.find(s).val(l):t(s).val(l)}}},m=function(e){var a=t(e),n=t(e).attr("data-formType"),o=0;return o="hidden"===t(a).attr("type")?"file"===n?t(a).parent().offset().top+1:t(a).prev().offset().top+1:a.offset().top,parseInt(o)},h=function(e){var a=t(e),n=t(e).attr("data-formType"),o=0;return o="hidden"===t(a).attr("type")?"file"===n?t(a).parent().offset().left+1:t(a).prev().offset().left+1:a.offset().left,parseInt(o)},v=function(e,t){var a=m(e),n=m(t);return a!=n?a-n:h(e)-h(t)},I=function(){var n='[data-groupId="'+e.groupId+'"]',o=a?a.find(n):t(n);o.sort(function(e,t){return v(e,t)}).each(function(a){var n=100*e.groupIdInt;t(this).attr("tabindex",n+a)})},b=function(){var n='[data-groupId="'+e.groupId+'"]',o=a?a.find(n):t(n);t.each(o,function(e,a){var n=t(a).attr("placeholder");n&&t(a).watermark(n)})},w=function(o){var r=!0,i=t(o),d=i.val(),l=i.attr("data-formType"),u=Boolean(i.attr("required"));if(u){if("radio"==l||"checkbox"==l){var p=i.attr("name"),c='input[name="'+p+'"]:checked',g=a?a.find(c):t(c),m='input[name="'+p+'"]',h=a?a.find(m):t(m);0!=g.length||h.is(":focus")||(r=!1)}else r=Boolean(d);i.attr("data-placeholder",r?"":e.requiredValidationMessage)}return r&&("email"===l?(n.validateEmailAddress(d)||(r=!1),u||0!==d.length||(r=!0),i.attr("data-placeholder",r?"":e.emailValidationMessage)):"date"==l?"time"===i.attr("data-datetime-type")?(n.validateTime(d)||(r=!1),u||0!==d.length||(r=!0),i.attr("data-placeholder",r?"":e.dateValidationMessage)):(n.validateDate(d)||(r=!1),u||0!==d.length||(r=!0),i.attr("data-placeholder",r?"":e.dateValidationMessage)):"input"===l&&d.length>100?(r=!1,i.val(d.substr(0,100)),i.attr("data-placeholder",r?"":e.lengthValidationMessage)):"paragraph"===l&&d.length>4e3?(r=!1,i.val(d.substr(0,4e3)),i.attr("data-placeholder",r?"":e.longLengthValidationMessage)):"file"===l&&d.length<=0&&u&&(r=!1)),i.parents('[data-field-container-groupId ="'+e.groupId+'"]').data("valid",r),r?(i.removeClass(s),M()):(i.addClass(s),f(!1)),r},y='[data-groupId="'+e.groupId+'"][type="hidden"][data-formType="file"],[data-groupId="'+e.groupId+'"][type="text"], [data-groupId="'+e.groupId+'"][type="email"], textarea[data-groupId="'+e.groupId+'"], [data-groupId="'+e.groupId+'"][type="radio"], [data-groupId="'+e.groupId+'"][type="checkbox"]',x=a?a.find(y):t(y),M=function(){for(var a=!0,n=0,o=x.length;o>n;n++)if(!t(x[n]).parents('[data-field-container-groupId ="'+e.groupId+'"]').data("valid")){f(!1),a=!1;break}return a&&f(!0),a},C=function(){for(var e=!0,t=0,a=x.length;a>t;t++)w(x[t])||(f(!1),e=!1);return e},j=function(){t.each(x,function(a,n){var o=t(n).attr("data-formType");if("date"===o)t(n).parents('[data-field-container-groupId ="'+e.groupId+'"]').data("valid",!0);else{var r=Boolean(t(n).attr("required"));t(n).parents('[data-field-container-groupId ="'+e.groupId+'"]').data("valid",!r)}});{var n='[data-groupId="'+e.groupId+'"][type="text"], [data-groupId="'+e.groupId+'"][type="email"], textarea[data-groupId="'+e.groupId+'"]';a?a.find(n):t(n)}t(n).on("keyup paste",function(e){("keyup"!==e.type||9!==e.which)&&w(this)}).on("blur",function(){var e=w(this);if(!e){var a=t(this),n=a.attr("data-placeholder");n&&""!=n&&(a.attr("data-value",a.attr("value")||""),a.attr("placeholder",n),a.attr("value",""))}}).on("focus",function(){var e=t(this),a=e.attr("data-value");a&&e.attr("value",a)});var o='[data-groupId="'+e.groupId+'"][type="radio"],[data-groupId="'+e.groupId+'"][type="checkbox"]',r=a?a.find(o):t(o);t(r).on("change focusin focusout",function(){w(this)});var i='[data-groupId="'+e.groupId+'"][type="hidden"][data-formType=file]',d=a?a.find(i):t(i);t(d).on("change",function(){w(this)})},q=function(){var n=0,o='div[data-label-container-groupId="'+e.groupId+'"]',r='div[data-field-container-groupId="'+e.groupId+'"]',i=a?a.find(o):t(o),d=a?a.find(r):t(r),l=i.addClass(e.labelCssClass),s=d.addClass(e.fieldCssClass);if("1"===e.labelOrientation){t.each(l,function(e,a){var o=t(a).width();n=Math.max(n,o)});var u=t(l[0]).parent().parent().width()-n-12;t.each(l,function(e,a){t(a).width(n)}),t.each(s,function(e,a){t(a).width(u)})}},k=function(){var n='[data-field-container-groupId="'+e.groupId+'"]',o=a?a.find(n):t(n);t.each(o.find("[data-content]"),function(e,a){var n=t(a).attr("data-content");n&&t(a).sfTipper({style:"qt",content:n,target:t(a)})})},T=function(){var n='[data-groupId="'+e.groupId+'"][data-formType="address"]',o=a?a.find(n):t(n);if(0!=o.length)if(e.isMapboxApiEnabled){var r=function(a){a&&t.each(o,function(n,o){t(o).autocomplete({autoFocus:!0,delay:500,minLength:2,source:function(n,r){a.getCustomFormAddressAutoComplete(o.value,e.mapboxApiKey,function(e){var a=JSON.parse(e);a&&r(t.map(a.features,function(e){return{value:e.place_name}}))})},open:function(){t(".ui-autocomplete").removeClass().addClass("ui-autocomplete"),t(".wsb-autocomplete-item-text").removeClass().addClass("wsb-autocomplete-item-text"),t(".wsb-autocomplete-item-link").removeClass().addClass("wsb-autocomplete-item-link"),t(".ui-autocomplete").css("width",t(o).width()+parseInt(t(o).css("padding-left"))+parseInt(t(o).css("padding-right")))}}).bind("focus",function(){t(this).autocomplete("search")}).data("ui-autocomplete")._renderItem=function(e,a){return t("<li></li>").data("item.autocomplete",a).append('<a class="wsb-autocomplete-item-link"><span class="wsb-autocomplete-item-text">'+a.value+"</span></a>").appendTo(e)}})};window.require(["common/geo/mapbox"],function(e){r(e)})}else{var i=function(e){e&&t.each(o,function(t,a){new e.places.Autocomplete(a,{})})};p?window.require(["common/geo/googleMaps"],function(e){var t=e({loadUsingClient:!0});t.done(function(e){i(e)})}):window.require(["common/geo/googleMaps"],function(t){var a=t({loadingMode:"publish",clientId:e.googleMapsClientId,channel:e.googleMapsPublishedChannel,googleMapBaseUrl:e.googleMapsApiBaseUrl});a.done(function(e){i(e)})})}},U=function(){var n='[data-field-container-groupId ="'+e.groupId+'"]',o=a?a.find(n):t(n),r=o.find('[data-datetime-type="date"]');if(r&&r.length){var i=new Date,d=[i.getMonth()+1,i.getDate(),i.getFullYear()].join("/");t.each(t(r),function(e,a){t(a).attr("value",d).sfDatePicker({onChange:function(e){w(e)}})})}};t(document).ready(function(){var n='[data-aid="submit-'+e.elementId+"-"+e.renderMode+'"]',o="#"+e.messageBoxId;i=a?a.find(n):t(n),i.click(r),f(!1),d=a?a.find(o):t(o),q(),I(),b(),j(),k(),T(),U()})})}function t(e){require(["jquery","wsbcore/upload"],function(t){var n,o,r=e.domainName,i=window.location.href,d='[data-aid="uploader-'+e.elementId+'"]',l='[data-aid="uploaded-file-'+e.elementId+'"]',s='[data-aid="file-'+e.elementId+'"]',u="#uploader-"+e.elementId+"-file-size-error-message",p=a?a.find(d):t(d),f=a?a.find(l):t(l),c=a?a.find(s):t(s),g=a?a.find(u):t(u),m=function(){setTimeout(function(){p.find(".sf-upload-btns").width(100).height(o),p.find(".sf-upload-status").empty().text(e.fileDisplayText),p.find(".sf-upload-scroller").hide()},1)},h=function(){c.val("").trigger("change"),f.empty()},v=function(){p.hide(),f.show()},I=function(){p.show(),f.hide()};p.sfUpload({ddEnabled:!1,expectData:!0,condensed:!0,maxFileSize:10485760,uploadPath:e.uploadUrl+"?domainName="+r+"&elementID="+e.elementId+"&pageUrl="+encodeURIComponent(i),onUpload:function(e,t,a){a(t)},onSuccess:function(a,n,o){var r,i;o&&("string"==typeof o&&(o=JSON.parse(o)),o&&"object"==typeof o&&(r=o.url,i=o.filename)),r&&(c.val(r).trigger("change"),f.empty().append(t("<a/>").attr("href",r).append(i||e.fileUploadSuccessMessage)).append("&nbsp;&nbsp;").append(t('<a href="javascript:void(0)"></a>').addClass("delete-file-btn").attr("title",e.deleteLinkText).click(function(){I(),h()}))),v()},onStart:function(e,t){if(g.hide(),e&&e.length){var a=p.find(".sf-upload-btns");a.width()>0&&(n=a.width()),a.height()>0&&(o=a.height()),p.find(".sf-upload-btns").width(0).height(0),p.find(".sf-upload-scroller").show(),p.find(".sf-upload-header").hide()}t&&t.length&&g.show()},onError:function(){m(),g.show()},onFinish:function(){m()},txt:{select:e.uploadButtonText,upload:"",intro:e.uploadButtonPrompt,introWithDrop:"",introMaxItems:"",statusPending:"",statusUploading:"",statusFinished:"",pending:"",finished:"",uploading:""}})})}var a;return{initializeSubmitButton:e,initializeUploader:t,setDom:function(e){a=e}}});
//# sourceMappingURL=customForm.published.js.map