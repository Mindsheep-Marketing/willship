import Head from "next/head";
import Hero from "../components/common/Hero";
import siteMap from "../siteMap";
import Gallery from "../components/common/Gallery";

const imagesArray = [
  [
    { url: '/assets/images/gallery/1.jpg' },
    { url: '/assets/images/gallery/2.jpg' },
    { url: '/assets/images/gallery/3.jpg' },
    { url: '/assets/images/gallery/4.jpg' },
    { url: '/assets/images/gallery/5.jpg' },
    { url: '/assets/images/gallery/6.jpg' },
    { url: '/assets/images/gallery/7.jpg' },
    { url: '/assets/images/gallery/8.jpg' },
    { url: '/assets/images/gallery/9.jpg' },
    { url: '/assets/images/gallery/10.jpg' },
    { url: '/assets/images/gallery/11.jpg' },
    { url: '/assets/images/gallery/12.jpg' },
    { url: '/assets/images/gallery/13.jpg' },
    { url: '/assets/images/gallery/14.jpg' },
    { url: '/assets/images/gallery/15.jpg' },
    { url: '/assets/images/gallery/16.jpg' },
    { url: '/assets/images/gallery/17.jpg' },
    { url: '/assets/images/gallery/18.jpg' },
    { url: '/assets/images/gallery/19.jpg' },
    { url: '/assets/images/gallery/20.jpg' },
  ],
  [
    { url: '/assets/images/gallery/24.jpg' },
    { url: '/assets/images/gallery/25.jpg' },
    { url: '/assets/images/gallery/26.jpg' },
    { url: '/assets/images/gallery/27.jpg' },
    { url: '/assets/images/gallery/28.jpg' },
    { url: '/assets/images/gallery/29.jpg' },
    { url: '/assets/images/gallery/30.jpg' },
    { url: '/assets/images/gallery/31.jpg' },
    { url: '/assets/images/gallery/32.jpg' },
    { url: '/assets/images/gallery/33.jpg' },
    { url: '/assets/images/gallery/34.jpg' },
    { url: '/assets/images/gallery/35.jpg' },
    { url: '/assets/images/gallery/36.jpg' },
    { url: '/assets/images/gallery/37.jpg' },
    { url: '/assets/images/gallery/38.jpg' },
    { url: '/assets/images/gallery/39.jpg' },
    { url: '/assets/images/gallery/40.jpg' },
    { url: '/assets/images/gallery/41.jpg' },
    { url: '/assets/images/gallery/22.jpg' },
    { url: '/assets/images/gallery/23.jpg' },
    { url: '/assets/images/gallery/21.jpg' },
    { url: '/assets/images/gallery/62.jpg' },
  ],
  [
    { url: '/assets/images/gallery/42.jpg' },
    { url: '/assets/images/gallery/43.jpg' },
    { url: '/assets/images/gallery/44.jpg' },
    { url: '/assets/images/gallery/45.jpg' },
    { url: '/assets/images/gallery/46.jpg' },
    { url: '/assets/images/gallery/47.jpg' },
    { url: '/assets/images/gallery/48.jpg' },
    { url: '/assets/images/gallery/49.jpg' },
    { url: '/assets/images/gallery/50.jpg' },
    { url: '/assets/images/gallery/51.jpg' },
    { url: '/assets/images/gallery/52.jpg' },
    { url: '/assets/images/gallery/53.jpg' },
    { url: '/assets/images/gallery/54.jpg' },
    { url: '/assets/images/gallery/55.jpg' },
    { url: '/assets/images/gallery/56.jpg' },
    { url: '/assets/images/gallery/57.jpg' },
    { url: '/assets/images/gallery/58.jpg' },
    { url: '/assets/images/gallery/59.jpg' },
    { url: '/assets/images/gallery/60.jpg' },
    { url: '/assets/images/gallery/61.jpg' },
  ],
];

const GalleryPage = () => (
  <>
    <Head>
      <title>{siteMap.gallery.title}</title>
      <meta name='description' content={siteMap.gallery.description} />
    </Head>
    <Hero
      heading="GALLERY"
      hasButton={false}
      hasMouseScroll={false}
      bgImage="/assets/images/car7.jpg"
      hasImageOpacity={true}
    />
    <Gallery title={'Here Are A Few Of The More Unique Cars We Have Moved Over The Years'} imageCols={imagesArray} hasCaption={false}></Gallery>
  </>
);

export default GalleryPage;