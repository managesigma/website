import BackToHome from "../components/BackToHome";

export const metadata = {
  title: 'Disclaimer | Sigmatronics Innovation',
  description: 'Read the disclaimer for Sigmatronics Innovation Private Limited including limitations of liability and advisory statements.',
};

export default function DisclaimerPage() {
  return (
    <div>
      <BackToHome />
      <main className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
      <section className="space-y-6 rounded-4xl border border-slate-200 bg-white p-10 shadow-lg">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-600">Disclaimer</p>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Disclaimer</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            The information provided on this website is for general informational and business purposes only. While Sigmatronics Innovation Private Limited strives to keep all information accurate and updated, we make no guarantees regarding completeness, accuracy, reliability, technical suitability, or availability of services or information.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Technology & Solution Disclaimer</h2>
            <p className="mt-4 text-slate-600">
              All hardware, software, IoT, automation, and consultancy solutions may vary based on technical feasibility, client requirements, deployment conditions, third-party dependencies, and industry-specific constraints.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">External Links Disclaimer</h2>
            <p className="mt-4 text-slate-600">
              This website may contain links to external websites or third-party platforms. Sigmatronics does not control or guarantee the accuracy or security of third-party content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Professional Advice Disclaimer</h2>
            <p className="mt-4 text-slate-600">
              Content on this website should not be considered legal, financial, or professional advisory unless specifically stated under a formal agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
            <p className="mt-4 text-slate-600">
              Sigmatronics Innovation Private Limited shall not be held responsible for any direct or indirect losses arising from the use of this website or reliance on its content.
            </p>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
