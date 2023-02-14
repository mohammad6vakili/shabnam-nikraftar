import { message } from "antd";
import axios from "axios";
import Env from "../constant/env.json";

export const ApiInterface= {
    getHomePosts:async () => {
        try {

            const response = await axios.get(Env.base_url+'api/post')
            if (response.status === 200) {
                return response.data
            } else {
                message.error("مشکلی پیش آمده است");
            }
        } catch (error) {
            console.log('response ===> ' , error);
        }
    },
    getHomeStory:async () => {
        try {

            const response = await axios.get(Env.base_url+'api/story')
            if (response.status === 200) {
                return response.data
            } else {
                message.error("مشکلی پیش آمده است");
            }
        } catch (error) {
            console.log('response ===> ' , error);
        }
    },
    getHomeBanner:async () => {
        try {

            const response = await axios.get(Env.base_url+'api/banner')
            if (response.status === 200) {
                return response.data
            } else {
                message.error("مشکلی پیش آمده است");
            }
        } catch (error) {
            console.log('response ===> ' , error);
        }
    },

};
// export default usePostService()