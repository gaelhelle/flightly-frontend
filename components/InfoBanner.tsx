type Props = {
  text: string;
};

const InfoBanner = (props: Props) => {
  const { text } = props;

  return (
    <div className="bg-sky-100 rounded-md px-4 py-2 mb-10 text-sky-600 text-sm">
      <div className="flex items-center space-x-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default InfoBanner;
