const inputqr = document.getElementById("qr-input");
const buttonqr = document.getElementById("qr-button");
const imageqr = document.getElementById("qr-img");
console.log(inputqr, buttonqr, imageqr);

buttonqr.addEventListener('click', () => {

    const inputvalue = inputqr.value;
    console.log(inputvalue);

    if (!inputvalue) {
        alert('please enter the vaild url');
        return;

    }
    else {

        imageqr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        imageqr.alt = `QR code for ${inputvalue}`;
    }

});
