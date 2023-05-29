import React, { useEffect, useState } from 'react'
//import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    //if trip mo lang mag-axios, experimental ko pa lang
/*     axios.get(url)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
        setLoading(true);
        setError(err.message);
    }) */

   fetch(url).then(res => {
      if(!res.ok){
        throw Error('something went wrong');
      }
      return res.json();
    }).then(data => {
      setData(data);
      setLoading(false);
      setError(null);
    }).catch(err => {
      setLoading(true);
      setError(err.message);
    }) 

  }, [url])

  return { data, loading, error };
}
