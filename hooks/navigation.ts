import { Href, router } from 'expo-router';

export const useUtilsNavigation = () =>{
   const goTo = (screen:Href) => {
      router.replace(screen)
   }

   return {
    goTo
   }

}