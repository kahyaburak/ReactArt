import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 md-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain"
      />
      <h1 className="font-title text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-700">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
