import React, {useEffect, useState} from "react";
import { Button } from "../components"
import { Field, reduxForm, formValueSelector } from "redux-form";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import { fetchVideos} from "../redux/asyncActions/videos";

import '../scss/components/search-panel.scss'
import { useSelector } from "react-redux";

let SearchPanel = ({videos}) => {

    const [fetching, setFetching] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const selector = formValueSelector('search');

    useEffect(() => {
        setFetching(false)
    }, [videos]);

    useEffect(() => {
        if(fetching){
            const value = selector(store.getState(), "searchRequest");
        if(!value) {
            return;
        }
        dispatch(fetchVideos(value, token.token, videos));
        }
    }, [fetching])

    const submit = (e) => {
        e.preventDefault();
        const value = selector(store.getState(), "searchRequest");
        if(!value) {
            return;
        }
        dispatch(fetchVideos(value));
    }

    useEffect(() => {
        document.addEventListener('scroll', handlerScroll);

        return function(){
            document.removeEventListener('scroll', handlerScroll)
        }
    }, [])

    const handlerScroll = e =>{
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200){
            setFetching(true);
        }
    }

    return(
        <div className="search">
            <form onSubmit={submit} className="search__form">
                <Field component={"input"} name={"searchRequest"} placeholder={"Search"} type="text" className="search__form-input" />
                <Button 
                    className = "search__form-button"
                >
                    Search
                </Button>
            </form>
        </div>
    )
}

SearchPanel = reduxForm({
    form: 'search'
})(SearchPanel)

export default SearchPanel;