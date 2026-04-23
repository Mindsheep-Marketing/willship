import Head from "next/head";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import siteMap from "../../siteMap";
import BackgroundImage from "../../components/common/BackgroundImage";
import Button from "../../components/common/Button";
import useIsSmall from "../../utils/hooks/useIsSmall";
import TrackRecordCaravan from "../../components/common/TrackRecordCaravan";
import CaravanVideoSection from "../../components/commercial/CaravanVideoSection";
import ServicesCaravan from "../../components/commercial/ServicesCaravan";
import Testimonials2 from "../../components/common/Testimonials2";
import ProcessCaravan from "../../components/commercial/ProcessCaravan";
import ImageAndTextToNz from "../../components/common/ImageAndTextToNz";
import Gallery2 from "../../components/common/Gallery2";
import ReadyToShip from "../../components/common/ReadyToShip";
import CaravanFAQ from "../../components/FAQs/CaravanFAQ";
import Awards2 from "../../components/common/Awards2";
import CaravanFAQUpdate from "../../components/FAQs/CaravanFAQUpdate";
import CommercialFAQ from "../../components/FAQs/CommercialFAQ";


const ImportCaravanToAu = () => {
    const isSmall = useIsSmall();

    return (
        <>
            <Head>
                <title>{siteMap.vehicle.importCaravanToAustralia.title}</title>
                <meta name='description' content={siteMap.vehicle.importCaravanToAustralia.description} />
            </Head>

            <section
                className="w-full relative flex items-center justify-center pb-25 object-cover"
                style={{ minHeight: `calc(100vh - ${isSmall ? '112px' : '198px'})` }}
            >
                <BackgroundImage
                    fallbackColour="true"
                    imageOrVideo="image"
                    src="/assets/images/customs-clearance/banner-image.jpg"
                    hasOpacity={true}
                    opacityColour="bg-darkBlue/80"
                />
                <div className="w-full mx-auto flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-0 mt-5">
                    <h1 className="font-Montserrat max-w-4xl font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug lg:leading-tight pb-3 sm:pb-4">
                        IMPORT CARAVAN FROM AUSTRALIA TO NEW ZEALAND
                    </h1>

                    <h2 className="font-medium text-sm sm:text-lg lg:text-2xl mx-auto mt-2 sm:mt-4 text-center tracking-[-0.04em] leading-snug sm:leading-normal px-4 sm:px-6 lg:px-0">
                        We&apos;ve helped thousands of clients ship their caravans across the Tasman.
                        <br className="hidden lg:block" />
                        <span className="inline-block sm:inline">
                            Whether you&apos;re moving to New Zealand, importing for resale, or just traveling temporarily,
                            we&apos;d love to help you!
                        </span>
                    </h2>

                    <div className="mt-6 sm:mt-8">
                        <Button
                            theme="redBlue"
                            buttonText="Get Started"
                            linkTo="paperform"
                            dataPaperformId="w9e9ma75"
                            className="!font-bold px-8 sm:px-10 text-sm sm:text-base"
                        />
                    </div>
                </div>
            </section>

            <TrackRecordCaravan />
            <CaravanVideoSection
                theme="dark"
                heading="Ship Caravan from Australia to New Zealand - Made Simple with Willship"
                videoSide="left"
                bgImage="/assets/images/caravan/caravan-img5.jpg"
                imageAlt="Willship International"
                videoButton={false}
                hasSubHeading={false}
                hasMinHeight={true}
                precedingParagraphs={[
                    "Whether you’re relocating to NZ, importing for resale, or planning an epic road trip, Willship makes the process of shipping your caravan across the Tasman simple, safe, and fully compliant.",
                    "We handle everything from customs clearance and quarantine inspections to transport, paperwork, and local delivery — so you don’t have to stress about red tape or surprise fees. With decades of experience and a specialist team, we’ve helped thousands of customers move their caravans from Australia to New Zealand smoothly.",
                    "Wherever you're headed, we'll help you get there — caravan and all. Watch this video below to see Willship’s easy process of shipping a caravan to New Zealand."
                ]}
            />

            <div className="[&>section>h2]:font-bold [&>section>h2]:tracking-[-0.05em]">
                <WhiteWithIcons
                    width="w-1/5"
                    data={{
                        heading: 'Caravan Shipping from Australia to NZ: Here’s Why It’s Worth It',
                        items: [
                            {
                                image: '/assets/images/reasons/value.svg',
                                text: 'Caravans can be much more expensive in New Zealand than they are in Australia. Shipping will save you plenty - or sell it for a good profit!'
                            },
                            {
                                image: '/assets/images/reasons/tax2.svg',
                                text: 'No import tax into New Zealand if you\'ve owned the caravan for more than 12 month. (Call us to check your eligibility)'
                            },
                            {
                                image: '/assets/images/reasons/clip-board.svg',
                                text: 'No Australian GST on motorhomes if you\'re buying from an Australian dealer for the sole purpose of export.'
                            },
                            {
                                image: '/assets/images/reasons/caravan.svg',
                                text: 'With over 120,000 caravans registered in Australia, you have a much larger selection to choose from'
                            },
                            {
                                image: '/assets/images/reasons/clock.svg',
                                text: 'Save the time and aggravation of both selling and buying - and you end up with a caravan you know and love.'
                            },
                            {
                                image: '/assets/images/reasons/lightning.svg',
                                text: 'It\'s fast. Transit times between Australia and New Zealand can be as little as 4 days on the water. and two weeks overall.'
                            },
                            {
                                image: '/assets/images/reasons/price-tag.svg',
                                text: 'Selling your caravan privately in Australia will almost certainly lose you money.'
                            },
                            {
                                image: '/assets/images/reasons/coins.svg',
                                text: 'Shipping is far cheaper than you think.'
                            },
                        ]
                    }}
                >
                    <div><Button
                        theme="redBlue"
                        buttonText="Get Started"
                        linkTo="paperform"
                        dataPaperformId="w9e9ma75"
                        className="!font-bold px-8 sm:px-10 text-sm sm:text-base"
                    /></div>
                </WhiteWithIcons>
            </div>

            <ServicesCaravan
                heading="Our Caravan Services"
                subHeading="We help with all kinds of caravan shipping scenarios to NZ — click below to find the one that suits you best."
                data={[
                    {
                        title: "Moving to New Zealand",
                        text: "Relocating or heading home to NZ? We’ll help you bring your caravan over hassle-free, with all the paperwork and logistics sorted.",
                        image: "/assets/images/caravan4.png",
                    },
                    {
                        title: "Importing for Resale",
                        text: "Bringing in stock for your dealership? We handle compliance, customs, and delivery so you can focus on the sales. You sell ‘em — we ship ‘em..",
                        image: "/assets/images/caravan5.png",
                    },
                    {
                        title: "Temporary Import",
                        text: "Just visiting NZ with your van? We’ll get it there and back legally so you can enjoy the adventure without the admin. Hit the open road in NZ with your setup — no need to rent!",
                        image: "/assets/images/caravan6.png",
                    },
                ]}
            />

            <ProcessCaravan
                childrenMaxWidth="max-w-8xl"
                textColour="text-darkBlue"
                data={{
                    heading: "Four Easy Steps to Ship Caravan from Australia to New Zealand",
                    subHeading: "Modern day caravan shipping is very safe. Everyone that has a hand in the shipping process is required to log information as the caravan moves from one stage to the next and everyone that forms part of that journey is accountable.",
                    items: [
                        {
                            text: "Receival and Delivery to Port",
                            subText: "Receiving of the caravan on to the tow truck or into the depot, movement off the tow truck to the port.",
                            image: "/assets/images/how-shipping/1-01.svg",
                            width: "100",
                        },
                        {
                            text: "Shipping to Destination",
                            subText: "Movement of the caravan from the port on to the vessel and off it goes to your destination country.",
                            image: "/assets/images/how-shipping/1-02.svg",
                            width: "100",
                        },
                        {
                            text: "Clearance and Quarantine",
                            subText: "Clearance through customs and quarantine and handover to the a local tow truck driver",
                            image: "/assets/images/how-shipping/1-03.svg",
                            width: "100",
                        },
                        {
                            text: "Final delivery or Pick-up",
                            subText: "Final delivery of the caravan to your chosen destination or you can pick the caravan up and ready to drive!",
                            image: "/assets/images/how-shipping/1-04.svg",
                            width: "100",
                        }
                    ]
                }}
            >
                <h3 className="text-darkBlue text-base sm:text-lg md:text-xl tracking-[-0.05em] font-extrabold mb-8 sm:mb-10 lg:mb-12 max-w-[90%] sm:max-w-[80%] lg:max-w-[66%] mx-auto">
                    It’s comprehensively monitored the whole way through, so there’s no chance of it &lsquo;going missing&rsquo; or us not knowing exactly where it is at any point of its international transport.
                </h3>

                <div className="w-full max-w-xs z-10 !px-9">
                    <Button
                        theme="redBlue"
                        buttonText="Get Started"
                        linkTo="paperform"
                        dataPaperformId="w9e9ma75"
                    />
                </div>
            </ProcessCaravan>

            <ImageAndTextToNz
                hasRequestQuote={true}
                requestQuoteLink={siteMap.vehicle.vehicleNewPaperformLink.path}
                requestQuoteText="Get Started"
                heading="We Take Care Of The Entire Journey"
                precedingParagraphs={[
                    "Importing and exporting caravans to and from Australia is our speciality. Willship can handle the entire process from start to finish - With our help, It won't be long before you'll be exploring New Zealand from the comfort of your own caravan."
                ]}
                iconList={{
                    textColour: "text-darkBlue",
                    items: [
                        {
                            text: "Supporting you to get all key documents together",
                            image: "/assets/images/customs-clearance/icon-support-blue.svg",
                        },
                        {
                            text: "Organizing the international shipping from start to finish",
                            image: "/assets/images/customs-clearance/icon-licensed-broker-blue.svg",
                        },
                        {
                            text: "Clearing your car through customs",
                            image: "/assets/images/customs-clearance/icon-biosecurity-blue.svg",
                        },
                        {
                            text: "On road registration at your destination country*",
                            image: "/assets/images/customs-clearance/icon-map-blue.svg",
                        },
                    ]
                }}
                hasSubHeading={false}
                imageSide="left"
                imageSrc="/assets/images/customs-clearance/bg-rhyss-customs-clearance.jpg"
                imageAlt="Customs and Clearance"
                theme="light"
            />

            <Testimonials2
                heading="Thousands of Families and Businesses Trust Us to Move Their Caravans to New Zealand"
                images={[
                    { src: "/assets/images/testimonials-carToNz/1.png" },
                    { src: "/assets/images/testimonials-carToNz/2.png" },
                    { src: "/assets/images/testimonials-carToNz/3.png" },
                ]}
            />
            <Gallery2
                heading="International Carvan Shipping Picture Gallery"
                subheading="Check out the different caravans we’ve transported over the years for families, caravan dealerships, businesses and travellers. It’s incredible to see how much we’ve grown throughout the years — but you know what’s missing? Your car in this gallery. 😉"
            />
            {/* <CaravanFAQ subHeading="Got a question regarding how to import carvan from Australia to New Zealand? We have got your back!" /> */}
            <CaravanFAQUpdate />
            <ReadyToShip
                quoteText="Get Started"
                quoteLink={"paperform"}
                title={"Ready to ship your caravan across the ditch? Get an instant quote today"}
                dataPaperformId="w9e9ma75"
            />
            <Awards2 />
            <CommercialFAQ />
        </>
    );
}

export default ImportCaravanToAu;