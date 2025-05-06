import QuickLinks from '../components/QuickLinks.jsx';
export default function Home() {
  return (
    <main className="p-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to TMU VSA</h1>
        <p className="text-lg">Connecting students with Vietnamese culture</p>
        <div className="grid grid-cols-3 gap-4">
          {[1,2,3].map(i=><img key={i} src={`https://via.placeholder.com/300x200?text=Photo+${i}`} className="rounded" />)}
        </div>
      </section>
      <QuickLinks />
    </main>
  );
}
