import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";
import Spinner from "../../Components/UI/Spinner/Spinner";

const Home = () => {
    const [pageContent, setContentPage] = useState<IPage>();
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const fetchData = useCallback( async (url: string) => {

        setLoading(true);
        const response = await axiosApi.get(url);
        const page: IPage = response.data;

        if (response.data !== null) {
            setContentPage(page);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (params.namePage !== undefined) {
            void fetchData(`/pages/${params.namePage}.json`);
        } else {
            void fetchData(`/pages/home.json`);
        }

    }, [fetchData, params]);

    return (
        <div>
            {loading ? <Spinner/> :
                <>
                    {pageContent ?
                        <div>
                            <h4>{pageContent.title}</h4>
                            <p>{pageContent.text}</p>
                        </div>
                        :
                        <p>No content</p>
                    }
                </>

            }

        </div>
    );
};

export default Home;