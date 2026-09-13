function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
      <div className="text-indigo-500 mb-5">{icon}</div>

      <h3 className="text-sm font-bold text-slate-900 mb-3">{title}</h3>

      <p className="text-xs text-slate-500 leading-6">{text}</p>
    </div>
  );
}

export default ServiceCard;
