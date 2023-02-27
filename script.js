let nilai = prompt("masukan nilai", 0 );
let hasil = "";
switch(true){
    case nilai < 101 && nilai > 89 :
        hasil = " selamat nilai anda A";
        break;
    case nilai > 79 && nilai < 90:
        hasil = "nilai anda B"    ;
        break;

        case nilai > 69 && nilai < 80:
        hasil = " nilai anda C";
        break;

        case nilai > 59 && nilai < 70:
            hasil = "nilai anda D";
            break;

            case nilai < 59  :
            hasil = "nilai anda F";
            break;
           


        default:
            document.write("nilai anda tidak ada");

}document.write(hasil);