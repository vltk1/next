
export function BannerBasic() {
  const widthLogo = 160
  return (
    <>
      <div className="flex justify-center items-center w-[960rem]">
        <div className={`min-w-[calc(50%-${widthLogo/2}rem)]`}>
          <ul className="flex text-[13rem]">
            <li className="p-[10rem]">HOME</li>
            <li className="p-[10rem]">SHOP</li>
            <li className="p-[10rem]">PRODUCTS</li>
            <li className="p-[10rem]">PAGES</li>
            <li className="p-[10rem]">BLOGS</li>
          </ul>
        </div>
        <div className="text-center">
          <img src="/images/logo.svg" alt="" width={`${widthLogo}rem`}/>
        </div>
        <div className={`max-w-[calc(50%-${widthLogo/2}rem)] grow p-[10rem] flex justify-end text-[16rem]`}>
         <span>icon</span>
        </div>
      </div>
    </>
  );
}
