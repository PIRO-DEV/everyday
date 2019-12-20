function gotoGoogleForms()
{
    var myModal = `
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
            <h4 class="modal-title">Fill in the Form</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelkP9Qq1GoN9qoXRgkjFiBjMIuJ4toUCGrBf0dc4ll-LXbWQ/viewform?embedded=true" width="640" height="1280" frameborder="0" marginheight="0" marginwidth="0" class="embed-responsive embed-responsive-16by9">Loading…</iframe>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>

        </div>
     </div>
    `;
    document.getElementById("myModal").innerHTML = myModal;
    
}

function gotoUrgentTask()
{
    location.href = "urgent.html";
}