function StatCard({ number, title, text }) {
  return (
    <div className="p-5 border-b lg:border-b-0 lg:border-r border-blue-900 last:border-r-0">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-400">{number}</h3>

      <h4 className="text-xs font-semibold text-white mt-1">{title}</h4>

      <p className="text-[10px] text-slate-400 mt-2 leading-4">{text}</p>
    </div>
  );
}

export default StatCard;
