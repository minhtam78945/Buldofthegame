function Register() {
    let user = document.getElementById('user').value;
    let soluong = parseInt(document.getElementById('many').value);
    let date = document.getElementById('date').value;
    let chose = document.getElementsByName('chose');
    var bank = " ";
    const btn = document.getElementById('btn2');
    if (user == null || user == "") {
        document.getElementById('resu1').innerHTML = "Họ và tên không được để trống";
    }
    if (soluong < 0 || isNaN(soluong)) {
        document.getElementById('resu2').innerHTML = "Số lượng không được bé hơn 0";

    }
    if (!date) {
        document.getElementById('resu3').innerHTML = "Bạn chưa chọn ngày";
    }
    for (var i = 0; i < chose.length; i++) {
        if (chose[i].checked == true) {
            bank = chose[i].value;
        }
    }
    if (bank == '0') {
        bank = "Chuyển khoảng"
    }
    else if (bank == '1') {
        bank = "Tiếp tục mua hàng";
    }
    else {
        document.getElementById('resu4').innerHTML = "Bạn chưa chọn hình thức mua hàng ";

    }
    alert("Mua hàng không thành công");
}
