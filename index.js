//QUẢN LÝ TUYỂN SINH

function ktraDiem (tongDiem, khuVuc, doiTuong, diemChuan) {
    var result = false;
    var def__val__1 = new Array("A", "B", "C");
    var def__val__2 = new Array(1, 2, 3);
    var bonusKhuVuc = new Array(2, 1, 0.5);
    var bonusDoiTuong = new Array(2.5, 1.5, 1);

    if (khuVuc != "x") {
        for (var i = 0; i < def__val__1.length; i++) {
            if (khuVuc == def__val__1[i]) {
                tongDiem += bonusKhuVuc[i];
                break;
            }
        }
    }

    if (doiTuong != 0) {
        for (var a = 0; a < def__val__2.length; a++) {
            if (doiTuong == def__val__2[i]) {
                tongDiem += bonusDoiTuong[i];
                break;
            }
        }
    }

    if (tongDiem >= diemChuan) {
        result = true;
    }
    return result;
}

function quanLyTuyenSinh () {
    var checkRes;
    var checkNumber = true;
    var diemThi = new Array;
    var tongDiem = 0;

    //Lấy điểm
    diemThi.push(document.getElementById("diem__1").value * 1);
    diemThi.push(document.getElementById("diem__2").value * 1);
    diemThi.push(document.getElementById("diem__3").value * 1);
    
    var khuVuc = document.getElementById("khuvuc").value;
    var doiTuong = document.getElementById('doituong').value * 1;
    var diemChuan = document.getElementById("diemchuan").value * 1; 

    var result = document.getElementById("result__1");

    for (var i = 0; i < diemThi.length; i++) {
        tongDiem += diemThi[i];
        if(diemThi[i] < 0 || diemThi[i] > 10) {
            checkNumber = false;
            break;
        }
    }

    if (tongDiem > 30) {
        checkNumber = false;
    }

    if(!checkNumber) {
        result.innerHTML = "Nhập điểm chính xác!";
        result.className = "result text-white px-3 bg-danger";
    }
    else {
        checkRes = ktraDiem(tongDiem, khuVuc, doiTuong, diemChuan);
        if(checkRes) {
            result.innerHTML = "Đậu!";
            result.className = "result text-white px-3 bg-success";
        }
        else {
            result.innerHTML = "Rớt!";
            result.className = "result text-white px-3 bg-warning";
        }
    }

    console.log(tongDiem, khuVuc, doiTuong, diemChuan);
}


//TÍNH TIỀN ĐIỆN
var formatVND = new Intl.NumberFormat("VN-vn");


function tinhTienDien () {
    var ten = document.getElementById("tiendien__ten").value;
    var kw = document.getElementById("tiendien__kw").value * 1;
    result = document.getElementById("result__2");
    var tongTienDien = 0;
    if(kw < 0) {
        result.innerHTML = "Số kw điện không được nhỏ hơn 0!";
        result.className = "result text-white px-3 bg-danger";
    }
    else {
        if (kw > 350) {
            tongTienDien += 50*500 + 50*650 + 100*850 + 150*1100 + (kw - 350)*1300;
        }
        else if (kw > 200) {
            tongTienDien += 50*500 + 50*650 + 100*850 + (kw - 200)*1100;
        }
        else if (kw > 100) {
            tongTienDien += 50*500 + 50*650 + (kw - 100)*850;
        }
        else if (kw > 50) {
            tongTienDien += 50*500 + (kw - 50)*650;
        }
        else {
            tongTienDien += kw*500; 
        }
        result.innerHTML = "Tên: " + ten + "; Tổng tiền điện: " + formatVND.format(tongTienDien); 
        result.className = "result text-white px-3 bg-success";
    }
    
    

}