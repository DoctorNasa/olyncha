import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  pronouns?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Passionate about bringing authentic matcha culture to the West',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsVtLwg99okJ-O4GgBkCkarmaEXAlmouiCldrOFFCdN7CMnfY2GvQtERJioX4SwZ92G0ROabt3W3D7x3nVRFp7N2iocyMzPaMLv_4kR5P37FllTaURFAQ9uCbbbmi33-gZXe_QKpIGiwxcEeRHlJ8dC0rdJX0BTDld18en3o1K2ZepUWG-B6ttJfLY-GzpTx90u-1IWkQIdPcicgtCBiTo75JMDrpjWugsYbTR-QTUC-2pGZKaSm_5wUUaupcs0-XQQYvJn76sZx0'
  },
  {
    name: 'David Lee',
    role: 'Head Barista',
    bio: 'Master of matcha preparation with 10+ years of experience',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR3e3laE3AvDHetyK0jFYzRMiEwtHvkUxOfPU99GiSVZwjCigMXaZxDClwQDEaGnpsPK9VRH3yOncDxDluVz-ntbrYfmYUID9XRTFMa4XOnlE99mLgoz0oetiNg0wujXX1DmG5qWqu2L5MjyCZefwNLUl4rvDOYH94g09-zmqqCy4vM2wjCb23Cd5R86X_fzwWrtRxpCBh_Fp-dlk_jiUsUj1HDa-bLiaXYSyQrpoR0taLQ1ixCjZ-NRf9H8b9Rywjin10MhKhJ-8'
  },
  {
    name: 'Emily Wong',
    role: 'Marketing Manager',
    bio: 'Spreading the love for matcha through creative storytelling',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVpyX0AaKLjd0hvQ9y5csEKmTk-AGYAVnE9BANJh-pwA3YTl15rkH6MbZLTc9VIOzwtIj1a5i60YYg2wHvmcmG1htIDQYCy9foUA85DTRWi2MbOekdgPMS9xwS9XCVRysSWOh3yh6Sirep8zCijOnNiRlkfGrk-YvVcWBj1l8lw64I8t99rcSSKujU92-Nou9NZKoX4C5byKaHQW4XixXgn7TLOOAIXGPSdvLOrlLqTSfBNuvvUMfrZPZLQ0qRQliudfI0Dx0_8UY'
  }
];

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="text-center group">
      <div className="relative mb-6">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <div
            className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url('${member.imageUrl}')` }}
            role="img"
            aria-label={`${member.name}, ${member.role}`}
          ></div>
        </div>
      </div>
      <h3 className="text-[#121b0e] text-xl font-bold mb-2">
        {member.name}
        {member.pronouns && (
          <span className="block text-sm font-medium text-[#4bb814] mt-1">{member.pronouns}</span>
        )}
      </h3>
      <p className="text-[#4bb814] font-semibold mb-3">
        {member.role}
      </p>
      <p className="text-[#121b0e] text-sm leading-relaxed">
        {member.bio}
      </p>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'About Us | The Olyn Cha - Premium Matcha Tea',
  description: 'Learn about our journey, mission, and commitment to bringing the finest matcha experience to your everyday life.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#f9fcf8] min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[#121b0e] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#4bb814] mx-auto mb-8"></div>
          <p className="text-[#121b0e] text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            At Olyn Cha, we're passionate about bringing the vibrant flavors and health benefits of matcha to
            your everyday life. Our journey began with a simple desire: to share the unique experience of
            high-quality matcha with our community.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#121b0e] text-3xl md:text-4xl font-bold leading-tight mb-6">
                Our Story
              </h2>
              <p className="text-[#121b0e] text-base md:text-lg leading-relaxed mb-6">
                Founded in 2018, Olyn Cha started as a small cafe in the heart of Rochester, NH. We quickly gained a
                loyal following for our signature matcha lattes, smoothies, and baked goods.
              </p>
              <p className="text-[#121b0e] text-base md:text-lg leading-relaxed">
                As demand grew, we expanded our offerings to include online ordering and delivery, making it easier
                than ever to enjoy our matcha creations from the comfort of your home.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#4bb814] to-[#67974e] rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-5xl mb-4">🍵</div>
                <h3 className="text-2xl font-bold mb-4">Since 2018</h3>
                <p className="text-lg opacity-90">
                  Serving premium matcha experiences in Rochester, NH and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-[#f9fcf8]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-[#121b0e] text-3xl md:text-4xl font-bold leading-tight mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-[#4bb814] mx-auto mb-8"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-[#121b0e] text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              Our mission is to provide a delightful and accessible matcha experience for everyone. We
              believe in using only the highest quality ingredients, prepared with care and attention to
              detail. We strive to create a welcoming atmosphere, both in our cafe and online, where customers can
              discover the versatility and goodness of matcha.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[#121b0e] text-3xl md:text-4xl font-bold leading-tight mb-6">
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-[#4bb814] mx-auto mb-8"></div>
            <p className="text-[#121b0e] text-lg max-w-2xl mx-auto">
              The passionate people behind your perfect matcha experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality Section */}
      <section className="py-16 bg-gradient-to-br from-[#4bb814] to-[#67974e] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
              Our Commitment to Quality
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
                We source our matcha directly from renowned tea farms, ensuring the highest quality and freshness.
                Our matcha is carefully selected for its vibrant color, smooth texture, and rich flavor profile.
              </p>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                We're dedicated to sustainable practices and ethical sourcing, supporting the communities that cultivate
                our exceptional matcha.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-bold mb-2">Organic</h4>
                <p className="text-sm opacity-90">Certified organic matcha</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold mb-2">Premium</h4>
                <p className="text-sm opacity-90">Ceremonial grade quality</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-bold mb-2">Sustainable</h4>
                <p className="text-sm opacity-90">Ethical sourcing practices</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🚚</div>
                <h4 className="font-bold mb-2">Fresh</h4>
                <p className="text-sm opacity-90">Direct from Uji, Kyoto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-20 text-center">
          <h2 className="text-[#121b0e] text-3xl md:text-4xl font-bold leading-tight mb-6">
            Ready to Experience Premium Matcha?
          </h2>
          <p className="text-[#121b0e] text-lg mb-8 max-w-2xl mx-auto">
            Join our community and discover the perfect matcha experience crafted with passion and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#4bb814] text-white text-lg font-bold rounded-xl hover:bg-[#3a9610] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </Link>
            <Link href="/menu">
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#4bb814] text-[#4bb814] text-lg font-bold rounded-xl hover:bg-[#4bb814] hover:text-white transform hover:scale-105 transition-all duration-200">
                View Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
