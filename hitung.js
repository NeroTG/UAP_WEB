window.alert("total pembayaran adalah: ");

var Kode, barang, Submit, hitung;
Kode = document.getElementById("001", "002", "003");
barang = document.getElementById("barang a", "barang b", "barang c").value;
Submit = document.getElementById("submit");
hitung = document.getElementById("jml bayar");
window.confirm;
function hitung() {
  hitung =
    document.getElementById("jumlah_bayar").value -
    document.getElementById("total_pembayaran").value;
  $("hasil").html(hitung);
}

Submit.addEventListener("click", function () {
    if (document.getElementById("kd_brg").value == "") {
        alert("Barang belum dipilih!");
        } else if (isNaN(document.getElementById("jumlah_bayar").value)) {
            alert("Jumlah Bayar harus angka!");
            } else {
                var kd_brg = document.getElementById("kd_brg").value;
                if (kd_brg === "001") {
                    jualA();
                    } else if (kd_brg === "002") {
                        jualB();
                        } else if (kd_brg === "013") {
                            jualC();
                            };
                        }
                    

}
// function alert(alert) {
//   window.alert(alert);
// }
// function jumlah_bayar(bayar) {
//   var total = parseInt($("jml_uang").val()) + bayar;
// }
// function total_pembayaran(total) {
//   $("total_pembayaran").html("Rp. " + total);
// }
