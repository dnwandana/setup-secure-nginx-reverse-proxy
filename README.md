# Set-Up & Securing Nginx Reverse Proxy in Docker

## Running the application

1.  Have valid SSL/TLS on Your domain, and copy Your `fullchain.pem` and `privkey.pem` into this folder,
2.  Change `apiDomain` with your `domain.tld/api/` inside [`client/package.json`](./client/package.json) file,
3.  Run `docker-compose up -d`

Read more at https://wandana.vercel.app/2021/02/set-up-and-securing-reverse-proxy-with-nginx-on-docker
