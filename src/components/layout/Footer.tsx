import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { mainNav, footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-light-grey bg-brown text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold">
              {siteConfig.name}
            </h3>
            <p className="mt-3 max-w-sm text-sm text-cream/80">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold">Navigasi</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold">Legal</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/80 hover:text-cream"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="text-cream/80 hover:text-cream"
              >
                <Mail size={20} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-cream/80 hover:text-cream"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/20 pt-6 text-center text-xs text-cream/60">
        © {siteConfig.year} {siteConfig.name}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}