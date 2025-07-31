<script>
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('enrollbutton');

    if (form) {
        form.addEventListener('click', function (event) {
            const sname = document.getElementById('studentname').value.trim();
            CourseEnrollmentDetails(sname);
        });
    }
});

    // Simulate getting course enrollment details
    function CourseEnrollmentDetails(studentname) {
        alert("Enrolled student: " + studentname);

    // If needed later, restore API call here
    /*
    var ajaxTime = new Date().getTime();
    var jsonData = "{studentname :'" + studentname + "'}";
    var settings = {
        async: true,
    crossDomain: true,
    cache: false,
    dataType: "json",
    url: APIURL + "/Course/GetAllEnrolledStudents?studentname=" + studentname,
    method: "POST",
    contentType: "application/json; charset=utf-8"
    };
    $.ajax(settings)
    .done(function (response) {
            var responseTime = new Date().getTime() - ajaxTime;
    alert("Success: " + response.message);
        })
    .fail(function (xhr) {
            var responseTime = new Date().getTime() - ajaxTime;
    alert("Error getting enrolled students.");
        });
    */
}

    // Simulate saving enrollment
    function saveEnrollmentDetails() {
    const studentName = $("#studentname").val()?.trim();
    const parentName = $("#parentname").val()?.trim();
    const contact = $("#contact").val()?.trim();
    const email = $("#email").val()?.trim();
    const selectedClass = $("#class").val();

    const selectedSubjects = [];
    if ($("#maths").is(":checked")) selectedSubjects.push("Mathematics");
    if ($("#physics").is(":checked")) selectedSubjects.push("Physics");
    if ($("#chemistry").is(":checked")) selectedSubjects.push("Chemistry");
    if ($("#biology").is(":checked")) selectedSubjects.push("Biology");
    if ($("#accountancy").is(":checked")) selectedSubjects.push("Accountancy");

    // Just simulate submission
    alert("Enrollment submitted for: " + studentName);
    $("#enrollbro")[0].reset();
    $('#enrollModal').modal('hide');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    $('body').css('padding-right', '');
}

    // Simulate saving contact form
    function saveContact() {
    const name = $("#name").val()?.trim();
    const email = $("#email").val()?.trim();
    const subject = $("#subject").val()?.trim();
    const message = $("#message").val()?.trim();

    alert("Thank you, " + name + "! Your message has been received.");
    $("#contactForm")[0].reset();

    // To re-enable API later, uncomment and update APIURL
    /*
    const jsonData = JSON.stringify({Name: name, EmailId: email, Subject: subject, Message: message });
    const settings = {
        async: true,
    crossDomain: true,
    cache: false,
    dataType: "json",
    url: APIURL + "/Contact/AddContact",
    method: "POST",
    contentType: "application/json; charset=utf-8",
    data: jsonData
    };

    $.ajax(settings)
    .done(function (response) {
        alert("Thank you for your message!");
    $("#contactForm")[0].reset();
        })
    .fail(function (xhr) {
        alert("Error sending message.");
        });
    */
}
</script>
