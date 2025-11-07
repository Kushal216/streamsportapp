import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: November 7, 2025</p>

        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p className="mb-6">
          Welcome to StreamSport. These Terms and Conditions govern your access to and use of our website, mobile app, and related services.
        </p>
        <p className="mb-6">
          By accessing or using StreamSport, you agree to be bound by these Terms. If you do not agree, you may not use our services. Please read these Terms carefully before proceeding.
        </p>

        <h2 className="text-2xl font-semibold mb-3">1. Use of the Platform</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>You must be at least 13 years old to use StreamSport.</li>
          <li>You agree to use the Platform only for lawful purposes and in accordance with these Terms.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
          <li>Unauthorized use of the Platform, including attempts to access restricted areas or data, may result in suspension or termination of your account.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">2. Account Registration</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>To access certain features (such as live streaming or content management), users may need to create an account. When registering:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide accurate, current, and complete information.</li>
              <li>Do not impersonate others or create accounts using false identities.</li>
              <li>Notify us immediately of any unauthorized access or security breach.</li>
            </ul>
          </li>
          <li>We reserve the right to suspend or delete accounts that violate our Terms or misuse the Platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">3. Streaming and Content Ownership</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>All content you stream, upload, or share through StreamSport remains your property, but you grant StreamSport a non-exclusive, royalty-free license to host, distribute, and display such content for streaming functionality.</li>
          <li>You are solely responsible for ensuring that your streamed content does not infringe copyrights, trademarks, or third-party rights.</li>
          <li>We may remove or disable content that violates any law, regulation, or our policies.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">4. Third-Party Integrations</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>StreamSport allows broadcasting to external platforms (e.g., Facebook, YouTube, Twitch).</li>
          <li>By connecting to these services, you authorize StreamSport to interact with your linked accounts under their respective APIs.</li>
          <li>You acknowledge that third-party platforms are governed by their own terms and privacy policies, which we do not control or endorse.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">5. Payments and Subscriptions</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Certain features may require paid subscriptions or one-time payments.</li>
          <li>Payments are securely processed via third-party gateways, and we do not store credit card or financial details.</li>
          <li>All fees are non-refundable, except as required by law or in special cases determined by our support team.</li>
          <li>Subscription plans may renew automatically unless canceled before the renewal date.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">6. Prohibited Activities</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Users must not:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Stream or upload content that promotes violence, hate speech, nudity, or illegal activities.</li>
              <li>Attempt to hack, reverse-engineer, or disrupt our Platform or servers.</li>
              <li>Misuse the Platform for unauthorized advertising or spamming.</li>
              <li>Impersonate StreamSport representatives or mislead others.</li>
            </ul>
          </li>
          <li>Violation of these conditions may result in account suspension or legal action.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">7. Intellectual Property Rights</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>The Platform, including its design, code, logo, and branding, is the property of StreamSport.</li>
          <li>You may not copy, modify, distribute, or resell any part of our Platform without prior written consent.</li>
          <li>All trademarks, logos, and service names used within the Platform belong to their respective owners.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
        <p className="mb-6">
          StreamSport is provided on an “as-is” and “as-available” basis. We make no warranties or guarantees about uninterrupted service, accuracy, or performance. StreamSport shall not be held liable for any indirect, incidental, or consequential damages arising from use or inability to use the Platform.
        </p>

        <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>We reserve the right to suspend or terminate your account at any time if we detect:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Violation of these Terms.</li>
              <li>Fraudulent or abusive behavior.</li>
              <li>Legal or policy compliance requirements.</li>
            </ul>
          </li>
          <li>Upon termination, your access to the Platform will immediately cease.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">10. Updates to These Terms</h2>
        <p className="mb-6">
          We may update or modify these Terms from time to time. Updated versions will be posted on our website with a new “Last Updated” date. Continued use of the Platform after changes are posted signifies your acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by and construed under the laws of Nepal. Any disputes shall be resolved in the courts of Kathmandu, Nepal.
        </p>
      </section>
      <Footer />
    </main>
  );
}
