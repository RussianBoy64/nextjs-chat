import type { Metadata } from "next";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./global.scss";

export const metadata: Metadata = {
  title: "Chat UI",
  description: "Small chat application",
};

interface layoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <Header />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
