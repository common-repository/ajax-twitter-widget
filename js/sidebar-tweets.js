jQuery(document).ready(function(){jQuery("div.twitter-head").css("borderBottom","1px dashed "+data.header_color);});function a(){(function(f){var e=b();e.open("GET",data.ajax_url+"?action=netjas_twitter_retrieve",true);e.setRequestHeader("Content-type","application/json");var g=window.setTimeout("c()",30000);e.send();e.onreadystatechange=function(){if(e.readyState===4){var h=e.responseText;pr(f.parseJSON(h.replace(/0$/,"")));window.clearTimeout(g);}};})(jQuery);}function b(){try{request=new XMLHttpRequest();}catch(g){try{request=new ActiveXObject("Msxml2.XMLHTTP");}catch(f){try{request=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){return null;}}}return request;}function c(){request.abort();}function d(){for(var e in ot){var f=jQuery("#"+ot[e]["id"]);f.empty();f.html(gd(ot[e]));}}function pr(e){(function(k){if((e===null)||(e.length===0)||e.error){return;}else{var h=e;if(ot===h===null){ot=h;}else{if(etw(ot,h)&&ot!==null){d();}else{ot=h;k("img#loader").show();k("#twitter-content > div.tweet").fadeOut(500,function(){k(this).remove();});for(var g in h){if(h[g]!=="false"){var m=k("<div>").addClass("tweet");var l=k("<p>").addClass("sub-header");k("<span>").addClass("date").attr("id",h[g]["id"]).html(gd(h[g])).css("color",data.header_color).appendTo(l);k(l).appendTo(m);var j=k("<p>").addClass("message").css("color",data.text_color).html((h[g]["text"]).replace(/(\w+):\/\/([\w.]+)\/(\S*)/,""));var f=(h[g]["text"]).match(/(\w+):\/\/([\w.]+)\/(\S*)/);if(f!==null&&f.length>0){k("<a>").attr("href",f[0]).html(" "+f[0]).attr("target","_blank").appendTo(j);}k(j).appendTo(m);k(m).appendTo("#twitter-content");}}k("div.tweet").not("div.tweet:last").css("borderBottom","1px dashed "+data.border_color);k("div.tweet:last").css("borderBottom","1px solid "+data.border_color);if(k("div.twitter-head a.twitter-color-image")){k("div.twitter-head a.twitter-color-image").css({background:'url("'+h[0]["user"]["profile_image_url_https"]+'") no-repeat 0 0'});}if(data.followers_count==="TRUE"){k("div.twitter-head iframe").css({left:"75%"});}k("img#loader").hide();k("#twitter-content > div.tweet").fadeIn(500,function(){k("#twitter-content > div.tweet p.message").css({fontFamily:data.font_family,fontSize:data.font_size});k("#twitter-content > div.tweet p.message a").css({fontFamily:data.font_family,fontSize:data.font_size});k("div.twitter-head iframe").fadeIn(2000);});}}}})(jQuery);}function wdr(f){var g="";var e=JSON.parse(locale);if(f[0]>0){if(f[0]<=2){g+=e.year[f[0]];}else{g+=e.year[3];}}else{if(f[1]>0){g+=e.month[f[1]];}else{if(f[2]>0){g+=e.day[f[2]];}else{if(f[3]>0){g+=e.hour[f[3]];}else{if(f[4]>0){g+=e.minute[f[4]];}else{if(f[5]>0){g+=e.second[0];}}}}}}return g;}function gd(f){var e=cdfs(f.created_at);return wdr(cdt(e));}function cdfs(g){var e=g.split(" ");var f=e[1]+" "+e[2]+", "+e[5]+" "+e[3];return new Date(f);}function cdt(g){var f=new Date();var e=(f.getTimezoneOffset())/60;var h=new Date(f-g);return new Array(h.getFullYear()-1970,h.getUTCMonth(),h.getUTCDate()-1,h.getUTCHours()+e,h.getUTCMinutes(),h.getUTCSeconds());}function etw(h,g){try{if((h===null||g===null)){return false;}else{if(h.length===0||g.length===0){return false;}else{return h[0]["id"]===g[0]["id"];}}}catch(f){return false;}}var ot=null;var tt=null;a();setInterval("a()",data.update_time*1000);