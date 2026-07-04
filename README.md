# حروف کی دنیا

یہ ایک static HTML/CSS/JavaScript prototype ہے۔ `index.html` project root میں موجود ہے تاکہ Vercel پر بغیر build step کے deploy ہو سکے۔

## Vercel Deployment

Vercel پر project import کرتے وقت یہ settings استعمال کریں:

- Framework Preset: `Other`
- Build Command: خالی چھوڑیں
- Output Directory: `.`
- Install Command: خالی چھوڑ سکتے ہیں

اس setup میں Vercel root directory سے `index.html` serve کرے گا، اس لیے app کو کسی framework یا bundler کی ضرورت نہیں ہے۔
