FROM nginx:alpine
COPY index.html about.html endorsements.html get-involved.html donate.html lawn-signs.html faq.html /usr/share/nginx/html/
COPY robots.txt sitemap.xml site.webmanifest /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
EXPOSE 80
