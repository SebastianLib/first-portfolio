import { MetadataRoute } from "next";

export default function robots(){
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],
        sitemap: "https://selicode.pl/sitemap.xml"
    }
}