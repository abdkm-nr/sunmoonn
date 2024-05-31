import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useRequest = (id) => {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=a54d7153`;
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
