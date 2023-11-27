import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";

const AboutUs = () => {
  return (
    <Container>
      <Headline text={"About Us"} />
      <div className="mt-5 max-w-3xl space-y-5 mx-auto">
        <p className="font-semibold">
          Welcome to Forever Union, where we believe in the enduring power of
          love and the timeless commitment of marriage. Our mission is to help
          individuals find their life partners, build strong connections, and
          embark on a journey of everlasting union.
        </p>

        <h1 className="text-3xl font-bold text-center">Our Vision</h1>
        <p className="font-semibold">
          At Forever Union, we envision a world where every heart finds its
          perfect match, and every soul discovers the joy of lifelong
          companionship. We are committed to fostering relationships built on
          trust, compatibility, and shared values.
        </p>

        <h1 className="text-3xl font-bold text-center">Why Forever Union?</h1>
        <p className="font-semibold">
          <span className="font-bold text-xl">Personalized Matching:</span> Our
          advanced matchmaking algorithms consider your preferences, values, and
          aspirations to connect you with compatible life partners.
        </p>
        <p className="font-semibold">
          <span className="font-bold text-xl">Security and Privacy:</span> Your
          privacy is our priority. We employ strict security measures to ensure
          your information remains confidential and secure.
        </p>
        <p className="font-semibold">
          <span className="font-bold text-xl">Diverse Profiles:</span> Our
          platform embraces diversity. Explore a rich tapestry of profiles from
          various backgrounds, cultures, and communities.
        </p>
        <p className="font-semibold">
          <span className="font-bold text-xl">Guidance and Support:</span> Our
          dedicated team is here to guide you through your journey. From profile
          creation to the first meeting, we provide support at every step.
        </p>

        <h1 className="text-3xl font-bold text-center">Our Commitment</h1>
        <p className="font-semibold">
          Forever Union is more than just a matrimonial website; it is a
          commitment to fostering lasting relationships. We understand the
          significance of marriage in your life, and we are here to make your
          journey towards it smooth, enjoyable, and successful.
        </p>

        <h1 className="text-3xl font-bold text-center">
          Join Forever Union Today
        </h1>
        <p className="font-semibold">
          Embark on the path to a forever union. Sign up with Forever Union
          today and start your journey to find a life partner who complements
          your journey and completes your story.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
