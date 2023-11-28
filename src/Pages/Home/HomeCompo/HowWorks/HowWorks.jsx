import { Accordion } from "flowbite-react";
import Headline from "../../../../Shared/Headline/Headline";

const HowWorks = () => {
  return (
    <div className="my-16">
      <Headline text={"How It Works"} />
      <p className=" text-center mt-3 font-semibold">
        Welcome to Forever Union – Find Your Perfect Match!
      </p>
      <Accordion collapseAll className="mt-10 max-w-4xl mx-auto">
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
            Create Your Profile!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Get started by creating your personalized profile. Tell us about
              yourself, your preferences, and what you are looking for in a life
              partner.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
            Explore Biodatas!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Explore a vast collection of biodatas to find potential matches.
              Filter profiles based on age, gender, and more to discover
              individuals who align with your preferences.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        {/* panel */}
        <Accordion.Panel>
          <Accordion.Title className="font-bold">
            Connect and Contact!
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              When you find a biodata you like, initiate contact and start your
              journey towards a meaningful connection. Premium members enjoy
              exclusive benefits!
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
              User can request for PREMIUM Membership from there Dashboard after creating a biodata.
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
              In Biodata details page user have to login. And for contact
              information user have to pay. If user PREMIUM Member then He/She
              can see the contact information without paying fees.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default HowWorks;
