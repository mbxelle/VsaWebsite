import { useRef, useEffect } from 'react';
export default function Timeline() {
  const items = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => e.target.classList.toggle('[200~opacity-100 translate-y-0[201~', e.isIntersecting)); },
      { threshold: 0.1 }
    );
    items.current.forEach(el => observer.observe(el));
    return () => items.current.forEach(el => observer.unobserve(el));
  }, []);
  return (
    <div className="space-y-4">
      {['Intro','Growth','Celebration'].map((label,i) => (
        <div key={i}
             ref={el => items.current[i]=el}
             className="opacity-0 transform translate-y-10 transition duration-700 bg-white p-4 rounded shadow">
          <strong>{label}</strong><p>Details about {label} phase.</p>
        </div>
      ))}
    </div>
  );
}

