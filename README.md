# Redux toolkit ile e ticaret sitesi
- Sıralama İşlemleri
- Sayfalandırma(Pagination)
- Gruplandırma

# Kütüphaneler
- Sayfa Geçişleri için: 
    react-router-dom
- icon için
    react-icons
- Paginate işlemleri için:
    react-paginate
- slayt için:
    react-slick
    css modül:
    slick-carousel
    app.js içerisine ekle:
        import "slick-carousel/slick/slick.css";
        import "slick-carousel/slick/slick-theme.css";

- redux için:
    @reduxjs/toolkit
    react-redux
- tailwind için:
    npm install -D tailwindcss
    npx tailwindcss init

    tailwind.config.js içeriini değiştirin

        /** @type {import('tailwindcss').Config} */
            module.exports = {
                 content: [
                      "./src/**/*.{js,jsx,ts,tsx}",
                     ],
            theme: {
             extend: {},
            },
             plugins: [],
            }
        index.css içerisine ekleyin:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;# AlisverisSepeti_ReduxToolkit
