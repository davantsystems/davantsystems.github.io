import React from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainNav from "../components/MainNav";
import Footer from '../components/Footer';

const EventCard: React.FC<{
  title: string;
  date: string;
  description: string;
  galleryUrl: string;
  children: React.ReactNode;
}> = ({ title, date, description, galleryUrl, children }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden md:card-side">
      <figure className="relative h-64 md:h-auto md:w-1/2 overflow-hidden bg-base-200">
        {children}
      </figure>
      <div className="card-body md:w-1/2">
        <h2 className="card-title text-2xl mb-2 text-secondary">
          {title}
        </h2>
        <p className="text-base-content/60 mb-2">{date}</p>
        {description && (
          <p className="text-base-content/80 mb-4">{description}</p>
        )}
        <div className="card-actions justify-end">
          <a
            href={galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            View Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const EventGalleriesPage: React.FC<PageProps> = () => {
  return (
    <>
      <MainNav />
      <main className="z-20 pt-12">
        <section className="relative py-20 bg-base-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-br from-cyan-500 via-secondary to-purple-500 bg-clip-text text-transparent">
                Event Photo Galleries
              </h1>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                Browse photos from our recent Magic Mirror events. Click on any event to view the full gallery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              <EventCard
                title="Ninja Penguin"
                date="May 17, 2025"
                description="Magic Mirror photos from the Ninja Penguin event"
                galleryUrl="https://photos.davantsystems.com/share/xFOvyflkMoaGDk9f68S4JIQiovrGiAddoJsvUfZ1oZm2hrRSmvj-d4L0pZAcf5EfStE"
              >
                <StaticImage
                  src="../images/events/ninja-penguin.jpg"
                  alt="Ninja Penguin Event"
                  placeholder="blurred"
                  layout="fullWidth"
                  className="w-full h-full"
                  imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </EventCard>

              <EventCard
                title="AI on the Lot"
                date="May 28-29, 2025"
                description="Magic Mirror photos from AI on the Lot"
                galleryUrl="https://photos.davantsystems.com/share/k1FlFml8nSbi8fUhiHieoTaFE70vXzNkmxzU-UiN6_p_96qKn7THPrOcuQUBh1FwKvs"
              >
                <StaticImage
                  src="../images/events/ai-on-the-lot.jpg"
                  alt="AI on the Lot Event"
                  placeholder="blurred"
                  layout="fullWidth"
                  className="w-full h-full"
                  imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </EventCard>
            </div>

            <div className="mt-16 mb-8">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-1">
                <div className="relative bg-base-100 rounded-2xl p-8 md:p-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10"></div>
                  <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Want Magic Mirror at Your Event?
                    </h3>
                    <p className="text-lg md:text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
                      Create unforgettable memories with our AI-powered photo booth experience. Perfect for corporate events, parties, and celebrations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link to="/photobooth" className="btn btn-lg btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                        Book Magic Mirror
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link to="/photobooth#features" className="btn btn-lg btn-outline btn-secondary hover:bg-secondary hover:text-secondary-content">
                        View Features
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventGalleriesPage;

export const Head: HeadFC = () => (
  <>
    <title>Event Photo Galleries - Magic Mirror by Davant Systems</title>
    <meta name="description" content="Browse photo galleries from recent Magic Mirror events. See the AI-powered photo booth experience in action." />
  </>
);