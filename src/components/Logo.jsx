import detiklogo from '../assets/toppng.com-detik-logo-1249x355.png';

export default function Logo({ white }) {
  return (
    <div className="flex items-center">
      <img 
        src={detiklogo} 
        alt="Detik Logo" 
        className={`h-8 ${white ? 'filter brightness-0 invert' : ''}`} 
      />
    </div>
  );
}