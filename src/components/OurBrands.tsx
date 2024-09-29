import Image from "next/image";

const OurBrands = () => {
  return (
    <div className="hidden lg:flex gap-8 items-center justify-between flex-wrap">
      <Image
        src="/assets/brands/Logo-0.png"
        alt="logo"
        width={85}
        height={87}
        priority
      />
      <Image
        src="/assets/brands/Logo-1.png"
        alt="logo"
        width={107}
        height={109}
        priority
      />
      <Image
        src="/assets/brands/Logo-2.png"
        alt="logo"
        width={135}
        height={139}
        priority
      />
      <Image
        src="/assets/brands/Logo-3.png"
        alt="logo"
        width={63}
        height={65}
        priority
      />
      <Image
        src="/assets/brands/Logo-4.png"
        alt="logo"
        width={98}
        height={101}
        priority
      />
      <Image
        src="/assets/brands/Logo-5.png"
        alt="logo"
        width={113}
        height={115}
        priority
      />
      <Image
        src="/assets/brands/Logo-6.png"
        alt="logo"
        width={84}
        height={87}
        priority
      />
    </div>
  );
};

export default OurBrands;
