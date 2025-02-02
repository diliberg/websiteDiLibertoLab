# Di Liberto Lab Website

## Development Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Production Build

1. Create a production build:
```bash
npm run build
```

This will create a `dist` folder containing the static files ready for deployment.

## Deployment Options

### Option 1: Static Hosting (Recommended)

You can host the contents of the `dist` folder on any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Firebase Hosting

### Option 2: Self-Hosting

If you're using your own server:

1. Install a web server (e.g., Nginx or Apache)
2. Copy the contents of the `dist` folder to your web server's public directory
3. Configure your web server to serve the static files

#### Example Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Important Notes

1. Update image URLs:
   - Currently, images are loaded from `diliberg.net`
   - For self-hosting, you should:
     - Download the images
     - Host them in your `public` folder
     - Update the image URLs in the components

2. Environment Variables:
   - If you're using any environment variables, create a `.env` file based on `.env.example`
   - Set the appropriate values for your environment

3. SEO:
   - Update the meta tags in `index.html` for your domain
   - Consider adding a sitemap.xml
   - Add appropriate robots.txt

4. Analytics:
   - Add your preferred analytics solution
   - Update privacy policy if needed

## Maintenance

1. Keep dependencies updated:
```bash
npm update
```

2. Regular security updates:
```bash
npm audit fix
```

3. Monitor performance using browser dev tools