import React from "react";
import { Button } from "../components"
import { Field, reduxForm, formValueSelector } from "redux-form";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../redux/asyncActions/videos";

import '../scss/components/search-panel.scss'

let SearchPanel = () => {

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        const selector = formValueSelector('search');
        const value = selector(store.getState(), "searchRequest");
        if(!value) {
            return;
        }
        dispatch(fetchVideos(value));
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