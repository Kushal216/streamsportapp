import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: November 7, 2025</p>

        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          Welcome to <strong>StreamSport</strong>. StreamSport is a live sports broadcasting platform 
          that enables users to stream and manage live matches across social media platforms, including Facebook, YouTube, and others.
        </p>
        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and protect your personal information when you access or use our website, 
          mobile application, and related services (collectively, the “Platform”). By using StreamSport, you agree to the practices outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-2">We collect the following types of information to provide and improve our services:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Account Information:</strong> Name, email address, phone number, and login credentials.</li>
          <li><strong>Streaming Data:</strong> Details related to live broadcasts, including stream titles, duration, connected platforms, and engagement metrics.</li>
          <li><strong>Device & Usage Data:</strong> Device type, operating system, browser version, IP address, and usage statistics.</li>
          <li><strong>Media Content:</strong> Uploaded or streamed videos, thumbnails, and other related media files.</li>
          <li><strong>Payment Information:</strong> Billing details and transaction records (processed securely by third-party payment gateways).</li>
          <li><strong>Support & Feedback:</strong> Any communication you send to our support team, including bug reports or feature requests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Service Operation:</strong> To enable live streaming, manage user accounts, and synchronize with social platforms.</li>
          <li><strong>Improvement & Analytics:</strong> To analyze usage trends and improve performance and user experience.</li>
          <li><strong>Notifications & Updates:</strong> To send important updates, feature releases, or service announcements.</li>
          <li><strong>Payment & Subscription Management:</strong> To process payments and maintain transaction history.</li>
          <li><strong>Security & Compliance:</strong> To detect, prevent, and investigate security incidents or policy violations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">3. Legal Basis for Processing</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Consent:</strong> You have provided explicit consent during registration or when using specific features.</li>
          <li><strong>Contractual Necessity:</strong> Data processing is required to provide our streaming services.</li>
          <li><strong>Legal Obligations:</strong> To comply with applicable financial, regulatory, and data protection laws.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Third-Party Service Providers:</strong> For hosting, analytics, and payment processing — all under strict confidentiality agreements.</li>
          <li><strong>Legal Authorities:</strong> When required by law, court orders, or government regulations.</li>
          <li><strong>Social Media Platforms:</strong> When you choose to connect and stream to external platforms (e.g., Facebook, YouTube).</li>
          <li><strong>No Sale of Personal Data:</strong> StreamSport does not sell, rent, or trade personal data to any third parties.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">5. Children’s Privacy</h2>
        <p className="mb-4">
          StreamSport is not intended for children under the age of 13. We do not knowingly collect personal data from minors. 
          If we become aware that a child has provided us with information, we will promptly delete it from our systems.
        </p>

        <h2 className="text-2xl font-semibold mb-2">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          Our website and app may use cookies or similar technologies to enhance user experience, store preferences, and collect performance analytics. 
          You can manage or disable non-essential cookies through your browser or device settings.
        </p>

        <h2 className="text-2xl font-semibold mb-2">7. Data Security and Retention</h2>
        <p className="mb-4">
          We use advanced encryption, secure servers, and periodic security audits to safeguard user data. 
          Data is retained only as long as necessary for providing our services or as required by law. 
          Users may request data deletion at any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mb-2">8. Data Breach Notification</h2>
        <p className="mb-4">
          In the event of a data breach, we will notify affected users and relevant authorities within 72 hours of discovery, 
          in accordance with data protection regulations.
        </p>

        <h2 className="text-2xl font-semibold mb-2">9. Your Rights and Choices</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Access & Correct</strong> your personal information.</li>
          <li><strong>Request Deletion</strong> or restriction of data processing.</li>
          <li><strong>Download</strong> a copy of your personal data (data portability).</li>
          <li><strong>Withdraw Consent</strong> for marketing or promotional communications by contacting us.</li>
        </ul>
        <p className="mb-4">
          Requests can be sent to <a href="mailto:support@streamsport.com" className="text-blue-600">support@streamsport.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-2">10. Third-Party Links</h2>
        <p className="mb-4">
          The Platform may include links to third-party sites such as Facebook, YouTube, or Twitch. 
          We are not responsible for their privacy practices. Please review their policies independently before using those services.
        </p>

        <h2 className="text-2xl font-semibold mb-2">11. Policy Updates</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically to reflect product updates, new legal requirements, or security enhancements. 
          Any major changes will be communicated through the Platform at least 15 days before taking effect.
        </p>
      </section>
      <Footer />
    </main>
  );
}
