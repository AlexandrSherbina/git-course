 export default async function weatherApi (latitude, longitude)  {    
     try {
         let response = await fetch(URL + `/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloudcover&daily=precipitation_probability_max,winddirection_10m_dominant&current_weather=true&timezone=auto`)
         if (!response.ok) {
             const message = 'Error: ' + response.status;
             throw new Error(message)
         } else {
             const result = await response.json();         
             return result;
         }
     } catch (error) {
         console.error(error)
     } finally {
       //  console.log('Finally');
     }
 }



