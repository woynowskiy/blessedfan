import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">

<nav className="fixed top-0 left-0 w-full bg-white flex items-center justify-between p-4 z-20">
  
 
  <div className="flex items-center">
    <a href="https://www.blessed.fan/" target="_blank" rel="noopener noreferrer">
      <Image
        src="/blessed.svg"
        alt="Blessed Logo"
        width={100}
        height={24}
        priority
      />
    </a>
  </div>
  

  <div className="flex-1 flex justify-center">
    <div className="flex space-x-8">
      <a href="#home" className="text-gray-700 hover:text-gray-900">Product</a>
      <a href="#about" className="text-gray-700 hover:text-gray-900">Resource</a>
      <a href="#services" className="text-gray-700 hover:text-gray-900">Pricing</a>
    </div>
  </div>
  

  <div className="flex space-x-4">
    <button className="text-black px-4 py-2 rounded bg-transparent hover:bg-gray-100">Docs</button>
    <button className="text-black px-4 py-2 rounded bg-transparent hover:bg-gray-100">Login</button>
    <button className="w-[220px] h-[56px] px-[28px] py-[12px] gap-[8px] rounded-[39px] bg-[hsla(150,95%,50%,1)] text-black">Start for free</button>
  </div>
</nav>



<div
  className="w-[1440px] h-[684px] p-[0px_0px_64px_0px] gap-[48px] opacity-100 flex flex-col"
>
  <div className="container w-[1280px] h-[188px] flex items-center justify-center">
    <div className="flex items-center">
      <img
        src="/pacman--entertainment-gaming-pacman-video.svg"
        alt="Favorite Icon"
        className="w-100 h-100 mr-4 z-10"
      />
      <div
        className="font-ttbluescreensbold text-[64px] font-extrabold uppercase leading-[94px] text-center self-stretch z-10"
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
      >
        Build, manage, and distribute{" "}
        <span className="text-[#FFA500]">Tickets</span> quickly and fairly
      </div>

      <div className="absolute w-[789px] h-[75px] bg-[#06F881] top-[175px] left-[24px] z-0"></div>
      <div className="absolute w-[789px] h-[75px] bg-[#06F881] top-[325px] left-[24px] z-0"></div>
      <div className="absolute w-[789px] h-[75px] bg-[#06F881] top-[475px] left-[24px] z-0"></div>
      <div className="absolute w-[461px] h-[75px] bg-[#06F881] top-[100px] right-[24px] z-0"></div>
      <div className="absolute w-[461px] h-[75px] bg-[#06F881] top-[250px] right-[24px] z-0"></div>
      <div className="absolute w-[461px] h-[75px] bg-[#06F881] top-[400px] right-[24px] z-0"></div>
      <div className="absolute w-[461px] h-[75px] bg-[#06F881] top-[550px] right-[24px] z-0"></div>
    </div>
  </div>

  <div
    className="font-TTBluescreensBold text-[22px] font-semibold text-center leading-[32px] z-10"
    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
  >
    Start quickly in just three steps with easy integrations…
  </div>

  <div className="flex justify-center overflow-x-auto p-[var(--spacing-xl)]">
    <div className="flex flex-nowrap gap-2">
      <div className="relative w-[614px] h-[216px] flex items-center justify-center bg-white flex-shrink-0 ml-[893px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06F881] to-[#FFFACD]"></div>
        <div className="relative w-[598px] h-[200px] flex flex-col justify-center items-start px-[24px] bg-white">
          <div className="flex flex-row items-center w-full">
            <div className="text-black text-5xl font-bold">
              <div>1</div>
              <div>Create</div>
            </div>
            <img
              src="/browser-favorite-heart--window-app-code-favorite-like-heart-apps.svg"
              alt="Favorite Icon"
              className="w-100 h-100 ml-auto"
            />
          </div>
          <span className="text-black text-base mt-2">
            Pick your entry type and begin via our UI or API
          </span>
        </div>
      </div>

      <div className="relative w-[614px] h-[216px] flex items-center justify-center bg-white flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06F881] to-[#FFFACD]"></div>
        <div className="relative w-[598px] h-[200px] flex flex-col justify-center items-start px-[24px] bg-white">
          <div className="flex flex-row items-center w-full">
            <div className="text-black text-5xl font-bold">
              <div>2</div>
              <div>Customize</div>
            </div>
            <img
              src="/cake-slice--cherry-cake-birthday-event-special-sweet-bake.svg"
              alt="Favorite Icon"
              className="w-100 h-100 ml-auto"
            />
          </div>
          <span className="text-black text-base mt-2">
          Fine tune to your liking easily as a piece of cake
          </span>
        </div>
      </div>

      <div className="relative w-[614px] h-[216px] flex items-center justify-center bg-white flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06F881] to-[#FFFACD]"></div>
        <div className="relative w-[598px] h-[200px] flex flex-col justify-center items-start px-[24px] bg-white">
          <div className="flex flex-row items-center w-full">
            <div className="text-black text-5xl font-bold">
              <div>3</div>
              <div>Publish</div>
            </div>
            <img
              src="/startup--shop-rocket-launch-startup.svg"
              alt="Favorite Icon"
              className="w-100 h-100 ml-auto"
            />
          </div>
          <span className="text-black text-base mt-2">
          Publish and go live ASAP
          </span>
        </div>
      </div>
    </div>
  </div>
</div>





<button className="w-[220px] h-[56px] px-[28px] py-[12px] gap-[8px] rounded-[39px] bg-[hsla(150,95%,50%,1)] text-black">
  Get started for free
</button>


<div className="w-full h-[1014px] p-[80px_0] gap-[8px] opacity-100 bg-gradient-to-r from-[#FFFACD] to-[#EFEFEF] self-stretch">
<div className="font-ttbluescreensbold text-[44px] font-extrabold uppercase leading-[94px] text-center self-stretch z-10" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
Why you’ll love Blessed
    </div>

    <div
  className="font-TTBluescreensBold text-[22px] font-medium text-center leading-[32px] z-10"
  style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
>
Build and customize your tickets in just 5 minutes. Integration takes under 1 minute.



          
      </div>


      <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-[830px] h-[601px] p-[24px_0_0_0] gap-0 border-t-[5px] border-t-transparent bg-white opacity-100"
      >

      </div>
    </div>
</div>






<div className="w-full h-[1014px] p-[80px_0] gap-[8px] opacity-100  self-stretch">
<div className="font-ttbluescreensbold text-[44px] font-extrabold uppercase leading-[94px] text-center self-stretch z-10 mt-[40px]" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
See Blessed in action
    </div>

    <div
  className="font-TTBluescreensBold text-[22px] font-medium text-center leading-[32px] z-10 mt-[40px]"
  style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
>
Start with a use-case template and get your project started in minutes.
          
      </div>


      <div className="flex items-center justify-center mt-[40px]">
        <div className="w-[1280px] h-[374px] p-[52px_64px] bg-[rgba(239,239,239,1)] rounded-[24px] opacity-100 flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-[32px] font-bold mb-[16px]">Conferences & meetups</div>
            <div className="text-[18px] font-medium">Effortlessly manage entries for a smooth check-in experience.</div>

         <button className="flex w-[185px] py-[12px] px-[28px] items-center justify-center gap-[8px] border-[2px] border-black text-black bg-transparent rounded-[39px]">
            View use cases
            </button>
          </div>
          <img src="/Coffee-Takeaway-Cup--Streamline-Sharp.svg" alt="Favorite Icon" className="w-[150px] h-[183px] ml-auto" />
        </div>
      </div>
    </div>



<div className="flex items-center justify-center mt-[40px] gap-[24px]">
  
  <div className="relative w-[624px] h-[442px] p-[52px_64px] flex flex-col justify-end items-start gap-[16px] bg-[rgba(239,239,239,1)] rounded-[24px] opacity-100">
   
    <div className="flex flex-col">
      <div className="text-[32px] font-bold mb-[16px]">Conferences & meetups</div>
      <div className="text-[18px] font-medium text-left">Effortlessly manage entries for a smooth check-in experience.</div>
      <button className="flex w-[185px] py-[12px] px-[28px] items-center justify-center gap-[8px] border-[2px] border-black text-black bg-transparent rounded-[39px] mt-[16px]">
        View use cases
      </button>
    </div>
   
    <img src="/party-popper--hobby-entertainment-party-popper-confetti-event.svg" alt="Favorite Icon" className="absolute top-0 right-0 w-[150px] h-[183px]" />
  </div>

 
  <div className="relative w-[624px] h-[442px] p-[52px_64px] flex flex-col justify-end items-start gap-[16px] bg-[rgba(0,0,0,1)] rounded-[24px] opacity-100">
    
    <div className="flex flex-col">
      <div className="text-[32px] font-bold mb-[16px] text-white">Gaming</div>
      <div className="text-[18px] font-medium text-left text-white">Issue and manage passes for gaming events and tournaments.</div>
      <button className="flex w-[185px] py-[12px] px-[28px] items-center justify-center gap-[8px] border-[2px] border-white text-white bg-transparent rounded-[39px] mt-[16px]">
        View use cases
      </button>
    </div>

    <img src="/pacman--entertainment.svg" alt="Favorite Icon" className="absolute top-0 right-0 w-[150px] h-[183px]" />
  </div>
</div>



<div className="w-full h-[1014px] px-[109px] py-[64px] gap-[8px] opacity-100 bg-gradient-to-r from-[#FFFACD] to-[#EFEFEF] self-stretch flex items-center">
  <div className="flex flex-col">
    <div className="font-ttbluescreensbold text-[44px] font-extrabold uppercase leading-[94px] text-left z-10" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
      Developing tickets should be easy and fair. So we all feel Blessed.”
    </div>

    <div className="font-TTBluescreensBold text-[22px] font-medium text-left leading-[32px] z-10" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
      Viet Nguyen
    </div>

    <div className="font-TTBluescreensBold text-[22px] font-medium text-left leading-[32px] z-10" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
      CEO / Technology, Blessed
    </div>
  </div>

  <div className="ml-auto w-[830px] h-[601px] border-t-[5px] border-t-transparent bg-white opacity-100">
  </div>
</div>


    </main>


  );
}
