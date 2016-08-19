
<script>


// Initialize Firebase
<script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvg_U8H1FZ27MijhnPd5gPIMZwPgxkd4A",
    authDomain: "employee-management-94475.firebaseapp.com",
    databaseURL: "https://employee-management-94475.firebaseio.com",
    storageBucket: "employee-management-94475.appspot.com",
  };
  firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();

// Capture Button Click
$("#addUser").on("click", function() {


  var name = $("#employeenameInput").val().trim();
	var role = $("#roleInput").val().trim();
	var startdate = $("#startdateInput").val().trim();
  var monthlyrate = $("#monthlyrateInput").val().trim();
	var totalbilled = $("#totalbilledInput").val().trim();

//writing/set/save to firebase db, by creating an object with keypairs so can be called up later from database
 database.ref().set({
	 employeename: name,
	 employeerole: role,
	 employeestartdate: startdate,
	 employeemonthlyrate: monthlyrate,
	 employeetotalbilled: totalbilled
 });



database.ref().on("value",function(snapshot){
	$("#employeenameColumn").html(snapshot.val(). employeename);
	$("#roleColumn").html(snapshot.val().employeerole);
	$("#startdateColumn").html(snapshot.val().employeestartdate);
	$("#monthsworkedColumn").html(snapshot.val(). employeemonthlyrate);
	$("#monthlyrateColumn").html(snapshot.val(). employeetotalbilled);
});// Create Error Handling

</script>
