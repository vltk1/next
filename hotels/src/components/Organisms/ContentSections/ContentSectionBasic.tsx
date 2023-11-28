
export function ContentSectionBasic() {
  return (
    <>
      <div className="relative flex bg-[#fff9ee]">
        <div className="w-[90%] pb-[5%]">
        <picture>
            <source media="(max-width: 375px)" srcSet="/oasislunch/content/sm/1x/dish.jpg" />
            <source media="(max-width: 768px)" srcSet="/oasislunch/content/sm/2x/dish.jpg" />

            <source media="(max-width: 858px)" srcSet="/oasislunch/content/0.5x/dish.jpg" />
            <source media="(max-width: 1715px)" srcSet="/oasislunch/content/0.75x/dish.jpg" />  
            <source media="(max-width: 1920px)" srcSet="/oasislunch/content/1x/dish.jpg" />
            <source media="(max-width: 2573px)" srcSet="/oasislunch/content/1.5x/dish.jpg" />
            <source media="(max-width: 3840px)" srcSet="/oasislunch/content/2x/dish.jpg" />

            <img src="/oasislunch/content/sm/1x/dish.jpg" width={3430} height={2070} alt="" />
        </picture>
        </div>
        <div className="absolute right-0 bottom-0 w-full">
        <div className="max-w-[50%] ml-auto">
        <picture>
          <source media="(min-width: 768px)" srcSet="/oasislunch/content/title.svg" />
          <img src="/oasislunch/content/sm/title.svg" alt="" width={1000}/>
        </picture>
        </div>
        </div>
      </div>
    </>
  )
}

