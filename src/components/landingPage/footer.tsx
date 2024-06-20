import React from "react";
import MunkaiLogo from "../../../public/images/munkai-logo.png";
import MunkaiLogoDark from "../../../public/images/monkai-logo-white.png";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const litepaper = "../../../public/documents/litepaper.pdf";

  return (
    <section className="bg-secondary mt-20 border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/4 flex flex-col space-y-4">
            <Image
              src={MunkaiLogoDark}
              alt="Munkai"
              className="h-6 w-24 md:h-8 md:w-32"
            />
            <p className="text-sm">
              Creating a Read-to-Earn (R2E) platform on the blockchain for
              readers, crypto enthusiasts, and creators.
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0">
            <p className="font-semibold uppercase">Social Links</p>
            <div className="flex flex-col text-primary text-sm space-y-2">
              <Link
                href="https://t.me/munkaiArt"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </Link>
              <Link
                href="https://twitter.com/munkaiart?t=UkGK2f-YT799rXXMfvIyuQ&s=09"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com/munkaiart?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </Link>
              <Link
                href="https://youtube.com/channel/UCgpv6rt9FQwOhXa8A0ij-_A"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0">
            <p className="font-semibold uppercase">Contact Us</p>
            <div className="flex flex-col text-primary text-sm space-y-2">
              <Link href="mailto:hello@munkai.art">hello@munkai.art</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:w-1/4">
            <p className="font-semibold uppercase">Legal</p>
            <div className="flex flex-col text-primary text-sm space-y-2">
              <Link href="/terms" target="_blank" rel="noopener noreferrer">
                Terms and conditions
              </Link>
              <Link
                href={litepaper}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Litepaper
              </Link>
              <Link
                href="https://github.com/cyberscope-io/audits/blob/main/munk/audit.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Audit Report
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <hr className="my-4 border-primary" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Munkai</span>. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
