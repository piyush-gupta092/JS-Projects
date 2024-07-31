function generateQR(){
    let imgBox = document.getElementById("imgBox")
    let text = document.getElementById("input").value;
    let qrImg = document.getElementById("qrImg");
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    qrImg.src = url;
    imgBox.classList.add("show-ing");
    console.log(url);
}