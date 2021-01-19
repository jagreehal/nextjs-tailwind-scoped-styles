import TailwindClassComponent from '@/components/TailwindClassComponent';
import TailwindScopedComponent from '@/components/TailwindScopedComponent';

export default function IndexPage() {
  const handleClick = () => {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode('.bg-green-500 {background-color:hotpink}'));
    document.getElementsByTagName('head')[0].appendChild(style);
  };

  return (
    <div className="flex flex-col space-y-4 m-8 max-w-md mx-auto text-gray-900">
      <h1 className="text-2xl font-bold">Next.js Tailwind Scoped Style Example</h1>
      <p>
        The two buttons below look the same, but one uses scoped styles. If a naming conflict
        occurs, the button that uses scoped styles does not get affected.
      </p>
      <TailwindClassComponent />
      <TailwindScopedComponent />
      <button
        className="border-2 border-blue-800 bg-blue-600 text-white rounded-md px-4 py-2 m-2"
        onClick={handleClick}
      >
        Clicking on this adds a `.bg-green-500` class into the document
      </button>
    </div>
  );
}
