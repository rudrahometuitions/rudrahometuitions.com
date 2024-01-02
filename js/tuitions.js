
let ap = "https://script.google.com/macros/s/AKfycbypRU2EP-Lanp3GM4WwCPHOI077bQDzxfSeyWQr07oQMitmGUBGktTQUirjx2u2_0xW/exec";
fetch(ap)
.then((data) => {
    console.log(data);
    return data.json();
})
.then((object) => {
    let loc = "https://maps.app.goo.gl/vMmC3iwRbCjUJjYL6";
    locLength = loc.slice(0,8);
    let getValues = "";
    for (let i = 0; i <= object.length; i++) {
        // Process the completed task
        let apiLocation = object[i].location;
        let len = apiLocation.slice(0,8);
        let locImg = "";
        if (object[i].status== "DEMO"||object[i].status=="CANCELLED"){
            // Skip the processing for incomplete tasks
            continue;
        }if(object[i].paid == "Yes" || object[i].status=="ASSIGNED"){
            continue;
        }
        if(len==locLength){
            // Add image url here for location
            locImg = "images/location_icon.svg";
        }
        if(object[i].status=='-'){break;}
        getValues+= `
        <div class="col-md-4 crds boot_card">
        <div class="card tuition_card_size">
            <div class="d-flex flex-column justify-content-between card-body">
                <div>
                    <h5 class="card-title"><img class="profile_img" src="images/user_icon.svg" alt="">&nbsp;&nbsp;Tuition Id: ${object[i].id}</b> |&nbsp; <span>Status: Active</span> </h6>
                    <hr style="border: 1px solid green;">
                </div>
                <div>
                    <strong>Number of Students: </strong>${object[i].no_of_students}<br>
                    <strong>Class & Subjects: </strong>${object[i].class_subjects}<br>
                    <strong>Syllabus type: </strong>${object[i].syllabus_type}<br>
                    <strong>Tutor Preferred: </strong>${object[i].tutor_preferred}<br>
                    <strong>Tuition hours: </strong>${object[i].tuition_hours}<br>
                    <strong>Preferred Timings: </strong>${object[i].preferred_timings}<br>
                    <strong>Description: </strong>${object[i].description}<br>
                    <strong>Salary: </strong>${object[i].salary}<br>
                    <strong>Address: </strong>${object[i].address}<br>
                    <strong>Location: </strong>
                    <a href="${object[i].location}" target="_blank" rel="noopener noreferrer"><img style="width: 50px;" src="${locImg}" alt=""></a>
                </div>
                <div>
                    <hr style="border: 1px solid green;">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7qFeFdtzwhuwkyvvhcbv0JNiAZeRPLZhgyP3KYEGWZ2azrw/viewform" target="_blank" rel="noopener noreferrer" class="btn btn btn-success">Request</a>
                    <a href="https://api.whatsapp.com/send?phone=7793958022&text=I am interested in this Tuition Id: ${object[i].id}" target="_blank"><img style="width: 40px;" src="./images/whatsapp.png" alt="image"></a>
                </div>
            </div>
        </div>
        </div>
         `;
        document.getElementById('tuitions').innerHTML = getValues;
    }
})
.catch((err)=>{
    document.getElementById('tuitions').innerHTML = "Server is busy please try again later";
});

