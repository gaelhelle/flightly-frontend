import Image from "next/image";

type Props = {};

const InfoQRCode = (props: Props) => {
  return (
    <div className="bg-[#f4f8f8] text-sm rounded-xl px-6 py-4 flex items-center justify-between">
      <h5>
        <strong className="block">Scan QR Code</strong> to download the app
      </h5>
      <div className="relative z-10 h-16 w-16 ">
        <div className="absolute rounded transition hover:scale-[4] origin-bottom-right w-full h-full bg-white border-2 p-2">
          <Image
            src="/img/qr-code.png"
            width="220"
            height="220"
            className="block"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoQRCode;
