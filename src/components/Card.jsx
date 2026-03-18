import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  const MotionComponent = motion.div;
  
  const baseClasses = 'bg-white rounded-2xl shadow-lg p-6 border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5 } : {}}
      className={classes}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Card;
