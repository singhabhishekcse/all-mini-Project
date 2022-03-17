//for show data......................................................................
   $("#btn1").click(function () {
    $.ajax({
      url: "https:raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
      type: "Get",
      datatype: "json",
      success: function (result) {
        var obj = JSON.parse(result)
        var tableheading = `<table border=1 id="heading"><tr><th>Sr.No</th><th>Title</th><th>Durations</th><th>years</th><th>poster</th><th>IMD Ratings</th></tr>`;
        var tabledata = "";
        for (var i in obj) {
          tabledata += "<tr><td>" + [i] + "</td><td>" + obj[i]["title"] + "</td><td>" + obj[i]["duration"] + "</td><td>" + obj[i]["year"] + "</td><td><img src='" + obj[i]["posterurl"] + "'></td><td>" + obj[i]["imdbRating"] + "</td></tr>";
        }
        var data = tableheading + tabledata;
       $("#table").html(data);
       $("#form").empty();}
    })
  })
//for add data .................................................................
  $("#btn2").click(function () {
    $("#table").empty();
  var form = `<form onsubmit=" return add()" name="myform">
  <lable> TITLE </lable><br><input type="text" name="title" id="title"><br>
  <lable> DURATION </lable><br><input type="text"  name="duration" id="duration"><br>
  <lable> YEAR </lable><br><input type="text"  name="year" id="year"><br>
  <lable> SELECT A POSTER </lable><br><input type="file" accept="image/*" name="poster" id="poster"/><br>
  <lable> RATINGS </lable><br><input type="text"  name="rating" id="rating"><br>
  <input type="submit" value="submit">
  </form>`
$("#form").html(form);
});
 function add(){
  $("#table").empty();
var num0 =$("#title").val();
 var num1 =$("#duration").val();
 var num2 =$("#year").val();
 var num3 =$("#poster").val().replace(/C:\\fakepath\\/i, '');
 //console.log(num3);
 var num4 =$("#rating").val();
arr.push(
  {"title": num0, "duration": num1, "year": num2, "posterurl": num3, "imdbRating": num4,});
var tableheading =`<table border=1 id="heading"><tr><th>Sr.No</th><th>Title</th><th>Durations</th><th>years</th><th>poster</th><th>IMD Ratings</th></tr>`;
for (var i in arr) {
  tableheading += "<tr><td>" + [i] + "</td><td>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td><img src=" + arr[i].posterurl+  "></td><td>" + arr[i]["imdbRating"] + "</td></tr>";
}
$('#table').html(tableheading);
tableheading+=`</table>`;
//for text empty...............................................................
$('#title').val('');
$('#duration').val('');
$('#year').val('');
$('#poster').val('');
$('#rating').val('');
return false;}
//for search button................................................................
$("#btn3").click(function () {
  $("#form").empty();
 $("#table").empty();
  var html = "<form id='searchinput'><label>Title</label><input id='title' type='text' oninput='search()'><br><label>Year</label><input id='year' type='text' oninput='search()'></form>";
  $("#form").html(html);
  var tableheading =`<table border=1 id="heading"><tr><th>Sr.No</th><th>Title</th><th>Durations</th><th>years</th><th>poster</th><th>IMD Ratings</th></tr>`;
   for (var i in arr) {
     tableheading += " <tr><td>" + [i] + "</td><td id='myTable'>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td ><img src=" + arr[i].posterurl+  "></td><td>" + arr[i]["imdbRating"] + "</td></tr></tbody>";}
   $('#table').html(tableheading);
   tableheading+=`</table>`;});
 function search() {
  $("#table").empty();
   var sdata = "<table id='heading' border=1><tr><th>Sr.No.</th><th>Title</th><th>Duration</th><th>Year</th><th>IMBD</th><th>Poster</th></tr>";
   var title = $("#title").val();
  var year = $("#year").val();
   for (i in arr) {
     var title1 = arr[i]["title"];
     var year1 = arr[i]["year"];
     if (year == "") {
       if (title1.match(title)) {
         sdata += "<tr><td>" + i + "</td><td>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td>" + arr[i]["imdbRating"] + "</td><td><img src='" + arr[i]["posterurl"] + "'></td></tr>"
      } }
     else {
       if (title == "") {
         if (year1.match(year)) {
           sdata += "<tr><td>" + i + "</td><td>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td>" + arr[i]["imdbRating"] + "</td><td><img src='" + arr[i]["posterurl"] + "'></td></tr>"
         } }
       else {
         if (year1.match(year) && title1.match(title)) {
           sdata += "<tr><td>" + i + "</td><td>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td>" + arr[i]["imdbRating"] + "</td><td><img src='" + arr[i]["posterurl"] + "'></td></tr>"
         } }
     } };
   $("#table").html(sdata); };
// // for delete button ...........................................................................
 $("#btn4").click(function () {
  $("#form").empty();
  $("#table").empty();
  var sform = `<form onsubmit=" return del()" name="myform">
<lable> Id </lable><br><input type="text" name="id" id="id"><br>
<input type="submit" value="Delete">
</form>`
 $("#form").html(sform);
 var tableheading =`<table border=1 id="heading"><tr><th>Sr.No</th><th>Title</th><th>Durations</th><th>years</th><th>poster</th><th>IMD Ratings</th></tr>`;
 for (var i in arr) {
 arr.forEach((item, index)=>{
   item.id = index+1;} );
   //console.log(arr);
  tableheading += "<tr><td>" + arr[i].id + "</td><td>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td><img src=" + arr[i].posterurl+  "></td><td>" + arr[i]["imdbRating"] + "</td></tr>"; }
$('#table').html(tableheading);
tableheading+=`</table>`;} ) 
function del(){
  $("#table").empty();
  var  delvalue=$("#id").val();
  
  arr = arr.filter(item => item.id !=  delvalue);
    //console.log(arr);
     var tableheading =`<table border=1 id="heading"><tr><th>Sr.No</th><th>Title</th><th>Durations</th><th>years</th><th>poster</th><th>IMD Ratings</th></tr>`;
     for (var i in arr) {
       tableheading += "<tr><td>" + arr[i].id + "</td><td>" + arr[i]["title"] + "</td><td>" + arr[i]["duration"] + "</td><td>" + arr[i]["year"] + "</td><td><img src=" + arr[i].posterurl+  "></td><td>" + arr[i]["imdbRating"] + "</td></tr>";}
     $('#table').html(tableheading);
     tableheading+=`</table>`;
//for text empty....................................s...........................
   $('#id').val('');
      return false; };