import { useEffect } from "react";

 export function useScrollPosition (setPosition, setVisible, position)  {
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setPosition(position > moving);
         setVisible(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })
}


export  function useOnHoverOutside(ref, handler) {
   useEffect(
     () => {
       const listener = (event) => {
         if (!ref.current || ref.current.contains(event.target)) {
           return;
         }
         handler(event);
       };
       document.addEventListener("mouseover", listener);
       return () => {
         document.removeEventListener("mouseout", listener);
       };
     },
     [ref, handler]
   );
 }