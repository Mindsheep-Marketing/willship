import Image from "next/image";
import { useRouter } from "next/router";

interface ImageType {
    url: string;
    caption?: string;
}

interface GalleryProps {
    title: string;
    subheading?: string;
    imageCols: ImageType[][];
    hasCaption: boolean;
}

const imagesArray: ImageType[][] = [
    [
        { url: '/assets/images/caravan/caravan-img.jpg' },
        { url: '/assets/images/caravan/caravan-img2.jpg' },
        { url: '/assets/images/caravan/caravan-img3.jpg' },
        { url: '/assets/images/caravan/caravan-img4.jpg' },
        { url: '/assets/images/caravan/caravan-img5.jpg' },
        { url: '/assets/images/caravan/caravan-img6.jpg' },
    ],
];

const CreateImage = ({ image, hasCaption }: { image: ImageType; hasCaption: boolean }) => {
    return (
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <Image
                src={image.url}
                alt="Gallery Image"
                layout="fill"
                className="object-cover transition-transform duration-300 hover:scale-105"
            />
            {hasCaption && image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                    {image.caption}
                </div>
            )}
        </div>
    );
};

const Gallery = ({ imageCols, title, subheading, hasCaption }: GalleryProps) => {
    const router = useRouter();
    const allImages = imageCols.flat();
    const visibleImages = allImages.slice(0, 6); // show only first 6

    return (
        <section className="w-full flex flex-col items-center py-10 px-4">
            <div className="text-center pb-8">
                <h2 className="text-forty font-bold tracking-[-0.05em] text-darkBlue">{title}</h2>
                {subheading && <p className="text-xl text-darkBlue mb-2 mt-8 max-w-5xl">{subheading}</p>}
            </div>

            {/* Gallery Grid */}
            <div className="bg-nearlyWhite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-10 py-2">
                {visibleImages.map((image, i) => (
                    <CreateImage key={i} image={image} hasCaption={hasCaption} />
                ))}
            </div>

            {/* See More Button */}
            <div className="pt-8">
                <button
                    onClick={() => router.push('/gallery')}
                    className="px-16 py-2 bg-red text-white hover:bg-red/90 transition-colors"
                >
                    <span className="font-semibold text-xl">See More</span>
                </button>
            </div>
        </section>
    );
};

interface Gallery2Props {
    heading: string;
    subheading?: string;
}

const Gallery2 = ({ heading, subheading }: Gallery2Props) => {
    return (
        <Gallery
            title={heading}
            subheading={subheading}
            imageCols={imagesArray}
            hasCaption={false}
        />
    );
};

export default Gallery2;
