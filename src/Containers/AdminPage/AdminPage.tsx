import React, {useEffect, useState} from 'react';
import Spinner from "../../Components/UI/Spinner/Spinner";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const Navigation = useNavigate();
    const pages = [
        {title: 'Home', id: 'home'},
        {title: 'About', id: 'about'},
        {title: 'Contacts', id: 'contacts'},
        {title: 'Catalog', id: 'catalog'},
        {title: 'Reviews', id: 'reviews'},
    ];
    const [select, setSelect]= useState('home');

    const [page, setPage] = useState<IPageContentForm>({
        title: '',
        text: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const  fetchData = async () => {
            setLoading (true);

            try {
                const response = await axiosApi.get (`/pages/${select}.json`);
                const page = response.data;

                if (response.data !== null) {
                    setPage({
                        ...page,
                        title: page.title ,
                        text: page.text,
                    });
                }
            } finally {
                setLoading(false);
            }

        };

        if (select) {
            fetchData().catch(e => console.error(e));
        }

    }, [select]);

    const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axiosApi.put(`pages/${select}.json`, page);
        } finally {
            Navigation(`/${select}`);
        }
    };

    return (
        <> {loading ? <Spinner/> :
            <form onSubmit={onFormSubmit}>
                <h2 className="text-center mb-4">Edit page content</h2>

                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="author" className="form-label me-3">Page</label>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        {pages.map(page => (
                            <option key={page.id} value={page.id}>{page.title}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="author" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        value={page.title}
                        onChange={changeForm}
                    />
                </div>

                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea
                        name="text"
                        id="text"
                        className="form-control"
                        value={page.text}
                        onChange={changeForm}
                    ></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Edit</button>
                </div>
            </form>
        }
        </>
    );
};

export default AdminPage;