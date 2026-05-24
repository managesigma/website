import BackToHome from "../components/BackToHome";

export const metadata = {
  title: 'Terms & Conditions | Sigmatronics Innovation',
  description: 'Review the Terms & Conditions for using Sigmatronics Innovation Private Limited website, products, and services.',
};

export default function TermsPage() {
  return (
    <div>
      <BackToHome />
      <main className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
      <section className="space-y-6 rounded-4xl border border-slate-200 bg-white p-10 shadow-lg">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-orange-600">Terms & Conditions</p>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Terms & Conditions</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            By accessing or using the Sigmatronics Innovation Private Limited website, products, platforms, or services, you agree to comply with the following Terms & Conditions.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Website Usage</h2>
            <p className="mt-4 text-slate-600">
              Users agree to use the website lawfully and responsibly. Unauthorized use, misuse, or disruption of website operations is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Intellectual Property</h2>
            <p className="mt-4 text-slate-600">
              All website content, designs, graphics, logos, product information, software, and technical materials are the intellectual property of Sigmatronics Innovation Private Limited unless otherwise stated.
            </p>
            <p className="mt-3 text-slate-600">
              Unauthorized copying, reproduction, or redistribution is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Services & Solutions</h2>
            <p className="mt-4 text-slate-600">
              All products, services, consultancy, software, and hardware solutions are subject to project scope, technical feasibility, and mutual agreement.
            </p>
            <p className="mt-4 text-slate-600">Sigmatronics reserves the right to:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600">
              <li>Modify services</li>
              <li>Update pricing</li>
              <li>Change technical specifications</li>
              <li>Refuse service requests where necessary</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Third-Party Platforms</h2>
            <p className="mt-4 text-slate-600">
              Our website or services may include integrations or references to third-party tools and services. Sigmatronics is not responsible for external platforms or their policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
            <p className="mt-4 text-slate-600">
              Sigmatronics Innovation Private Limited shall not be liable for indirect or consequential damages, temporary service interruptions, technical failures outside our control, or third-party misuse of systems or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">User Responsibilities</h2>
            <p className="mt-4 text-slate-600">Users are responsible for:</p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600">
              <li>Providing accurate information</li>
              <li>Maintaining confidentiality of credentials</li>
              <li>Using platforms ethically and legally</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Governing Law</h2>
            <p className="mt-4 text-slate-600">
              These Terms & Conditions shall be governed in accordance with applicable laws and regulations in India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Updates</h2>
            <p className="mt-4 text-slate-600">
              Sigmatronics reserves the right to modify these Terms & Conditions at any time without prior notice.
            </p>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
