- Repository kali ini menerapkan Atomic Design, dimana memcahkan beberapa component yang terbesar menjadi kecil kecil (atom).

- Ada beberapa folder yang menjadi dasar atomic design pada project ini :

    1. components/Elements  = dimana tempat atom terkecil dibuat seperti Button, Input, dsb
    2. components/Fragments = dimana berkumpulnya para element pada point pertama seperti :
                              1. CardProduct (memilik button yang diimport dari Elements)
                              2. FormLogin (memiliki button, InputForm yang diimport dari Elements)
    3. components/Layout    = dimana "LAYOUT" berkumpulnya fragment menjadi suatu tampilan seperti posisinya rata-rata ditengah
    4. page                 = tempat layout dan fragment disatukan agar menjadi suatu tampilan utama dari aplikasi yang dibuat.

- pada main.jsx menjadi tempat perpindahan halaman antar page menggunakan react-router-dom

- Apa itu state?
  State bisa dibilang adalah memori yang dimiliki oleh component untuk merubah data

  Ada dua state utama

  1. statefull components = membuat sebuah component menggunakan sebuah class
  2. stateless components = component yang dibuat menggunakan function (functional components).

  perbedaannya:

  1. statefull components memiliki state
  2. stateless components tidak memiliki state

  pada dokumentasi react kita direkomendasikan menggunakan functional sementara state tidak bisa dipakai didalam functional component
  jadi untuk mengatasi tersebut ada sebuah library yang bernama react-hooks

- Dalam React, useState, dan fungsi lainnya yang berawalan “use”, disebut sebuah Hook.
  Hooks adalah fungsi spesial yang hanya tersedia hanya pada proses rendering (yang akan kita bahas lebih detail di halaman selanjutnya). Mereka memberikan Anda akses ke berbagai fitur React.

  State adalah salah satu fitur tersebut, Anda akan menemui Hooks lainnya nanti.

- LifeCycle
  componentDidMount   = dieksekusi pada fase pembuatan component tersebut 
  componentDidUpdate  = 

- Fungsi useRef adalah untuk membuat sebuah object ref yang akan menyimpan sebuah nilai yang bisa diakses oleh component.
  perbedaan useRef dengan useState adalah useRef tidak akan merubah nilainya, sedangkan useState akan merubah nilainya.

  useRef bisa digunakan untuk:
  1. referensi value  : seperti add to cart namun datanya tidak langsung berubah harus di save setiap ada perubahan di componentnya
  2. memanipulasi dom : 


  profile ini juga bisa diakses jika sudah login, berarti mau gak mau harus masukin lagi useEffectnya tapi boros karena masuknya berkali kali
