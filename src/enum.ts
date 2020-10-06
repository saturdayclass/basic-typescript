/* Enum 
Tipe data yang biasanya digunakan untuk menyimpan data konstant
seperti halnya dot env. Bedanya enum digunakan untuk menyimpan data untuk aplikasi
*/

/*
contoh penggunaan enum sederhana 
enum Month {
  JAN,
  FEB,
  MAR,
}

note: secara default ketika kita tidak mensetting nilai apa-apa maka dia akan bernilai number. Serta di akan auto increment dari 0
*/

// Contoh penggunaan enum untuk menyimpan data string dan number

enum Month {
  JAN = 'Januari',
  FEB = 'Februari',
  MAR = 1,
}

/* Note: jika sudah mensetting nilai awal menjadi string maka nilai selanjutnya tidak boleh di kosong.
karena enum tidak bisa memproses nilai undefined, nanti akan terjadi error jika kita memberikan nilai kosong atau undifined.
*/

console.log(Month);
