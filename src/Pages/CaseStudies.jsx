// import { ArrowRight } from "lucide-react";

// function CaseStudies() {
//   const cases = [
//     {
//       number: "01",
//       title: "Building a Business Development Operation From the Ground Up",
//       description:
//         "Developed a structured prospecting and partnership process designed to create consistent business opportunities.",
//       result: "$20K+",
//       resultText: "Revenue Generated",
//     },
//     {
//       number: "02",
//       title: "Strategic Partnership Development",
//       description:
//         "Created relationships with potential partners and decision makers to expand business opportunities.",
//       result: "50+",
//       resultText: "Targeted Prospects",
//     },
//     {
//       number: "03",
//       title: "Client Acquisition Strategy",
//       description:
//         "Created a structured approach to identifying prospects and converting conversations into opportunities.",
//       result: "4+",
//       resultText: "Qualified Meetings",
//     },
//   ];

//   return (
//     <section className="min-h-screen  bg-[#030914]  py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <p className="text-xs tracking-widest text-indigo-200 font-semibold">
//           CASE STUDIES
//         </p>

//         <h1 className="text-2xl text-white md:text-4xl font-bold mt-4">
//           Turning strategy into <br /> measurable Results{" "}
//         </h1>

//         <div className="grid md:grid-cols-2 gap-6 mt-14">
//           {cases.map((item) => (
//             <div
//               key={item.number}
//               className="bg-[#071a3a] text-white rounded-xl p-8"
//             >
//               <p className="text-indigo-400 text-xs font-semibold">
//                 CASE STUDY {item.number}
//               </p>

//               <h2 className="text-xl font-bold leading-7 mt-5">{item.title}</h2>

//               <p className="text-sm text-slate-400 leading-6 mt-4">
//                 {item.description}
//               </p>

//               <div className="border-t border-slate-700 mt-8 pt-6">
//                 <p className="text-3xl font-bold text-blue-400">
//                   {item.result}
//                 </p>

//                 <p className="text-xs text-slate-400 mt-1">{item.resultText}</p>
//               </div>

//               <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-xs mt-6">
//                 View Case Study
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gradient-to-r mt-16 from-blue-600 via-purple-600 to-purple-700 px-6 py-7 text-white">
//           <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
//             <h2 className="text-xl font-semibold">
//               Let's turn your next opportunity
//               <br />
//               into measurable growth.
//             </h2>

//             <button className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-medium shadow-lg hover:bg-blue-400">
//               Let's Connect
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CaseStudies;
