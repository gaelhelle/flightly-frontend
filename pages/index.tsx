import Head from "next/head";
import Image from "next/image";
import InfoBanner from "../components/InfoBanner";
import InfoQRCode from "../components/InfoQRCode";

export default function Home() {
  return (
    <div className="container lg:pr-[200px] mx-auto lg:mx-0">
      <Head>
        <title>Flightly | Flights alerts in Canada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <header className="px-14 top-10 mt-10 lg:px-32 lg:fixed lg:mt-0">
          <Image src="/img/logo-header.svg" width="90" height="11" />
        </header>
        <main className="lg:w-[900px] mx-auto flex items-center justify-center py-20 pt-8 lg:py-0 lg:pt-0 lg:h-full px-10 lg:px-0">
          <div>
            <InfoBanner text="Available in October" />
            <h2 className="text-3xl font-bold mb-2">
              Buy flight tickets up to 80% cheaper
            </h2>
            <p className="text-[#828282] text-sm">
              Receive notifications on the best flights tickets prices in Canada
            </p>
            <div className="my-8">
              <InfoQRCode />
            </div>
            <div className="flex space-x-4 items-center">
              <div>
                <Image src="/img/ios-download.png" width="147" height="50" />
              </div>
              <div>
                <Image
                  src="/img/android-download.png"
                  width="166"
                  height="51"
                />
              </div>
            </div>
          </div>
        </main>
        <aside className="lg:absolute lg:-right-40 xl:right-0 -top-0 bottom-0 lg:h-full from-[#ED2DC1] to-[#D93DDD] bg-gradient-135 w-full lg:w-[300px] xl:w-[500px]">
          <div className="hidden lg:block custom-shape-divider-top-1664480058 h-full overflow-y-hidden">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="relative mt-20 lg:mt-0 lg:absolute -top-20 lg:top-0 flex items-center justify-center h-full lg:right-32 lg:w-[720px]">
            <div>
              <Image src="/img/mockup-phones.png" width="789" height="646" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
