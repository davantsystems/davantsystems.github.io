import React from 'react';

interface TypeformBookingButtonProps {
  buttonText?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const TypeformBookingButton: React.FC<TypeformBookingButtonProps> = ({ 
  buttonText = "Book Your Event",
  className = "",
  variant = "primary",
  size = "md"
}) => {
  const formId = "pAtECRFo";

  React.useEffect(() => {
    // Load Typeform script if not already loaded
    const existingScript = document.querySelector('script[src*="typeform.com"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Base button classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300 transform
    ${sizeClasses[size]}
  `;

  // Variant classes matching the GradientButton styles
  const variantClasses = {
    primary: `
      text-white
      bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600
      hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-700
      shadow-xl shadow-purple-500/30
      hover:shadow-2xl hover:shadow-purple-500/50
      hover:scale-[1.02]
    `,
    secondary: `
      text-white
      bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
      hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700
      shadow-lg shadow-blue-500/20
      hover:shadow-xl hover:shadow-blue-500/40
      hover:scale-[1.02]
    `
  };

  return (
    <button
      data-tf-popup={formId}
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      data-tf-hidden="source=photobooth_page"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default TypeformBookingButton;