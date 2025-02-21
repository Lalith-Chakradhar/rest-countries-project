import React, {useEffect} from 'react';
import useCustomContext from '../CustomContext';

const Header = () => {

   const {modeToggle, setModeToggle} = useCustomContext();

      useEffect(()=>{
        if(modeToggle === 'Light')
        {
          document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
          document.body.style.color = 'hsl(207, 26%, 17%)';

        } else {

          document.body.style.backgroundColor =  'hsl(207, 26%, 17%)';
          document.body.style.color = 'hsl(0, 0%, 100%)';
        }
      }, [modeToggle]);

  return (
     <header className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} flex justify-between py-8 px-4 shadow-md lg:px-[5.5rem]`}>
        <div className='font-bold lg:text-xl'>Where in the world?</div>
        <button onClick={()=> setModeToggle(modeToggle === 'Light' ? 'Dark' : 'Light')}>
            {modeToggle === 'Light'? (
              <div className="flex items-center gap-3">
                <ion-icon name="moon-outline"/>
                <div>Light Mode</div>
              </div>
            ): (
              <div className="flex items-center gap-4">
                <ion-icon name="moon-sharp"/>
                <div>Dark Mode</div>
              </div>
            )}
            
        </button>
     </header>
  )
}

export default Header;