import React from 'react';

function ProfileDetails({ profile }) {
  const isOdd = profile.id % 2 !== 0;
  const imagePath = require(`${profile.imagePath}`);

  return (
    <div className="bg-[#FFF6E7] flex justify-center lg:h-[70vh]">
      <div className="w-100% md:w-[95%] flex flex-col md:flex-row">
        {isOdd ? (
          <>
            <div className=" w-full mt-2 md:w-1/2  h-full md:h-auto">
              <img src={imagePath} className="object-fit ml-0 md:ml-8 mr-4 w-[100%] md:w-[95%] h-full" alt="Profile" />
            </div>
             <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
             <div>
                {/* <h1 className="text-sm uppercase text-left">About me</h1> */}
                <h1 className="font-serif text-3xl mt-2 text-left">{profile.name}</h1>
                <h1 className='text-left font-semibold'>{profile.title}</h1>
                <p className="text-md mt-0 md:mt-5 text-left">{profile.myInfo}</p>
                <h1 className="lg:flex text-left">{profile.additionalInfo}</h1>
              </div>
            </div>
          
          </>
        ) : (
          < >
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
              <div>
                {/* <h1 className="text-sm uppercase text-left">About me</h1> */}
                <h1 className="font-serif text-3xl mt-4 text-left">{profile.name}</h1>
                <h1 className='text-left font-semibold'>{profile.title}</h1>
                <p className="text-md mt-0 md:mt-5 text-left ">{profile.myInfo}</p>
                
              </div>
             
            </div>
            <div className="order-1 mt-1 md:order-2 md:w-1/2 h-64 md:h-auto">
              <img src={imagePath} className="object-fit w-[95%]  md:w-full h-full" alt="Profile" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileDetails;



