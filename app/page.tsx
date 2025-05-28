import { CompanionCard } from "@/components/CompanionCard";
import { CompanionList } from "@/components/CompanionList";
import { CTA } from "@/components/CTA";
import { recentSessions } from "@/constants";

const IndexPage = () => {
     return (
          <main>
               <h1>Popular Companions</h1>

               <section className="home-section">
                    <CompanionCard
                         id="1"
                         name="Neura the Brainy Explorer"
                         topic="Neural Network of the Brain"
                         subject="science"
                         duration={45}
                         color="#ffda63"
                    />
                    <CompanionCard
                         id="2"
                         name="Countsy the Number Wizard"
                         topic="Derivatives & Integrals"
                         subject="maths"
                         duration={30}
                         color="#e5d0ff"
                    />
                    <CompanionCard
                         id="3"
                         name="Verba the Vocabulary Builder"
                         topic="English Literature"
                         subject="language"
                         duration={30}
                         color="#bde7ff"
                    />
               </section>

               <section className="home-section">
                    <CompanionList
                         title="Recently completed sessions"
                         companions={recentSessions}
                         classNames="w-2/3 max-lg:w-full"
                    />
                    <CTA />
               </section>
          </main>
     );
};

export default IndexPage;
