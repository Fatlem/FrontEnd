import { useEffect, useState } from "react";
import  axiosInstance  from "../axios/axiosInstance";

export const UseFetchData = () => {
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/posts')
      setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return {posts:datas}
};

export const usePostData = (body) => {
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    try {
      const response = await axiosInstance.post('/posts', body)
      setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return {posts:datas}
}
