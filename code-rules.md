Peran
Anda adalah Next.js Frontend/Portfolio Developer untuk project portfolio Ashley/Sayu berbasis Next.js 15, React 19, TypeScript, App Router, Tailwind CSS, next/font, dan next/image.

1. Stack
Project ini memakai Next.js 15.3.x, React 19, React DOM 19, TypeScript 5, App Router, Server Components, Client Components seperlunya, Tailwind CSS 3.4, PostCSS, Autoprefixer, ESLint 9 dengan konfigurasi Next, next/font untuk Outfit, next/image untuk optimasi gambar, dan NPM sebagai package manager.

2. Struktur folder

```text
src/
|-- app/
|   |-- layout.tsx          // Root layout, font, metadata global, viewport, dan CSS global
|   |-- page.tsx            // Home page yang merangkai seluruh section portfolio
|   `-- globals.css         // Tailwind base/components/utilities, token CSS, animasi, dan style global
|-- components/
|   |-- layout/             // Header, Footer, dan MobileMenu
|   |-- sections/           // Hero, About, Skills, Projects, Testimonials, Blog, dan Contact
|   |-- ui/                 // Komponen UI kecil seperti progress, preloader, icon, dan dekorasi
|   `-- hooks/              // Hook client seperti useScrollReveal
`-- lib/
    `-- data.ts             // Sumber konten portfolio, navigasi, skill, project, blog, dan kontak

public/                     // Asset statis yang dilayani langsung oleh Next.js
portfolio-html/             // Referensi/template HTML asli bila masih dibutuhkan
next.config.ts              // Konfigurasi Next.js, termasuk remote image pattern
tailwind.config.ts          // Token Tailwind, breakpoint, warna, font, animasi, dan keyframes
tsconfig.json               // Konfigurasi TypeScript dan alias @/*
package.json                // Script dan dependency project
```

Pola arsitektur utama project ini adalah `app/page -> sections/layout/ui -> lib/data`, dengan App Router sebagai entry utama dan `src/lib/data.ts` sebagai sumber konten.

3. Routing dan konvensi Next.js
- Route utama berada di `src/app/page.tsx` sebagai halaman portfolio satu halaman.
- Root layout berada di `src/app/layout.tsx` dan harus menjaga font, metadata default, viewport, dan import `globals.css`.
- Gunakan App Router convention untuk file route baru bila benar-benar dibutuhkan.
- Pertahankan anchor section seperti `#home`, `#about`, `#skills`, `#work`, `#blog`, dan `#contact` agar navigasi tetap cocok dengan `navLinks`.
- Jangan mengganti slug, id section, atau struktur halaman satu halaman tanpa kebutuhan task yang jelas.
- Metadata halaman harus memakai API `Metadata` dari Next.js, bukan manipulasi manual di client.

4. Aturan dasar
- Ikuti pola file dan komponen terdekat sebelum menambah pola baru.
- Gunakan nama component, prop, variabel, dan data key yang deskriptif.
- Hapus import yang tidak dipakai saat menyentuh file terkait.
- Hindari refactor besar lintas section jika task tidak meminta itu.
- Fokus pada perubahan minimal yang menyelesaikan masalah sampai tuntas.
- Jangan mengubah konten, navigasi, visual identity, atau interaksi utama tanpa alasan yang bisa diverifikasi.

5. View layer dan komponen
- UI memakai React component di `src/components/` dan halaman App Router di `src/app/`.
- Pertahankan pemisahan `layout`, `sections`, `ui`, dan `hooks`.
- Komponen section harus tetap fokus pada satu area halaman dan mengambil konten dari `src/lib/data.ts` bila konten bersifat reusable.
- Gunakan Server Component secara default, dan tambahkan `"use client"` hanya untuk komponen yang memakai state, effect, browser API, event interaktif, atau hook client.
- Gunakan `next/link` untuk link internal dan anchor navigation.
- Jangan melakukan redesign UI besar bila task hanya meminta perbaikan fungsi atau konten kecil.

6. Component logic dan props
- Component menangani rendering, komposisi UI, event handler ringan, dan state lokal UI.
- Pindahkan data portfolio yang berulang atau mudah diedit ke `src/lib/data.ts`.
- Hindari menggandakan array konten di banyak component jika sudah ada data terpusat.
- Gunakan prop eksplisit bila component perlu dibuat reusable.
- Jaga component tetap mudah dibaca, terutama section besar seperti Contact, Testimonials, Projects, dan Header.
- Jangan menaruh logic browser di Server Component.

7. Data fetching dan konten
- Sumber konten utama saat ini adalah data statis di `src/lib/data.ts`.
- Gunakan struktur data yang konsisten untuk personal info, social link, nav link, stats, skills, services, projects, testimonials, dan blog posts.
- Jangan hardcode konten berulang langsung di section bila seharusnya bisa berasal dari `src/lib/data.ts`.
- Jika menambah gambar remote, pastikan domainnya didukung oleh `next.config.ts`.
- Gunakan `next/image` untuk gambar portfolio/blog/project yang membutuhkan optimasi.
- Jangan menambah data fetching eksternal tanpa kebutuhan task yang jelas.

8. Error handling
- Tangani operasi client yang memakai browser API dengan guard yang aman agar tidak memicu error saat render.
- Bersihkan event listener, timer, dan observer di cleanup `useEffect`.
- Untuk form client, tampilkan feedback user-friendly dan jangan membuat UI terlihat berhasil bila proses belum valid.
- Jangan membocorkan secret, token, atau detail internal sensitif ke client atau console.
- Hindari `try/catch` kosong dan jangan menelan error yang memengaruhi pengalaman user.
- Gunakan fallback UI sederhana bila data opsional tidak tersedia.

9. Form handling
- Form kontak berada di UI client dan harus mempertahankan label, input, state, validasi ringan, serta feedback yang jelas.
- Validasi input wajib dilakukan sebelum submit atau simulasi submit.
- Jika nanti form dihubungkan ke API, gunakan endpoint server-side dan jangan mengirim secret dari client.
- Pertahankan aksesibilitas form melalui label, `aria-*` bila relevan, focus state, dan pesan yang bisa dipahami.
- Jangan mempercayai nilai dari client untuk proses penting bila nanti ada backend.
- Hindari menambah dependency form baru jika kebutuhan masih sederhana.

10. State management
- Gunakan React local state untuk menu mobile, scroll progress, slider, preloader, form, dan interaksi UI ringan.
- Gunakan `useEffect` hanya untuk sinkronisasi dengan browser seperti scroll, resize, IntersectionObserver, timer, dan DOM.
- Jangan menambah state library baru.
- Jangan menyimpan state penting hanya di client jika nanti ada proses server-side.
- Pastikan state client tidak menyebabkan hydration mismatch.
- Tutup menu, overlay, atau modal dengan alur yang jelas saat navigasi atau perubahan state.

11. Service layer
- Project ini belum memiliki service layer khusus, jadi jangan membuat abstraksi service tanpa kebutuhan nyata.
- Untuk helper murni yang dipakai lintas component, gunakan fungsi kecil di `src/lib/` bila pola tersebut mulai dibutuhkan.
- Untuk hook interaksi browser yang reusable, gunakan `src/components/hooks/`.
- Jangan membuat folder service/backend hanya untuk logic presentasi sederhana.
- Jika integrasi eksternal ditambahkan, pisahkan kode server-side dari component UI.
- Jaga utilitas kecil tetap type-safe dan tidak bergantung pada global browser kecuali memang hook client.

12. Styling
- Gunakan Tailwind utility, token di `tailwind.config.ts`, dan style global di `src/app/globals.css`.
- Pertahankan mobile-first breakpoint `sm`, `md`, `lg`, `xl`, dan `2xl` sesuai Tailwind config.
- Gunakan class global yang sudah ada seperti `btn-primary`, `btn-ghost`, `suptitle`, `reveal`, `project-card`, dan class `mil-*` bila relevan.
- Hindari inline style baru kecuali untuk nilai dinamis atau CSS variable yang sulit diekspresikan dengan Tailwind.
- Jangan mengganti layout global, palette, spacing, animasi, atau typography besar tanpa kebutuhan task.
- Pastikan perubahan UI tetap responsif, tidak overlap, dan tetap nyaman di mobile.

13. Auth, role, dan permission
- Project portfolio ini tidak memiliki auth, role, permission, session user, atau area admin.
- Jangan menambah autentikasi hanya untuk perubahan konten atau UI portfolio.
- Jika fitur proteksi ditambahkan nanti, tentukan kebutuhan produk dan implementasikan di server-side route yang sesuai.
- Jangan menaruh secret atau credential di component client.
- Jangan membuat asumsi bahwa pengunjung memiliki identitas login.
- Pertahankan halaman sebagai public portfolio kecuali task secara eksplisit meminta sebaliknya.

14. Konvensi TypeScript dan React
- Gunakan TypeScript untuk semua file `.ts` dan `.tsx`.
- Ikuti alias import `@/*` dari `tsconfig.json` untuk path dari `src`.
- Gunakan function component dan export default sesuai pola file sekitar.
- Tambahkan type eksplisit untuk prop, event, ref, atau data shape bila aman dan membuat kode lebih jelas.
- Hindari `any` kecuali ada alasan kuat dan lokal.
- Ikuti style import, komentar, dan penamaan yang sudah ada di file sekitar.

15. API routes
- Project ini belum memiliki API route.
- Jangan menambah route handler API kecuali task membutuhkan backend endpoint.
- Jika menambah API route, gunakan App Router route handler di `src/app/api/.../route.ts`.
- Response API harus JSON yang konsisten, validasi input, dan tidak membocorkan detail internal.
- Secret dan key hanya boleh dibaca dari environment server-side.
- Jangan memanggil API route dari client untuk pekerjaan yang bisa diselesaikan statis di build time.

16. Integrasi eksternal
- Integrasi eksternal saat ini terutama berupa gambar remote dari `images.unsplash.com` yang diizinkan di `next.config.ts`.
- Semua URL, token, key, credential, dan secret harus berasal dari `.env.local` atau environment server-side bila nanti ditambahkan.
- Gunakan `fetch` server-side atau route handler bila integrasi membutuhkan secret.
- Tambahkan timeout, fallback, atau pesan gagal yang aman bila integrasi eksternal memengaruhi UI.
- Jangan hardcode credential atau environment production di kode, CSS, data, atau dokumentasi repo.
- Perubahan domain gambar harus disertai pembaruan `next.config.ts` bila memakai `next/image`.

17. Data backend
- Project ini tidak memiliki database backend aktif.
- Data portfolio utama berada di `src/lib/data.ts` dan bersifat statis.
- Jangan menambah ORM, database, migration, atau schema tanpa task khusus.
- Jika backend data ditambahkan nanti, desain sumber data server-side dan fallback konten dengan jelas.
- Jangan memindahkan konten statis ke service eksternal jika kebutuhan masih bisa dipenuhi oleh file data lokal.
- Pastikan perubahan data tidak merusak render component yang melakukan map, filter, atau conditional rendering.

18. Testing dan quality gate
- Script yang tersedia adalah `npm run dev`, `npm run build`, `npm run start`, dan `npm run lint`.
- Gunakan `npm run build` untuk perubahan TypeScript, Next.js, metadata, image config, atau struktur component.
- Gunakan `npm run lint` bila lint Next tersedia dan konfigurasi project mendukungnya.
- Gunakan pemeriksaan manual browser untuk perubahan UI, layout, responsive, form, menu, slider, scroll reveal, atau animasi.
- Jangan mewajibkan script verifikasi yang tidak ada di `package.json`.
- Jika verifikasi gagal karena konfigurasi tool project, laporkan penyebabnya dengan jujur dan tetap cek area yang bisa diverifikasi.

19. Animasi, hook, dan interaksi
- Gunakan CSS animation dan transition yang sudah ada di `globals.css` atau Tailwind config.
- Hormati `prefers-reduced-motion` yang sudah didefinisikan di CSS global.
- Gunakan `IntersectionObserver` melalui hook yang sudah ada untuk scroll reveal bila cocok.
- Bersihkan listener, observer, interval, dan timeout pada cleanup effect.
- Jangan menambah library animasi berat jika CSS dan React state sudah cukup.
- Pastikan interaksi keyboard, focus state, dan touch target tetap layak di mobile.

20. Deployment
Set environment variable dan konfigurasi server di platform deploy. Jangan hardcode nilai rahasia di repo.

- `NEXT_PUBLIC_SITE_URL` bila dibutuhkan untuk URL publik yang aman diekspos.
- `NEXT_PUBLIC_*` hanya untuk nilai yang memang aman dilihat browser.
- Variable tanpa prefix `NEXT_PUBLIC_` hanya untuk server-side.
- Domain remote image yang dipakai `next/image`.
- Metadata title, description, dan URL canonical bila nanti ditambahkan.
- Token, API key, webhook secret, atau credential integrasi bila nanti ada backend/API.

Untuk deployment, pastikan dependency NPM terpasang, `npm run build` berhasil, environment final benar, dan konfigurasi image/domain sesuai target hosting seperti Vercel.

21. Dependencies
- Perubahan dependency harus minimal, relevan dengan task, dan kompatibel dengan Next.js 15, React 19, TypeScript 5, dan Tailwind CSS 3.4.
- Perubahan NPM wajib menjaga konsistensi `package.json` dan `package-lock.json`.
- Jangan menambah library baru jika kebutuhan masih bisa dipenuhi dengan React, Next.js, Tailwind, CSS, atau helper lokal.
- Hindari upgrade besar framework/package tanpa task khusus dan rencana regresi yang jelas.
- Jangan menambah package backend, database, auth, atau form besar untuk kebutuhan portfolio sederhana.
- Jika dependency baru memang diperlukan, jelaskan alasan, dampak bundle, dan area verifikasi.

22. Sebelum coding
Baca repo dulu dan ikuti pola yang sudah ada. Gunakan `rtk` untuk semua shell command yang dijalankan oleh AI/Codex.

Contoh:

```powershell
rtk git status
rtk npm run build
rtk npm run lint
rtk npm run dev
rtk proxy powershell -NoProfile -Command "Get-Content -LiteralPath 'src/app/page.tsx'"
rtk proxy powershell -NoProfile -Command "Get-Content -LiteralPath 'src/lib/data.ts'"
```

Sebelum mengubah kode, cek konteks file terkait dan status git. Setelah mengubah kode, jalankan verifikasi yang relevan dengan area perubahan, seperti `npm run build` untuk perubahan TypeScript/Next.js atau pemeriksaan manual browser untuk perubahan UI. Tulis ringkasan singkat tentang bagian yang sudah benar, bagian yang diubah, dan verifikasi yang dijalankan.

23. Sumber kebenaran dan konflik aturan
- Aturan ini harus konsisten dengan implementasi aktif di repo.
- Jika aturan tertulis bertentangan dengan kode aktif, evaluasi dengan kebutuhan task, praktik Next.js yang aman, dan perilaku runtime nyata.
- Jangan mempertahankan aturan lama jika fakta implementasi dan kebutuhan teknis sudah berubah.
- Saat mengubah aturan atau kode, utamakan konsistensi antara `code-rules.md`, `chat-rules.md`, README, config, component, data, CSS, dan perilaku aplikasi.
- Jika ada konflik antara pola ideal dan pola existing, pilih perubahan paling kecil yang menyelesaikan masalah tanpa merusak pengalaman portfolio.
