# Typescript

TypeScript adalah bahasa pemrograman open source yang dikembangkan dan dikelola oleh Microsoft. Ini adalah superset sintaksis ketat dari JavaScript dan menambahkan pengetikan statis opsional ke bahasa. TypeScript dirancang untuk pengembangan aplikasi besar dan ditranskompilasi ke JavaScript. (Wikipedia)

## Cara Penggunaan

Lakukan perintah install terlebih dahulu

```
npm install
```

Untuk mengkompile file typescript ke JavaScript se kali kompile

```
npm run tsc
```

Untuk mengkompile file typescript ke JavaScript setiap kali ada perubahaan di file typescript

```
npm run ts
```

Untuk melakukan uji coba hasil compile

```
npm run dev
```

Note: tapi pastikan di script dev nya file dalam folder build yang ingin di testing sudah sesuai yang di inginkan

```
"scripts": {
  "tsc": "rm -rf build/ && tsc",
  "ts": "rm -rf build/ && tsc -w",
  "dev": "nodemon ./build/nama-file-yg-ingin-kamu-coba.js"
}
```

Selamat Belajar! Semangat!
