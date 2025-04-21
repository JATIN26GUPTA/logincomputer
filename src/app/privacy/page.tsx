import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy - Login Computer",
  description:
    "Login Computer's privacy policy regarding the collection and use of personal information",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: April 8, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Introduction
              </h2>
              <p className="text-muted-foreground">
                Login Computer ("we", "us", or "our") respects your privacy and
                is committed to protecting your personal data. This privacy
                policy will inform you about how we look after your personal
                data when you visit our website and inform you of your privacy
                rights and how the law protects you.
              </p>
              <p className="text-muted-foreground">
                We collect and process your personal data in order to provide
                you with our services, improve our website, and communicate with
                you. This privacy policy applies to all personal data we collect
                through our website, in email, text, or other electronic
                messages between you and our website.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We may collect several different types of information for
                various purposes to provide and improve our service to you,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Personal identification information (name, email address,
                  phone number, etc.)
                </li>
                <li>Contact information</li>
                <li>Educational and professional background</li>
                <li>Course preferences and interests</li>
                <li>
                  Technical data including IP address, browser type and version,
                  etc.
                </li>
                <li>Usage data about how you use our website and services</li>
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information so that we can
                  improve our Service
                </li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>
                  To provide you with news, special offers and general
                  information about other services and events which we offer
                </li>
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Data Security
              </h2>
              <p className="text-muted-foreground">
                We have implemented appropriate security measures to prevent
                your personal data from being accidentally lost, used, accessed,
                altered, or disclosed in an unauthorized way. In addition, we
                limit access to your personal data to those employees, agents,
                contractors, and other third parties who have a business need to
                know.
              </p>
              <p className="text-muted-foreground">
                They will only process your personal data on our instructions,
                and they are subject to a duty of confidentiality. We have put
                in place procedures to deal with any suspected personal data
                breach and will notify you and any applicable regulator of a
                breach where we are legally required to do so.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Your Data Protection Rights
              </h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request the deletion of your personal data</li>
                <li>Object to our processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>
                  Withdraw consent at any time, where we are relying on consent
                  to process your personal data
                </li>
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date at the top of
                this Privacy Policy.
              </p>
              <p className="text-muted-foreground">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>By email: privacy@logincomputer.com</li>
                <li>By visiting the contact page on our website</li>
                <li>By phone: (123) 456-7890</li>
                <li>By mail: 123 Training Street, Tech City, TC 12345</li>
              </ul>
            </div>

            <div className="pt-8 flex justify-center">
              <Button asChild variant="outline">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
