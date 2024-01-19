
let ap = "https://script.googleusercontent.com/macros/echo?user_content_key=PDNuDGNLCnc4X9_7haKeWFgBZxYsknZfA5ncE10FP3YpwqNZX2tkfqHVrUu6zA_Tbch6f7AI7Mrc707hslOKTGXETVgOLdrIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA6pboEDegINf5Gd-jqOuTHoY2vJLDz9TiP6KyZUurl6ZzgoLOojBLVd0vswV00JGjZA2qj73iypUQZCxk6VXz2UrwEVS_K_ydz9Jw9Md8uu&lib=MbOr_CuQ9wKXls-ROOZiVkCY9ugaVrcMi";
fetch(ap)
.then((data) => {
    console.log(data);
    return data.json();
})
.then((object) => {
    let getValues = "";
    for (let i = 0; i <= object.length; i++) {
        // let universalLink = "https://drive.google.com/uc?export=view&id=";
        let picImg = "";
        if(object[i].name=='-'){
            break;
        }
        if(object[i].gender=='Male'){
            picImg = 'images/user_male.jpg';
        }if(object[i].gender == 'Female'){
            picImg = 'images/user_female.jpg';
        }
        // if(object[i].profile_pic == ""){
        //     // Add image url here for location
        //     picImg = "images/user_icon.svg";
        // }else{
        //     let picUrl = object[i].profile_pic;
        //     let picId = picUrl.slice(33);
        //     picImg = universalLink+picId;
        // }
        getValues+= `
        <div class="col-md-4 crds boot_card">
        <div class="card tuition_card_size">
            <div class="d-flex flex-column justify-content-between card-body">
                <div>
                    <h5 class="card-title"><img class="profile_img tutor_pic" src="${picImg}" alt="">&nbsp;&nbsp;${object[i].name} </h6>
                    <hr style="border: 1px solid green;">
                    <strong>Tutor Id: </strong>${object[i].tutor_id}<br>
                    <strong>Gender: </strong>${object[i].gender}<br>
                    <strong>Description: </strong>${object[i].description}<br>
                    <strong>Experience: </strong>${object[i].experience}<br>
                    <strong>Qualification: </strong>${object[i].qualification}<br>
                    <strong>Can Teach: </strong>${object[i].can_teach}<br>
                    <strong>Teach Subjects: </strong>${object[i].teach_subjects}<br>
                    <strong>Teach Syllabus: </strong>${object[i].can_teach_syllabus}<br>
                    <strong>Teach Mode: </strong>${object[i].teach_mode}<br>
                    <strong>Preferred Timings: </strong>${object[i].preferred_timings}<br>
                    <strong>Known Languages: </strong>${object[i].known_languages}<br>
                </div>
                <div>
                    <hr style="border: 1px solid green;">
                    <a href="https://api.whatsapp.com/send?phone=7793958022&text=Tutor Id: ${object[i].tutor_id} I need Home tuition my requirement is..." target="_blank"><img style="width: 40px;" src="./images/whatsapp.png" alt="image"></a>
                </div>
            </div>
        </div>
        </div>
         `;
        document.getElementById('tutors').innerHTML = getValues;
    }
})
.catch((err)=>{
    document.getElementById('tutors').innerHTML = "Server is busy please try again later";
});

