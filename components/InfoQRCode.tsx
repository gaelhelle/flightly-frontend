import Image from "next/image";

type Props = {};

const InfoQRCode = (props: Props) => {
  return (
    <div className="bg-[#F8FBFB] text-sm rounded-xl px-6 py-4 flex items-center justify-between">
      <h5>
        <strong className="block">Scan QR Code</strong> to download the app
      </h5>
      <div className="relative">
        <div className="rounded transition p-2 hover:scale-[4] hover:bg-white border-2 origin-bottom-right">
          <Image src="/img/qr-code.png" width="53" height="53" />
        </div>
      </div>
    </div>
  );
};

export default InfoQRCode;
