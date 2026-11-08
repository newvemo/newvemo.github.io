# NewVemo Technology website

Static site (HTML/CSS/JS) powered by the same Supabase project as ShuleBrain.

Pages: index.html (home), downloads.html, blogs.html, blog-post.html, contact.html, admin.html

## Setup
1. Supabase > SQL Editor: run `newvemo-migration.sql` once.
2. Replace these 3 files in the ShuleBrain site with the ones in `shulebrain-patches/`
   (download.html, blogs.html, blog-post.html) so ShuleBrain only shows its own category/posts.
3. Push this folder to GitHub, then Settings > Pages > branch main / root.
4. Open /admin.html, sign in with your Supabase admin user, add software (choose a category) and posts.

Contact form: EmailJS (same service/template/public key as ShuleBrain).
