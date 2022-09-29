import Head from "next/head";
import Image from "next/image";
import InfoBanner from "../components/InfoBanner";
import InfoQRCode from "../components/InfoQRCode";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Flightly | Flights alerts in Canada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <header className="fixed px-32 top-10">
          <Image src="/img/logo-header.svg" width="90" height="11" />
        </header>
        <main className="w-[700px] mx-auto flex items-center justify-center h-full">
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
        <aside className="absolute right-0 -top-0 bottom-0 h-full from-[#ED2DC1] to-[#D93DDD] bg-gradient-135 w-[500px]">
          <div className="custom-shape-divider-top-1664480058 h-full overflow-y-hidden">
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
          <div className="absolute flex items-center justify-center h-full right-32 w-[720px]">
            <div>
              <Image src="/img/mockup-phones.png" width="789" height="646" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
