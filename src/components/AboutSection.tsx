import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f9fcf8] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[960px] mx-auto">
          {/* Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-[#121b0e] text-[32px] font-bold leading-tight">
              About Us
            </h1>
          </div>

          {/* Intro */}
          <p className="text-[#121b0e] text-base leading-relaxed pb-3 pt-1 px-4">
            At Matcha Moments, we're passionate about bringing the vibrant flavors and health benefits of
            matcha to your everyday life. Our journey began with a simple desire: to share the unique
            experience of high-quality matcha with our community. From sourcing the finest matcha powder to
            crafting innovative recipes, we're committed to excellence in every cup.
          </p>

          {/* Story */}
          <h2 className="text-[#121b0e] text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Story
          </h2>
          <p className="text-[#121b0e] text-base leading-relaxed pb-3 pt-1 px-4">
            Founded in 2018, Matcha Moments started as a small cafe in the heart of the city. We quickly
            gained a loyal following for our signature matcha lattes, smoothies, and baked goods. As demand
            grew, we expanded our offerings to include online ordering and delivery, making it easier than
            ever to enjoy our matcha creations from the comfort of your home.
          </p>

          {/* Mission */}
          <h2 className="text-[#121b0e] text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Mission
          </h2>
          <p className="text-[#121b0e] text-base leading-relaxed pb-3 pt-1 px-4">
            Our mission is to provide a delightful and accessible matcha experience for everyone. We believe
            in using only the highest quality ingredients, prepared with care and attention to detail. We
            strive to create a welcoming atmosphere, both in our cafe and online, where customers can
            discover the versatility and goodness of matcha.
          </p>

          {/* Team */}
          <h2 className="text-[#121b0e] text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">
            Meet the Team
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                img:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsVtLwg99okJ-O4GgBkCkarmaEXAlmouiCldrOFFCdN7CMnfY2GvQtERJioX4SwZ92G0ROabt3W3D7x3nVRFp7N2iocyMzPaMLv_4kR5P37FllTaURFAQ9uCbbbmi33-gZXe_QKpIGiwxcEeRHlJ8dC0rdJX0BTDld18en3o1K2ZepUWG-B6ttJfLY-GzpTx90u-1IWkQIdPcicgtCBiTo75JMDrpjWugsYbTR-QTUC-2pGZKaSm_5wUUaupcs0-XQQYvJn76sZx0",
              },
              {
                name: "David Lee",
                role: "Head Barista",
                img:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAR3e3laE3AvDHetyK0jFYzRMiEwtHvkUxOfPU99GiSVZwjCigMXaZxDClwQDEaGnpsPK9VRH3yOncDxDluVz-ntbrYfmYUID9XRTFMa4XOnlE99mLgoz0oetiNg0wujXX1DmG5qWqu2L5MjyCZefwNLUl4rvDOYH94g09-zmqqCy4vM2wjCb23Cd5R86X_fzwWrtRxpCBh_Fp-dlk_jiUsUj1HDa-bLiaXYSyQrpoR0taLQ1ixCjZ-NRf9H8b9Rywjin10MhKhJ-8",
              },
              {
                name: "Emily Wong",
                role: "Marketing Manager",
                img:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBVpyX0AaKLjd0hvQ9y5csEKmTk-AGYAVnE9BANJh-pwA3YTl15rkH6MbZLTc9VIOzwtIj1a5i60YYg2wHvmcmG1htIDQYCy9foUA85DTRWi2MbOekdgPMS9xwS9XCVRysSWOh3yh6Sirep8zCijOnNiRlkfGrk-YvVcWBj1l8lw64I8t99rcSSKujU92-Nou9NZKoX4C5byKaHQW4XixXgn7TLOOAIXGPSdvLOrlLqTSfBNuvvUMfrZPZLQ0qRQliudfI0Dx0_8UY",
              },
            ].map((m) => (
              <div key={m.name} className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: `url(${m.img})` }}
                  />
                </div>
                <div>
                  <p className="text-[#121b0e] text-base font-medium">{m.name}</p>
                  <p className="text-[#67974e] text-sm">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quality */}
          <h2 className="text-[#121b0e] text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Commitment to Quality
          </h2>
          <p className="text-[#121b0e] text-base leading-relaxed pb-3 pt-1 px-4">
            We source our matcha directly from renowned tea farms, ensuring the highest quality and freshness.
            Our matcha is carefully selected for its vibrant color, smooth texture, and rich flavor profile.
            We're dedicated to sustainable practices and ethical sourcing, supporting the communities that
            cultivate our exceptional matcha.
          </p>
          <div className="flex px-4 py-3 justify-start">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-xl bg-[#4bb814] px-4 text-sm font-bold tracking-[0.015em] text-[#121b0e] hover:brightness-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
