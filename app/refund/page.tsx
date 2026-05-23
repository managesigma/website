export const metadata = {
  title: 'Refund Policy | Sigmatronics Innovation',
  description: 'Understand the refund policy for Sigmatronics Innovation Private Limited services, hardware, and consultancy engagements.',
};

export default function RefundPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
      <section className="space-y-6 rounded-4xl border border-slate-200 bg-white p-10 shadow-lg">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Refund Policy</p>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Refund Policy</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Sigmatronics Innovation Private Limited is committed to delivering quality technology services, solutions, and consultancy. Refund eligibility depends on the type of service or project engagement.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Software & Development Services</h2>
            <p className="mt-4 text-slate-600">
              Due to the customized nature of software development, automation systems, and technology consultancy services, payments made for completed work, milestones, or delivered services are generally non-refundable.
            </p>
            <p className="mt-3 text-slate-600">
              Refund requests may be reviewed on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Hardware & Electronics</h2>
            <p className="mt-4 text-slate-600">
              Refunds or replacements for hardware products may be considered only if the product is defective upon delivery, the issue is reported within the applicable support period, and the product has not been physically damaged or misused.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Consultancy Services</h2>
            <p className="mt-4 text-slate-600">
              Consultation fees for advisory sessions, planning, architecture discussions, or technical guidance are non-refundable once services are delivered.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Cancellation Policy</h2>
            <p className="mt-4 text-slate-600">
              Project cancellations must be communicated formally. Any completed work, resource allocation, or incurred costs may be deducted before processing applicable refunds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Processing Time</h2>
            <p className="mt-4 text-slate-600">
              Approved refunds, if applicable, may take several business days depending on banking or payment processing timelines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Contact for Refunds</h2>
            <p className="mt-4 text-slate-600">
              For refund-related requests, users may contact Sigmatronics through official support or business communication channels.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
