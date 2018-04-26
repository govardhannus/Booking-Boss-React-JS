import axios from 'axios';

 const getdata = function (page,count1) {

     return axios.get("http://demo0340275.mockable.io/",page,count1)
         .then(response =>
             response.status ===200 ? response.data:[]
         )
         .catch(error =>
             console.log(error)
         )
 }
export { getdata }