function login(){
    let email = document.getElementById("mail").value;
    let password = document.getElementById("pw").value;
    let phone = document.getElementById("telpon").value;

    if(email == "syifasarwahita2001@gmail.com" && password == 120801 && phone == 123){
        alert("Selamat Anda Berhasil Login");
        window.location = "ultah.html"
    }else if(email == "" || password == "" || phone == ""){
        alert("Harap Isi Semua Bidang");
    }else if(isNaN(phone)){
        alert("Isian No Telpon Harus Berupa Angka");
    }else{
        alert("Harap Masukan Data Yang Valid");
    }
}