// app/privacy-policy/page.tsx
import Layout from '../../components/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="prose prose-invert max-w-none">
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and what choices you have.</p>

        <h3>Information We Collect</h3>
        <p>When you use the AI Oracle, we may collect information you provide directly, such as your email address if you sign up for our mailing list or make a purchase. We do not collect any personal information you may input into the tool&apos;s text box, as this is processed by a third-party AI service and is not stored by us.</p>
        
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
            <li>Process transactions and provide you with access to our product.</li>
            <li>Send you updates, promotions, and information about the AI Oracle (if you have opted in).</li>
            <li>Analyze user behavior to improve our services and products.</li>
        </ul>

        <h3>Data Security</h3>
        <p>We take reasonable measures to protect your information from unauthorized access or disclosure. However, no internet-based service is 100% secure.</p>

        <h3>Third-Party Services</h3>
        <p>We use third-party services such as Gumroad for payment processing and an external AI provider to generate content. These services have their own privacy policies.</p>

        <h3>Changes to This Policy</h3>
        <p>We may update this policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </div>
    </Layout>
  );
}