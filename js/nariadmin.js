
fetch("https://script.google.com/macros/s/AKfycbwLuspW01hxRgtUgpBm0pOEj6vF4MmbZWDdFIhJ7Ru3E3h7M5TlgWC6L6Ebs8huuXCh/exec")
.then((data)=>{
    console.log('-------------Json--------');
    return data.json();
}).then((object)=>{
    let getData = "";
    for(let i = 0; i<= object.length; i++){
        if (object[i].tutor_ph_no== ""){
            // Skip the processing for incomplete tasks
            continue;
        }if(object[i].tutor_ph_no== "-"){
            break;
        }
        getData += `
        <div class="col-md-4 crds boot_card">
        <div class="card tuition_card_size">
            <div class="d-flex flex-column justify-content-between card-body">
                <div>
                    <h6 class="card-title"><img class="profile_img" src="" alt=""><span>${object[i].r_id}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>${object[i].tuition_id}</span> </h6>
                    <hr style="border: 1px solid green;">
                </div>
                <div style="font-size: 13px;">
                    <strong>Tutor no: </strong>${object[i].tutor_ph_no}<br>
                    <p><strong>Tutor Details</strong> ${object[i].tutor_payment}</p>
                    <a href="tel:${object[i].tutor_ph_no}" target="_blank" rel="noopener noreferrer" class="btn btn btn-success">call</a>
                    <a href="https://api.whatsapp.com/send?phone=${object[i].tutor_ph_no}&text=Hello sir" target="_blank" rel="noopener noreferrer"><img style="width: 40px;" src="./images/whatsapp.png" alt="image"></a>
                </div>
                <div style="font-size: 13px;">
                    <hr style="border: 1px solid green;">
                    <p><strong>Status:</strong> ${object[i].status}</p>
                    <p><strong>Parent details:</strong> ${object[i].parent_details}</p>
                    <a href="tel:${object[i].parent_no}" target="_blank" rel="noopener noreferrer" class="btn btn btn-success">call</a>
                    <a href="https://api.whatsapp.com/send?phone=${object[i].parent_no}&text=Hello sir" target="_blank" rel="noopener noreferrer"><img style="width: 40px;" src="./images/whatsapp.png" alt="image"></a>
                </div>
            </div>
        </div>
        </div>
        `;
        document.getElementById('request').innerHTML = getData;
    }
})
.catch((err)=>{
    console.log(err);
});