function calculateLinolium() {
    //mainīgo definešana
    let roomWidth = parseFloat(document.getElementById('roomWidth').value);
    let roomLength = parseFloat(document.getElementById('roomLength').value);
    let linoliumWidth = parseFloat(document.getElementById('linoliumWidt').value);
    let linoliumPrice = parseFloat(document.getElementById('linoliumPrice').value);
    
    //datu ievades pārbaude



    //rēķināšana šķērsām
    let stripsNeededCross = Math.ceil(roomLength / linoliumWidth);
    let linoliumLengthCross = stripsNeededCross * roomWidth;
    let linoliumAreaCross = linoliumLengthCross * linoliumWidth;
    let costCross = linoliumAreaCross * linoliumPrice;
    let wasteCross = linoliumAreaCross - (roomLength * roomWidth);
    let wasteCostCross = wasteCross * linoliumPrice;


    //reķināšana gareniski


    //izvade
    document.getElementById("lengCross").value = linoliumLengthCross.toFixed(2) + ' m';

}