var requestURL = "https://openapi.gg.go.kr/Animalhosptl?KEY=00bfb12c126b44e387a7f0ef71a51ee1&type=json&pSize=1000";
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
    var responseMap = request.response;
    // var mapsvalue = JSON.stringify(responseMap,null,2);
    // console.log(mapsvalue);

    var maps = responseMap;
    console.log(maps.Animalhosptl);
    console.log(maps.Animalhosptl[1].row.length);
    console.log(maps.Animalhosptl[1].row[1].BIZPLC_NM);
    console.log(maps.Animalhosptl[1].row[1].REFINE_WGS84_LAT);
    console.log(maps.Animalhosptl[1].row[1].REFINE_WGS84_LOGT);
}