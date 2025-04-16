import React from "react";

export default function SanghaHome() {
  return (
    <main className="min-h-screen bg-[#f9f7f4] text-[#222] font-sans">
      <header className="flex items-center justify-center py-6">
        <img src="/logo-sangha.png" alt="Logo SANGHA" className="h-20 w-auto" />
      </header>

      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">SANGHA</h1>
        <p className="text-xl max-w-xl mx-auto mb-8">
          Diseño, estrategia financiera y propósito emprendedor en comunidad.
        </p>
        <button className="bg-[#5CBB7E] text-white px-6 py-3 rounded-2xl text-lg font-bold shadow hover:bg-[#4DA96D] transition">
          Conocé nuestros estudios
        </button>
      </section>

      <section className="py-16 px-6 bg-[#B4A7D6]">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Nuestros estudios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "FOCA",
              color: "#1D3B6D",
              symbol: <div className="w-11 h-11 bg-current rounded-full"></div>,
            },
            {
              name: "Finanzas Zen",
              color: "#5CBB7E",
              symbol: "◐",
            },
            {
              name: "BLÖMS",
              color: "#00BCD4",
              symbol: "▲",
            },
            {
              name: "INKao",
              color: "#F6A800",
              symbol: "■",
            },
          ].map((studio) => (
            <div
              key={studio.name}
              className="rounded-2xl p-6 shadow text-white hover:scale-105 transition transform flex flex-col items-center text-center justify-between"
              style={{ backgroundColor: studio.color }}
            >
              <div className="text-6xl mb-4 h-20 flex items-center justify-center">
                {studio.symbol}
              </div>
              <h3 className="text-xl font-semibold mb-1">{studio.name}</h3>
              <p className="text-sm text-white/80">
                Descripción breve del enfoque y servicios.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f0eee8] text-center">
        <h2 className="text-3xl font-semibold mb-6">Sobre SANGHA</h2>
        <p className="max-w-3xl mx-auto text-lg">
          SANGHA es una comunidad de estudios creativos y estratégicos dedicada a acompañar a personas emprendedoras a través del diseño, la educación, el coaching financiero y la innovación. Creemos en la colaboración, el propósito y el desarrollo integral.
        </p>
      </section>

      <section className="py-20 px-6 bg-[#5CBB7E] text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">Sumate a la comunidad</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg text-white">
          Recibí recursos, talleres y novedades sobre nuestros estudios y el ecosistema emprendedor.
        </p>
        <div className="flex justify-center flex-wrap gap-2">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="px-4 py-2 rounded-l-xl border border-gray-300"
          />
          <button className="bg-[#2D4C7A] text-white px-4 py-2 rounded-r-xl hover:bg-[#1f3556] transition">
            Suscribirme
          </button>
        </div>
      </section>

      <footer className="bg-[#9676d8] text-white py-6 text-center font-bold">
        2025 <a href="/" className="underline hover:text-white/80">SANGHA</a>, Diseño WEB <a href="https://foca.ar" className="underline hover:text-white/80">FOCA.AR</a>, Design concept <a href="#" className="underline hover:text-white/80">BLÖMS Consultora</a>
      </footer>
    </main>
  );
}
