# Meal App

Expo ile geliştirilmiş bir React Native yemek tarif uygulaması. Kategorilere göre yemekleri gezebilir, detaylarına bakabilir ve favorilerine ekleyebilirsin.

## Özellikler

- **Kategoriler** — Renkli ızgara ile yemek kategorilerini listele
- **Yemek listesi** — Seçilen kategoriye ait yemekleri görüntüle
- **Yemek detayı** — Görsel, süre, zorluk, malzemeler ve adımlar
- **Favoriler** — Yıldız ile favoriye ekle / çıkar; drawer üzerinden favorilere git
- **Drawer menü** — Categories ve Favorites arasında hızlı geçiş
- **Context API** — Favori durumu uygulama genelinde paylaşılır

## Teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| Expo SDK 56 | Uygulama iskeleti |
| React Native | UI |
| React Navigation | Stack + Drawer navigasyon |
| React Context | Favori state yönetimi |
| react-native-gesture-handler / reanimated | Drawer jestleri ve animasyonlar |

## Kurulum

```bash
npm install
npx expo start
```

Ardından:

- Android emülatör / cihaz için `a`
- iOS simülatör için `i`
- Expo Go ile QR kodu tarayabilirsin

## Proje yapısı

```
meal-app/
├── App.js                 # Navigasyon + Context provider
├── Screens/
│   ├── CategoryScreen.js  # Kategori ızgarası
│   ├── MealsOverViewScreen.js
│   ├── MealDetailsScreen.js
│   └── FavoriteScreen.js  # Favori listesi / boş durum
├── components/
│   ├── CategoryGridTitle.js
│   ├── IconButtons.js
│   ├── MealList/          # Liste + MealItem
│   └── MealDetail/        # Detay bileşenleri
├── store/context/
│   └── favorite-context.js
├── data/
│   └── dummy-data.js      # Örnek kategori ve yemek verisi
└── models/
    ├── category.js
    └── meal.js
```

## Navigasyon akışı

```
Drawer
├── Categories  →  Meals Overview  →  Meal Details (★ favori)
└── Favorites
```

1. Drawer’dan **Categories** aç
2. Bir kategori seç → yemek listesi
3. Bir yemeğe dokun → detay ekranı
4. Sağ üstteki ★ ile favoriye ekle
5. Drawer’dan **Favorites** ile favorilerini gör

Favori yoksa ekranda **Favoriniz yok** mesajı gösterilir.

## Notlar

- Drawer jestleri için kökte `GestureHandlerRootView` kullanılır (Expo 56 / gesture-handler 2.x).
- Favoriler oturum boyunca Context’te tutulur; uygulama kapanınca sıfırlanır (kalıcı depolama yok).
