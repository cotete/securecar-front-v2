/** @type {import('next').NextConfig} */

const imgWebsitesMocked = ['cdn.pixabay.com', 'www.eusemfronteiras.com.br', 'encrypted-tbn0.gstatic.com', 'encrypted-tbn0.gstatic.com', 'hypescience.com', 'www.psicologoeterapia.com.br']

const nextConfig = {
    images: {
        domains: [...imgWebsitesMocked, 'github.com'],   
    },
};

export default nextConfig;
