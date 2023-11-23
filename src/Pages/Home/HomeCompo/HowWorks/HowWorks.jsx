import { Accordion } from "flowbite-react";
import Headline from "../../../../Shared/Headline/Headline";

const HowWorks = () => {
  return (
    <div className="my-16">
      <Headline text={"How We Works"} />

      <Accordion collapseAll className="mt-10 max-w-4xl mx-auto">
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
            User Registration!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Users start by visiting the website and creating an account.
              During registration, they provide basic information such as name,
              email,image, and password.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
            Preference Settings!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Users set preferences for the type of partner they are looking
              for, including age , gender, and location.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
          Create or Update BioData!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              User can create or update their own BioData for finding his or her life partner.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
          Premium Membership!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              User can request for PREMIUM Membership from there Dashboard.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
          Detailed BioData!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              In Biodata details page user have to login. And for contact information user have to pay. If user PREMIUM Member then He/She can see the contact information without paying fees.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default HowWorks;
