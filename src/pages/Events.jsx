import Timeline from '../components/Timeline';
export default function Events() {
  return (
    <main className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Upcoming Events</h2>
      <p>Join us for exciting cultural events! Click RSVP to register.</p>
      <button className="px-4 py-2 bg-yellow-400 rounded"><a href="https://forms.gle/...">RSVP Now</a></button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe className="w-full h-64" src="https://maps.google.com/...embed"></iframe>
        <button className="px-4 py-2 bg-red-600 text-white rounded">Add to Your Calendar 📅</button>
      </div>
      <h3 className="text-xl font-semibold">Calendar</h3>
      <iframe src="https://calendar.google.com/calendar/embed?..." className="w-full h-96 border"></iframe>
      <h3 className="text-xl font-semibold">Past Events</h3>
      <Timeline />
    </main>
  );
}
