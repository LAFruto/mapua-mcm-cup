const DoubleChevron = ({ className }: { className?: string }) => {
  return (
    <div className="flex">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 56 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M0 0H23L56 36L23 72H0L33 36L0 0Z" fill="white" />
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 56 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M0 0H23L56 36L23 72H0L33 36L0 0Z" fill="white" />
      </svg>
    </div>
  );
};

export default DoubleChevron;
