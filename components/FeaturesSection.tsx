import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  layout?: 'grid' | 'horizontal';
  background?: 'white' | 'green' | 'gradient';
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = "Why Choose Olyn Cha",
  subtitle = "Experience the difference with our premium matcha",
  features,
  layout = 'grid',
  background = 'white'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    green: 'bg-gradient-sage',
    gradient: 'bg-gradient-warm'
  };

  const textColors = {
    white: 'text-gray-900',
    green: 'text-green-900',
    gradient: 'text-gray-900'
  };

  const subtitleColors = {
    white: 'text-gray-600',
    green: 'text-green-800',
    gradient: 'text-gray-600'
  };

  return (
    <section className={`py-24 px-4 ${backgroundClasses[background]} relative overflow-hidden`}>
      {/* Background Pattern */}
      {background !== 'white' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-60 right-20 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6">
            ✨ Our Promise
          </span>
          <h2 className={`text-display font-playfair mb-6 ${textColors[background]}`}>
            {title}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${subtitleColors[background]}`}>
            {subtitle}
          </p>
        </div>

        {/* Features */}
        {layout === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card bg-white/90 backdrop-blur-sm p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-matcha rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-matcha rounded-3xl flex items-center justify-center animate-float">
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className={`font-playfair text-2xl font-semibold mb-4 ${textColors[background]}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${subtitleColors[background]}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
